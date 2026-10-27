import { supabase } from "@/integrations/supabase/client";
import { MENU_GROUPS, type MenuGroupSlug } from "@/lib/locations";
import { buildMenu, type MenuData } from "@/lib/menuBuild";

export * from "@/lib/menuBuild";

/** Fetch one location menu: synced Toast data with the local printed-menu layer applied. */
export async function fetchMenu(group: MenuGroupSlug): Promise<MenuData | null> {
  const source = MENU_GROUPS[group].source;
  const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", source).maybeSingle();
  if (!g) return null;
  const [{ data: cats }, { data: items }] = await Promise.all([
    supabase
      .from("menu_categories")
      .select("id, slug, name, description, image_url, updated_at")
      .eq("group_id", g.id)
      .eq("is_active", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("menu_items")
      .select("id, category_id, slug, name, description, price, image_url, calories, allergens, updated_at")
      .eq("group_id", g.id)
      .eq("is_active", true)
      .eq("available_online", true)
      .eq("is_86", false)
      .order("sort_order", { ascending: true }),
  ]);
  return buildMenu(group, cats ?? [], items ?? []);
}
