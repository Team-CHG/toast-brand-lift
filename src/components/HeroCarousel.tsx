import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
// Mobile hero is a static hyper-realistic champagne cheers photo (no video)
const heroPosterMobileJpg = "/hero/hero-cheers-mobile.jpg";

// Desktop-only hero video. Mobile uses a static image for performance.
const heroVideoDesktop = "/hero/hero.mp4";

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
  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-24 min-h-[75vh] md:min-h-[110vh] flex items-center">
      {/* LOCKED LCP element */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroPosterMobileJpg} type="image/jpeg" />
          <source srcSet={heroPosterAvif} type="image/avif" />
          <source srcSet={heroPosterWebp} type="image/webp" />
          <img
            src={heroPosterJpg}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-[center_30%] md:object-center"
            // @ts-ignore - fetchpriority is a valid HTML attribute
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Desktop video (mobile uses the static picture above) */}
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

      {/* Static gradient overlay — stronger on mobile for text legibility over the static cheers photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/30 md:from-foreground/60 md:via-accent/10 md:to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center mb-4 md:mb-32">
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