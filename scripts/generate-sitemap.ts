// Runs before `vite dev` and `vite build` via predev/prebuild hooks.
// Generates public/sitemap.xml from static routes + dynamic menu data in Supabase.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

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

const today = new Date().toISOString().split("T")[0];

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/locations", changefreq: "weekly", priority: "0.9" },
  { path: "/locations/toast-meeting", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-king", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-mt-pleasant", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-west-ashley", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-summerville", changefreq: "monthly", priority: "0.8" },
  { path: "/locations/toast-savannah", changefreq: "monthly", priority: "0.8" },
  { path: "/menus/downtown", changefreq: "daily", priority: "0.9" },
  { path: "/menus/suburbs", changefreq: "daily", priority: "0.9" },
  { path: "/menus/savannah", changefreq: "daily", priority: "0.9" },
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
  { path: "/gift-cards", changefreq: "monthly", priority: "0.6" },
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

  const { data: items, error: itemError } = await supabase
    .from("menu_items")
    .select("slug, category_id, updated_at")
    .eq("is_active", true);
  if (itemError) throw itemError;

  const groupById = new Map((groups ?? []).map((g) => [g.id, g.slug]));
  const catById = new Map(
    (categories ?? []).map((c) => [
      c.id,
      { slug: c.slug, groupSlug: groupById.get(c.group_id) },
    ]),
  );

  const entries: SitemapEntry[] = [];

  for (const cat of categories ?? []) {
    const groupSlug = groupById.get(cat.group_id);
    if (!groupSlug) continue;
    entries.push({
      path: `/menus/${groupSlug}/${cat.slug}`,
      lastmod: cat.updated_at?.split("T")[0],
      changefreq: "weekly",
      priority: "0.7",
    });
  }

  for (const item of items ?? []) {
    const cat = catById.get(item.category_id);
    if (!cat || !cat.groupSlug) continue;
    entries.push({
      path: `/menus/${cat.groupSlug}/${cat.slug}/${item.slug}`,
      lastmod: item.updated_at?.split("T")[0],
      changefreq: "weekly",
      priority: "0.6",
    });
  }

  return entries;
}

function generateSitemap(entries: SitemapEntry[]): string {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod ?? today}</lastmod>`,
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
  console.log(`sitemap.xml written (${all.length} entries: ${staticEntries.length} static + ${menuEntries.length} dynamic)`);
}

main().catch((err) => {
  console.error("[sitemap] generation failed:", err);
  process.exit(1);
});