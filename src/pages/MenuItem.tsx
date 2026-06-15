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

interface Item {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  calories: number | null;
  allergens: string[] | null;
  category_name: string;
  category_slug: string;
}

const MenuItemPage = () => {
  const { group, category, item: itemSlug } = useParams<{
    group: string;
    category: string;
    item: string;
  }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const groupName = group ? GROUP_NAMES[group] : undefined;

  useEffect(() => {
    if (!group || !category || !itemSlug || !groupName) return;
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
      const { data: row } = await supabase
        .from("menu_items")
        .select(
          "id, name, description, price, image_url, calories, allergens, category:menu_categories!inner(name, slug)"
        )
        .eq("group_id", g.id)
        .eq("slug", itemSlug)
        .eq("is_active", true)
        .eq("available_online", true)
        .eq("is_86", false)
        .maybeSingle();
      if (cancelled) return;
      if (!row) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      const cat = (row as any).category;
      if (!cat || cat.slug !== category) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setItem({
        id: row.id,
        name: row.name,
        description: row.description,
        price: row.price,
        image_url: row.image_url,
        calories: row.calories,
        allergens: row.allergens,
        category_name: cat.name,
        category_slug: cat.slug,
      });
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [group, category, itemSlug, groupName]);

  // Product JSON-LD
  useEffect(() => {
    if (!item || !group) return;
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "MenuItem",
      name: item.name,
      description: item.description ?? undefined,
      image: item.image_url ?? undefined,
      url: `https://toastallday.com/menus/${group}/${item.category_slug}/${itemSlug}`,
    };
    if (item.price != null) {
      schema.offers = {
        "@type": "Offer",
        price: item.price.toFixed(2),
        priceCurrency: "USD",
      };
    }
    if (item.calories != null) {
      schema.nutrition = {
        "@type": "NutritionInformation",
        calories: `${item.calories} cal`,
      };
    }
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.setAttribute("data-schema", "menu-item");
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
    return () => {
      tag.remove();
    };
  }, [item, group, itemSlug]);

  if (!group || !category || !itemSlug || !groupName) {
    return <Navigate to="/" replace />;
  }
  if (notFound) return <Navigate to={`/menus/${group}/${category}`} replace />;

  const title = item
    ? `${item.name} — ${groupName} Menu | Toast All Day`
    : "Menu Item | Toast All Day";
  const description = item
    ? item.description ??
      `${item.name} from the Toast All Day ${groupName} menu. Fresh, locally-sourced breakfast, brunch, and lunch.`
    : "";

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        image={item?.image_url ?? undefined}
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      <section
        className="relative pt-24 pb-16 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${pageBackgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="container mx-auto relative z-10 max-w-5xl">
          {loading || !item ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square rounded-2xl bg-muted animate-pulse" />
              <div className="space-y-4">
                <div className="h-10 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-accent/10 bg-white/60">
                {item.image_url ? (
                  <div className="aspect-square">
                    <LazyImage
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/40 px-6 text-center">
                      {item.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md ring-1 ring-accent/10">
                <Link
                  to={`/menus/${group}/${category}`}
                  className="text-sm uppercase tracking-widest text-highlight hover:underline"
                >
                  {item.category_name}
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
                  {item.name}
                </h1>
                {item.price != null && (
                  <div className="text-2xl font-semibold text-highlight mb-4">
                    ${item.price.toFixed(2)}
                  </div>
                )}
                {item.description && (
                  <p className="text-base text-foreground/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                )}
                {item.calories != null && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.calories} calories
                  </p>
                )}
                {item.allergens && item.allergens.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Allergens: {item.allergens.join(", ")}
                  </p>
                )}
                <div className="mt-8 pt-6 border-t border-accent/10">
                  <p className="text-sm text-muted-foreground">
                    Available at our <strong>{groupName}</strong>. Pricing and
                    availability may vary.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuItemPage;