import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Search, MapPin, Gift, Sparkles, ChevronDown, PartyPopper, Coffee, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import giftcardDesign from "@/assets/giftcard-design.avif";
import pageBackgroundTexture from "@/assets/page-background-texture.avif";
import brunchCelebration from "@/assets/mothers-day-brunch.jpg";
import sisterElisTable from "@/assets/sister-elis-table.png";
import sisterJohnKing from "@/assets/sister-john-king-grill.png";
import sisterHonkytonk from "@/assets/sister-honkytonk-saloon.png";
import sisterToastedCrust from "@/assets/sister-toasted-crust.png";
import sisterCachitas from "@/assets/sister-cachitas-kitchen.png";
import locMeeting from "@/assets/locations/toast-meeting.avif";
import locKing from "@/assets/locations/toast-king.jpg";
import locMtPleasant from "@/assets/locations/toast-mt-pleasant.jpg";
import locWestAshley from "@/assets/locations/toast-west-ashley.jpg";
import locSummerville from "@/assets/locations/toast-summerville.jpg";
import locSavannah from "@/assets/locations/toast-savannah.jpg";

const sisterRestaurants = [
  { name: "Eli's Table", logo: sisterElisTable, url: "https://elistable.com/" },
  { name: "John King Grill", logo: sisterJohnKing, url: "https://johnkinggrill.com/" },
  { name: "Honkytonk Saloon", logo: sisterHonkytonk, url: "https://honkytonksaloon.com/" },
  { name: "Toasted Crust", logo: sisterToastedCrust, url: "https://toastedcrust.com/" },
  { name: "Cachita's Kitchen", logo: sisterCachitas, url: "https://cachitaskitchenchs.com/" },
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

const GiftCardsPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Toast All Day Gift Cards · Celebrate Every Moment | Charleston & Savannah"
        description="Give the gift of unforgettable brunch. Toast All Day eGift Cards are redeemable across all locations and sister restaurants in Charleston, Savannah, and beyond."
        keywords="Toast All Day gift card, eGift card, brunch gift card Charleston, breakfast gift card Savannah, restaurant gift card"
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
                <PartyPopper className="h-5 w-5 text-highlight" />
                <span className="text-sm font-semibold uppercase tracking-wider text-highlight">
                  Celebrate Every Moment
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
                <span className="text-primary">The Gift of</span>
                <br />
                <span className="text-highlight">Great Times.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Whether it is a birthday, anniversary, promotion, or just because — a Toast All Day
                eGift Card is the perfect way to say{' '}
                <strong className="text-primary">you matter</strong>. Delivered in minutes or
                scheduled for the perfect surprise, it is an invitation to gather, toast, and
                make memories over plates worth celebrating.
              </p>
              <p className="text-base md:text-lg text-accent italic mb-8 font-medium">
                Good food. Great company. Even better moments. ♡
              </p>
              <div className="flex flex-wrap gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white">
                      <Gift className="h-5 w-5 mr-2" />
                      Buy eGift Card
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 bg-card z-50">
                    {locations.map((loc) => (
                      <DropdownMenuItem key={loc.name} asChild>
                        <a href={loc.buyUrl} target="_blank" rel="noopener noreferrer">
                          {loc.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" variant="outline">
                      <Search className="h-5 w-5 mr-2" />
                      Check Card Balance
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 bg-card z-50">
                    {locations.map((loc) => (
                      <DropdownMenuItem key={loc.name} asChild>
                        <a href={loc.balanceUrl} target="_blank" rel="noopener noreferrer">
                          {loc.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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
                    src={brunchCelebration}
                    alt="Friends laughing and toasting with mimosas at a sunlit Toast All Day brunch table"
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
                    className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 w-32 sm:w-40 md:w-44 lg:w-56 rounded-xl shadow-2xl ring-4 ring-white rotate-[-8deg]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* One Card, Every Table, Family Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight via-highlight to-accent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/30">
                <Heart className="h-4 w-4" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  One Card, Every Table
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Celebrate Across
                <br />
                the CHG Family.
              </h2>
              <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/95 max-w-3xl mx-auto">
                Your Toast All Day eGift Card is not just for brunch. It unlocks every seat at
                the table across <strong>Charleston Hospitality Group</strong>'s family of
                restaurants — from elevated Southern fare to honky-tonk classics and wood-fired
                pizza. One card. Endless reasons to celebrate.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {sisterRestaurants.map((restaurant) => (
                  <motion.div
                    key={restaurant.name}
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-white/95 backdrop-blur border border-white/40 p-4 flex flex-col items-center gap-3 shadow-lg"
                  >
                    <a
                      href={restaurant.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${restaurant.name} website`}
                      className="flex flex-col items-center gap-3 w-full"
                    >
                      <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl p-2">
                        <img
                          src={restaurant.logo}
                          alt={`${restaurant.name} logo, sister restaurant where Toast All Day gift cards are accepted`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-primary text-center leading-tight">
                        {restaurant.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <p className="text-base md:text-lg text-white font-semibold max-w-2xl mx-auto leading-relaxed italic">
                Twelve locations. One card. A whole lot of moments worth toasting to. ♡
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-highlight" />
                <span className="text-sm font-semibold uppercase tracking-wider text-highlight">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Give a Gift Worth Savoring
              </h2>
              <p className="text-lg text-muted-foreground">
                Sending a Toast All Day eGift Card takes less than a minute. Pick a location,
                choose an amount, and deliver joy straight to their inbox — or schedule it for
                the perfect moment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose a Location",
                body: "Pick their favorite Toast All Day spot — or any CHG restaurant. Our eGift Cards are redeemable across our entire family of restaurants in Charleston, Savannah, and beyond.",
                Icon: MapPin,
              },
              {
                step: "02",
                title: "Customize Your Gift",
                body: "Select any denomination, add a personal message, and choose whether to send it instantly or schedule delivery for a birthday, anniversary, or surprise.",
                Icon: Gift,
              },
              {
                step: "03",
                title: "They Celebrate",
                body: "Your recipient receives a beautiful digital card by email and can redeem it for brunch, drinks, dinner, or anything on the menu — no expiration, ever.",
                Icon: Coffee,
              },
            ].map(({ step, title, body, Icon }) => (
              <ScrollReveal key={step}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="h-full">
                  <Card className="h-full border-2 border-highlight/20 bg-card/90 backdrop-blur">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-highlight/30">{step}</span>
                        <div className="p-3 rounded-full bg-highlight/10">
                          <Icon className="h-6 w-6 text-highlight" />
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
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
                  Buy & Check Balance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Pick a Location
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the Toast All Day location closest to the ones you love. Every eGift Card
                is an invitation to slow down, gather around the table, and celebrate the everyday.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((loc) => (
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
                Sign up with your phone number and start earning points on every meal you share,
                redeemable across all Toast All Day locations.
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
              <strong className="text-highlight font-bold">One Card, Every Table.</strong>{" "}
              Toast All Day eGift Cards are valid at all Toast All Day locations{" "}
              <strong className="text-highlight font-bold">
                and across our family of sister restaurants — Eli's Table, John King Grill, Honkytonk
                Saloon, Toasted Crust, and Cachita's Kitchen
              </strong>
              . No expiration date ever. Gift cards are valid beginning the day after purchase and
              may not be redeemed on the same day they are purchased.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCardsPage;
