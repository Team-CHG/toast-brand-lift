export const THANKSGIVING = {
  title: "Thanksgiving Brunch 2026 in Charleston | Toast! All Day",
  description: "Celebrate Thanksgiving Day, Thursday, Nov 26, 2026, at Toast! All Day in Charleston. Mimosa-brined turkey dinner with herb dressing, mashed potatoes and pumpkin pie. See the menu.",
  date: "2026-11-26",
  dateLabel: "Thursday, November 26, 2026",
  dish: "Mimosa-Brined Turkey Dinner",
  dishDescription: "Sliced mimosa-brined roasted turkey breast, savory herb dressing, whipped mashed potatoes, green beans almondine, maple-sage turkey gravy, and cranberry-orange compote.",
  price: 24,
  dessert: "Pumpkin Pie",
  faqs: [
    { question: "Is Toast! All Day open on Thanksgiving?", answer: "Yes, we're serving our Thanksgiving brunch on Thursday, November 26, 2026." },
    { question: "What's on the Thanksgiving menu?", answer: "A mimosa-brined turkey dinner with herb dressing, mashed potatoes, green beans almondine, gravy and cranberry-orange compote, plus optional pumpkin pie." },
  ],
} as const;

export function thanksgivingSchema(image: string) {
  const url = "https://toastallday.com/thanksgiving";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${url}#restaurant`,
        name: "Toast! All Day",
        url: "https://toastallday.com/",
        address: { "@type": "PostalAddress", addressLocality: "Charleston", addressRegion: "SC", addressCountry: "US" },
      },
      {
        "@type": "FoodEvent",
        "@id": `${url}#event`,
        name: "Thanksgiving Brunch at Toast! All Day",
        description: THANKSGIVING.description,
        startDate: THANKSGIVING.date,
        endDate: THANKSGIVING.date,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url,
        image,
        location: { "@id": `${url}#restaurant` },
        organizer: { "@id": `${url}#restaurant` },
      },
      {
        "@type": "MenuItem",
        name: THANKSGIVING.dish,
        description: THANKSGIVING.dishDescription,
        offers: { "@type": "Offer", price: THANKSGIVING.price, priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: THANKSGIVING.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}