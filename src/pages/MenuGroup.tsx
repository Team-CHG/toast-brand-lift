import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import { supabase } from "@/integrations/supabase/client";

const GROUP_META: Record<string, { name: string; label: string; description: string }> = {
  downtown: {
    name: "Downtown Locations Menu",
    label: "Downtown Charleston",
    description: "Breakfast, brunch, and lunch favorites served at Toast! on Meeting and Toast! on King.",
  },
  suburbs: {
    name: "Suburb Locations Menu",
    label: "Charleston Suburbs",
    description: "Breakfast, brunch, and lunch favorites served in Mt. Pleasant, West Ashley, and Summerville.",
  },
  savannah: {
    name: "Savannah Location Menu",
    label: "Savannah",
    description: "Breakfast, brunch, and lunch favorites served fresh on Broughton Street.",
  },
};

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  items: MenuItem[];
}

interface MenuItem {
  id: string;
  category_id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
}

const MenuGroup = () => {
  const { group } = useParams<{ group: string }>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const meta = group ? GROUP_META[group] : undefined;

  useEffect(() => {
    if (!group || !meta) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setCategories([]);
      const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", group).maybeSingle();
      if (!g) {
        if (!cancelled) { setCategories([]); setLoading(false); }
        return;
      }
      const { data: cats } = await supabase
        .from("menu_categories")
        .select("id, slug, name, description")
        .eq("group_id", g.id)
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      const { data: items } = await supabase
        .from("menu_items")
        .select("id, category_id, slug, name, description, price, image_url")
        .eq("group_id", g.id)
        .eq("is_active", true)
        .eq("available_online", true)
        .eq("is_86", false)
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      const menuItems = (items ?? []) as MenuItem[];
      setCategories((cats ?? []).map((category) => ({
        id: category.id,
        slug: category.slug,
        name: category.name,
        description: category.description,
        items: menuItems.filter((item) => item.category_id === category.id),
      })).filter((category) => Array.isArray(category.items) && category.items.length > 0));
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [group, meta]);

  if (!group || !meta) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-complementary">
      <SEO title={`${meta.name} | Toast All Day`} description={meta.description} keywords={`Toast All Day menu, ${group} menu, breakfast menu, brunch menu, lunch menu`} />
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl overflow-hidden border border-border border-t-8 border-t-highlight bg-card shadow-soft">
          <header className="mx-5 px-1 pb-8 pt-10 text-center sm:mx-9 md:mx-14 md:pb-10 md:pt-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-highlight">{meta.label}</p>
            <h1 className="text-4xl font-bold uppercase leading-tight text-primary md:text-5xl">Toast! All Day</h1>
            <div className="mx-auto my-5 h-px w-20 bg-accent" />
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{meta.description}</p>
          </header>

          {categories.length > 0 && (
            <nav aria-label="Menu categories" className="mx-5 border-y border-border/60 bg-complementary/60 px-3 py-4 sm:mx-9 sm:px-4 md:mx-14 md:px-6">
              <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      document.getElementById(`category-section-${category.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="rounded-full border border-primary/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary transition-all duration-200 hover:border-highlight hover:bg-highlight hover:text-highlight-foreground active:scale-95 md:px-4"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </nav>
          )}

          <div className="px-5 py-12 sm:px-9 md:px-14 md:py-16">
            {loading ? (
              <div className="space-y-14" aria-label="Loading menu">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="space-y-5">
                    <div className="mx-auto h-8 w-48 animate-pulse bg-muted" />
                    <div className="h-28 animate-pulse bg-muted/50" />
                    <div className="h-28 animate-pulse bg-muted/50" />
                  </div>
                ))}
              </div>
            ) : categories.length === 0 ? (
              <p className="py-16 text-center text-muted-foreground">Menu is being updated. Please check back soon.</p>
            ) : (
              <div className="space-y-16 md:space-y-20">
                {categories.map((category) => (
                  <section key={category.id} aria-labelledby={`category-${category.id}`}>
                    <div className="relative mb-7 flex items-center justify-center md:mb-10">
                      <div className="absolute inset-x-0 h-px bg-border" aria-hidden="true" />
                      <h2 id={`category-${category.id}`} className="relative bg-card px-4 text-center text-xl font-bold uppercase text-primary sm:px-6 md:text-2xl">
                        {category.name}
                      </h2>
                    </div>
                    {category.description && <p className="mx-auto -mt-4 mb-7 max-w-xl text-center text-sm leading-relaxed text-muted-foreground md:-mt-6 md:mb-9">{category.description}</p>}
                    <div className="divide-y divide-border">
                      {(category.items ?? []).map((item) => (
                        <Link key={item.id} to={`/menus/${group}/${category.slug}/${item.slug}`} className="group flex min-h-24 gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-28 sm:gap-6 sm:py-6">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-complementary bg-muted transition-colors duration-300 group-hover:border-highlight sm:h-24 sm:w-24">
                            {item.image_url ? <LazyImage src={item.image_url} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> : <Utensils className="h-6 w-6 text-accent sm:h-7 sm:w-7" aria-hidden="true" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="text-base font-bold uppercase leading-snug text-primary transition-colors group-hover:text-highlight sm:text-lg">{item.name}</h3>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuGroup;