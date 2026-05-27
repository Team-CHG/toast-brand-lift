# Performance Lockdown — Hard Rules

The site is in **performance lockdown**. The architecture below is what
keeps Lighthouse stable (≥70 mobile, TBT ≤ 150ms, stable LCP). Do not
regress these patterns in future edits.

## Above-the-fold (Hero)

- `src/components/HeroCarousel.tsx` is the **locked LCP element**.
  - Hero poster `<picture>` renders from `/public/hero/*` so the HTML
    preload scanner finds it before JS parses.
  - `index.html` MUST keep the two `<link rel="preload" as="image">`
    tags for the desktop + mobile AVIF posters.
  - Hero videos use `preload="none"` + `poster=` and are toggled by CSS
    (`md:hidden` / `hidden md:block`). Never gate them on JS effects.
  - No `framer-motion`, no entrance animations, no carousel autoplay,
    no conditional swap above the fold.

## JavaScript budget

- `src/App.tsx` lazy-loads every non-home route. Keep it that way.
- `vite.config.ts` `manualChunks` splits `react-vendor`, `motion`,
  `radix`, `query`. Do not collapse these chunks.
- Do not import `framer-motion` from components rendered on `/`
  (HeroCarousel, FeatureSections, MenuCarousel, Navigation, Footer,
  GiftCardSection). The animation wrappers in
  `src/components/animations/` are intentionally inert stubs — leave
  them stubbed unless you also move the import behind a lazy boundary.
- Third-party scripts (GA, PX Grabber) load 12s after `window.load`
  via the inline loader in `index.html`. Don't add new render-blocking
  `<script>` tags to `<head>`.

## Images

- Every `<img>` needs `width` + `height` (or `aspect-ratio` via CSS).
  `src/index.css` sets `:where(img[width][height]) { height:auto; max-width:100% }`
  as a safety net — keep `:where()` so Tailwind sizing classes win.
- Bundled assets: import directly so Vite hashes them. Do **not**
  string-replace extensions on already-imported/hashed paths
  (that bug broke `MenuCarousel` previously).
- Provide `<picture>` with AVIF → WebP → JPG/PNG for any image > ~30KB.
- Mobile hero/poster variants MUST stay under 200KB.
- Don't delete original raster files without confirming no `import`
  references them.

## Videos

- `preload="none"`, muted, playsInline, `poster=` always set.
- Mobile gets `/hero/hero-mobile.mp4`; desktop gets `/hero/hero.mp4`.
  Keep mobile under ~2MB and desktop under ~6MB.
- No `<video>` may be the LCP element. The poster `<img>` is.

## Animations

- Only `transform` / `opacity` transitions. No `width`/`height`/`top`
  animations (layout thrash).
- No animations during hydration. Scroll-triggered effects must use
  `IntersectionObserver` and only inside lazy-loaded routes.
- Respect `prefers-reduced-motion`.
- `backdrop-blur` is banned over animated/scrolling content. Use
  `text-shadow` or a solid translucent background instead.

## Fonts

- Single family (Telegraf) loaded via async `<link rel="preload"
  as="style" onload="...">` in `index.html` with `display=swap`.
  Don't add additional weights/families.

## Pre-deploy check

```bash
node scripts/check-assets.mjs
```

Fails (exit 1) when:
- any image in `public/` or `src/assets/` exceeds 500KB
- any video in `public/` exceeds 6MB
- a hero poster exceeds 200KB
