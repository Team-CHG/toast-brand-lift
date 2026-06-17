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

const GROUP_NAMES: Record<string, string> = {
  downtown: "Downtown Locations",
  suburbs: "Suburb Locations",
  savannah: "Savannah Location",
};

interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

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
      const { data: g } = await supabase
        .from("menu_groups")
        .select("id")
        .eq("slug", group)
        .maybeSingle();
      if (!g) {
        if (!cancelled) {
          setNotFound(true);
          setLoading(false);
        }
        return;
      }
      const { data: c } = await supabase
        .from("menu_categories")
        .select("id, name, description, image_url")
        .eq("group_id", g.id)
        .eq("slug", category)
        .eq("is_active", true)
        .maybeSingle();
      if (!c) {
        if (!cancelled) {
          setNotFound(true);
          setLoading(false);
        }
        return;
      }
      const { data: rows } = await supabase
        .from("menu_items")
        .select("id, slug, name, description, price, image_url")
        .eq("category_id", c.id)
        .eq("is_active", true)
        .eq("available_online", true)
        .eq("is_86", false)
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      setCat(c as Category);
      setItems((rows ?? []) as MenuItem[]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [group, category, groupName]);

  if (!group || !category || !groupName) return <Navigate to="/" replace />;
  if (notFound) return <Navigate to={`/menus/${group}`} replace />;

  const title = cat
    ? `${cat.name} - ${groupName} Menu | Toast All Day`
    : "Menu | Toast All Day";
  const description = cat
    ? cat.description ??
      `Browse ${cat.name.toLowerCase()} on the Toast All Day ${groupName} menu - fresh, locally-sourced breakfast, brunch, and lunch.`
    : "";

  return (
    <div className="min-h-screen">
      <SEO title={title} description={description} />
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
          <p className="text-sm uppercase tracking-widest text-highlight mb-3">
            {groupName}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {cat?.name ?? "Loading..."}
          </h1>
          {cat?.description && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {cat.description}
            </p>
          )}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-72 rounded-2xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : items.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No items currently available in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <Link
                  key={item.id}
                  to={`/menus/${group}/${category}/${item.slug}`}
                  className="group block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md ring-1 ring-accent/10 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {item.image_url ? (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <LazyImage
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-highlight/20" />
                  )}
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-3">
                      <h2 className="text-lg font-bold text-primary group-hover:text-highlight transition-colors">
                        {item.name}
                      </h2>
                      {item.price != null && (
                        <span className="text-base font-semibold text-highlight whitespace-nowrap">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    )}
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

export default MenuCategory;