import { describe, it, expect } from "vitest";
import { HOLIDAY_GIFT_CARDS as offer, shouldShowHolidayGiftCards } from "../lib/holidayGiftCards";

describe("Holiday gift card offer", () => {
  it("gives $50 now and $25 bonus for a $50 purchase", () => {
    expect(offer.offers[0]).toMatchObject({ purchase: 50, immediate: 50, bonus: 25 });
  });
  it("gives $100 now and $50 bonus for a $100 purchase", () => {
    expect(offer.offers[1]).toMatchObject({ purchase: 100, immediate: 100, bonus: 50 });
  });
  it("limits bonus redemption to January 1 through March 31", () => {
    expect(offer.redemption).toEqual({ startMonth: 1, startDay: 1, endMonth: 3, endDay: 31 });
  });
  it("uses the approved Charleston gift card destination", () => {
    expect(offer.url).toBe("https://order.toasttab.com/egiftcards/toast-charleston");
  });
  it("shows only once per visitor session", () => {
    expect(shouldShowHolidayGiftCards(false)).toBe(true);
    expect(shouldShowHolidayGiftCards(true)).toBe(false);
  });
});