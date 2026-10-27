import { supabase } from "@/integrations/supabase/client";
import { SITE_URL, type MenuGroupSlug, MENU_GROUPS } from "@/lib/locations";

export type DietaryTag = "vegetarian" | "gluten-free" | "vegan" | "dairy-free";

/**
 * Dietary labels the menu itself shows. Do not guess: only add an item once
 * the owner confirms it. Keyed by item slug (identical across menus).
 */
const DIETARY_BY_SLUG: Record<string, DietaryTag[]> = {
  "roasted-veggie-omelet": ["vegetarian"],
};

/** Optional "signature" flag, empty until the owner confirms dishes. */
const SIGNATURE_SLUGS = new Set<string>();

export const DIETARY_LABEL: Record<DietaryTag, string> = {
  vegetarian: "Vegetarian",
  "gluten-free": "Gluten-free",
  vegan: "Vegan",
  "dairy-free": "Dairy-free",
};

const DIET_SCHEMA: Record<DietaryTag, string | null> = {
  vegetarian: "https://schema.org/VegetarianDiet",
  "gluten-free": "https://schema.org/GlutenFreeDiet",
  vegan: "https://schema.org/VeganDiet",
  "dairy-free": null,
};

/** Strip stray or duplicated trailing fragments that Toast sometimes appends. */
export function cleanDescription(desc: string | null | undefined): string | null {
  if (!desc) return null;
  const cleaned = desc
    .replace(/(\s*\n\s*tomatoes over Carolina stone-ground grits\.?)+\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || null;
}

export interface MenuItemData {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  calories: number | null;
  allergens: string[] | null;
  dietary: DietaryTag[];
  signature: boolean;
}

export interface MenuSectionData {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  image_url: string | null;
  items: MenuItemData[];
}

export interface MenuData {
  group: MenuGroupSlug;
  sections: MenuSectionData[];
  /** Newest update timestamp across the menu (ISO) */
  updatedAt: string | null;
}

/** Fetch one location menu: only visible categories that still have visible items. */
export async function fetchMenu(group: MenuGroupSlug): Promise<MenuData | null> {
  const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", group).maybeSingle();
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

  let updatedAt: string | null = null;
  const bump = (t?: string | null) => {
    if (t && (!updatedAt || t > updatedAt)) updatedAt = t;
  };

  const sections = (cats ?? [])
    .map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      image_url: c.image_url,
      items: (items ?? [])
        .filter((i) => i.category_id === c.id)
        .map<MenuItemData>((i) => {
          bump(i.updated_at);
          return {
            id: i.id,
            slug: i.slug,
            name: i.name,
            description: cleanDescription(i.description),
            price: i.price,
            image_url: i.image_url,
            calories: i.calories,
            allergens: i.allergens,
            dietary: DIETARY_BY_SLUG[i.slug] ?? [],
            signature: SIGNATURE_SLUGS.has(i.slug),
          };
        }),
    }))
    .filter((s) => s.items.length > 0);
  sections.forEach((s) => bump((cats ?? []).find((c) => c.id === s.id)?.updated_at));

  return { group, sections, updatedAt };
}

// ---------- schema.org builders (same data that renders the visible page) ----------

export const menuId = (group: MenuGroupSlug) => `${SITE_URL}/menus/${group}#menu`;
export const itemUrl = (group: MenuGroupSlug, section: string, item: string) =>
  `${SITE_URL}/menus/${group}/${section}/${item}`;

export function menuItemNode(group: MenuGroupSlug, section: MenuSectionData, item: MenuItemData, withContext = false) {
  const diets = item.dietary.map((d) => DIET_SCHEMA[d]).filter(Boolean);
  return {
    ...(withContext ? { "@context": "https://schema.org" } : {}),
    "@type": "MenuItem",
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...(item.price != null
      ? { offers: { "@type": "Offer", price: item.price.toFixed(2), priceCurrency: "USD" } }
      : {}),
    ...(item.image_url ? { image: item.image_url } : {}),
    url: itemUrl(group, section.slug, item.slug),
    ...(diets.length ? { suitableForDiet: diets } : {}),
  };
}

export function menuSectionNode(group: MenuGroupSlug, section: MenuSectionData) {
  return {
    "@type": "MenuSection",
    name: section.name,
    ...(section.description ? { description: section.description } : {}),
    hasMenuItem: section.items.map((i) => menuItemNode(group, section, i)),
  };
}

export function menuNode(menu: MenuData, only?: MenuSectionData) {
  const meta = MENU_GROUPS[menu.group];
  const sections = only ? [only] : menu.sections;
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": menuId(menu.group),
    name: meta.menuName,
    url: `${SITE_URL}/menus/${menu.group}`,
    inLanguage: "en-US",
    hasMenuSection: sections.map((s) => menuSectionNode(menu.group, s)),
  };
}

export function itemPageNode(group: MenuGroupSlug, section: MenuSectionData, item: MenuItemData) {
  return {
    ...menuItemNode(group, section, item, true),
    "@id": `${itemUrl(group, section.slug, item.slug)}#menuitem`,
    isPartOf: { "@id": menuId(group) },
  };
}

export const priceText = (p: number | null) => (p != null ? `$${p.toFixed(2)}` : "");

export function categoryDescription(group: MenuGroupSlug, section: MenuSectionData): string {
  const meta = MENU_GROUPS[group];
  const names = section.items.slice(0, 3).map((i) => i.name);
  const list = names.length > 1 ? `${names.slice(0, -1).join(", ")}, ${names[names.length - 1]}` : names[0] ?? "";
  const more = section.items.length > 3 ? " and more" : "";
  return `${section.name} at Toast! All Day in ${meta.areas}: ${list}${more}, with prices.`.replace(", and more", " and more");
}
