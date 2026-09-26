import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ArrowRight, BriefcaseBusiness, CakeSlice, MapPin, PartyPopper, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import cateringHero from "@/assets/catering-hero.avif";
import meetingImage from "@/assets/locations/toast-meeting.avif";
import kingImage from "@/assets/locations/toast-king.avif";
import mtPleasantImage from "@/assets/locations/toast-mt-pleasant.avif";
import westAshleyImage from "@/assets/locations/toast-west-ashley.avif";
import summervilleImage from "@/assets/locations/toast-summerville.avif";
import savannahImage from "@/assets/locations/toast-savannah.avif";

const cateringLocations = [
  {
    name: "Toast! on Meeting",
    area: "Downtown Charleston",
    address: "129 Meeting St, Charleston, SC 29401",
    image: meetingImage,
    url: "https://www.toasttab.com/catering/toast-charleston",
  },
  {
    name: "Toast! on King",
    area: "King Street",
    address: "453 King Street, Charleston, SC 29403",
    image: kingImage,
    url: "https://www.toasttab.com/catering/toast-king",
  },
  {
    name: "Toast! Mt. Pleasant",
    area: "Mt. Pleasant",
    address: "1150 Hungry Neck Blvd., Mt. Pleasant, SC 29464",
    image: mtPleasantImage,
    url: "https://www.toasttab.com/catering/toast-mtpleasant",
  },
  {
    name: "Toast! West Ashley",
    area: "West Ashley",
    address: "2026 Savannah Hwy, Charleston, SC 29407",
    image: westAshleyImage,
    url: "https://www.toasttab.com/catering/toast-west-ashley",
  },
  {
    name: "Toast! Summerville",
    area: "Summerville",
    address: "717 Old Trolley Road, Summerville, SC 29485",
    image: summervilleImage,
    url: "https://www.toasttab.com/catering/toast-summerville",
  },
  {
    name: "Toast! Savannah",
    area: "Historic Downtown Savannah",
    address: "1 W Broughton Street, Savannah, GA 31401",
    image: savannahImage,
    url: "https://www.toasttab.com/catering/toast-savannah",
  },
];

const occasions = [
  { icon: BriefcaseBusiness, label: "Office breakfasts" },
  { icon: PartyPopper, label: "Celebrations" },
  { icon: CakeSlice, label: "Showers and parties" },
  { icon: Users, label: "Groups of all sizes" },
];

const Catering = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Breakfast & Brunch Catering | Toast! All Day"
        description="Order Toast! All Day catering in Downtown Charleston, King Street, Mt. Pleasant, West Ashley, Summerville, or Savannah. Bring award-winning brunch to your next gathering."
        keywords="Toast All Day catering, Charleston brunch catering, Savannah catering, breakfast catering, office breakfast, party catering"
      />
      <Navigation />
      <Breadcrumbs />

      <main>
        <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden md:min-h-[68vh]">
          <motion.img
            src={cateringHero}
            alt="A Toast! All Day catering spread ready for a gathering"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={800}
            fetchPriority="high"
            initial={reduceMotion ? false : { scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-primary/5" />
          <div className="container relative z-10 mx-auto px-4 pb-12 pt-36 md:pb-16 lg:pb-20">
            <motion.div
              className="max-w-3xl"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="mb-4 text-sm font-bold uppercase text-complementary md:text-base">
                Brunch is better together
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.02] text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Catering, the Toast! way.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                Bring the breakfast, brunch, and Southern favorites your guests love to meetings, showers, celebrations, and everything between.
              </p>
              <Button asChild size="lg" className="mt-7 bg-complementary text-complementary-foreground shadow-lg hover:bg-complementary/90">
                <a href="#choose-location">
                  Choose your location
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="choose-location" className="scroll-mt-24 bg-complementary py-14 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
                <p className="mb-3 text-sm font-bold uppercase text-highlight">Six locations, one delicious decision</p>
                <h2 className="text-3xl font-bold text-primary md:text-5xl">Where are you ordering from?</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Select the Toast! All Day closest to your event to explore catering options and place your order.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cateringLocations.map((location, index) => (
                <ScrollReveal key={location.name} delay={index * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={location.image}
                        alt={`${location.name} in ${location.area}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-4 pt-12">
                        <p className="text-xs font-bold uppercase text-primary-foreground/90">{location.area}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <h3 className="text-2xl font-bold text-primary">{location.name}</h3>
                      <p className="mt-3 flex min-h-12 items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden="true" />
                        <span>{location.address}</span>
                      </p>
                      <Button asChild size="lg" className="mt-5 w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
                        <a href={location.url} target="_blank" rel="noopener noreferrer" aria-label={`Order catering from ${location.name}`}>
                          Order Catering Now
                          <ArrowRight aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cv-auto bg-background py-14 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-bold uppercase text-accent">Made for gathering</p>
                <h2 className="text-3xl font-bold text-primary md:text-4xl">A crowd-pleasing spread for every occasion</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  From an early team meeting to a weekend celebration, serve the Toast! favorites that make any table feel special.
                </p>
              </div>
            </ScrollReveal>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {occasions.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-36 flex-col items-center justify-center gap-3 bg-card p-5 text-center">
                  <span className="flex size-11 items-center justify-center rounded-full bg-complementary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-bold text-primary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catering;