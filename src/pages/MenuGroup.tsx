import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import { supabase } from "@/integrations/supabase/client";
import pageBackgroundTexture from "@/assets/page-background-texture.avif";

const GROUP_META: Record<string, { name: string; description: string }> = {
  downtown: {
    name: "Downtown Locations Menu",
    description:
      "Browse the full Toast All Day menu for our Downtown locations — Toast! on Meeting and Toast! on King — including breakfast, brunch, and lunch favorites with fresh, locally-sourced ingredients.",
  },
  suburbs: {
    name: "Suburb Locations Menu",
    description:
      "Browse the full Toast All Day menu for our suburb locations — Toast! Mt. Pleasant, Toast! West Ashley, and Toast! Summerville — including breakfast, brunch, and lunch favorites.",
  },
  savannah: {
    name: "Savannah Location Menu",
    description:
      "Browse the full Toast All Day menu for our Savannah, GA location — breakfast, brunch, and lunch served fresh on Broughton Street.",
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
      const { data: g } = await supabase
        .from("menu_groups")
        .select("id")
        .eq("slug", group)
        .maybeSingle();
      if (!g) {
        if (!cancelled) {
          setCategories([]);
          setLoading(false);
        }
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
      const mapped: Category[] = (cats ?? [])
        .map((c: any) => ({
          id: c.id,
          slug: c.slug,
          name: c.name,
          description: c.description,
          image_url: c.image_url,
          item_count: Array.isArray(c.menu_items)
            ? c.menu_items.length
            : 0,
        }))
        .filter((c) => c.item_count > 0);
      setCategories(mapped);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [group, meta]);

  if (!group || !meta) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen">
      <SEO
        title={`${meta.name} | Toast All Day`}
        description={meta.description}
        keywords={`Toast All Day menu, ${group} menu, breakfast menu, brunch menu, lunch menu`}
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      <section
        className="relative pt-24 pb-12 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${pageBackgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {meta.name}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {meta.description}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : categories.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Menu is being updated. Please check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/menus/${group}/${cat.slug}`}
                  className="group block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md ring-1 ring-accent/10 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {cat.image_url ? (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <LazyImage
                        src={cat.image_url}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/40">
                        {cat.name}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-primary group-hover:text-highlight transition-colors">
                      {cat.name}
                    </h2>
                    {cat.description && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {cat.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-3">
                      {cat.item_count} item{cat.item_count === 1 ? "" : "s"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuGroup;