# Uniform menu item photos

## Recommendation
Switch from circles to **rounded squares** (soft corners). Circles crop off the edges of standardized square photos, so plated food gets cut and some items look empty. Rounded squares show the full photo, match the Starters look, and read as clean and premium.

## What changes
- Item thumbnails on the location menu pages become rounded squares (same size as today: 64px mobile, 96px desktop), with the thin blue border that turns red on hover.
- Photo fills the square fully (centered crop), so every row lines up identically.
- Items with no photo, or a photo that fails to load, show a matching tile with the Toast utensil icon instead of a blank space.
- Same style applied on category pages and the item detail page so the menu stays consistent.

## First step: confirm why some are blank
Check the items showing blank: whether they have no photo in Toast, or a photo link that fails to load. The fallback tile covers both cases either way.

## Technical details
- `src/pages/MenuGroup.tsx` line ~137: `rounded-full` -> `rounded-xl`, keep `object-cover object-center`.
- Add `onError` handling so broken URLs swap to the icon fallback (in LazyImage or a small wrapper).
- Mirror thumbnail class in `MenuCategory.tsx` and `MenuItem.tsx`.
