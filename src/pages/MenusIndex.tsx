import { Link } from "@/lib/router-compat";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuLocations from "@/components/MenuLocations";
import { MENU_GROUPS } from "@/lib/locations";

const MenusIndex = () => (
  <div className="min-h-screen bg-complementary">
    <SEO
      title="Menus | Toast! All Day Breakfast, Brunch & Lunch"
      description="Browse the Toast! All Day breakfast, brunch, and lunch menus for downtown Charleston, Mt. Pleasant, West Ashley, Summerville, and Savannah."
    />
    <Navigation />
    <Breadcrumbs />
    <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-3xl border border-border border-t-8 border-t-highlight bg-card px-5 py-10 text-center shadow-soft sm:px-9 md:px-14 md:py-14">
        <h1 className="text-3xl font-bold uppercase leading-tight text-primary md:text-4xl">Toast! All Day Menus</h1>
        <div className="mx-auto my-5 h-px w-20 bg-accent" />
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Choose your location to see the full breakfast, brunch, and lunch menu with prices.
        </p>
        <div className="mt-10 divide-y divide-border border-y border-border text-left">
          {Object.values(MENU_GROUPS).map((g) => (
            <div key={g.slug} className="py-6">
              <h2 className="text-lg font-bold uppercase text-primary md:text-xl">
                <Link to={`/menus/${g.slug}`} className="hover:text-highlight">{g.h1}</Link>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
              <MenuLocations group={g.slug} />
              <Link to={`/menus/${g.slug}`} className="mt-3 inline-block text-sm font-semibold text-highlight hover:underline">View the menu</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MenusIndex;
