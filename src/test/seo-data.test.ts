import { describe, expect, it, vi } from "vitest";

vi.mock("@/integrations/supabase/client", () => ({ supabase: {} }));

import { LOCATIONS, getLocation } from "@/lib/locations";
import { cleanDescription, menuItemNode } from "@/lib/menu";

describe("locations data", () => {
  it("has exactly 6 active locations", () => {
    expect(LOCATIONS).toHaveLength(6);
  });
  it("keeps Meeting St at 127 Meeting St", () => {
    expect(getLocation("toast-meeting").street).toBe("127 Meeting St");
  });
});

describe("menu descriptions", () => {
  it("strips the stray Shrimp & Grits fragment", () => {
    const raw =
      "Sautéed shrimp, peppers and onions in lobster cream sauce over stone-ground grits with Parmesan and tomato.\n tomatoes over Carolina stone-ground grits\ntomatoes over Carolina stone-ground grits";
    expect(cleanDescription(raw)).toBe(
      "Sautéed shrimp, peppers and onions in lobster cream sauce over stone-ground grits with Parmesan and tomato.",
    );
  });
});

describe("dietary schema", () => {
  const section = { id: "s", slug: "omelets", name: "Omelets", description: null, image_url: null, items: [] };
  const base = { id: "i", description: null, price: 16, image_url: null, calories: null, allergens: null, signature: false };
  it("maps vegetarian to VegetarianDiet", () => {
    const node = menuItemNode("suburbs", section, { ...base, slug: "roasted-veggie-omelet", name: "Roasted Veggie Omelet", dietary: ["vegetarian"] });
    expect(node.suitableForDiet).toEqual(["https://schema.org/VegetarianDiet"]);
  });
  it("omits suitableForDiet when untagged", () => {
    const node = menuItemNode("suburbs", section, { ...base, slug: "x", name: "X", dietary: [] });
    expect("suitableForDiet" in node).toBe(false);
  });
});
