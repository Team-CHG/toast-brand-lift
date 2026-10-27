// October 2026 printed menus (Suburban, TOC = Meeting St, TOK = King St).
// This local layer takes priority over the nightly Toast POS sync for the food
// and brunch-beverage sections below. The sync still supplies photos (matched
// by `legacy` slug) and the sections listed in KEPT_SOURCE_CATEGORIES.
// Keep this module free of "@/..." imports: the build-time sitemap script imports it.

export type OverrideMenu = "suburbs" | "meeting-street" | "king-street";
export const OVERRIDE_MENUS: OverrideMenu[] = ["suburbs", "meeting-street", "king-street"];
export const MENU_OVERRIDE_DATE = "2026-10-27T00:00:00.000Z";

export interface PriceOption {
  label: string | null;
  price: number;
}
type P = number | PriceOption[];
type PerMenu = Record<OverrideMenu, P>;

export interface OverrideItem {
  slug: string;
  name: string;
  description?: string;
  addons?: string;
  prices: PerMenu;
  /** Consumer advisory asterisk */
  advisory?: boolean;
  signature?: boolean;
  vegetarian?: boolean;
  /** Old synced slugs whose photo this item keeps, and which redirect here */
  legacy?: string[];
  /** Only on these menus (default: all three) */
  menus?: OverrideMenu[];
  /** Small sub-heading shown above this item */
  heading?: { name: string; note?: string };
}

export interface OverrideSection {
  slug: string;
  name: string;
  note?: string;
  items: OverrideItem[];
}

const all = (n: P): PerMenu => ({ suburbs: n, "meeting-street": n, "king-street": n });
const per = (suburbs: P, meeting: P, king: P): PerMenu => ({ suburbs, "meeting-street": meeting, "king-street": king });
const opts = (...o: [string, number][]): PriceOption[] => o.map(([label, price]) => ({ label, price }));

const MIMOSA_DESC_FULL =
  "Made fresh to order. Choose from: Fresh-Squeezed · Hawaiian · Hibiscus · Peach Bellini · Poinsettia · Tequila Sunrise · Tropical.";
const MIMOSA_DESC_TOC = "Made fresh to order. Choose from: Fresh-Squeezed · Hawaiian · Peach Bellini · Tequila Sunrise · Tropical.";
const MEGAMOSA = "A Toast-worthy 20oz. mimosa. Because sometimes a standard pour just won't do.";
const NOT_TOC: OverrideMenu[] = ["suburbs", "king-street"];
const TOC: OverrideMenu[] = ["meeting-street"];

export const OVERRIDE_SECTIONS: OverrideSection[] = [
  {
    slug: "starters",
    name: "Starters",
    items: [
      { slug: "new-orleans-beignets", name: "New Orleans Beignets", description: "Powdered sugar, house-made fresh preserves. A little New Orleans, a lot of joy.", prices: per(10, 12, 12), signature: true },
      { slug: "candied-bacon", name: "Candied Bacon", description: "Brown sugar, roasted red pepper flakes, candied bacon. Sweet, smoky, dangerously good.", prices: all(8), advisory: true },
      { slug: "fried-green-tomatoes", name: "Fried Green Tomatoes", description: "Whipped pimento cheese, tomato coulis, balsamic drizzle. A Lowcountry classic done right.", prices: all(13) },
      { slug: "the-big-biscuit", name: "The Big Biscuit", description: "Housemade, warm, served with a bright berry coulis. Simple. Perfect.", prices: all(4) },
    ],
  },
  {
    slug: "brunch-beverages",
    name: "Brunch Beverages",
    items: [
      { slug: "mimosas", name: "Mimosas", description: MIMOSA_DESC_FULL, prices: all(10), menus: NOT_TOC },
      { slug: "mimosas", name: "Mimosas", description: MIMOSA_DESC_TOC, prices: all(opts(["Glass", 10], ["Carafe", 28])), menus: TOC },
      { slug: "poinsettia-mimosa", name: "Poinsettia Mimosa", prices: all(opts(["Glass", 10], ["Carafe", 20])), menus: TOC },
      { slug: "hibiscus-mimosa", name: "Hibiscus Mimosa", prices: all(opts(["Glass", 10], ["Carafe", 30])), menus: TOC },
      { slug: "mock-mosa", name: "Mock-Mosa", prices: all(5) },
      { slug: "megamosa", name: "MegaMosa", description: MEGAMOSA, prices: all(14) },
      { slug: "classic-bloody-mary", name: "Classic Bloody Mary", description: "Vodka, Charleston Mix", prices: all(10), heading: { name: "Bloody Marys", note: "Four ways to start your morning with intention" } },
      { slug: "pig-candy-bloody-mary", name: "Pig Candy Bloody Mary", description: "Famous candied bacon garnish", prices: all(12) },
      { slug: "diablo-bloody-mary", name: "Diablo Bloody Mary", description: "Jalapeño-infused vodka", prices: all(12) },
      { slug: "bloody-maria", name: "Bloody Maria", description: "Camarena Silver Tequila", prices: all(12) },
    ],
  },
  {
    slug: "breakfast-and-brunch",
    name: "Breakfast & Brunch",
    note: "Served with your choice of grits or home fries, choice of toast, biscuit +2, fresh fruit +2",
    items: [
      { slug: "toast-classic-breakfast", name: "Toast! Classic Breakfast", description: "Farm-fresh eggs your way, bacon, sausage, or chicken apple sausage. Honest and always right.", prices: all(16), advisory: true },
      { slug: "steak-and-eggs", name: "Steak and Eggs", description: "8oz. hand-cut butcher steak, seared to order, two eggs any style. The breakfast that makes the whole table jealous.", addons: "Add grilled shrimp +7", prices: per(24, 29, 29), advisory: true },
      { slug: "eggs-meeting-street", name: "Eggs Meeting Street", description: "House-made crab cakes, crispy fried green tomatoes, poached eggs, remoulade. Order single or go double, you'll know which one you are.", prices: all(opts(["Single", 17], ["Double", 23])), advisory: true, signature: true, legacy: ["single-meeting", "double-meeting"] },
      { slug: "corned-beef-hash-and-eggs", name: "Corned Beef Hash and Eggs", description: "House-braised, hand-chopped, crisped on the flat-top, two scrambled eggs. The real deal, no shortcuts.", prices: all(18), advisory: true, signature: true },
      { slug: "famous-shrimp-and-grits", name: "Famous Shrimp & Grits", description: "Carolina shrimp, rich cream sauce, stone-ground grits, shaved parmesan. The dish people come back for.", addons: "Sides not included. Add flounder +6", prices: all(21), advisory: true, signature: true, legacy: ["shrimp-and-grits"] },
    ],
  },
  {
    slug: "healthy-bites",
    name: "Healthy Bites",
    items: [
      { slug: "power-plate", name: "Power Plate", description: "Egg whites, spinach, mushrooms, avocado, chicken apple sausage, multigrain toast. Brunch that actually makes you feel good.", prices: all(17), advisory: true },
      { slug: "avocado-toast", name: "Avocado Toast", description: "Smashed avocado, cherry tomatoes, cucumber, radish, artisan greens. Not just a trend, this one earns it.", addons: "Add two eggs +2", prices: all(12), advisory: true },
    ],
  },
  {
    slug: "lowcountry-omelets",
    name: "Lowcountry Omelets",
    note: "Served with your choice of home fries or grits, choice of toast, biscuit +2, fresh fruit +2. Egg white option available +2",
    items: [
      { slug: "blue-crab-and-shrimp", name: "Blue Crab & Shrimp", description: "Blue crab, shrimp, roasted mushrooms, pepper jack, fresh peppers, tomatoes. Rich, coastal, unforgettable.", prices: all(23), advisory: true, signature: true, legacy: ["blue-crab-and-shrimp-omelet"] },
      { slug: "carolina-ham-bacon-and-cheddar", name: "Carolina Ham, Bacon & Cheddar", description: "Thick-cut ham, smoky bacon, sharp cheddar. Generous, soulful, always satisfying.", prices: all(17), advisory: true },
      { slug: "roasted-veggie", name: "Roasted Veggie", description: "Spinach, caramelized onions, roasted peppers, mushrooms, vine-ripe tomato, pepper jack. A vegetarian omelet that doesn't feel like a compromise.", prices: all(16), vegetarian: true, legacy: ["roasted-veggie-omelet"] },
    ],
  },
  {
    slug: "lunch-favorites",
    name: "Lunch Favorites",
    note: "Served with your choice of french fries. Sweet potato fries +2",
    items: [
      { slug: "double-smash-burger", name: "Double Smash Burger", description: "Brisket-and-chuck smash patties, American cheese, shredded lettuce, tomato, pickles, onion, house sauce, toasted brioche bun. The kind of burger that ends the search.", addons: "Add bacon +2 · Add mushrooms +2 · Add farm-fresh egg +2", prices: per(16, 16, 14), advisory: true, signature: true },
      { slug: "low-country-fried-green-blt", name: "Low Country Fried Green BLT", description: "Thick-cut bacon, fried green tomatoes, pimento cheese, shredded lettuce, house-made bread. You won't miss the regular tomato.", prices: all(15), advisory: true, signature: true },
      { slug: "coastal-chicken-club", name: "Coastal Chicken Club", description: "Grilled or blackened chicken, avocado mash, Swiss cheese, bacon, fresh tomato, lettuce, toasted bun. Light, coastal, layered with flavor.", prices: all(16), advisory: true },
      { slug: "shrimp-po-boy", name: "Shrimp Po' Boy", description: "Lightly breaded shrimp, soft-griddled hoagie, lettuce, tomato, pickle, zesty remoulade. New Orleans spirit, Lowcountry soul.", prices: all(16), advisory: true },
      { slug: "buttermilk-chicken-tenderloins", name: "Buttermilk Chicken Tenderloins", description: "Hand-breaded, golden-fried, house sauce, crispy fries, creamy coleslaw. The whole table will reach.", prices: all(17), advisory: true, legacy: ["buttermilk-chicken-tenders"] },
      { slug: "philly-cheesesteak", name: "Philly Cheesesteak", description: "Shaved sirloin, sautéed onions, peppers, American cheese, soft-griddled hoagie roll. A Philly icon with a Southern handshake.", addons: "Add mushrooms +2", prices: all(16), advisory: true },
    ],
  },
  {
    slug: "sweet-and-southern",
    name: "Sweet & Southern",
    items: [
      { slug: "peach-stuffed-french-toast", name: "Peach Stuffed French Toast", description: "Crème brûlée batter, stuffed with sun-ripened peaches flash-fried to perfection. A Southern dessert for breakfast, and we're not sorry.", prices: all(12), signature: true },
      { slug: "toast-belgian-waffle", name: "Toast! Belgian Waffle", description: "Deep-pocket, crisp outside, fluffy within. Served with your choice of bacon, sausage, or chicken apple sausage.", prices: all(12) },
      { slug: "chicken-and-waffles", name: "Chicken & Waffles", description: "Hand-breaded crispy chicken, housemade Belgian waffle, fresh berries, powdered sugar. Everything you want from brunch in one plate.", prices: all(17), advisory: true },
      { slug: "cinnamon-brioche-french-toast", name: "Cinnamon Brioche French Toast", description: "Cinnamon-swirl challah, crème brûlée batter, griddled until caramelized. The one you think about on a Monday morning.", prices: all(14), legacy: ["brioche-french-toast"] },
      { slug: "buttermilk-pancakes", name: "Buttermilk Pancakes", description: "Two fluffy buttermilk pancakes, light as a cloud, golden at the edges. Classic. Beloved.", addons: "Add sausage or bacon +2", prices: all(12), legacy: ["stack-of-pancakes"] },
    ],
  },
  {
    slug: "benedicts",
    name: "Benedicts",
    note: "Served on biscuits or English muffins with your choice of grits or home fries",
    items: [
      { slug: "classic-biscuit-benny", name: "Classic Biscuit Benny", description: "Poached eggs, housemade biscuit, Canadian bacon, velvety hollandaise. Pure, timeless, perfect.", prices: all(19), advisory: true, legacy: ["classic-biscuit-benedict"] },
      { slug: "florentine-benny", name: "Florentine Benny", description: "Poached eggs, housemade biscuit, sautéed spinach, vine-ripe tomato, hollandaise. Garden-fresh and gorgeous.", prices: all(17), advisory: true },
      { slug: "crab-cake-benny", name: "Crab Cake Benny", description: "House-made crab cake, two poached eggs, housemade biscuit, hollandaise. The brunch flex you've earned.", prices: all(21), advisory: true },
    ],
  },
  {
    slug: "biscuits",
    name: "Biscuits",
    items: [
      { slug: "biscuit-gravy-and-eggs", name: "Biscuit Gravy & Eggs", description: "Housemade biscuit, house-made sausage gravy, two scrambled eggs. Soul food, full stop.", prices: all(14), advisory: true },
      { slug: "breakfast-biscuit-sandwich", name: "Breakfast Biscuit Sandwich", description: "Scrambled egg, American cheese, housemade biscuit, your choice of bacon, sausage, or chicken apple sausage. A handheld that hits every time.", prices: all(12), advisory: true },
    ],
  },
  {
    slug: "salads-and-soup",
    name: "Salads & Soup",
    items: [
      { slug: "she-crab-soup", name: "She Crab Soup", description: "Silky, cream-rich, made from scratch with real blue crab. A Charleston institution. A cup is never enough.", prices: all(8), advisory: true },
      { slug: "caesar-salad", name: "Caesar Salad", description: "Crisp romaine, house-made croutons, shaved parmesan, bold Caesar dressing. The one that earns every bite.", addons: "Add chicken +4 · Add grilled shrimp +7", prices: all(11), legacy: ["caesar-salad-large"] },
      { slug: "cobb-salad", name: "Cobb Salad", description: "Grilled chicken, avocado, crispy bacon, tomatoes, sharp cheddar, hard-boiled egg, cucumber, your choice of dressing. A meal in itself.", prices: all(16), advisory: true },
    ],
  },
  {
    slug: "sides",
    name: "Sides",
    note: "The little things that make a big difference",
    items: [
      { slug: "country-sausage-bacon-or-chicken-apple-sausage", name: "Country Sausage, Bacon, or Chicken-Apple Sausage", prices: all(5), advisory: true },
      { slug: "sausage-gravy", name: "Sausage Gravy", prices: all(4), advisory: true },
      { slug: "stone-ground-grits", name: "Stone-Ground Grits", prices: all(4) },
      { slug: "the-big-biscuit", name: "The Big Biscuit", prices: all(4) },
      { slug: "toast", name: "Toast", description: "White, multigrain, or rye.", prices: all(3) },
      { slug: "buttermilk-pancake", name: "Buttermilk Pancake", prices: all(4) },
      { slug: "plain-waffle", name: "Plain Waffle", prices: all(7) },
      { slug: "french-toast", name: "French Toast", prices: all(5) },
      { slug: "home-fries", name: "Home Fries", prices: all(4) },
      { slug: "fresh-cut-fruit", name: "Fresh Cut Fruit", prices: all(6) },
      { slug: "sweet-potato-fries", name: "Sweet Potato Fries", prices: all(5) },
      { slug: "french-fries", name: "French Fries", prices: all(4) },
      { slug: "cole-slaw", name: "Cole Slaw", prices: all(4) },
      { slug: "loaded-home-fries", name: "Loaded Home Fries", prices: all(7) },
      { slug: "fully-loaded-home-fries", name: "Fully Loaded Home Fries", prices: all(8) },
      { slug: "chicken-tenders", name: "Chicken Tenders", prices: all(opts(["2 pieces", 5], ["3 pieces", 7])), advisory: true },
    ],
  },
];

/** Synced Toast categories that stay as they are (not on the new printed menus). */
export const KEPT_SOURCE_CATEGORIES = [
  "coffee",
  "tea",
  "soda-and-red-bull",
  "juice-milk-and-water",
  "lto-s",
  "kids-breakfast",
  "kids-lunch",
];

/** Old category slugs that moved. `null` = category retired (send to the menu page). */
export const CATEGORY_REDIRECTS: Record<string, string | null> = {
  omelets: "lowcountry-omelets",
  "soups-and-salads": "salads-and-soup",
  croissants: null,
};

/** Items that are no longer on the menu: old URLs go to their category page. */
export const HIDDEN_ITEM_SLUGS = new Set([
  "chicken-salad-croissant",
  "shrimp-salad-croissant",
  "philly-cheesesteak-croissant",
  "two-egg-breakfast",
  "bacon-egg-and-cheese-biscuit",
  "egg-and-cheese-biscuit",
  "sausage-egg-and-cheese-biscuit",
  "build-your-own-omelet",
]);

/** Old item slug -> new item slug (from `legacy`). */
export const ITEM_REDIRECTS: Record<string, string> = Object.fromEntries(
  OVERRIDE_SECTIONS.flatMap((s) => s.items.flatMap((i) => (i.legacy ?? []).filter((l) => l !== i.slug).map((l) => [l, i.slug]))),
);

export function normalizePrices(p: P): PriceOption[] {
  return typeof p === "number" ? [{ label: null, price: p }] : p;
}
