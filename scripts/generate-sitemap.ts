// Runs before `vite dev` and `vite build` via predev/prebuild hooks.
// Generates public/sitemap.xml from static routes + dynamic menu data in Supabase.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import { LOCATIONS, MENU_GROUPS, fullAddress } from "../src/lib/locations";

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

  const { data: groups, error: groupsError } = await supabase
    .from("menu_groups")
    .select("id, slug");
  if (groupsError) throw groupsError;

  const { data: categories, error: catError } = await supabase
    .from("menu_categories")
    .select("id, slug, group_id, updated_at")
    .eq("is_active", true);
  if (catError) throw catError;

  // Same filters as the visible menu pages, so hidden or 86'd items never reach the sitemap.
  const { data: items, error: itemError } = await supabase
    .from("menu_items")
    .select("slug, category_id, updated_at")
    .eq("is_active", true)
    .eq("available_online", true)
    .eq("is_86", false);
  if (itemError) throw itemError;

  const groupById = new Map((groups ?? []).map((g) => [g.id, g.slug]));
  const catById = new Map(
    (categories ?? []).map((c) => [c.id, { slug: c.slug, groupSlug: groupById.get(c.group_id) }]),
  );
  const day = (s?: string | null) => (s ? s.split("T")[0] : undefined);
  const latest = (a?: string, b?: string | null) => (b && (!a || b > a) ? b : a);

  const entries: SitemapEntry[] = [];
  const catLastmod = new Map<string, string>();
  const groupLastmod = new Map<string, string>();

  for (const item of items ?? []) {
    const cat = catById.get(item.category_id);
    if (!cat || !cat.groupSlug) continue;
    entries.push({
      path: `/menus/${cat.groupSlug}/${cat.slug}/${item.slug}`,
      ...(day(item.updated_at) ? { lastmod: day(item.updated_at) as string } : {}),
      changefreq: "weekly",
      priority: "0.6",
    });
    const cKey = item.category_id;
    const c = latest(catLastmod.get(cKey), item.updated_at);
    if (c) catLastmod.set(cKey, c);
    const g = latest(groupLastmod.get(cat.groupSlug), item.updated_at);
    if (g) groupLastmod.set(cat.groupSlug, g);
  }

  // Categories with no visible items render a 404, so they are skipped.
  for (const cat of categories ?? []) {
    const groupSlug = groupById.get(cat.group_id);
    if (!groupSlug || !catLastmod.has(cat.id)) continue;
    entries.push({
      path: `/menus/${groupSlug}/${cat.slug}`,
      lastmod: day(catLastmod.get(cat.id)) as string,
      changefreq: "weekly",
      priority: "0.7",
    });
  }

  for (const slug of Object.keys(MENU_GROUPS)) {
    const lm = day(groupLastmod.get(slug));
    entries.push({ path: `/menus/${slug}`, ...(lm ? { lastmod: lm } : {}), changefreq: "daily", priority: "0.9" });
  }

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