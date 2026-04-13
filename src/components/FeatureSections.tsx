import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import awardsSlide1 from "@/assets/awards-slide-1.avif";
import awardsSlide2 from "@/assets/awards-slide-2.avif";
import awardsSlide3 from "@/assets/awards-slide-4.avif";
import awardsSlide4 from "@/assets/awards-slide-5.avif";
import awardsSlide5 from "@/assets/awards-slide-6.avif";
import menuImage2 from "@/assets/food-slide-2-new.jpg";
import awardRestaurantGuru from "@/assets/award-restaurant-guru.png";
import awardTripadvisor from "@/assets/award-tripadvisor.jpg";
import giftcardDesign from "@/assets/giftcard-design.png";
import homeBackground3 from "@/assets/home-background-3.avif";
import newsletterCelebrationBg from "@/assets/newsletter-celebration-bg.png";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import flourishDecoration from "@/assets/flourish-decoration.png";
import laurelWreath from "@/assets/laurel-wreath.png";

import { Button } from "@/components/ui/button";
import { CreditCard, Search, Mail, Star, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParallaxLayer from "@/components/animations/ParallaxLayer";
import FloatingElement from "@/components/animations/FloatingElement";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import MenuCarousel from "@/components/MenuCarousel";

const foodSlides = [awardsSlide1, awardsSlide2, awardsSlide3, awardsSlide4, awardsSlide5];

const qualities = [
  { icon: "🌿", label: "Fresh Daily" },
  { icon: "🏆", label: "Award Winning" },
  { icon: "📍", label: "Locally Sourced" },
  { icon: "🥂", label: "Full Bar" },
];

const FeatureSections = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const awardsRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <>
      {/* ═══════════════ QUALITIES RIBBON ═══════════════ */}
      <section className="relative py-10 md:py-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.2) 0%, transparent 50%)",
          }} />
        </div>
        <StaggerContainer className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {qualities.map((q, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex items-center gap-3 group cursor-default"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform">{q.icon}</span>
                  <span className="text-primary-foreground font-medium text-base md:text-lg tracking-wide">
                    {q.label}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
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

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: awardsBgY }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-complementary/30 rounded-full blur-[100px]" />
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
                  <div ref={emblaRef} className="overflow-hidden h-full">
                    <div className="flex h-full">
                      {foodSlides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                          <img
                            src={slide}
                            alt={`Delicious breakfast dish featuring Toast All Day signature menu item ${index + 1}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Elegant gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Indicators */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    {foodSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === selectedIndex
                            ? "w-10 bg-white"
                            : "w-3 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating laurel wreath badge */}
                <FloatingElement
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-20"
                  distance={8}
                  duration={4}
                >
                  <div className="relative w-28 h-28 md:w-36 md:h-36">
                    <img src={laurelWreath} alt="" aria-hidden className="w-full h-full" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs md:text-sm font-bold text-primary text-center leading-tight">
                        Top 1%<br />Worldwide
                      </span>
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>
            </ScrollReveal>

            {/* Text content */}
            <ScrollReveal direction="right" delay={0.2} className="order-2">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide uppercase">Award-Winning</span>
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

              {/* Award Badges with hover */}
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
        className="relative py-24 md:py-32 overflow-hidden bg-primary"
      >
        {/* Parallax pattern */}
        <motion.div className="absolute inset-0 opacity-5" style={{ y: menuBgY }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, hsl(var(--primary-foreground) / 0.1) 40px, hsl(var(--primary-foreground) / 0.1) 42px)",
          }} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <span className="text-primary-foreground/80 text-sm tracking-widest uppercase">Explore</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Our Menu
            </h2>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              From classic breakfast favorites to innovative brunch creations, our menu celebrates the art of morning dining.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <StaggerItem>
              <motion.article
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary-foreground">Chef's Specials</h3>
                  <p className="text-primary-foreground/60 mb-6">
                    Rotating seasonal dishes crafted by our culinary team featuring the finest local ingredients.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <a href="/locations">Order Online</a>
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
            <StaggerItem>
              <motion.article
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary-foreground">Full Bar & Cocktails</h3>
                  <p className="text-primary-foreground/60 mb-6">
                    Hand-crafted cocktails, mimosas, and brunch beverages to complement your meal perfectly.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <a href="/locations">Order Online</a>
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
          </StaggerContainer>

          {/* Menu Carousel */}
          <ScrollReveal delay={0.3}>
            <MenuCarousel showHeader={false} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ GIFT CARDS SECTION ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-complementary/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <CreditCard className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide uppercase">Gift Cards</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
                Share the Food <br className="hidden md:block" />
                <span className="italic text-accent">You Love</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 hover:scale-105 transition-all shadow-lg"
                >
                  <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Buy e-Gift Card
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full px-8 hover:scale-105 transition-all"
                >
                  <a href="https://www.toasttab.com//toast-charleston-155-meeting-st/findcard" target="_blank" rel="noopener noreferrer">
                    <Search className="h-5 w-5 mr-2" />
                    Check Balance
                  </a>
                </Button>
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
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ REVIEWS SECTION ═══════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-complementary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
          style={{ backgroundImage: `url(${homeBackground3})` }}
        />
        {/* Decorative elements */}
        <FloatingElement className="absolute top-20 left-10 opacity-10 hidden lg:block" delay={1}>
          <Star className="w-16 h-16 text-accent fill-accent" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-20 opacity-10 hidden lg:block" delay={3} distance={20}>
          <Star className="w-12 h-12 text-accent fill-accent" />
        </FloatingElement>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Reviews</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why breakfast lovers keep coming back to Toast All Day.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-full max-w-7xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden ring-1 ring-accent/10">
              <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/Uz6YkC2Cqk92rFC2504Q?widgetId=695d4e89b6efb8608acba4e1"
                frameBorder="0"
                scrolling="no"
                style={{ minWidth: "100%", width: "100%", minHeight: "600px" }}
              />
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
        {/* Animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-complementary/20 to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <FloatingElement distance={5} duration={8}>
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-6" />
            </FloatingElement>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Never Miss Out on
              <br />
              <span className="italic text-accent">A Celebration!</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
              Join our community and be the first to know about exclusive offers, new menu items, and special events.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full shadow-xl"
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
