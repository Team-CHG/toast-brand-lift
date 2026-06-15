
# Toast POS Menu Sync — Dynamic Menus

Replace the 3 PDF menu links in the header with dynamic, database-backed menu pages for **Downtown**, **Suburbs**, and **Savannah**, synced nightly from the Toast Partner API. Each menu, category, and item gets its own SEO-indexable page.

---

## What I need from you

Please provide these via the secrets prompt I'll send after you approve this plan:

1. **TOAST_CLIENT_ID** — Toast Partner API OAuth client ID
2. **TOAST_CLIENT_SECRET** — Toast Partner API OAuth client secret
3. **TOAST_API_HOSTNAME** — usually `https://ws-api.toasttab.com` (production) or `https://ws-sandbox-api.toasttab.com`
4. **TOAST_GUID_DOWNTOWN** — restaurant GUID for Downtown menu
5. **TOAST_GUID_SUBURBS** — restaurant GUID for Suburbs menu
6. **TOAST_GUID_SAVANNAH** — restaurant GUID for Savannah menu

Toast Partner API access requires approval from Toast. If you haven't been approved yet, let me know and I'll pause until credentials are available.

---

## What gets built

### 1. Database (Lovable Cloud)

Four tables, all public-readable (menus are public content), service-role writable only:

- `menu_groups` — the 3 menu groups: downtown, suburbs, savannah (slug, name, toast_guid, last_synced_at)
- `menu_categories` — categories per group (name, slug, description, image_url, sort_order, group_id)
- `menu_items` — items per category (name, slug, description, price, image_url, calories, allergens, modifiers JSON, available_online flag, is_86 flag, sort_order, category_id)
- `menu_sync_logs` — history of each sync (group_id, status, items_added/updated/removed, error)

Only items with `available_online = true` and `is_86 = false` render on the site. The sync replaces stale rows; items that disappear from Toast get soft-removed.

### 2. Edge function: `sync-toast-menus`

- Authenticates with Toast OAuth (client credentials grant) → gets bearer token
- For each of the 3 GUIDs, calls Toast's menus endpoint (`/menus/v2/menus` with `Toast-Restaurant-External-ID` header)
- Parses menus → categories → items, including images, prices, descriptions, modifiers
- Upserts into the DB, scoped by `group_id` so the 3 menus stay isolated and can have different prices for the same item
- Writes a row to `menu_sync_logs`
- Public endpoint (no JWT) so cron can hit it; protected by a shared secret header

### 3. Nightly cron job

Enables `pg_cron` + `pg_net`, schedules `sync-toast-menus` to run once daily (e.g., 4 AM ET). Also exposes a manual "Sync now" button on each menu page (admin-gated later if you want).

### 4. Routes & pages

```
/menus/:group                       → menu landing (categories grid)
/menus/:group/:category              → category page (items list)
/menus/:group/:category/:item        → item detail page (full SEO target)
```

Where `:group` is `downtown` | `suburbs` | `savannah`.

Each page:
- Pulls from DB (fast, no Toast call at request time)
- Has unique `<title>`, meta description, canonical, OG tags via `react-helmet-async`
- Item pages get `Product` JSON-LD schema (name, image, price, description)
- Category pages get `BreadcrumbList` JSON-LD
- Uses existing site styling (Telegraf font, blue/red/brown palette, page-background-texture, glassmorphism)

### 5. Header nav update

Replace the 3 PDF dropdown items in `src/components/Navigation.tsx` (desktop + mobile):

- Downtown Locations → `/menus/downtown`
- Suburb Locations → `/menus/suburbs`
- Savannah Location → `/menus/savannah`

Remove the 3 PDFs from `public/menus/`. Update `mem://navigation/menu-pdf-categories` memory to reflect the new dynamic-pages reality.

### 6. Sitemap

Append the new menu URLs to `public/sitemap.xml` (group + category + item pages). Since items can change, I'll add a note that the sitemap is regenerated when the sync runs — or keep it static at the group/category level and rely on internal linking for items. I'll go with regenerating it during sync so Google discovers new items quickly.

---

## Technical notes

- **Toast API endpoint**: `GET {TOAST_API_HOSTNAME}/menus/v2/menus` with `Toast-Restaurant-External-ID: {guid}` returns the published menu tree including images already hosted on Toast's CDN — no need to re-host images.
- **Image strategy**: store the Toast CDN URL directly; wrap in `LazyImage` for lazy-load + AVIF/WebP fallback consistent with site memory.
- **86'd items**: Toast exposes `visibility` and `availability` flags per item; sync respects both.
- **Pricing per group**: each menu's items live under their own `group_id`, so the same item name in Downtown vs Suburbs can carry different prices with zero collision.
- **Rate limits**: nightly sync = ~3 requests/day, well under Toast's limits.
- **Failure handling**: if a sync fails, the previous menu data stays live (no destructive deletes until new data is validated).

---

## Out of scope (ask if you want any added)

- Online ordering integration on menu pages (current "Order Online" dropdown still points to ToastTab)
- Per-location filtering within a group (the 3 groups already cover the pricing differences)
- Admin UI to manually edit menu items (would be overridden by the next sync anyway)
- Search across menus

---

## Order of work once you approve

1. You provide the 6 secrets
2. Create DB tables + RLS + grants (migration)
3. Build `sync-toast-menus` edge function and test against one GUID
4. Schedule the cron job
5. Build the 3 route levels with Helmet + JSON-LD
6. Swap header nav links, delete old PDFs, update sitemap
7. Run a full sync, verify all 3 menus render, confirm 86'd items are hidden

Confirm and I'll send the secrets prompt.
