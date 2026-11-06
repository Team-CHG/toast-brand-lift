export const HOLIDAY_GIFT_CARDS = {
  headline: "Holiday Gift Cards Are Here",
  offers: [
    { purchase: 50, immediate: 50, bonus: 25, body: "Buy a $50 gift card → get $50 now + $25 to spend Jan 1–March 31." },
    { purchase: 100, immediate: 100, bonus: 50, body: "Buy a $100 gift card → get $100 now + $50 for your next purchase Jan 1–March 31." },
  ],
  button: "Buy Gift Cards",
  url: "https://order.toasttab.com/egiftcards/toast-charleston",
  note: "Bonus cards redeemable January 1 through March 31.",
  redemption: { startMonth: 1, startDay: 1, endMonth: 3, endDay: 31 },
  sessionKey: "toast-holiday-gift-cards-shown",
  delayMs: 2000,
} as const;

export function shouldShowHolidayGiftCards(alreadyShown: boolean) {
  return !alreadyShown;
}