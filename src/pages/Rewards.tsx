import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Star, TrendingUp, Zap, Smartphone } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import appScreenshot from "@/assets/app-screenshot.png";

const Rewards = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Rewards Program - Toast All Day | Earn $10 for Every $100"
        description="Join Toast All Day Rewards and earn $10 for every $100 spent. Get birthday rewards, exclusive offers, double points Monday-Friday 12-3pm. Sign up free today!"
        keywords="Toast rewards, loyalty program, restaurant rewards Charleston, earn points breakfast, birthday rewards"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Toast! <span className="text-primary">Rewards</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Earn points with every visit and enjoy exclusive perks
            </p>
            
            {/* Highlighted Promo Section */}
            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                GET $10 FOR EVERY $100 SPENT!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A $10 reward will automatically be applied to your account upon spending $100 at any Toast! All Day location or the fine restaurants listed below. The more you spend, the more points you accumulate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">You'll also receive exclusive invites to special events, try new menu items before anyone else, and get special perks! 
Earn double points Monday-Friday 12-3pm</p>
              
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a target="_blank" rel="noopener noreferrer" href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup">
                  ​Register Here 
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a target="_blank" rel="noopener noreferrer" href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsLookup">
                  Check Your Rewards
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Earn Points</h3>
                  <p className="text-muted-foreground">
                    Every dollar you spend earns you points. The more you dine with us, the more you earn!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Redeem Rewards</h3>
                  <p className="text-muted-foreground">
                    Use your points for discounts, free items, and exclusive menu items available only to members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Level Up</h3>
                  <p className="text-muted-foreground">
                    Unlock higher tiers as you earn more points and enjoy even better perks and benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Exclusive Perks</h3>
                  <p className="text-muted-foreground">
                    Get access to special promotions, birthday rewards, and early access to new menu items.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Member Benefits */}
            <div className="mt-16 p-8 bg-secondary rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Member Benefits</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1x</div>
                  <p className="text-muted-foreground">Point per dollar spent</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">🎂</div>
                  <p className="text-muted-foreground">Birthday rewards</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">⚡</div>
                  <p className="text-muted-foreground">Exclusive member offers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">🎁</div>
                  <p className="text-muted-foreground">Free items & discounts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">📱</div>
                  <p className="text-muted-foreground">Easy mobile ordering</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">🔔</div>
                  <p className="text-muted-foreground">First to know updates</p>
                </div>
              </div>
            </div>

            {/* Download App Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Smartphone className="h-4 w-4" />
                    Mobile App
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
                  <p className="text-xl text-primary font-semibold mb-4">
                    It's Cheaper to Order on the App!
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Get exclusive app-only deals, earn rewards faster, and enjoy seamless ordering right from your phone.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="text-lg px-6">
                      <a 
                        href="https://apps.apple.com/us/app/toast-all-day/id6744418742" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        App Store
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-6">
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&hl=en_US" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        Google Play
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={appScreenshot} 
                    alt="Toast All Day mobile app" 
                    className="max-w-xs md:max-w-sm rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our rewards program today and start enjoying the benefits!
              </p>
              <Button asChild size="lg" className="text-lg px-10">
                <a target="_blank" rel="noopener noreferrer" href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup">
                  Sign Up Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rewards;