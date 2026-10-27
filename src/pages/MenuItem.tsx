import { Link } from "@/lib/router-compat";
import { Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import JsonLd from "@/components/JsonLd";
import MenuTags from "@/components/MenuTags";
import MenuLocations from "@/components/MenuLocations";
import { Button } from "@/components/ui/button";
import { MENU_GROUPS } from "@/lib/locations";
import { itemPageNode, priceText, type MenuData, type MenuItemData, type MenuSectionData } from "@/lib/menu";

const MenuItemPage = ({ menu, section, item }: { menu: MenuData; section: MenuSectionData; item: MenuItemData }) => {
  const { group } = menu;
  const meta = MENU_GROUPS[group];
  const title = `${item.name}${item.price != null ? ` – ${priceText(item.price)}` : ""} | ${meta.menuName} | Toast! All Day`;
  const description =
    item.description ?? `${item.name} from the ${section.name} section of the ${meta.menuName} at Toast! All Day.`;

  return (
    <div className="min-h-screen bg-complementary">
      <SEO title={title} description={description} image={item.image_url ?? undefined} />
      <JsonLd data={itemPageNode(group, section, item)} />
      <Navigation />
      <Breadcrumbs
        labels={{
          [`/menus/${group}/${section.slug}`]: section.name,
          [`/menus/${group}/${section.slug}/${item.slug}`]: item.name,
        }}
      />
      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <article className="mx-auto max-w-3xl border border-border bg-card px-5 py-10 shadow-soft sm:px-9 md:px-14 md:py-14">
          <header className="mb-8 text-center">
            <Link to={`/menus/${group}/${section.slug}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight hover:underline">{section.name}</Link>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">
              {item.name}
              <MenuTags item={item} />
            </h1>
            {item.price != null && <p className="mt-3 text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>}
            <div className="mx-auto mt-5 h-px w-20 bg-accent" />
          </header>
          <div className="mx-auto mb-8 flex aspect-[4/3] max-w-xl items-center justify-center overflow-hidden border border-border bg-muted">
            {item.image_url ? <LazyImage src={item.image_url} alt={item.name} className="h-full w-full object-cover" /> : <Utensils className="h-12 w-12 text-accent" aria-hidden="true" />}
          </div>
          {item.description && <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">{item.description}</p>}
          {(item.calories != null || (item.allergens && item.allergens.length > 0)) && (
            <dl className="mx-auto mt-8 max-w-xl border-y border-border py-5 text-sm text-muted-foreground">
              {item.calories != null && <div className="flex justify-between gap-4"><dt>Calories</dt><dd>{item.calories}</dd></div>}
              {item.allergens && item.allergens.length > 0 && <div className="mt-2 flex justify-between gap-4"><dt>Allergens</dt><dd className="text-right">{item.allergens.join(", ")}</dd></div>}
            </dl>
          )}
          <footer className="mt-9 text-center">
            <p className="mb-2 text-sm text-muted-foreground">Available at our <strong>{meta.label}</strong> locations. Pricing and availability may vary.</p>
            <MenuLocations group={group} />
            <div className="mt-5">
              <Button asChild variant="outline"><Link to={`/menus/${group}`}>Back to {meta.label} Menu</Link></Button>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MenuItemPage;
