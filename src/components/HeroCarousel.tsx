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

// Optimized hero video. Rendered directly in the initial markup with a
// poster image and preload="none" so no JS timing logic gates first paint.
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
  // Mobile-only: defer the hero video until AFTER LCP commits so the
  // poster image is the sole LCP candidate and video decoding never
  // competes with first paint. Desktop is unchanged — its <video>
  // renders statically in the initial markup as before.
  const [mountMobileVideo, setMountMobileVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 768px)").matches) return;

    let cancelled = false;
    const mount = () => {
      if (cancelled) return;
      // Wait one more frame past load so the LCP image has painted.
      const idle =
        (window as any).requestIdleCallback ||
        ((cb: () => void) => window.setTimeout(cb, 1));
      idle(() => !cancelled && setMountMobileVideo(true));
    };

    if (document.readyState === "complete") {
      window.setTimeout(mount, 1500);
    } else {
      window.addEventListener("load", () => window.setTimeout(mount, 1500), {
        once: true,
      });
    }
    return () => {
      cancelled = true;
    };
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
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            // @ts-ignore - fetchpriority is a valid HTML attribute
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Mobile video — mounted only AFTER load + idle so the poster
          remains the uncontested LCP candidate. Desktop video below is
          untouched and still ships in the initial markup. */}
      {mountMobileVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          poster={heroPosterMobileJpg}
          className="md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideoMobile} type="video/mp4" />
        </video>
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        poster={heroPosterJpg}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoDesktop} type="video/mp4" />
      </video>

      {/* Static gradient overlay — simplified on mobile (single solid
          tint, no multi-stop gradient) to reduce compositor work on the
          first frame. Desktop keeps the original layered gradient. */}
      <div className="md:hidden absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-foreground/60 via-accent/10 to-transparent pointer-events-none" />

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroCarousel;