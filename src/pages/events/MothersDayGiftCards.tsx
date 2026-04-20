import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Search, Heart, MapPin, Gift, Sparkles, Star, Utensils, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import giftcardDesign from "@/assets/giftcard-design.png";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import mothersDayBrunch from "@/assets/mothers-day-brunch.jpg";
import sisterElisTable from "@/assets/sister-elis-table.png";
import sisterJohnKing from "@/assets/sister-john-king-grill.png";
import sisterHonkytonk from "@/assets/sister-honkytonk-saloon.png";
import sisterToastedCrust from "@/assets/sister-toasted-crust.png";
import sisterCachitas from "@/assets/sister-cachitas-kitchen.png";
import locMeeting from "@/assets/locations/toast-meeting.jpg";
import locKing from "@/assets/locations/toast-king.jpg";
import locMtPleasant from "@/assets/locations/toast-mt-pleasant.jpg";
import locWestAshley from "@/assets/locations/toast-west-ashley.jpg";
import locSummerville from "@/assets/locations/toast-summerville.jpg";
import locSavannah from "@/assets/locations/toast-savannah.jpg";

const sisterRestaurants = [
  { name: "Eli's Table", logo: sisterElisTable },
  { name: "John King Grill", logo: sisterJohnKing },
  { name: "Honkytonk Saloon", logo: sisterHonkytonk },
  { name: "Toasted Crust", logo: sisterToastedCrust },
  { name: "Cachita's Kitchen", logo: sisterCachitas },
];

const locations = [
  {
    name: "Toast! on Meeting",
    city: "Charleston, SC",
    address: "129 Meeting St, Charleston, SC 29401",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st",
    balanceUrl: "https://www.toasttab.com/toast-charleston-155-meeting-st/findcard",
    image: locMeeting,
  },
  {
    name: "Toast! on King",
    city: "Charleston, SC",
    address: "451 King St, Charleston, SC 29403",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-king-st-451-king-st",
    balanceUrl: "https://www.toasttab.com/toast-king-st-451-king-st/findcard",
    image: locKing,
  },
  {
    name: "Toast! Mt. Pleasant",
    city: "Mt. Pleasant, SC",
    address: "1150 Hungry Neck Blvd, Suite F-G, Mt. Pleasant, SC 29464",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
    balanceUrl: "https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/findcard",
    image: locMtPleasant,
  },
  {
    name: "Toast! West Ashley",
    city: "Charleston, SC",
    address: "2026 Savannah Hwy, Charleston, SC 29407",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-west-ashley-2026-savannah-hwy-tvrci",
    balanceUrl: "https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/findcard",
    image: locWestAshley,
  },
  {
    name: "Toast! Summerville",
    city: "Summerville, SC",
    address: "717 Old Trolley Rd, Summerville, SC 29485",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-summerville-717-old-trolley-road",
    balanceUrl: "https://www.toasttab.com/toast-summerville-717-old-trolley-road/findcard",
    image: locSummerville,
  },
  {
    name: "Toast! Savannah",
    city: "Savannah, GA",
    address: "1 W Broughton St, Savannah, GA 31401",
    buyUrl: "https://order.toasttab.com/egiftcards/toast-savannah-1-w-broughton-st",
    balanceUrl: "https://www.toasttab.com/toast-savannah-1-w-broughton-st/findcard",
    image: locSavannah,
  },
];

const rewardsLinks = [
  { name: "Toast! on Meeting", url: "https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup" },
  { name: "Toast! on King", url: "https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" },
  { name: "Toast! Mt. Pleasant", url: "https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/rewardsSignup" },
  { name: "Toast! West Ashley", url: "https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/rewardsSignup" },
  { name: "Toast! Summerville", url: "https://www.toasttab.com/toast-summerville-717-old-trolley-road/rewardsSignup" },
  { name: "Toast! Savannah", url: "https://www.toasttab.com/toast-savannah-1-w-broughton-st/rewardsSignup" },
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
                className="flex justify-center relative"
              >
                <div className="relative">
                  <img
                    src={mothersDayBrunch}
                    alt="Mom and friends laughing and toasting with mimosas at a sunlit Toast All Day brunch table"
                    className="rounded-3xl shadow-2xl max-w-full h-auto ring-4 ring-highlight/20 object-cover aspect-[4/5] w-full"
                    loading="eager"
                    decoding="async"
                  />
                  <motion.img
                    src={giftcardDesign}
                    alt="Toast All Day eGift Card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="hidden md:block absolute -bottom-8 -left-8 w-44 lg:w-56 rounded-xl shadow-2xl ring-4 ring-white rotate-[-8deg]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
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
                Whether Mom is craving a relaxed brunch, a fine-dinning experience Downtown, or a late
                night with friends, her eGift Card is welcome at <strong>every Toast All Day location
                and all of our sister restaurants</strong>. One card. Endless ways to spoil her.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {sisterRestaurants.map((restaurant) => (
                  <motion.div
                    key={restaurant.name}
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-white/95 backdrop-blur border border-white/40 p-4 flex flex-col items-center gap-3 shadow-lg"
                  >
                    <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl p-2">
                      <img
                        src={restaurant.logo}
                        alt={`${restaurant.name} logo — sister restaurant where Toast All Day gift cards are accepted`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-primary text-center leading-tight">
                      {restaurant.name}
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
                  Start Where She Smiles Most
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Pick Mom's Home Base
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the Toast All Day location closest to Mom's heart. Her card will work there — and
                across our entire family of restaurants.
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
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={loc.image}
                        alt={`${loc.name} restaurant interior`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-full bg-highlight/10">
                          <MapPin className="h-5 w-5 text-highlight" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary leading-tight">{loc.name}</h3>
                          <p className="text-sm text-accent font-medium">{loc.city}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{loc.address}</p>
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

      {/* Join Rewards Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/10" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-highlight" />
                <span className="text-sm font-semibold uppercase tracking-wider text-highlight">
                  Toast Rewards
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Join Rewards & Earn With Every Visit
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up with your phone number and start earning points on every meal Mom shares with
                you — redeemable across all Toast All Day locations.
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white text-lg px-10">
                    <Gift className="h-5 w-5 mr-2" />
                    Join Rewards
                    <ChevronDown className="h-5 w-5 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64 bg-card z-50">
                  {rewardsLinks.map((loc) => (
                    <DropdownMenuItem key={loc.name} asChild>
                      <a href={loc.url} target="_blank" rel="noopener noreferrer">
                        {loc.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Your Toast All Day eGift Card is valid at all Toast All Day locations{" "}
              <strong className="text-highlight font-bold">
                and across our family of sister restaurants — Eli's Table, John King Grill, Honkytonk
                Saloon, Toasted Crust, and Cachita's Kitchen
              </strong>
              . One card. Endless tables. <strong className="text-primary">No expiration date</strong> —
              ever.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MothersDayGiftCards;
