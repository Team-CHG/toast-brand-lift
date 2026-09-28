import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";
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
  image_url: string | null;
  item_count: number;
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
      const { data: g } = await supabase.from("menu_groups").select("id").eq("slug", group).maybeSingle();
      if (!g) {
        if (!cancelled) { setCategories([]); setLoading(false); }
        return;
      }
      const { data: cats } = await supabase
        .from("menu_categories")
        .select("id, slug, name, description, image_url, menu_items!inner(id)")
        .eq("group_id", g.id)
        .eq("is_active", true)
        .eq("menu_items.is_active", true)
        .eq("menu_items.available_online", true)
        .eq("menu_items.is_86", false)
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      setCategories((cats ?? []).map((category: any) => ({
        id: category.id,
        slug: category.slug,
        name: category.name,
        description: category.description,
        image_url: category.image_url,
        item_count: Array.isArray(category.menu_items) ? category.menu_items.length : 0,
      })).filter((category) => category.item_count > 0));
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
        <div className="mx-auto max-w-3xl border border-border bg-card px-5 py-10 shadow-soft sm:px-9 md:px-14 md:py-14">
          <header className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-highlight">{meta.label}</p>
            <h1 className="text-4xl font-bold uppercase leading-tight text-primary md:text-5xl">Toast! All Day</h1>
            <div className="mx-auto my-5 h-px w-20 bg-accent" />
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{meta.description}</p>
          </header>

          <section aria-labelledby="menu-categories">
            <h2 id="menu-categories" className="mb-2 border-b border-border pb-3 text-2xl font-bold text-primary md:text-3xl">Choose a category</h2>
            {loading ? (
              <div className="divide-y divide-border" aria-label="Loading menu categories">
                {Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-28 animate-pulse bg-muted/50" />)}
              </div>
            ) : categories.length === 0 ? (
              <p className="py-16 text-center text-muted-foreground">Menu is being updated. Please check back soon.</p>
            ) : (
              <div className="divide-y divide-border">
                {categories.map((category) => (
                  <Link key={category.id} to={`/menus/${group}/${category.slug}`} className="group flex min-h-28 items-center gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted sm:h-24 sm:w-24">
                      {category.image_url ? <LazyImage src={category.image_url} alt={category.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> : <Utensils className="h-7 w-7 text-accent" aria-hidden="true" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-highlight md:text-xl">{category.name}</h3>
                        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-highlight transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{category.description ?? `${category.item_count} ${category.item_count === 1 ? "item" : "items"}`}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuGroup;