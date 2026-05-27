#!/usr/bin/env node
/**
 * Performance lockdown asset check.
 *
 * Walks public/ and src/assets/ and fails (exit 1) when an asset
 * exceeds the size budget defined in PERFORMANCE.md. Run before
 * deploying any change that adds or replaces media.
 *
 *   node scripts/check-assets.mjs
 */
import { readdirSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";

const ROOTS = ["public", "src/assets"];
const IMG = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);
const VID = new Set([".mp4", ".webm", ".mov"]);

const LIMITS = {
  image: 500 * 1024,          // 500 KB generic image cap
  heroPoster: 200 * 1024,     // 200 KB poster cap
  video: 6 * 1024 * 1024,     // 6 MB video cap
  mobileVideo: 2 * 1024 * 1024, // 2 MB mobile video cap
};

const violations = [];

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) { walk(full); continue; }
    const ext = extname(name).toLowerCase();
    const size = st.size;
    const base = basename(name).toLowerCase();
    if (IMG.has(ext)) {
      const isPoster = base.includes("hero-poster");
      const cap = isPoster ? LIMITS.heroPoster : LIMITS.image;
      if (size > cap) violations.push({ full, size, cap, kind: isPoster ? "hero poster" : "image" });
    } else if (VID.has(ext)) {
      const isMobile = base.includes("mobile");
      const cap = isMobile ? LIMITS.mobileVideo : LIMITS.video;
      if (size > cap) violations.push({ full, size, cap, kind: isMobile ? "mobile video" : "video" });
    }
  }
}

ROOTS.forEach(walk);

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
if (violations.length) {
  console.error("\n❌ Performance lockdown: oversized assets detected\n");
  for (const v of violations) {
    console.error(`  ${v.full}  ${kb(v.size)}  (${v.kind} cap ${kb(v.cap)})`);
  }
  console.error("\nSee PERFORMANCE.md. Compress / resize before merging.\n");
  process.exit(1);
}

console.log("✅ asset budget OK");
