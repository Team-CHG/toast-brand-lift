import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

// ---------- helpers ----------
function slugify(input: string): string {
  return (input || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "item";
}

interface ToastToken {
  token: string;
  expiresAt: number;
}
let cachedToken: ToastToken | null = null;

async function getToastToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.token;
  }
  const host = Deno.env.get("TOAST_API_HOSTNAME")!;
  const clientId = Deno.env.get("TOAST_CLIENT_ID")!;
  const clientSecret = Deno.env.get("TOAST_CLIENT_SECRET")!;
  const res = await fetch(`${host}/authentication/v1/authentication/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId,
      clientSecret,
      userAccessType: "TOAST_MACHINE_CLIENT",
    }),
  });
  if (!res.ok) {
    throw new Error(`Toast auth failed [${res.status}]: ${await res.text()}`);
  }
  const json = await res.json();
  const token: string = json.token?.accessToken;
  const expiresIn: number = json.token?.expiresIn ?? 3600;
  if (!token) throw new Error("Toast auth: no accessToken in response");
  cachedToken = { token, expiresAt: now + expiresIn * 1000 };
  return token;
}

async function fetchMenus(guid: string, token: string): Promise<any> {
  const host = Deno.env.get("TOAST_API_HOSTNAME")!;
  const res = await fetch(`${host}/menus/v2/menus`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Toast-Restaurant-External-ID": guid,
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Toast menus fetch failed [${res.status}]: ${await res.text()}`);
  }
  return res.json();
}

// ---------- sync one group ----------
async function syncGroup(
  supabase: ReturnType<typeof createClient>,
  group: { id: string; slug: string; toast_guid: string },
): Promise<{ categories: number; items: number; removed: number }> {
  const token = await getToastToken();
  const data = await fetchMenus(group.toast_guid, token);
  console.log(`[${group.slug}] top-level keys:`, Object.keys(data || {}));
  console.log(`[${group.slug}] sample:`, JSON.stringify(data).slice(0, 2000));

  // Toast v2 menus response shape:
  // { menus: [ { name, guid, groups: [ { name, guid, description, image, items: [ { guid, name, description, price, image, visibility, ... } ] } ] } ] }
  // We flatten "groups" => categories.
  const incomingCategories: Array<{
    toast_guid: string;
    name: string;
    description: string | null;
    image_url: string | null;
    sort_order: number;
    items: Array<{
      toast_guid: string;
      name: string;
      description: string | null;
      price: number | null;
      image_url: string | null;
      calories: number | null;
      allergens: string[] | null;
      modifiers: unknown;
      available_online: boolean;
      is_86: boolean;
      sort_order: number;
    }>;
  }> = [];

  const menus: any[] = Array.isArray(data?.menus) ? data.menus : [];
  let catOrder = 0;
  for (const menu of menus) {
    const groups: any[] = Array.isArray(menu?.groups) ? menu.groups : [];
    for (const g of groups) {
      const items: any[] = Array.isArray(g?.items) ? g.items : [];
      incomingCategories.push({
        toast_guid: g.guid,
        name: g.name,
        description: g.description ?? null,
        image_url: g.image ?? g.imageUrl ?? null,
        sort_order: catOrder++,
        items: items.map((it: any, idx: number) => {
          // Price handling: Toast may return `price` or `pricing.prices[].price`
          let price: number | null = null;
          if (typeof it.price === "number") price = it.price;
          else if (typeof it.basePrice === "number") price = it.basePrice;

          const visibility: string[] = Array.isArray(it.visibility) ? it.visibility : [];
          const availableOnline = visibility.length === 0
            ? true
            : visibility.includes("ONLINE") || visibility.includes("POS_AND_ONLINE") || visibility.includes("ORDERING_PARTNERS");
          const is86 = it.outOfStock === true || it.availability === "OUT_OF_STOCK";

          return {
            toast_guid: it.guid,
            name: it.name,
            description: it.description ?? null,
            price,
            image_url: it.image ?? it.imageUrl ?? null,
            calories: typeof it.calories === "number" ? it.calories : null,
            allergens: Array.isArray(it.allergens) ? it.allergens : null,
            modifiers: Array.isArray(it.modifierGroups) ? it.modifierGroups : null,
            available_online: availableOnline,
            is_86: is86,
            sort_order: idx,
          };
        }),
      });
    }
  }

  // Upsert categories
  let categoriesCount = 0;
  let itemsCount = 0;
  const seenCategoryGuids = new Set<string>();
  const seenItemGuids = new Set<string>();

  for (const c of incomingCategories) {
    if (!c.toast_guid) continue;
    seenCategoryGuids.add(c.toast_guid);
    const catSlug = slugify(c.name);
    const { data: catRow, error: catErr } = await supabase
      .from("menu_categories")
      .upsert({
        group_id: group.id,
        toast_guid: c.toast_guid,
        slug: catSlug,
        name: c.name,
        description: c.description,
        image_url: c.image_url,
        sort_order: c.sort_order,
        is_active: true,
      }, { onConflict: "group_id,toast_guid" })
      .select("id")
      .single();

    if (catErr || !catRow) {
      console.error("category upsert failed", catErr);
      continue;
    }
    categoriesCount++;

    // Deduplicate item slugs within group
    const slugCount = new Map<string, number>();
    for (const it of c.items) {
      if (!it.toast_guid) continue;
      seenItemGuids.add(it.toast_guid);
      let baseSlug = slugify(it.name);
      const n = (slugCount.get(baseSlug) ?? 0) + 1;
      slugCount.set(baseSlug, n);
      const itemSlug = n === 1 ? baseSlug : `${baseSlug}-${n}`;

      const { error: itErr } = await supabase
        .from("menu_items")
        .upsert({
          category_id: catRow.id,
          group_id: group.id,
          toast_guid: it.toast_guid,
          slug: itemSlug,
          name: it.name,
          description: it.description,
          price: it.price,
          image_url: it.image_url,
          calories: it.calories,
          allergens: it.allergens,
          modifiers: it.modifiers,
          available_online: it.available_online,
          is_86: it.is_86,
          is_active: true,
          sort_order: it.sort_order,
        }, { onConflict: "group_id,toast_guid" });
      if (itErr) {
        console.error("item upsert failed", itErr);
        continue;
      }
      itemsCount++;
    }
  }

  // Soft-deactivate anything not seen in this sync
  let removed = 0;
  if (seenItemGuids.size > 0) {
    const { data: removedRows } = await supabase
      .from("menu_items")
      .update({ is_active: false })
      .eq("group_id", group.id)
      .eq("is_active", true)
      .not("toast_guid", "in", `(${[...seenItemGuids].map((g) => `"${g}"`).join(",")})`)
      .select("id");
    removed = removedRows?.length ?? 0;
  }
  if (seenCategoryGuids.size > 0) {
    await supabase
      .from("menu_categories")
      .update({ is_active: false })
      .eq("group_id", group.id)
      .eq("is_active", true)
      .not("toast_guid", "in", `(${[...seenCategoryGuids].map((g) => `"${g}"`).join(",")})`);
  }

  await supabase
    .from("menu_groups")
    .update({ last_synced_at: new Date().toISOString() })
    .eq("id", group.id);

  return { categories: categoriesCount, items: itemsCount, removed };
}

// ---------- entrypoint ----------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const url = new URL(req.url);
  const onlySlug = url.searchParams.get("group");

  // Ensure GUIDs are written to DB from env (one-time/idempotent)
  const envMap: Record<string, string | undefined> = {
    downtown: Deno.env.get("TOAST_GUID_DOWNTOWN"),
    suburbs: Deno.env.get("TOAST_GUID_SUBURBS"),
    savannah: Deno.env.get("TOAST_GUID_SAVANNAH"),
  };
  for (const [slug, guid] of Object.entries(envMap)) {
    if (!guid) continue;
    await supabase.from("menu_groups").update({ toast_guid: guid }).eq("slug", slug);
  }

  let query = supabase.from("menu_groups").select("id, slug, toast_guid");
  if (onlySlug) query = query.eq("slug", onlySlug);
  const { data: groups, error } = await query;
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const results: any[] = [];
  for (const g of groups ?? []) {
    const started = Date.now();
    if (!g.toast_guid || g.toast_guid === "PENDING") {
      results.push({ group: g.slug, status: "skipped", reason: "no GUID configured" });
      continue;
    }
    try {
      const r = await syncGroup(supabase, g);
      const duration = Date.now() - started;
      await supabase.from("menu_sync_logs").insert({
        group_id: g.id,
        group_slug: g.slug,
        status: "success",
        categories_synced: r.categories,
        items_synced: r.items,
        items_removed: r.removed,
        duration_ms: duration,
      });
      results.push({ group: g.slug, status: "success", ...r, duration_ms: duration });
    } catch (err: any) {
      const duration = Date.now() - started;
      const message = err?.message ?? String(err);
      await supabase.from("menu_sync_logs").insert({
        group_id: g.id,
        group_slug: g.slug,
        status: "error",
        error: message,
        duration_ms: duration,
      });
      results.push({ group: g.slug, status: "error", error: message });
    }
  }

  return new Response(JSON.stringify({ results }, null, 2), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});