import { describe, expect, it } from "vitest";
import { buildMenu, itemPriceText, legacyMenuRedirect, menuNode, type SourceCategory, type SourceItem } from "@/lib/menuBuild";
import { getLocation } from "@/lib/locations";

const cats: SourceCategory[] = [
  { id: "c1", slug: "breakfast-and-brunch", name: "Breakfast & Brunch", description: null, image_url: null, updated_at: null },
  { id: "c2", slug: "coffee", name: "Coffee", description: null, image_url: null, updated_at: null },
];
const src = (id: string, category_id: string, slug: string, price: number, image_url: string | null = null): SourceItem => ({
  id, category_id, slug, name: slug, description: null, price, image_url, calories: null, allergens: null, updated_at: null,
});
const items = [src("a", "c1", "single-meeting", 17, "https://img/meeting.jpg"), src("b", "c1", "two-egg-breakfast", 8.95), src("c", "c2", "coffee", 3.5)];

const find = (g: Parameters<typeof buildMenu>[0], slug: string) =>
  buildMenu(g, cats, items).sections.flatMap((s) => s.items).find((i) => i.slug === slug)!;

describe("October 2026 menu prices", () => {
  it("Beignets are $10 Suburban, $12 Meeting, $12 King", () => {
    expect(itemPriceText(find("suburbs", "new-orleans-beignets"))).toBe("$10");
    expect(itemPriceText(find("meeting-street", "new-orleans-beignets"))).toBe("$12");
    expect(itemPriceText(find("king-street", "new-orleans-beignets"))).toBe("$12");
  });
  it("Steak and Eggs is $24 / $29 / $29", () => {
    expect([find("suburbs", "steak-and-eggs").price, find("meeting-street", "steak-and-eggs").price, find("king-street", "steak-and-eggs").price]).toEqual([24, 29, 29]);
  });
  it("Double Smash Burger is $16 / $16 / $14", () => {
    expect([find("suburbs", "double-smash-burger").price, find("meeting-street", "double-smash-burger").price, find("king-street", "double-smash-burger").price]).toEqual([16, 16, 14]);
  });
  it("Meeting St mimosa carafe is $28 and only Meeting has carafes", () => {
    expect(itemPriceText(find("meeting-street", "mimosas"))).toBe("Glass $10 / Carafe $28");
    expect(itemPriceText(find("king-street", "mimosas"))).toBe("$10");
  });
  it("Eggs Meeting Street is one item, Single $17 / Double $23, keeping the old photo", () => {
    const i = find("suburbs", "eggs-meeting-street");
    expect(itemPriceText(i)).toBe("Single $17 / Double $23");
    expect(i.image_url).toBe("https://img/meeting.jpg");
  });
  it("hides items not on the new menu and keeps Coffee from the sync", () => {
    const m = buildMenu("suburbs", cats, items);
    expect(m.sections.flatMap((s) => s.items).some((i) => i.slug === "two-egg-breakfast")).toBe(false);
    expect(m.sections.at(-1)?.slug).toBe("coffee");
    expect(m.sections[1]?.slug).toBe("brunch-beverages");
  });
  it("Savannah is untouched by the printed-menu layer", () => {
    const m = buildMenu("savannah", cats, items);
    expect(m.printed).toBe(false);
    expect(m.sections.flatMap((s) => s.items).map((i) => i.slug)).toEqual(["single-meeting", "two-egg-breakfast", "coffee"]);
  });
});

describe("legacy menu URLs", () => {
  const m = buildMenu("meeting-street", cats, items);
  it("renamed items redirect to the new item", () => {
    expect(legacyMenuRedirect(m, "breakfast-and-brunch", "single-meeting")).toBe("/menus/meeting-street/breakfast-and-brunch/eggs-meeting-street");
    expect(legacyMenuRedirect(m, "omelets", "roasted-veggie-omelet")).toBe("/menus/meeting-street/lowcountry-omelets/roasted-veggie");
  });
  it("hidden items go to their category page", () => {
    expect(legacyMenuRedirect(m, "breakfast-and-brunch", "two-egg-breakfast")).toBe("/menus/meeting-street/breakfast-and-brunch");
    expect(legacyMenuRedirect(m, "croissants", "chicken-salad-croissant")).toBe("/menus/meeting-street");
  });
  it("unknown URLs are not redirected", () => {
    expect(legacyMenuRedirect(m, "breakfast-and-brunch", "nope")).toBeNull();
  });
});

describe("location menus", () => {
  it("Meeting and King point to their own menus", () => {
    expect(getLocation("toast-meeting").menuGroup).toBe("meeting-street");
    expect(getLocation("toast-king").menuGroup).toBe("king-street");
    expect(getLocation("toast-summerville").menuGroup).toBe("suburbs");
  });
  it("menu schema lists Eggs Meeting Street with two offers", () => {
    const node = menuNode(buildMenu("meeting-street", cats, items));
    const em = node.hasMenuSection.flatMap((s) => s.hasMenuItem).find((i) => i.name === "Eggs Meeting Street")!;
    expect(em.offers).toEqual([
      { "@type": "Offer", name: "Single", price: "17.00", priceCurrency: "USD" },
      { "@type": "Offer", name: "Double", price: "23.00", priceCurrency: "USD" },
    ]);
  });
});
