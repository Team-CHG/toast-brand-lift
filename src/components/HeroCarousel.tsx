import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const flakySeasonAvif = "/hero/flaky-season.avif";
const flakySeasonWebp = "/hero/flaky-season.webp";
const flakySeasonMobileAvif = "/hero/flaky-season-mobile.avif";
const flakySeasonMobileWebp = "/hero/flaky-season-mobile.webp";

const HeroCarousel = () => {
  return (
    <section
      className="relative isolate flex min-h-[720px] w-full items-center overflow-hidden bg-complementary pt-28 sm:min-h-[760px] md:min-h-[840px] md:pt-32"
      aria-labelledby="flaky-season-heading"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 bg-highlight" />

      <div className="container relative mx-auto grid w-full grid-cols-1 items-center gap-4 px-5 pb-10 pt-8 sm:px-8 md:grid-cols-12 md:gap-0 md:px-8 md:pb-14 md:pt-12 lg:px-12">
        <div className="relative z-20 order-1 md:col-span-6 lg:col-span-5">
          <div className="hero-copy-reveal flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-highlight md:w-14" />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-highlight md:text-sm">
              A Toast! All Day seasonal drop
            </p>
          </div>

          <h1
            id="flaky-season-heading"
            className="hero-copy-reveal mt-4 max-w-[8ch] text-[clamp(4.2rem,21vw,6.5rem)] font-extrabold uppercase leading-[0.78] text-primary md:mt-7 md:text-[clamp(6rem,9vw,9.25rem)] lg:text-[9rem]"
          >
            Flaky
            <span className="block text-highlight">Season</span>
          </h1>

          <div className="hero-copy-reveal mt-6 max-w-md border-l-2 border-accent pl-4 md:mt-8 md:pl-6">
            <p className="text-base font-extrabold uppercase leading-tight text-primary sm:text-lg md:text-xl">
              Three new ways to brunch at Toast! All Day
            </p>
          </div>

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

        <div className="relative z-10 order-2 -mt-3 flex justify-end md:col-span-7 md:-ml-12 md:mt-0 lg:col-span-7 lg:-ml-8">
          <div className="hero-food-drift relative ml-auto w-[88vw] max-w-[450px] md:w-full md:max-w-[650px] lg:max-w-[720px]">
            <div
              aria-hidden
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-md border-2 border-accent/40 bg-accent/10 md:-inset-5 md:translate-x-5 md:translate-y-5"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted shadow-[var(--shadow-campaign)] md:aspect-[5/6]">
              <picture>
                <source media="(max-width: 767px)" srcSet={flakySeasonMobileAvif} type="image/avif" />
                <source media="(max-width: 767px)" srcSet={flakySeasonMobileWebp} type="image/webp" />
                <source srcSet={flakySeasonAvif} type="image/avif" />
                <source srcSet={flakySeasonWebp} type="image/webp" />
                <img
                  src={flakySeasonWebp}
                  alt="Three croissant sandwiches stacked with chicken salad, breakfast sausage and egg, and seafood salad"
                  width={1024}
                  height={1536}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </picture>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-background/5" />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-3 right-0 z-0 hidden select-none text-[12rem] font-extrabold uppercase leading-none text-accent/10 lg:block"
        >
          Flaky
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;