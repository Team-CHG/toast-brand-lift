import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const GROUP_NAMES: Record<string, string> = { downtown: "Downtown Locations", suburbs: "Suburb Locations", savannah: "Savannah Location" };
interface Item { id: string; name: string; description: string | null; price: number | null; image_url: string | null; calories: number | null; allergens: string[] | null; category_name: string; category_slug: string; }

const MenuItemPage = () => {
  const { group, category, item: itemSlug } = useParams<{ group: string; category: string; item: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const groupName = group ? GROUP_NAMES[group] : undefined;

  useEffect(() => {
    if (!group || !category || !itemSlug || !groupName) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", group).maybeSingle();
      if (!g) { if (!cancelled) { setNotFound(true); setLoading(false); } return; }
      const { data: row } = await supabase.from("menu_items").select("id, name, description, price, image_url, calories, allergens, category:menu_categories!inner(name, slug)").eq("group_id", g.id).eq("slug", itemSlug).eq("is_active", true).eq("available_online", true).eq("is_86", false).maybeSingle();
      if (cancelled) return;
      const categoryData = row ? (row as any).category : null;
      if (!row || !categoryData || categoryData.slug !== category) { setNotFound(true); setLoading(false); return; }
      setItem({ id: row.id, name: row.name, description: row.description, price: row.price, image_url: row.image_url, calories: row.calories, allergens: row.allergens, category_name: categoryData.name, category_slug: categoryData.slug });
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [group, category, itemSlug, groupName]);

  useEffect(() => {
    if (!item || !group) return;
    const schema: Record<string, unknown> = { "@context": "https://schema.org", "@type": "MenuItem", name: item.name, description: item.description ?? undefined, image: item.image_url ?? undefined, url: `https://toastallday.com/menus/${group}/${item.category_slug}/${itemSlug}` };
    if (item.price != null) schema.offers = { "@type": "Offer", price: item.price.toFixed(2), priceCurrency: "USD" };
    if (item.calories != null) schema.nutrition = { "@type": "NutritionInformation", calories: `${item.calories} cal` };
    const tag = document.createElement("script"); tag.type = "application/ld+json"; tag.setAttribute("data-schema", "menu-item"); tag.textContent = JSON.stringify(schema); document.head.appendChild(tag);
    return () => { tag.remove(); };
  }, [item, group, itemSlug]);

  if (!group || !category || !itemSlug || !groupName) return <Navigate to="/" replace />;
  if (notFound) return <Navigate to={`/menus/${group}/${category}`} replace />;
  const title = item ? `${item.name} - ${groupName} Menu | Toast All Day` : "Menu Item | Toast All Day";
  const description = item ? item.description ?? `${item.name} from the Toast All Day ${groupName} menu.` : "";

  return (
    <div className="min-h-screen bg-complementary">
      <SEO title={title} description={description} image={item?.image_url ?? undefined} />
      <Navigation />
      <Breadcrumbs />
      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <article className="mx-auto max-w-3xl border border-border bg-card px-5 py-10 shadow-soft sm:px-9 md:px-14 md:py-14">
          {loading || !item ? (
            <div className="space-y-7"><div className="mx-auto aspect-square max-w-md animate-pulse bg-muted" /><div className="mx-auto h-10 w-2/3 animate-pulse bg-muted" /><div className="h-24 animate-pulse bg-muted" /></div>
          ) : (
            <>
              <header className="mb-8 text-center">
                <Link to={`/menus/${group}/${category}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight hover:underline">{item.category_name}</Link>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">{item.name}</h1>
                {item.price != null && <p className="mt-3 text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>}
                <div className="mx-auto mt-5 h-px w-20 bg-accent" />
              </header>
              <div className="mx-auto mb-8 flex aspect-[4/3] max-w-xl items-center justify-center overflow-hidden border border-border bg-muted">
                {item.image_url ? <LazyImage src={item.image_url} alt={item.name} className="h-full w-full object-cover" /> : <Utensils className="h-12 w-12 text-accent" aria-hidden="true" />}
              </div>
              {item.description && <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">{item.description}</p>}
              {(item.calories != null || (item.allergens && item.allergens.length > 0)) && <dl className="mx-auto mt-8 max-w-xl border-y border-border py-5 text-sm text-muted-foreground">{item.calories != null && <div className="flex justify-between gap-4"><dt>Calories</dt><dd>{item.calories}</dd></div>}{item.allergens && item.allergens.length > 0 && <div className="mt-2 flex justify-between gap-4"><dt>Allergens</dt><dd className="text-right">{item.allergens.join(", ")}</dd></div>}</dl>}
              <footer className="mt-9 text-center">
                <p className="mb-5 text-sm text-muted-foreground">Available at our <strong>{groupName}</strong>. Pricing and availability may vary.</p>
                <Button asChild variant="outline"><Link to={`/menus/${group}/${category}`}>Back to {item.category_name}</Link></Button>
              </footer>
            </>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MenuItemPage;