import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import { supabase } from "@/integrations/supabase/client";

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

  const hero = categories[0];
  const sideTall = categories[1];
  const trio = categories.slice(2, 5);
  const rest = categories.slice(5);

  const cardBase =
    "group relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-accent/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500";

  const renderImage = (src: string | null, alt: string, className = "") =>
    src ? (
      <div className="absolute inset-0 [&>div]:w-full [&>div]:h-full [&_picture]:w-full [&_picture]:h-full [&_picture]:block">
        <LazyImage
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
        />
      </div>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/80 to-primary/70" />
    );

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

      <section className="relative pt-28 pb-16 px-4 overflow-hidden bg-complementary">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-highlight/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <span className="uppercase tracking-[0.3em] text-accent font-bold text-xs mb-4 block">
            Menu Index
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.05]">
            {meta.name.replace(/ Menu$/, "")}{" "}
            <span className="text-highlight italic">Menu</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {meta.description}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-16 bg-highlight rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-complementary">
        <div className="container mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 h-[400px] rounded-[2rem] bg-muted animate-pulse" />
              <div className="md:col-span-4 h-[400px] rounded-[2rem] bg-muted animate-pulse" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="md:col-span-4 h-[320px] rounded-[2rem] bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : categories.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">
              Menu is being updated. Please check back soon.
            </p>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Hero featured */}
              {hero && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="md:col-span-8"
                >
                  <Link
                    to={`/menus/${group}/${hero.slug}`}
                    className={`${cardBase} block h-[400px] bg-card`}
                  >
                    {renderImage(hero.image_url, hero.name)}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <span className="bg-highlight text-highlight-foreground px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block backdrop-blur-md bg-white/15 border border-white/30 px-7 py-5 rounded-2xl text-primary-foreground shadow-2xl max-w-md">
                        <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">
                          {hero.name}
                        </h2>
                        <p className="text-sm opacity-90">
                          {hero.description ??
                            `${hero.item_count} signature ${
                              hero.item_count === 1 ? "dish" : "dishes"
                            }`}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Side tall */}
              {sideTall && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="md:col-span-4"
                >
                  <Link
                    to={`/menus/${group}/${sideTall.slug}`}
                    className={`${cardBase} block h-[400px] bg-card`}
                  >
                    {renderImage(sideTall.image_url, sideTall.name)}
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <div className="backdrop-blur-md bg-white/15 border border-white/30 w-full py-7 px-4 rounded-2xl text-primary-foreground">
                        <h2 className="text-2xl font-bold">{sideTall.name}</h2>
                        <p className="text-xs uppercase tracking-[0.2em] mt-2 opacity-80">
                          {sideTall.item_count} item
                          {sideTall.item_count === 1 ? "" : "s"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Trio of medium cards */}
              {trio.map((cat, i) => {
                const variant = i % 3;
                return (
                  <motion.div
                    key={cat.id}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="md:col-span-4"
                  >
                    <Link
                      to={`/menus/${group}/${cat.slug}`}
                      className={`${cardBase} block h-[320px] bg-card`}
                    >
                      {variant === 1 && !cat.image_url ? (
                        // Brand-tile typographic card
                        <>
                          <div className="absolute inset-0 bg-accent" />
                          <div className="absolute top-0 right-0 p-6 opacity-15">
                            <Utensils className="w-28 h-28 text-accent-foreground rotate-12" />
                          </div>
                          <div className="relative z-10 p-8 h-full flex flex-col justify-end text-accent-foreground">
                            <h2 className="text-3xl font-bold leading-tight">
                              {cat.name}
                            </h2>
                            <p className="mt-2 text-sm opacity-80">
                              {cat.item_count} item
                              {cat.item_count === 1 ? "" : "s"}
                            </p>
                          </div>
                        </>
                      ) : variant === 2 ? (
                        <>
                          {renderImage(cat.image_url, cat.name)}
                          <div className="absolute inset-x-0 bottom-0 bg-card/95 backdrop-blur-md p-5 border-t border-accent/10">
                            <div className="flex justify-between items-center gap-3">
                              <div>
                                <h2 className="text-lg font-bold text-primary">
                                  {cat.name}
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                  {cat.item_count} item
                                  {cat.item_count === 1 ? "" : "s"}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-highlight shrink-0 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {renderImage(cat.image_url, cat.name)}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/85" />
                          <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
                            <h2 className="text-xl font-bold">{cat.name}</h2>
                            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                              {cat.item_count} item
                              {cat.item_count === 1 ? "" : "s"}
                            </span>
                          </div>
                        </>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Remaining categories: compact icon-style cards */}
              {rest.length > 0 && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-5"
                >
                  {rest.map((cat, i) => {
                    const isRed = i % 4 === 3;
                    return (
                      <Link
                        key={cat.id}
                        to={`/menus/${group}/${cat.slug}`}
                        className={`group rounded-[1.5rem] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-4 ring-1 ${
                          isRed
                            ? "bg-highlight text-highlight-foreground ring-highlight/40"
                            : "bg-card ring-accent/15"
                        }`}
                      >
                        <div
                          className={`w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center relative ${
                            isRed ? "bg-white/20" : "bg-complementary"
                          }`}
                        >
                          {cat.image_url ? (
                            <div className="absolute inset-0 [&>div]:w-full [&>div]:h-full [&_picture]:block [&_picture]:w-full [&_picture]:h-full">
                              <LazyImage
                                src={cat.image_url}
                                alt={cat.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <Utensils
                              className={`w-6 h-6 ${
                                isRed ? "text-white" : "text-accent"
                              }`}
                            />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`font-bold truncate ${
                              isRed ? "text-white" : "text-primary"
                            }`}
                          >
                            {cat.name}
                          </h3>
                          <p
                            className={`text-xs ${
                              isRed
                                ? "text-white/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {cat.item_count} item
                            {cat.item_count === 1 ? "" : "s"}
                          </p>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                            isRed ? "text-white" : "text-highlight"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuGroup;