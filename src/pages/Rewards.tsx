import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Gift, Star, TrendingUp, Zap, Smartphone, ChevronDown } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import appScreenshot from "@/assets/app-screenshot.png";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Rewards = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Rewards Program - Toast All Day | Earn $10 for Every $100"
        description="Join Toast All Day Rewards and earn $10 for every $100 spent."
        keywords="Toast rewards, loyalty program, restaurant rewards Charleston"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/5" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[150px]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Toast! <span className="text-highlight italic">Rewards</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Earn points with every visit and enjoy exclusive perks
            </p>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-8 shadow-xl ring-1 ring-accent/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-highlight to-accent" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  GET $10 FOR EVERY $100 SPENT!
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A $10 reward will automatically be applied to your account upon spending $100 at any Toast! All Day location. The more you spend, the more points you accumulate.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">You'll also receive exclusive invites to special events, try new menu items before anyone else, and get special perks! Earn double points Monday-Friday 12-3pm</p>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="text-lg px-8 bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full">
                    Register Here <ChevronDown className="ml-1 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-xl">
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Meeting St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" target="_blank" rel="noopener noreferrer">King St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-summerville-717-old-trolley-road/rewardsSignup" target="_blank" rel="noopener noreferrer">Summerville</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/rewardsSignup" target="_blank" rel="noopener noreferrer">West Ashley</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/rewardsSignup" target="_blank" rel="noopener noreferrer">Mt Pleasant</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-savannah-1-w-broughton-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Savannah</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 rounded-full border-accent/20">
                    Check Your Rewards <ChevronDown className="ml-1 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-xl">
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsLookup" target="_blank" rel="noopener noreferrer">Meeting St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsLookup" target="_blank" rel="noopener noreferrer">King St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-summerville-717-old-trolley-road/rewardsLookup" target="_blank" rel="noopener noreferrer">Summerville</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/rewardsLookup" target="_blank" rel="noopener noreferrer">West Ashley</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/rewardsLookup" target="_blank" rel="noopener noreferrer">Mt Pleasant</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-savannah-1-w-broughton-st/rewardsLookup" target="_blank" rel="noopener noreferrer">Savannah</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl ring-1 ring-accent/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      <Smartphone className="h-4 w-4" />
                      Mobile App
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-primary">Download Our App</h2>
                    <p className="text-xl text-highlight font-semibold mb-4">It's Cheaper to Order on the App!</p>
                    <p className="text-muted-foreground mb-6">Get exclusive app-only deals, earn rewards faster, and enjoy seamless ordering right from your phone.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button asChild size="lg" className="text-lg px-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                          App Store
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-lg px-6 rounded-full border-accent/20">
                        <a href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&hl=en_US" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                          Google Play
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={appScreenshot} alt="Toast All Day mobile app" className="max-w-xs md:max-w-sm rounded-3xl shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">How It Works</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Star, title: "Earn Points", desc: "Every dollar you spend earns you points. The more you dine, the more you earn!" },
                { icon: Gift, title: "Redeem Rewards", desc: "Use your points for discounts, free items, and exclusive menu items." },
                { icon: TrendingUp, title: "Level Up", desc: "Unlock higher tiers as you earn more points and enjoy better perks." },
                { icon: Zap, title: "Exclusive Perks", desc: "Get access to special promotions, birthday rewards, and early access." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-accent/10 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Member Benefits */}
            <ScrollReveal delay={0.3}>
              <div className="mt-16 bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Member Benefits</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {["1x Point per dollar", "Birthday Rewards", "Exclusive Offers", "Free Items", "Mobile Ordering", "First Updates"].map((benefit, i) => (
                    <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-lg font-bold text-white">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal delay={0.4} className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start Earning?</h2>
              <p className="text-lg text-muted-foreground mb-6">Join our rewards program today!</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="text-lg px-10 bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full shadow-lg hover:scale-105 transition-all">
                    Sign Up Now <ChevronDown className="ml-1 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-xl">
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Meeting St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" target="_blank" rel="noopener noreferrer">King St</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-summerville-717-old-trolley-road/rewardsSignup" target="_blank" rel="noopener noreferrer">Summerville</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/rewardsSignup" target="_blank" rel="noopener noreferrer">West Ashley</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/rewardsSignup" target="_blank" rel="noopener noreferrer">Mt Pleasant</a></DropdownMenuItem>
                  <DropdownMenuItem asChild><a href="https://www.toasttab.com/toast-savannah-1-w-broughton-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Savannah</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rewards;
