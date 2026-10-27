import { Link } from "@/lib/router-compat";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuItemThumb from "@/components/MenuItemThumb";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import MenuTags from "@/components/MenuTags";
import MenuLocations from "@/components/MenuLocations";
import { MENU_GROUPS } from "@/lib/locations";
import { menuNode, type MenuData } from "@/lib/menu";

export const ALLERGY_NOTE = "Egg white option available on omelets. Please tell your server about any allergies.";

const MenuGroup = ({ menu }: { menu: MenuData }) => {
  const { group, sections } = menu;
  const meta = MENU_GROUPS[group];

  return (
    <div className="min-h-screen bg-complementary">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={`Toast All Day menu, ${meta.label} menu, breakfast menu, brunch menu, lunch menu`}
      />
      <JsonLd data={menuNode(menu)} />
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl overflow-hidden border border-border border-t-8 border-t-highlight bg-card shadow-soft">
          <header className="mx-5 px-1 pb-8 pt-10 text-center sm:mx-9 md:mx-14 md:pb-10 md:pt-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-highlight">{meta.label}</p>
            <h1 className="text-3xl font-bold uppercase leading-tight text-primary md:text-4xl">{meta.h1}</h1>
            <div className="mx-auto my-5 h-px w-20 bg-accent" />
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{meta.description}</p>
            <MenuLocations group={group} />
          </header>

          <div className="px-5 pb-12 pt-8 sm:px-9 md:px-14 md:pb-16 md:pt-10">
            {sections.length === 0 ? (
              <p className="py-16 text-center text-muted-foreground">Menu is being updated. Please check back soon.</p>
            ) : (
              <div className="space-y-16 md:space-y-20">
                {sections.map((category) => (
                  <section key={category.id} aria-labelledby={`category-${category.id}`}>
                    <div className="relative mb-7 flex items-center justify-center md:mb-10">
                      <div className="absolute inset-x-0 h-px bg-border" aria-hidden="true" />
                      <h2 id={`category-${category.id}`} className="relative bg-card px-4 text-center text-xl font-bold uppercase text-primary sm:px-6 md:text-2xl">
                        <Link to={`/menus/${group}/${category.slug}`} className="hover:text-highlight">{category.name}</Link>
                      </h2>
                    </div>
                    {category.description && <p className="mx-auto -mt-4 mb-7 max-w-xl text-center text-sm leading-relaxed text-muted-foreground md:-mt-6 md:mb-9">{category.description}</p>}
                    <div className="divide-y divide-border">
                      {category.items.map((item) => (
                        <Link key={item.id} to={`/menus/${group}/${category.slug}/${item.slug}`} className="group flex min-h-24 gap-4 py-5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring sm:min-h-28 sm:gap-6 sm:py-6">
                          <MenuItemThumb src={item.image_url} alt={item.name} className="h-16 w-16 sm:h-24 sm:w-24" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="text-base font-bold uppercase leading-snug text-primary transition-colors group-hover:text-highlight sm:text-lg">
                                {item.name}
                                <MenuTags item={item} />
                              </h3>
                              {item.price != null && <span className="shrink-0 text-base font-bold text-highlight sm:text-lg">${item.price.toFixed(2)}</span>}
                            </div>
                            {item.description && <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
            <p className="mt-14 border-t border-border pt-6 text-center text-sm text-muted-foreground">{ALLERGY_NOTE}</p>
          </div>
        </div>
      </main>
      <FaqSection />
      <Footer />
    </div>
  );
};

export default MenuGroup;
