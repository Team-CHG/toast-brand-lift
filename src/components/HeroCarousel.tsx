import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const flakySeasonAvif = "/hero/flaky-season-new.avif";
const flakySeasonWebp = "/hero/flaky-season-new.webp";

const HeroCarousel = () => {
  return (
    <section
      className="relative isolate flex min-h-[620px] w-full items-center overflow-hidden bg-primary pt-28 sm:min-h-[680px] md:min-h-[760px] md:pt-32 lg:min-h-[820px]"
      aria-labelledby="flaky-season-heading"
    >
      <picture className="absolute inset-0 h-full w-full">
        <source srcSet={flakySeasonAvif} type="image/avif" />
        <source srcSet={flakySeasonWebp} type="image/webp" />
        <img
          src={flakySeasonWebp}
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

      <div className="container relative z-10 mx-auto flex w-full items-center px-5 pb-10 pt-8 sm:px-8 sm:pb-12 md:px-10 md:pb-14 md:pt-12 lg:px-12">
        <div className="max-w-[19rem] sm:max-w-[24rem] md:max-w-[34rem] lg:max-w-[39rem]">
          <h1
            id="flaky-season-heading"
            className="hero-copy-reveal text-[4.25rem] font-extrabold uppercase leading-[0.82] text-primary-foreground drop-shadow-lg sm:text-[5.25rem] md:text-[6.4rem] md:leading-[0.84] lg:text-[7.5rem]"
          >
            Flaky
            <span className="block text-highlight">Season</span>
          </h1>

          <p className="hero-copy-reveal mt-5 max-w-[18rem] border-l-2 border-accent pl-4 text-sm font-extrabold uppercase leading-[1.35] text-primary-foreground drop-shadow-md sm:mt-6 sm:max-w-[22rem] sm:text-base md:mt-7 md:max-w-[30rem] md:pl-5 md:text-xl md:leading-[1.3] lg:text-[1.35rem]">
            Three new ways to brunch at Toast! All Day
          </p>

          <div className="hero-copy-reveal mt-5 sm:mt-6 md:mt-7">
            <Button
              size="default"
              asChild
              className="h-11 rounded-full bg-complementary px-6 text-xs font-extrabold uppercase text-complementary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-complementary/90 sm:h-12 sm:px-7 md:text-sm"
            >
              <a href="/menus/downtown">
                Order now
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