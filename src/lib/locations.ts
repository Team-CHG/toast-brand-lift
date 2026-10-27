// Single source of truth for every Toast! All Day location.
// On-page NAP, location schema, FAQ answers, llms.txt and the sitemap all read
// from here, so names, addresses, phones and hours can never drift apart.
// Keep this module free of asset imports: the build-time sitemap script imports it.

export const SITE_URL = "https://toastallday.com";

export type MenuGroupSlug = "meeting-street" | "king-street" | "suburbs" | "savannah";
/** Menu group slug in the synced Toast data that feeds each menu page. */
export type MenuSourceSlug = "downtown" | "suburbs" | "savannah";

export interface ToastLocation {
  slug: string;
  name: string;
  street: string;
  city: string;
  state: "SC" | "GA";
  zip: string;
  /** Display phone, e.g. (843) 994-3598 */
  phone: string;
  /** E.164-style phone for schema, e.g. +1-843-994-3598 */
  telephone: string;
  /** Hours exactly as shown on the site */
  hours: string;
  opens: string;
  closes: string;
  latitude: number;
  longitude: number;
  menuGroup: MenuGroupSlug;
  orderUrl: string;
  waitlistUrl: string;
}

const tel = (p: string) => `+1-${p.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`;

const raw: Omit<ToastLocation, "telephone">[] = [
  {
    slug: "toast-meeting",
    name: "Toast! on Meeting",
    street: "127 Meeting St",
    city: "Charleston",
    state: "SC",
    zip: "29401",
    phone: "(843) 994-3598",
    hours: "Monday – Sunday: 6am – 3pm",
    opens: "06:00",
    closes: "15:00",
    // Geocoded from 127 Meeting St (OpenStreetMap), replacing two conflicting points.
    latitude: 32.7785,
    longitude: -79.9314,
    menuGroup: "meeting-street",
    orderUrl: "https://order.toasttab.com/online/toast-charleston",
    waitlistUrl: "https://tables.toasttab.com/restaurants/68470c10-a7ea-4c0f-aa51-13ad297c1a49/joinWaitlist",
  },
  {
    slug: "toast-king",
    name: "Toast! on King",
    street: "453 King Street",
    city: "Charleston",
    state: "SC",
    zip: "29403",
    phone: "(843) 793-0364",
    hours: "Monday – Sunday: 7am – 3pm",
    opens: "07:00",
    closes: "15:00",
    latitude: 32.7901,
    longitude: -79.9407,
    menuGroup: "king-street",
    orderUrl: "https://order.toasttab.com/online/toast-king",
    waitlistUrl: "https://tables.toasttab.com/restaurants/d54baf9c-c752-4df6-81af-70807504a517/joinWaitlist",
  },
  {
    slug: "toast-mt-pleasant",
    name: "Toast! Mt. Pleasant",
    street: "1150 Hungry Neck Blvd.",
    city: "Mt. Pleasant",
    state: "SC",
    zip: "29464",
    phone: "(843) 350-5256",
    hours: "Monday – Sunday: 7am – 3pm",
    opens: "07:00",
    closes: "15:00",
    latitude: 32.8138,
    longitude: -79.8621,
    menuGroup: "suburbs",
    orderUrl: "https://order.toasttab.com/online/toast-mtpleasant",
    waitlistUrl: "https://tables.toasttab.com/restaurants/05cb9aff-c588-49f4-83c3-125ca914376c/joinWaitlist",
  },
  {
    slug: "toast-west-ashley",
    name: "Toast! West Ashley",
    street: "2026 Savannah Hwy",
    city: "Charleston",
    state: "SC",
    zip: "29407",
    phone: "(843) 483-8940",
    hours: "Monday – Sunday: 7am – 3pm",
    opens: "07:00",
    closes: "15:00",
    latitude: 32.772,
    longitude: -79.9894,
    menuGroup: "suburbs",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley",
    waitlistUrl: "https://tables.toasttab.com/restaurants/236efb55-104c-49e1-8b73-3d9af66684ce/joinWaitlist",
  },
  {
    slug: "toast-summerville",
    name: "Toast! Summerville",
    street: "717 Old Trolley Road",
    city: "Summerville",
    state: "SC",
    zip: "29485",
    phone: "(843) 900-4422",
    hours: "Monday – Sunday: 7am – 3pm",
    opens: "07:00",
    closes: "15:00",
    latitude: 33.0185,
    longitude: -80.1756,
    menuGroup: "suburbs",
    orderUrl: "https://order.toasttab.com/online/toast-summerville",
    waitlistUrl: "https://tables.toasttab.com/restaurants/48ca16ab-9cc0-4c0b-a826-d3cc2118e44a/joinWaitlist",
  },
  {
    slug: "toast-savannah",
    name: "Toast! Savannah",
    street: "1 W Broughton Street",
    city: "Savannah",
    state: "GA",
    zip: "31401",
    phone: "(912) 513-8920",
    hours: "Monday – Sunday: 7am – 10pm",
    opens: "07:00",
    closes: "22:00",
    latitude: 32.0809,
    longitude: -81.0912,
    menuGroup: "savannah",
    orderUrl: "https://order.toasttab.com/online/toast-savannah",
    waitlistUrl: "https://tables.toasttab.com/restaurants/97f1d59a-b51c-4a46-92e7-4251dd54980d/joinWaitlist",
  },
];

export const LOCATIONS: ToastLocation[] = raw.map((l) => ({ ...l, telephone: tel(l.phone) }));

export function getLocation(slug: string): ToastLocation {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location ${slug}`);
  return loc;
}

export const fullAddress = (l: ToastLocation) => `${l.street}, ${l.city}, ${l.state} ${l.zip}`;
export const locationUrl = (l: ToastLocation) => `${SITE_URL}/locations/${l.slug}`;

export interface MenuGroupMeta {
  slug: MenuGroupSlug;
  /** Synced Toast group the page starts from */
  source: MenuSourceSlug;
  /** Schema Menu name */
  menuName: string;
  /** Visible H1 */
  h1: string;
  /** Short area label used in eyebrows, breadcrumbs and titles */
  label: string;
  areas: string;
  title: string;
  description: string;
}

export const MENU_GROUPS: Record<MenuGroupSlug, MenuGroupMeta> = {
  "meeting-street": {
    slug: "meeting-street",
    source: "downtown",
    menuName: "Toast! on Meeting Menu (127 Meeting St)",
    h1: "Toast! on Meeting Menu: 127 Meeting St, Downtown Charleston",
    label: "Toast! on Meeting",
    areas: "Downtown Charleston SC",
    title: "Breakfast & Brunch Menu | Toast! on Meeting, 127 Meeting St, Charleston SC",
    description: "Breakfast, brunch, and lunch favorites with prices at Toast! on Meeting, 127 Meeting St in downtown Charleston.",
  },
  "king-street": {
    slug: "king-street",
    source: "downtown",
    menuName: "Toast! on King Menu (453 King Street)",
    h1: "Toast! on King Menu: 453 King Street, Charleston",
    label: "Toast! on King",
    areas: "King Street, Charleston SC",
    title: "Breakfast & Brunch Menu | Toast! on King, 453 King Street, Charleston SC",
    description: "Breakfast, brunch, and lunch favorites with prices at Toast! on King, 453 King Street in downtown Charleston.",
  },
  suburbs: {
    slug: "suburbs",
    source: "suburbs",
    menuName: "Toast! All Day Suburban Menu",
    h1: "Toast! All Day Menu: West Ashley, Mt. Pleasant & Summerville",
    label: "Charleston Suburbs",
    areas: "Mt. Pleasant, West Ashley & Summerville SC",
    title: "Breakfast & Brunch Menu | Toast! All Day West Ashley, Mt. Pleasant & Summerville SC",
    description:
      "Breakfast, brunch, and lunch favorites served in Mt. Pleasant, West Ashley, and Summerville, with prices.",
  },
  savannah: {
    slug: "savannah",
    source: "savannah",
    menuName: "Toast! All Day Savannah Menu",
    h1: "Toast! Savannah Menu: Broughton Street",
    label: "Savannah",
    areas: "Savannah GA",
    title: "Breakfast & Brunch Menu | Toast! All Day Savannah GA",
    description: "Breakfast, brunch, and lunch favorites served fresh on Broughton Street in Savannah, with prices.",
  },
};

export const isMenuGroup = (s: string): s is MenuGroupSlug => s in MENU_GROUPS;
export const locationsForGroup = (g: MenuGroupSlug) => LOCATIONS.filter((l) => l.menuGroup === g);
export const menuUrl = (g: MenuGroupSlug) => `${SITE_URL}/menus/${g}`;

export const SAME_AS = [
  "https://www.facebook.com/ToastofCharleston/",
  "https://www.instagram.com/toastofcharleston/",
  "https://www.tiktok.com/@toast.all.day",
];
