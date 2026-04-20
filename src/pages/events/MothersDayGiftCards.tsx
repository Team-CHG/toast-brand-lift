import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Search, Heart, MapPin, Gift, Sparkles, Star, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import giftcardDesign from "@/assets/giftcard-design.png";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const locations = [
  {
    name: "Toast! on Meeting",
    city: "Charleston, SC",
    address: "129 Meeting St, Charleston, SC 29401",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st",
    balanceUrl: "https://www.toasttab.com/toast-charleston-155-meeting-st/findcard",
  },
  {
    name: "Toast! on King",
    city: "Charleston, SC",
    address: "451 King St, Charleston, SC 29403",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-king-st-451-king-st",
    balanceUrl: "https://www.toasttab.com/toast-king-st-451-king-st/findcard",
  },
  {
    name: "Toast! Mt. Pleasant",
    city: "Mt. Pleasant, SC",
    address: "1150 Hungry Neck Blvd, Suite F-G, Mt. Pleasant, SC 29464",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
    balanceUrl: "https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/findcard",
  },
  {
    name: "Toast! West Ashley",
    city: "Charleston, SC",
    address: "2026 Savannah Hwy, Charleston, SC 29407",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-west-ashley-2026-savannah-hwy-tvrci",
    balanceUrl: "https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/findcard",
  },
  {
    name: "Toast! Summerville",
    city: "Summerville, SC",
    address: "717 Old Trolley Rd, Summerville, SC 29485",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-summerville-717-old-trolley-road",
    balanceUrl: "https://www.toasttab.com/toast-summerville-717-old-trolley-road/findcard",
  },
  {
    name: "Toast! Savannah",
    city: "Savannah, GA",
    address: "1 W Broughton St, Savannah, GA 31401",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-savannah-1-w-broughton-st",
    balanceUrl: "https://www.toasttab.com/toast-savannah-1-w-broughton-st/findcard",
  },
];

const MothersDayGiftCards = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mother's Day Gift Cards | Toast All Day Charleston & Savannah"
        description="Give Mom the gift of brunch this Mother's Day. Buy a Toast All Day eGift Card for any of our 6 Charleston, Mt. Pleasant, Summerville & Savannah locations — delivered instantly."
        keywords="Mother's Day gift card, Toast All Day gift card, brunch gift card Charleston, Mother's Day brunch Savannah, eGift card, restaurant gift card SC"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-20"
        style={{
          backgroundImage: `url(${pageBackgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/15 via-background/80 to-accent/15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-highlight fill-highlight" />
                <span className="text-sm font-semibold uppercase tracking-wider text-highlight">
                  Mother's Day 2026
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Celebrate Mom with a Morning She'll Never Forget
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                This Mother's Day, give her something that lingers longer than flowers — laughter over
                bottomless mimosas, the smell of warm beignets, and the people she loves all gathered
                around one sunlit table. One Toast All Day eGift Card unlocks brunch, lunch, dinner, and
                every craving in between — across <strong>all six Toast All Day locations</strong> AND our
                sister restaurants. Delivered in minutes. Remembered for years.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#locations">
                  <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white">
                    <Gift className="h-5 w-5 mr-2" />
                    Shop Gift Cards
                  </Button>
                </a>
                <a href="#locations">
                  <Button size="lg" variant="outline">
                    <Search className="h-5 w-5 mr-2" />
                    Check Card Balance
                  </Button>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <motion.div
                initial={{ rotate: -3, scale: 0.95 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center"
              >
                <img
                  src={giftcardDesign}
                  alt="Toast All Day Mother's Day Gift Card — perfect for breakfast and brunch lovers"
                  className="rounded-2xl shadow-2xl max-w-full h-auto ring-4 ring-highlight/20"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* One Card, Every Table — Highlighted Family Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight via-highlight to-accent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/30">
                <Star className="h-4 w-4 fill-white" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  One Card. Every Table She Loves.
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                A Gift That Travels With Her
              </h2>
              <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/95 max-w-3xl mx-auto">
                Whether Mom is craving Sunday brunch downtown, a sunset dinner on the water, or a late
                night with friends — her eGift Card is welcome at <strong>every Toast All Day location
                and all of our sister restaurants</strong>. One card. Endless ways to spoil her.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {[
                  "Eli's Table",
                  "John King Grill",
                  "Honkytonk Saloon",
                  "Toasted Crust",
                  "Cachita's Kitchen",
                ].map((name) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-white/15 backdrop-blur border border-white/30 px-4 py-5 flex flex-col items-center gap-2"
                  >
                    <Utensils className="h-5 w-5 text-white" />
                    <span className="text-sm md:text-base font-semibold text-white text-center leading-tight">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
                💌 Delivered in minutes. Available in any denomination. Never expires. Pick Mom's favorite
                Toast All Day location below to get started — she can use her card anywhere in the family.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Choose Mom's Favorite Spot
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Pick Her Location
              </h2>
              <p className="text-lg text-muted-foreground">
                Six locations across the Charleston area and Savannah. Buy a card or check an existing
                balance below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((loc, idx) => (
              <ScrollReveal key={loc.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col border-2 hover:border-highlight/50 hover:shadow-xl transition-all bg-card/90 backdrop-blur">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-full bg-highlight/10">
                          <MapPin className="h-5 w-5 text-highlight" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary leading-tight">{loc.name}</h3>
                          <p className="text-sm text-accent font-medium">{loc.city}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6 flex-1">{loc.address}</p>
                      <div className="flex flex-col gap-2 mt-auto">
                        <a href={loc.buyUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-highlight hover:bg-highlight/90 text-white">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Buy eGift Card
                          </Button>
                        </a>
                        <a href={loc.balanceUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full">
                            <Search className="h-4 w-4 mr-2" />
                            Check Balance
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MothersDayGiftCards;
