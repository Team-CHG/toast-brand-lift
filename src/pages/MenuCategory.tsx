import { Link } from "@/lib/router-compat";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuItemRow from "@/components/MenuItemRow";
import MenuFooterNotes from "@/components/MenuFooterNotes";
import JsonLd from "@/components/JsonLd";
import { MENU_GROUPS } from "@/lib/locations";
import { categoryDescription, menuNode, type MenuData, type MenuSectionData } from "@/lib/menu";

const MenuCategory = ({ menu, section }: { menu: MenuData; section: MenuSectionData }) => {
  const { group } = menu;
  const meta = MENU_GROUPS[group];
  const description = section.description?.trim() || categoryDescription(group, section);

  return (
    <div className="min-h-screen bg-complementary">
      <SEO title={`${section.name} | ${meta.menuName} | Toast! All Day`} description={description} />
      <JsonLd data={menuNode(menu, section)} />
      <Navigation />
      <Breadcrumbs labels={{ [`/menus/${group}/${section.slug}`]: section.name }} />
      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl border border-border bg-card px-5 py-10 shadow-soft sm:px-9 md:px-14 md:py-14">
          <header className="mb-10 text-center md:mb-14">
            <Link to={`/menus/${group}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight hover:underline">{meta.label}</Link>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">{section.name}</h1>
            <div className="mx-auto my-5 h-px w-20 bg-accent" />
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
          </header>

          <ul aria-label={`${section.name} items`} className="menu-items divide-y divide-border border-t border-border">
            {section.items.map((item) => (
              <MenuItemRow
                key={item.id}
                item={item}
                as="h2"
                href={`/menus/${group}/${section.slug}/${item.slug}`}
                thumbClassName="h-20 w-20 sm:h-24 sm:w-24"
                nameClassName="text-lg font-bold leading-snug md:text-xl"
                priceClassName="text-sm font-semibold text-primary md:text-base"
              />
            ))}
          </ul>
          <MenuFooterNotes printed={menu.printed} />
          <p className="mt-4 text-center text-sm">
            <Link to={`/menus/${group}`} className="font-semibold text-highlight hover:underline">Back to the full {meta.label} menu</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuCategory;
