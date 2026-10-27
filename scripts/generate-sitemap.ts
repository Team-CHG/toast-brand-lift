// Runs before `vite dev` and `vite build` via predev/prebuild hooks.
// Generates public/sitemap.xml from static routes + dynamic menu data in Supabase.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import { LOCATIONS, MENU_GROUPS, fullAddress, type MenuGroupSlug } from "../src/lib/locations";
import { buildMenu, type SourceCategory, type SourceItem } from "../src/lib/menuBuild";

const BASE_URL = "https://toastallday.com";

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || "https://helxodckmqnnnbaegkra.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHhvZGNrbXFubm5iYWVna3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NzY5OTksImV4cCI6MjA4NjA1Mjk5OX0.91-pXp080Yv--K_1mEOr-DecbLUFFRJphMvsN--MmOk";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/locations", changefreq: "weekly", priority: "0.9" },
  { path: "/locations/toast-meeting", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-king", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-mt-pleasant", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-west-ashley", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-summerville", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-savannah", changefreq: "monthly", priority: "0.8" },
  { path: "/menus", changefreq: "weekly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/catering", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/rewards", changefreq: "monthly", priority: "0.8" },
  { path: "/download-app", changefreq: "monthly", priority: "0.7" },
  { path: "/franchise", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/blog/download-app", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/unlimited-drink-pass", changefreq: "yearly", priority: "0.6" },
  { path: "/blog/military-discount", changefreq: "yearly", priority: "0.6" },
  { path: "/blog/anniversary", changefreq: "yearly", priority: "0.7" },
  { path: "/blog/soup-salad-sandwich", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/black-friday-gift-card", changefreq: "yearly", priority: "0.6" },
  { path: "/blog/veterans-day", changefreq: "yearly", priority: "0.6" },
  { path: "/blog/best-brunch", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/best-breakfast-brunch", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/valentines-day", changefreq: "yearly", priority: "0.6" },
  { path: "/blog/best-brunch-charleston", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/shrimp-and-grits-charleston", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/what-is-lowcountry-cuisine", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/best-breakfast-mt-pleasant", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/best-breakfast-summerville", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/best-brunch-savannah", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/charleston-brunch-cocktails", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/southern-breakfast-classics", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/dog-friendly-brunch-charleston", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/where-to-eat-downtown-charleston", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
];

async function fetchMenuEntries(): Promise<SitemapEntry[]> {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data: groups, error: groupsError } = await supabase.from("menu_groups").select("id, slug");
  if (groupsError) throw groupsError;
  const day = (s?: string | null) => (s ? s.split("T")[0] : undefined);
  const entries: SitemapEntry[] = [];

  // Same assembly as the visible menu pages (synced data + printed-menu layer),
  // so hidden, renamed or redirected items never reach the sitemap.
  for (const slug of Object.keys(MENU_GROUPS) as MenuGroupSlug[]) {
    const g = (groups ?? []).find((x) => x.slug === MENU_GROUPS[slug].source);
    if (!g) continue;
    const { data: cats, error: catError } = await supabase
      .from("menu_categories")
      .select("id, slug, name, description, image_url, updated_at")
      .eq("group_id", g.id)
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (catError) throw catError;
    const { data: items, error: itemError } = await supabase
      .from("menu_items")
      .select("id, category_id, slug, name, description, price, image_url, calories, allergens, updated_at")
      .eq("group_id", g.id)
      .eq("is_active", true)
      .eq("available_online", true)
      .eq("is_86", false)
      .order("sort_order", { ascending: true });
    if (itemError) throw itemError;

    const menu = buildMenu(slug, (cats ?? []) as SourceCategory[], (items ?? []) as SourceItem[]);
    const srcUpdated = new Map((items ?? []).map((i) => [i.id, i.updated_at as string | null]));
    const menuDay = day(menu.updatedAt);
    for (const section of menu.sections) {
      let secLatest: string | undefined;
      for (const item of section.items) {
        const lm = menu.printed && item.id.startsWith("local-") ? menuDay : day(srcUpdated.get(item.id));
        if (lm && (!secLatest || lm > secLatest)) secLatest = lm;
        entries.push({ path: `/menus/${slug}/${section.slug}/${item.slug}`, ...(lm ? { lastmod: lm } : {}), changefreq: "weekly", priority: "0.6" });
      }
      entries.push({ path: `/menus/${slug}/${section.slug}`, ...(secLatest ? { lastmod: secLatest } : {}), changefreq: "weekly", priority: "0.7" });
    }
    entries.push({ path: `/menus/${slug}`, ...(menuDay ? { lastmod: menuDay } : {}), changefreq: "daily", priority: "0.9" });
  }
  entries.push({ path: "/menus/downtown", lastmod: "2026-10-27", changefreq: "monthly", priority: "0.6" });
  return entries;
}

function generateLlmsTxt(): string {
  const loc = LOCATIONS.map(
    (l) =>
      `- [${l.name}](${BASE_URL}/locations/${l.slug}): ${fullAddress(l)}. Phone ${l.phone}. Hours ${l.hours.replace(/–/g, "-")}. Menu: ${BASE_URL}/menus/${l.menuGroup}`,
  );
  const menus = Object.values(MENU_GROUPS).map(
    (m) => `- [${m.menuName}](${BASE_URL}/menus/${m.slug}): ${m.description}`,
  );
  return [
    "# Toast! All Day",
    "",
    "> Lowcountry breakfast, brunch and lunch at six locations in Charleston, Mt. Pleasant, Summerville and Savannah. TripAdvisor Top 25 Best Brunches in the U.S.",
    "",
    "## Locations",
    "",
    ...loc,
    "",
    "## Menus",
    "",
    ...menus,
    "",
    "## Pages",
    "",
    `- [All locations](${BASE_URL}/locations): Addresses, phones and hours for every Toast! All Day restaurant.`,
    `- [Catering](${BASE_URL}/catering): Catering orders from each location.`,
    `- [Rewards](${BASE_URL}/rewards): The VIP Club rewards program.`,
    `- [Blog](${BASE_URL}/blog): Guides to brunch, breakfast and Lowcountry food.`,
    "",
    "## FAQ topics",
    "",
    "- Locations, addresses and phone numbers",
    "- Hours at each location",
    "- Signature dishes: Famous Shrimp & Grits, Eggs Meeting Street, New Orleans Beignets, Peach Stuffed French Toast, Blue Crab & Shrimp omelet, Double Smash Burger",
    "- Lunch, mimosas and Bloody Marys, vegetarian options, kids menu",
    "- Rewards, catering, and the 20% service charge for parties of six or more",
    "",
  ].join("\n");
}

function generateSitemap(entries: SitemapEntry[]): string {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

async function main() {
  let menuEntries: SitemapEntry[] = [];
  try {
    menuEntries = await fetchMenuEntries();
  } catch (err) {
    console.warn("[sitemap] Failed to fetch menu data, continuing with static entries only:", err);
  }

  const all = [...staticEntries, ...menuEntries];
  const xml = generateSitemap(all);
  writeFileSync(resolve("public/sitemap.xml"), xml);
  writeFileSync(resolve("public/llms.txt"), generateLlmsTxt());
  console.log(`sitemap.xml written (${all.length} entries: ${staticEntries.length} static + ${menuEntries.length} dynamic)`);
}

main().catch((err) => {
  console.error("[sitemap] generation failed:", err);
  process.exit(1);
});