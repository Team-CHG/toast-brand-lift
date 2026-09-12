import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import flakySeasonAvif from "@/assets/campaign/flaky-season-horizontal.avif.asset.json";
import flakySeasonWebp from "@/assets/campaign/flaky-season-horizontal.webp.asset.json";

const HeroCarousel = () => {
  return (
    <section
      className="relative isolate flex min-h-[620px] w-full items-center overflow-hidden bg-primary pt-28 sm:min-h-[680px] md:min-h-[760px] md:pt-32 lg:min-h-[820px]"
      aria-labelledby="flaky-season-heading"
    >
      <picture className="absolute inset-0 h-full w-full">
        <source srcSet={flakySeasonAvif.url} type="image/avif" />
        <source srcSet={flakySeasonWebp.url} type="image/webp" />
        <img
          src={flakySeasonWebp.url}
          alt="Three croissant sandwiches stacked on a plate at Toast! All Day"
          width={1671}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[56%_center] sm:object-[58%_center] md:object-center"
        />
      </picture>

      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/5 md:from-primary/80 md:via-primary/35 md:to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/10 md:from-primary/25" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 bg-highlight" />

      <div className="container relative z-10 mx-auto flex w-full items-center px-5 pb-12 pt-10 sm:px-8 md:px-10 md:pb-16 md:pt-14 lg:px-12">
        <div className="max-w-[21rem] sm:max-w-md md:max-w-[39rem] lg:max-w-[46rem]">
          <h1
            id="flaky-season-heading"
            className="hero-copy-reveal text-[clamp(4.1rem,19vw,6.4rem)] font-extrabold uppercase leading-[0.78] text-primary-foreground drop-shadow-lg md:text-[clamp(6.7rem,11vw,10rem)] lg:text-[10rem]"
          >
            Flaky
            <span className="block text-highlight">Season</span>
          </h1>

          <p className="hero-copy-reveal mt-6 max-w-[19rem] border-l-2 border-accent pl-4 text-base font-extrabold uppercase leading-tight text-primary-foreground drop-shadow-md sm:text-lg md:mt-8 md:max-w-md md:pl-6 md:text-2xl">
            Three new ways to brunch at Toast! All Day
          </p>

          <div className="hero-copy-reveal mt-6 md:mt-8">
            <Button
              size="lg"
              asChild
              className="h-12 rounded-full bg-highlight px-6 text-xs font-extrabold uppercase text-highlight-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-highlight/90 md:h-14 md:px-8 md:text-sm"
            >
              <a href="/menus/downtown">
                Explore the new menu
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;