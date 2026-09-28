import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuItemThumb from "@/components/MenuItemThumb";
import { supabase } from "@/integrations/supabase/client";

const GROUP_NAMES: Record<string, string> = { downtown: "Downtown Locations", suburbs: "Suburb Locations", savannah: "Savannah Location" };
interface MenuItem { id: string; slug: string; name: string; description: string | null; price: number | null; image_url: string | null; }
interface Category { id: string; name: string; description: string | null; image_url: string | null; }

const MenuCategory = () => {
  const { group, category } = useParams<{ group: string; category: string }>();
  const [cat, setCat] = useState<Category | null>(null);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const groupName = group ? GROUP_NAMES[group] : undefined;

  useEffect(() => {
    if (!group || !category || !groupName) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", group).maybeSingle();
      if (!g) { if (!cancelled) { setNotFound(true); setLoading(false); } return; }
      const { data: c } = await supabase.from("menu_categories").select("id, name, description, image_url").eq("group_id", g.id).eq("slug", category).eq("is_active", true).maybeSingle();
      if (!c) { if (!cancelled) { setNotFound(true); setLoading(false); } return; }
      const { data: rows } = await supabase.from("menu_items").select("id, slug, name, description, price, image_url").eq("category_id", c.id).eq("is_active", true).eq("available_online", true).eq("is_86", false).order("sort_order", { ascending: true });
      if (cancelled) return;
      setCat(c as Category); setItems((rows ?? []) as MenuItem[]); setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [group, category, groupName]);

  if (!group || !category || !groupName) return <Navigate to="/" replace />;
  if (notFound) return <Navigate to={`/menus/${group}`} replace />;
  const title = cat ? `${cat.name} - ${groupName} Menu | Toast All Day` : "Menu | Toast All Day";
  const description = cat ? cat.description ?? `Browse ${cat.name.toLowerCase()} on the Toast All Day ${groupName} menu.` : "";

  return (
    <div className="min-h-screen bg-complementary">
      <SEO title={title} description={description} />
      <Navigation />
      <Breadcrumbs />
      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl border border-border bg-card px-5 py-10 shadow-soft sm:px-9 md:px-14 md:py-14">
          <header className="mb-10 text-center md:mb-14">
            <Link to={`/menus/${group}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-highlight hover:underline">{groupName}</Link>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">{cat?.name ?? "Loading..."}</h1>
            <div className="mx-auto my-5 h-px w-20 bg-accent" />
            {cat?.description && <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{cat.description}</p>}
          </header>

          {loading ? (
            <div className="divide-y divide-border">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-32 animate-pulse bg-muted/50" />)}</div>
          ) : items.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">No items currently available in this category.</p>
          ) : (
            <section aria-label={`${cat?.name ?? "Menu"} items`} className="divide-y divide-border border-t border-border">
              {items.map((item) => (
                <Link key={item.id} to={`/menus/${group}/${category}/${item.slug}`} className="group flex min-h-28 gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-5">
                  <MenuItemThumb src={item.image_url} alt={item.name} className="h-20 w-20 sm:h-24 sm:w-24" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-highlight md:text-xl">{item.name}</h2>
                      {item.price != null && <span className="shrink-0 text-sm font-semibold text-primary md:text-base">${item.price.toFixed(2)}</span>}
                    </div>
                    {item.description && <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
                  </div>
                </Link>
              ))}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuCategory;