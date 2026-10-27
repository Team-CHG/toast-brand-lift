import { LOCATIONS, SAME_AS, SITE_URL, locationUrl, menuUrl, type ToastLocation } from "@/lib/locations";
import toastMeetingImg from "@/assets/locations/toast-meeting.avif";
import toastKingImg from "@/assets/locations/toast-king.jpg";
import toastMtPleasantImg from "@/assets/locations/toast-mt-pleasant.jpg";
import toastWestAshleyImg from "@/assets/locations/toast-west-ashley.jpg";
import toastSummervilleImg from "@/assets/locations/toast-summerville.jpg";
import toastSavannahImg from "@/assets/locations/toast-savannah.jpg";

const IMAGES: Record<string, string> = {
  "toast-meeting": toastMeetingImg,
  "toast-king": toastKingImg,
  "toast-mt-pleasant": toastMtPleasantImg,
  "toast-west-ashley": toastWestAshleyImg,
  "toast-summerville": toastSummervilleImg,
  "toast-savannah": toastSavannahImg,
};

const abs = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`);
export const restaurantId = (l: ToastLocation) => `${locationUrl(l)}#restaurant`;
const ORG_ID = `${SITE_URL}/#organization`;

export function restaurantNode(l: ToastLocation) {
  const menu = menuUrl(l.menuGroup);
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": restaurantId(l),
    url: locationUrl(l),
    name: l.name,
    image: abs(IMAGES[l.slug] ?? "/og-image.jpg"),
    telephone: l.telephone,
    priceRange: "$$",
    servesCuisine: ["American", "Southern", "Breakfast", "Brunch", "Lunch"],
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.state,
      postalCode: l.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: l.latitude, longitude: l.longitude },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: l.opens,
      closes: l.closes,
    },
    menu,
    hasMenu: { "@id": `${menu}#menu` },
    parentOrganization: { "@type": "Organization", "@id": ORG_ID, name: "Toast All Day" },
    sameAs: SAME_AS,
    potentialAction: [
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: l.orderUrl,
          actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
        },
        deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"],
      },
      { "@type": "ReserveAction", target: { "@type": "EntryPoint", urlTemplate: l.waitlistUrl } },
    ],
  };
}

/** Home and /locations: one Organization plus an ItemList that points at each Restaurant by @id. */
export function organizationNodes() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Toast All Day",
      alternateName: "Toast! All Day",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.png`,
      sameAs: SAME_AS,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Toast! All Day locations",
      numberOfItems: LOCATIONS.length,
      itemListElement: LOCATIONS.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Restaurant", "@id": restaurantId(l), name: l.name, url: locationUrl(l) },
      })),
    },
  ];
}
