import { Link } from "@/lib/router-compat";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MENU_GROUPS, fullAddress, getLocation } from "@/lib/locations";

const CHOICES = [
  { menu: MENU_GROUPS["meeting-street"], loc: getLocation("toast-meeting") },
  { menu: MENU_GROUPS["king-street"], loc: getLocation("toast-king") },
];

/** Downtown has two menus with different prices; this page points guests to theirs. */
const DowntownMenuChooser = () => (
  <div className="min-h-screen bg-complementary">
    <SEO
      title="Downtown Charleston Menus | Toast! on Meeting & Toast! on King"
      description="Choose your downtown Charleston Toast! All Day menu: Toast! on Meeting at 127 Meeting St or Toast! on King at 453 King Street."
    />
    <Navigation />
    <Breadcrumbs />
    <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-3xl border border-border border-t-8 border-t-highlight bg-card px-5 py-10 text-center shadow-soft sm:px-9 md:px-14 md:py-14">
        <h1 className="text-3xl font-bold uppercase leading-tight text-primary md:text-4xl">Downtown Charleston Menus</h1>
        <div className="mx-auto my-5 h-px w-20 bg-accent" />
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Our two downtown restaurants have their own menus and prices. Pick your location.
        </p>
        <ul className="mt-10 divide-y divide-border border-y border-border text-left">
          {CHOICES.map(({ menu, loc }) => (
            <li key={menu.slug} className="py-6">
              <h2 className="text-lg font-bold uppercase text-primary md:text-xl">
                <Link to={`/menus/${menu.slug}`} className="hover:text-highlight">{loc.name}</Link>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{fullAddress(loc)}</p>
              <Link to={`/menus/${menu.slug}`} className="mt-3 inline-block text-sm font-semibold text-highlight hover:underline">View the {loc.name} menu</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default DowntownMenuChooser;
