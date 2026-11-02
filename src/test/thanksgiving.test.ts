import { describe, expect, it } from "vitest";
import { THANKSGIVING, thanksgivingSchema } from "@/lib/thanksgiving";

describe("approved Thanksgiving offer", () => {
  it("keeps the turkey dinner at $24", () => {
    expect(THANKSGIVING.price).toBe(24);
    const item = thanksgivingSchema("https://toastallday.com/photo.jpg")["@graph"].find((node) => node["@type"] === "MenuItem");
    expect(item?.offers?.price).toBe(24);
  });
  it("uses Thursday November 26, 2026 without inventing hours", () => {
    const event = thanksgivingSchema("https://toastallday.com/photo.jpg")["@graph"].find((node) => node["@type"] === "FoodEvent");
    expect(event?.startDate).toBe("2026-11-26");
    expect(new Date(`${THANKSGIVING.date}T12:00:00Z`).getUTCDay()).toBe(4);
  });
});