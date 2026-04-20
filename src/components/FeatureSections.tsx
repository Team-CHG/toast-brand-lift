import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Search, Mail, Star, Sparkles, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import MenuCarousel from "@/components/MenuCarousel";

// Lazy-load heavy images only when needed
const menuImage2 = new URL("@/assets/food-slide-2-new.jpg", import.meta.url).href;
const awardRestaurantGuru = new URL("@/assets/award-restaurant-guru.png", import.meta.url).href;
const awardTripadvisor = new URL("@/assets/award-tripadvisor.jpg", import.meta.url).href;
const giftcardDesign = new URL("@/assets/giftcard-design.png", import.meta.url).href;
const pageBackgroundTexture = new URL("@/assets/page-background-texture.png", import.meta.url).href;
const newsletterCelebrationBg = new URL("@/assets/newsletter-celebration-bg.png", import.meta.url).href;
const flourishDecoration = new URL("@/assets/flourish-decoration.png", import.meta.url).href;
const homeBackground3 = new URL("@/assets/home-background-3.avif", import.meta.url).href;

// Lazy video component — only loads video src when in viewport
const LazyVideo = ({ src, className }: { src: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="w-full h-full bg-muted animate-pulse" />
      )}
    </div>
  );
};

const qualities = [
  { number: "Top 1%", label: "TripAdvisor Worldwide" },
  { number: "Since 2005", label: "Serving Excellence" },
  { number: "7", label: "Locations & Growing" },
  { number: "Top 25", label: "Best Brunches in U.S." },
];

const FeatureSections = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const awardsRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const reviewsInView = useInView(reviewsRef, { once: true, margin: "100px" });

  const { scrollYProgress: awardsScroll } = useScroll({
    target: awardsRef,
    offset: ["start end", "end start"],
  });
  const awardsBgY = useTransform(awardsScroll, [0, 1], [0, -100]);

  const { scrollYProgress: menuScroll } = useScroll({
    target: menuRef,
    offset: ["start end", "end start"],
  });
  const menuBgY = useTransform(menuScroll, [0, 1], [50, -50]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  // Throttled mouse move handler
  const lastMove = useRef(0);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMove.current < 50) return; // throttle to ~20fps
    lastMove.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  return (
    <>
      {/* ═══════════════ QUALITIES RIBBON - GLASS OVERLAY ON HERO ═══════════════ */}
      <section className="relative z-20 -mt-16 md:-mt-32 pb-8 md:pb-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/40 py-5 md:py-10 px-4 md:px-12 ring-1 ring-accent/10">
            <StaggerContainer className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-16">
              {qualities.map((q, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="flex flex-col items-center gap-1 group cursor-default"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl md:text-3xl font-bold text-accent group-hover:text-highlight transition-colors">{q.number}</span>
                    <span className="text-primary/70 font-medium text-[10px] md:text-sm tracking-wide uppercase">
                      {q.label}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            {/* Red accent line */}
            <div className="mt-4 md:mt-6 mx-auto w-16 md:w-24 h-1 bg-gradient-to-r from-highlight via-accent to-highlight rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════ AWARDS SECTION ═══════════════ */}
      <section
        ref={awardsRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
        onMouseMove={handleMouseMove}
      >
        {/* Parallax decorative elements */}
        <FloatingElement className="absolute top-12 right-12 opacity-20 hidden lg:block" delay={0} distance={20}>
          <img src={flourishDecoration} alt="" aria-hidden className="w-48 h-auto" loading="lazy" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-12 left-12 opacity-15 hidden lg:block rotate-180" delay={2} distance={15}>
          <img src={flourishDecoration} alt="" aria-hidden className="w-36 h-auto" loading="lazy" />
        </FloatingElement>

        {/* Animated background gradient — hidden on mobile for performance */}
        <motion.div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{ y: awardsBgY }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px]" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Food Slideshow with tilt effect */}
            <ScrollReveal direction="left" className="order-1">
              <motion.div
                className="relative"
                style={{
                  rotateY: mousePosition.x * 5,
                  rotateX: -mousePosition.y * 5,
                  transformPerspective: 1200,
                }}
              >
                <div className="relative h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl shadow-2xl overflow-hidden ring-1 ring-accent/20">
                  <LazyVideo src={new URL("@/assets/awards-video.mp4", import.meta.url).href} className="w-full h-full" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating laurel wreath badge */}
                <FloatingElement
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-20"
                  distance={8}
                  duration={4}
                >
                  <div className="bg-accent text-white rounded-2xl px-5 py-4 shadow-xl text-center">
                    <span className="block text-2xl md:text-3xl font-extrabold leading-none">Top 1%</span>
                    <span className="block text-xs md:text-sm font-medium mt-1 uppercase tracking-wider opacity-90">Worldwide</span>
                  </div>
                </FloatingElement>
              </motion.div>
            </ScrollReveal>

            {/* Text content */}
            <ScrollReveal direction="right" delay={0.2} className="order-2">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-highlight/10 border border-highlight/20">
                <Sparkles className="w-4 h-4 text-highlight" />
                <span className="text-highlight text-sm font-medium tracking-wide uppercase">Award-Winning</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
                A Toast to <br className="hidden md:block" />
                <span className="italic text-accent">Awards</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg">
                Thanks to our customers, Toast! All Day has been awarded the 2023 Top 25 Best Brunches in the U.S. by TripAdvisor! We are proud to be included in their Travelers' Choice "Best of the Best," which is only awarded to the top 1% best reviews worldwide!
              </p>
              <p className="hidden md:block text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                From our signature french toast to perfectly poached eggs, every plate tells a story of quality, passion, and dedication to the art of breakfast.
              </p>

              <motion.div className="flex items-center gap-6 mb-8">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  src={awardRestaurantGuru}
                  alt="Restaurant Guru 2020 Award"
                  className="h-16 md:h-20 w-auto object-contain cursor-pointer"
                  loading="lazy"
                />
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  src={awardTripadvisor}
                  alt="TripAdvisor Travelers Choice 2021"
                  className="h-16 md:h-20 w-auto object-contain rounded-md cursor-pointer"
                  loading="lazy"
                />
              </motion.div>

              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 hover:scale-105 transition-all shadow-lg"
              >
                <a href="/about">Discover Our Story</a>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ MENU SECTION ═══════════════ */}
      <section
        ref={menuRef}
        id="menu"
        className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-accent via-accent/90 to-accent/80"
      >
        {/* Parallax pattern */}
        <motion.div className="absolute inset-0 opacity-5" style={{ y: menuBgY }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, hsl(0 0% 100% / 0.1) 40px, hsl(0 0% 100% / 0.1) 42px)",
          }} />
        </motion.div>

        {/* Red accent blob */}
        <div className="absolute top-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-highlight/15 rounded-full blur-[80px] md:blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="text-white/80 text-sm tracking-widest uppercase">Explore</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our Menu
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From classic breakfast favorites to innovative brunch creations, our menu celebrates the art of morning dining.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <StaggerItem>
              <motion.article
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    alt="Toast All Day chef preparing fresh gourmet breakfast dishes"
                    className="w-full h-72 object-cover"
                    src="/lovable-uploads/82d1d24f-7f8c-4d59-a4bd-06ba2cb769ad.png"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">Chef's Specials</h3>
                  <p className="text-white/60 mb-6">
                    Rotating seasonal dishes crafted by our culinary team featuring the finest local ingredients.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-full border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <a href="/locations">Order Online</a>
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
            <StaggerItem>
              <motion.article
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={menuImage2}
                    alt="Full bar selection with craft cocktails and mimosas"
                    className="w-full h-72 object-cover"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">Full Bar & Cocktails</h3>
                  <p className="text-white/60 mb-6">
                    Hand-crafted cocktails, mimosas, and brunch beverages to complement your meal perfectly.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-full border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <a href="/locations">Order Online</a>
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <MenuCarousel showHeader={false} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ GIFT CARDS SECTION ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <CreditCard className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide uppercase">Gift Cards</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
                Share the Food <br className="hidden md:block" />
                <span className="italic text-highlight">You Love</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date.
              </p>
              {/* Mother's Day promo banner */}
              <div className="block mb-6 rounded-2xl bg-gradient-to-r from-highlight to-accent p-[2px] shadow-lg max-w-lg">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-5 py-4">
                  <Sparkles className="w-5 h-5 text-highlight flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-primary leading-tight">Mother's Day Gift Cards</p>
                    <p className="text-xs text-muted-foreground">The perfect gift for Mom — use the buttons below to shop or check a balance.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full px-8 hover:scale-105 transition-all shadow-lg"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Buy e-Gift Card
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-card z-50">
                    {[
                      { name: "Meeting St", url: "https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" },
                      { name: "King St", url: "https://order.toasttab.com/egiftcards/toast-king-st-451-king-st" },
                      { name: "Summerville", url: "https://order.toasttab.com/egiftcards/toast-summerville-717-old-trolley-road" },
                      { name: "West Ashley", url: "https://order.toasttab.com/egiftcards/toast-west-ashley-2026-savannah-hwy-tvrci" },
                      { name: "Mt Pleasant", url: "https://order.toasttab.com/egiftcards/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g" },
                      { name: "Savannah", url: "https://order.toasttab.com/egiftcards/toast-savannah-1-w-broughton-st" },
                    ].map((loc) => (
                      <DropdownMenuItem key={loc.name} asChild>
                        <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          {loc.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 hover:scale-105 transition-all"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      Check Balance
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-card z-50">
                    {[
                      { name: "Meeting St", url: "https://www.toasttab.com/toast-charleston-155-meeting-st/findcard" },
                      { name: "King St", url: "https://www.toasttab.com/toast-king-st-451-king-st/findcard" },
                      { name: "Summerville", url: "https://www.toasttab.com/toast-summerville-717-old-trolley-road/findcard" },
                      { name: "West Ashley", url: "https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/findcard" },
                      { name: "Mt Pleasant", url: "https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/findcard" },
                      { name: "Savannah", url: "https://www.toasttab.com/toast-savannah-1-w-broughton-st/findcard" },
                    ].map((loc) => (
                      <DropdownMenuItem key={loc.name} asChild>
                        <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          {loc.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <motion.div
                className="flex justify-center"
                whileHover={{ rotate: 2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative">
                  <img
                    src={giftcardDesign}
                    alt="Charleston Hospitality Group Gift Card"
                    className="rounded-3xl shadow-2xl max-w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ REVIEWS SECTION ═══════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-highlight/5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
          style={{ backgroundImage: `url(${homeBackground3})` }}
        />
        <FloatingElement className="absolute top-20 left-10 opacity-10 hidden lg:block" delay={1}>
          <Star className="w-16 h-16 text-highlight fill-highlight" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-20 opacity-10 hidden lg:block" delay={3} distance={20}>
          <Star className="w-12 h-12 text-accent fill-accent" />
        </FloatingElement>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-highlight/10 border border-highlight/20">
              <Star className="w-4 h-4 text-highlight fill-highlight" />
              <span className="text-highlight text-sm font-medium tracking-wide uppercase">Reviews</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why breakfast lovers keep coming back to Toast All Day.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div ref={reviewsRef} className="w-full max-w-7xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden ring-1 ring-accent/10">
              {reviewsInView ? (
                <iframe
                  className="lc_reviews_widget"
                  src="https://reputationhub.site/reputation/widgets/review_widget/Uz6YkC2Cqk92rFC2504Q?widgetId=695d4e89b6efb8608acba4e1"
                  frameBorder="0"
                  scrolling="no"
                  loading="lazy"
                  style={{ minWidth: "100%", width: "100%", minHeight: "600px" }}
                />
              ) : (
                <div style={{ minHeight: "600px" }} className="flex items-center justify-center">
                  <p className="text-muted-foreground">Loading reviews...</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ NEWSLETTER CTA ═══════════════ */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          background: `url(${newsletterCelebrationBg}) top center / contain no-repeat, url(${pageBackgroundTexture}) center / cover`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        {/* Diagonal red accent */}
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[300px] bg-highlight/5 rounded-full blur-[100px] rotate-12" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <FloatingElement distance={5} duration={8}>
              <Sparkles className="w-8 h-8 text-highlight mx-auto mb-6" />
            </FloatingElement>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Never Miss Out on
              <br />
              <span className="italic text-highlight">A Celebration!</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
              Join our community and be the first to know about exclusive offers, new menu items, and special events.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Button
                size="lg"
                asChild
                className="bg-highlight hover:bg-highlight/90 text-highlight-foreground text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-full shadow-xl w-full sm:w-auto text-center"
              >
                <a
                  href="https://www.toasttab.com/toast-charleston-155-meeting-st/marketing-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Sign Up For Exclusive News & Offers
                </a>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default FeatureSections;
