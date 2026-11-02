import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { THANKSGIVING, thanksgivingSchema } from "@/lib/thanksgiving";
import dinner from "@/assets/thanksgiving-dinner.avif.asset.json";
import share from "@/assets/thanksgiving-share.jpg.asset.json";

const pageUrl = "https://toastallday.com/thanksgiving";
const shareUrl = `https://toastallday.com${share.url}`;

export const Route = createFileRoute("/thanksgiving/")({
  head: () => ({
    meta: [
      { title: THANKSGIVING.title },
      { name: "description", content: THANKSGIVING.description },
      { property: "og:title", content: THANKSGIVING.title },
      { property: "og:description", content: THANKSGIVING.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: shareUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Thanksgiving turkey dinner with seasonal sides and pumpkin pie" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: THANKSGIVING.title },
      { name: "twitter:description", content: THANKSGIVING.description },
      { name: "twitter:image", content: shareUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(thanksgivingSchema(shareUrl)) }],
  }),
  component: ThanksgivingPage,
});

function ThanksgivingPage() {
  return (
    <div className="thanksgiving-page min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-24">
        <section className="thanksgiving-hero relative isolate overflow-hidden" aria-labelledby="thanksgiving-heading">
          <img src={dinner.url} alt="Illustrative Thanksgiving turkey dinner with dressing, mashed potatoes, green beans, cranberry compote and pumpkin pie" width={1536} height={1024} fetchPriority="high" decoding="async" className="thanksgiving-photo absolute inset-0 h-full w-full object-cover" />
          <div className="thanksgiving-wash absolute inset-0" aria-hidden="true" />
          <div className="container relative z-10 flex h-full items-start px-6 pt-10 sm:items-center sm:py-12 md:px-10">
            <div className="max-w-md lg:max-w-lg">
              <h1 id="thanksgiving-heading" className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">Thanksgiving Brunch at Toast! All Day</h1>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-primary md:text-lg">Skip the dishes this year and let us cook. Join us Thanksgiving Day, <time dateTime={THANKSGIVING.date}>{THANKSGIVING.dateLabel}</time>.</p>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-12 md:py-16" aria-labelledby="holiday-special">
          <div className="mx-auto max-w-3xl">
            <h2 id="holiday-special" className="text-sm font-bold uppercase text-autumn">Holiday Special</h2>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-primary md:text-4xl">{THANKSGIVING.dish}</h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary/85 md:text-lg">{THANKSGIVING.dishDescription}</p>
            <p className="mt-4 text-base font-black text-primary md:text-lg">${THANKSGIVING.price}</p>
            <p className="mt-7 border-l-2 border-autumn pl-4 text-base text-primary"><span className="font-bold">Optional Dessert:</span> {THANKSGIVING.dessert}</p>
            <div className="mt-10" aria-labelledby="thanksgiving-faq">
              <h2 id="thanksgiving-faq" className="mb-4 text-xl font-bold text-primary md:text-2xl">Thanksgiving FAQ</h2>
              <div className="divide-y divide-accent/30 rounded-2xl border border-accent/30 bg-white/70 px-5">
                {THANKSGIVING.faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-primary [&::-webkit-details-marker]:hidden">
                      {faq.question}<ChevronDown className="size-5 shrink-0 text-highlight transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary/85">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <Link to="/locations">Find Your Toast <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}