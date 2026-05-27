import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroVideoNew from "@/assets/hero-video-new.mp4";
import heroVideoWebm from "@/assets/hero-video-new.webm";
import sparklesOverlay from "@/assets/sparkles-overlay.png";

// Hero posters are served from /public so the browser's preload scanner can
// discover them before the JS bundle parses. These paths MUST match the
// <link rel="preload"> tags in index.html so the preloaded bytes are reused.
const heroPosterAvif = "/hero/hero-poster.avif";
const heroPosterWebp = "/hero/hero-poster.webp";
const heroPosterJpg = "/hero/hero-poster.jpg";
const heroPosterMobileAvif = "/hero/hero-poster-mobile.avif";
const heroPosterMobileWebp = "/hero/hero-poster-mobile.webp";
const heroPosterMobileJpg = "/hero/hero-poster-mobile.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const orderLocations = [
  { name: "Toast! on Meeting", url: "https://order.toasttab.com/online/toast-charleston-155-meeting-st" },
  { name: "Toast! on King", url: "https://order.toasttab.com/online/toast-king-st-451-king-st" },
  { name: "Toast! Mt. Pleasant", url: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g" },
  { name: "Toast! West Ashley", url: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci" },
  { name: "Toast! Summerville", url: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road" },
  { name: "Toast! Savannah", url: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st" },
];

const HeroCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Defer the hero video on every viewport so the poster stays the LCP
  // element. We still skip it on save-data / very slow networks or when the
  // user prefers reduced motion.
  const [useVideo, setUseVideo] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData === true;
    const slowNet = conn?.effectiveType && /(^|-)(2g|slow-2g)$/.test(conn.effectiveType);
    if (!saveData && !slowNet && !prefersReducedMotion) {
      // Defer attaching the video until after the page is interactive so it
      // never competes with the LCP image for bandwidth/main-thread.
      const w = window as any;
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(() => setUseVideo(true), { timeout: 1500 });
      } else {
        setTimeout(() => setUseVideo(true), 600);
      }
    }
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  const sparkleY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -80]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden pt-16 sm:pt-20 min-h-[100vh] md:min-h-[110vh] flex items-center"
    >
      {/* Background: poster image is the LCP candidate. Rendered as a plain
          <div> (NOT motion.div) so it commits on the very first React render
          without waiting for framer-motion to initialize scroll transforms.
          Video is attached after idle, behind the poster, and fades in. */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroPosterMobileAvif} type="image/avif" />
          <source media="(max-width: 767px)" srcSet={heroPosterMobileWebp} type="image/webp" />
          <source srcSet={heroPosterAvif} type="image/avif" />
          <source srcSet={heroPosterWebp} type="image/webp" />
          <img
            src={heroPosterJpg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
            // No loading attribute = eager. Explicitly never lazy.
          />
        </picture>
        {useVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPosterJpg}
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoNew} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Gradient overlay with blue/red tones */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-accent/10 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Red accent glow */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-highlight/20 rounded-full blur-[80px] md:blur-[150px] -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/4 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/15 rounded-full blur-[60px] md:blur-[120px] translate-x-1/4" />

      {/* Sparkles overlay with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40 hidden md:block"
        style={{ y: sparkleY }}
      >
        <img
          src={sparklesOverlay}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center mb-40 md:mb-32"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.p
            className="text-white/90 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-base mb-3 md:mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Award-Winning Breakfast & Brunch
          </motion.p>

          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[0.95]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Celebrate the
            <br />
            <span className="text-complementary italic">Possibilities</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            TripAdvisor Top 25 Best Brunches in the U.S.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-highlight hover:bg-highlight/90 text-highlight-foreground text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href="/locations">Find a Location</a>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-black/30 hover:bg-black/50 hover:border-white text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full backdrop-blur-md shadow-lg"
                >
                  Order Online <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border-accent/10">
                {orderLocations.map((loc) => (
                  <DropdownMenuItem key={loc.name} asChild>
                    <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      {loc.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
