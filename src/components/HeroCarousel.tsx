import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// LOCKED LCP ASSET. Served from /public so the preload scanner in index.html
// discovers and fetches it before the JS bundle parses. These paths MUST
// match the <link rel="preload"> tags in index.html.
const heroPosterAvif = "/hero/hero-poster.avif";
const heroPosterWebp = "/hero/hero-poster.webp";
const heroPosterJpg = "/hero/hero-poster.jpg";
const heroPosterMobileAvif = "/hero/hero-poster-mobile.avif";
const heroPosterMobileWebp = "/hero/hero-poster-mobile.webp";
const heroPosterMobileJpg = "/hero/hero-poster-mobile.jpg";

// Optimized hero video (re-encoded, ~344KB desktop / ~120KB mobile).
// Loaded lazily AFTER first paint so it never competes with the LCP image.
const heroVideoDesktop = "/hero/hero.mp4";
const heroVideoMobile = "/hero/hero-mobile.mp4";

const orderLocations = [
  { name: "Toast! on Meeting", url: "https://order.toasttab.com/online/toast-charleston-155-meeting-st" },
  { name: "Toast! on King", url: "https://order.toasttab.com/online/toast-king-st-451-king-st" },
  { name: "Toast! Mt. Pleasant", url: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g" },
  { name: "Toast! West Ashley", url: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci" },
  { name: "Toast! Summerville", url: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road" },
  { name: "Toast! Savannah", url: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st" },
];

/**
 * Hero section with a LOCKED LCP element.
 *
 * The single `<picture>`/`<img>` below is the permanent LCP candidate on
 * mobile, tablet, and desktop. It is rendered from the initial React tree
 * with no conditional logic, no video swap, no carousel, no framer-motion
 * wrapper, and no entrance animation — so it commits on first paint and
 * never changes after hydration. This makes LCP deterministic across runs.
 */
const HeroCarousel = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Defer video attach until the browser is idle so the LCP image owns
    // first paint. The poster stays visible until the video can play.
    const attach = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setVideoSrc(isMobile ? heroVideoMobile : heroVideoDesktop);
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(attach, { timeout: 2500 });
      return () => (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(attach, 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20 min-h-[100vh] md:min-h-[110vh] flex items-center">
      {/* LOCKED LCP element */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroPosterMobileAvif} type="image/avif" />
          <source media="(max-width: 767px)" srcSet={heroPosterMobileWebp} type="image/webp" />
          <source media="(max-width: 767px)" srcSet={heroPosterMobileJpg} type="image/jpeg" />
          <source srcSet={heroPosterAvif} type="image/avif" />
          <source srcSet={heroPosterWebp} type="image/webp" />
          <img
            src={heroPosterJpg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            // @ts-ignore - fetchpriority is a valid HTML attribute
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Lazy hero video — attaches after idle, fades in over the poster.
          Does NOT affect LCP because the poster <img> commits first. */}
      {videoSrc && (
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Static gradient overlay — no animation, no hydration swap */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-accent/10 to-transparent pointer-events-none" />

      {/* Hero content — static markup, no entrance animations, no parallax */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-40 md:mb-32">
        <p className="text-white/90 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-base mb-3 md:mb-4 font-medium">
          Award-Winning Breakfast & Brunch
        </p>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[0.95]">
          Celebrate the
          <br />
          <span className="text-complementary italic">Possibilities</span>
        </h1>

        <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
          TripAdvisor Top 25 Best Brunches in the U.S.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
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
                className="border-2 border-white text-white bg-black/30 hover:bg-black/50 hover:border-white text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg"
              >
                Order Online <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-accent/10">
              {orderLocations.map((loc) => (
                <DropdownMenuItem key={loc.name} asChild>
                  <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {loc.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Static scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroCarousel;