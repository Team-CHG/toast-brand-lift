// Pure menu assembly + schema builders. No "@/..." imports: the sitemap script uses this too.
import { SITE_URL, MENU_GROUPS, type MenuGroupSlug } from "./locations";
import {
  OVERRIDE_SECTIONS,
  KEPT_SOURCE_CATEGORIES,
  CATEGORY_REDIRECTS,
  HIDDEN_ITEM_SLUGS,
  ITEM_REDIRECTS,
  MENU_OVERRIDE_DATE,
  normalizePrices,
  type OverrideMenu,
  type PriceOption,
} from "./menuOverrides";

export type DietaryTag = "vegetarian" | "gluten-free" | "vegan" | "dairy-free";
export type { PriceOption };

/** Dietary labels for synced (non-override) items. Only owner-confirmed labels. */
const DIETARY_BY_SLUG: Record<string, DietaryTag[]> = {
  "roasted-veggie-omelet": ["vegetarian"],
};

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
  /** First price (kept for simple consumers) */
  price: number | null;
  prices: PriceOption[];
  addons: string | null;
  advisory: boolean;
  /** Printed-menu items show whole-dollar prices like "$16" */
  wholeDollar: boolean;
  heading: { name: string; note?: string } | null;
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
  /** True for menus driven by the October 2026 printed menus */
  printed: boolean;
  sections: MenuSectionData[];
  updatedAt: string | null;
}

export interface SourceCategory {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  image_url: string | null;
  updated_at: string | null;
}
export interface SourceItem {
  id: string;
  category_id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  calories: number | null;
  allergens: string[] | null;
  updated_at: string | null;
}

export const isOverrideMenu = (g: MenuGroupSlug): g is OverrideMenu =>
  g === "suburbs" || g === "meeting-street" || g === "king-street";

function fromSource(i: SourceItem): MenuItemData {
  return {
    id: i.id,
    slug: i.slug,
    name: i.name,
    description: cleanDescription(i.description),
    price: i.price,
    prices: i.price != null ? [{ label: null, price: i.price }] : [],
    addons: null,
    advisory: false,
    wholeDollar: false,
    heading: null,
    image_url: i.image_url,
    calories: i.calories,
    allergens: i.allergens,
    dietary: DIETARY_BY_SLUG[i.slug] ?? [],
    signature: false,
  };
}

/** Assemble one menu page from synced Toast rows, applying the local printed-menu layer. */
export function buildMenu(group: MenuGroupSlug, cats: SourceCategory[], items: SourceItem[]): MenuData {
  let updatedAt: string | null = null;
  const bump = (t?: string | null) => {
    if (t && (!updatedAt || t > updatedAt)) updatedAt = t;
  };

  const sourceSection = (c: SourceCategory): MenuSectionData => ({
    id: c.id,
    slug: c.slug,
    name: c.name,
    description: c.description,
    image_url: c.image_url,
    items: items.filter((i) => i.category_id === c.id).map((i) => (bump(i.updated_at), fromSource(i))),
  });

  if (!isOverrideMenu(group)) {
    const sections = cats.map(sourceSection).filter((s) => s.items.length > 0);
    sections.forEach((s) => bump(cats.find((c) => c.id === s.id)?.updated_at));
    return { group, printed: false, sections, updatedAt };
  }

  bump(MENU_OVERRIDE_DATE);
  const photoBySlug = new Map(items.filter((i) => i.image_url).map((i) => [i.slug, i.image_url as string]));
  const local: MenuSectionData[] = OVERRIDE_SECTIONS.map((s) => ({
    id: `local-${s.slug}`,
    slug: s.slug,
    name: s.name,
    description: s.note ?? null,
    image_url: null,
    items: s.items
      .filter((i) => !i.menus || i.menus.includes(group))
      .map<MenuItemData>((i) => {
        const prices = normalizePrices(i.prices[group]);
        const photo = [i.slug, ...(i.legacy ?? [])].map((sl) => photoBySlug.get(sl)).find(Boolean) ?? null;
        return {
          id: `local-${s.slug}-${i.slug}`,
          slug: i.slug,
          name: i.name,
          description: i.description ?? null,
          price: prices[0]?.price ?? null,
          prices,
          addons: i.addons ?? null,
          advisory: !!i.advisory,
          wholeDollar: true,
          heading: i.heading ?? null,
          image_url: photo,
          calories: null,
          allergens: null,
          dietary: i.vegetarian ? ["vegetarian"] : [],
          signature: !!i.signature,
        };
      }),
  }));
  const kept = cats
    .filter((c) => KEPT_SOURCE_CATEGORIES.includes(c.slug))
    .map(sourceSection)
    .filter((s) => s.items.length > 0);
  return { group, printed: true, sections: [...local, ...kept], updatedAt };
}

/**
 * Where an old or renamed menu URL should go. Returns a path to redirect to,
 * or null when the URL is not a known legacy URL (render or 404 as usual).
 */
export function legacyMenuRedirect(menu: MenuData, category: string, item?: string): string | null {
  const base = `/menus/${menu.group}`;
  const has = (slug: string) => menu.sections.some((s) => s.slug === slug);
  let cat: string | null;
  if (has(category)) cat = category;
  else if (category in CATEGORY_REDIRECTS) cat = CATEGORY_REDIRECTS[category];
  else return null;
  if (!item) return cat === category ? null : cat ? `${base}/${cat}` : base;

  const section = cat ? menu.sections.find((s) => s.slug === cat) : undefined;
  if (section?.items.some((i) => i.slug === item)) return cat === category ? null : `${base}/${cat}/${item}`;
  const renamed = ITEM_REDIRECTS[item];
  if (renamed) {
    const home = menu.sections.find((s) => s.items.some((i) => i.slug === renamed));
    if (home) return `${base}/${home.slug}/${renamed}`;
  }
  if (HIDDEN_ITEM_SLUGS.has(item)) return cat ? `${base}/${cat}` : base;
  return null;
}

// ---------- display ----------

const money = (p: number, whole: boolean) => (whole && Number.isInteger(p) ? `$${p}` : `$${p.toFixed(2)}`);

export function itemPriceText(item: Pick<MenuItemData, "prices" | "wholeDollar">): string {
  return item.prices.map((o) => `${o.label ? `${o.label} ` : ""}${money(o.price, item.wholeDollar)}`).join(" / ");
}

/** Legacy helper for a single price */
export const priceText = (p: number | null) => (p != null ? `$${p.toFixed(2)}` : "");

export function categoryDescription(group: MenuGroupSlug, section: MenuSectionData): string {
  const meta = MENU_GROUPS[group];
  const names = section.items.slice(0, 3).map((i) => i.name);
  const list = names.length > 1 ? `${names.slice(0, -1).join(", ")}, ${names[names.length - 1]}` : names[0] ?? "";
  const more = section.items.length > 3 ? " and more" : "";
  return `${section.name} at ${meta.label} in ${meta.areas}: ${list}${more}, with prices.`;
}

// ---------- schema.org builders (same data that renders the visible page) ----------

export const menuId = (group: MenuGroupSlug) => `${SITE_URL}/menus/${group}#menu`;
export const itemUrl = (group: MenuGroupSlug, section: string, item: string) =>
  `${SITE_URL}/menus/${group}/${section}/${item}`;

function offers(item: MenuItemData) {
  if (item.prices.length === 0) return {};
  const o = item.prices.map((p) => ({
    "@type": "Offer",
    ...(p.label ? { name: p.label } : {}),
    price: p.price.toFixed(2),
    priceCurrency: "USD",
  }));
  return { offers: o.length === 1 ? o[0] : o };
}

export function menuItemNode(group: MenuGroupSlug, section: MenuSectionData, item: MenuItemData, withContext = false) {
  const diets = item.dietary.map((d) => DIET_SCHEMA[d]).filter(Boolean);
  return {
    ...(withContext ? { "@context": "https://schema.org" } : {}),
    "@type": "MenuItem",
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...offers(item),
    ...(item.image_url ? { image: item.image_url } : {}),
    url: itemUrl(group, section.slug, item.slug),
    ...(diets.length ? { suitableForDiet: diets.length === 1 ? diets[0] : diets } : {}),
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
