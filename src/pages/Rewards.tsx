import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Star, TrendingUp, Zap } from "lucide-react";

const Rewards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
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
            <Button asChild size="lg" className="text-lg px-8">
              <a href="https://toastallday.com/rewards/" target="_blank" rel="noopener noreferrer">
                Join Rewards Program
              </a>
            </Button>
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

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our rewards program today and start enjoying the benefits!
              </p>
              <Button asChild size="lg" className="text-lg px-10">
                <a href="https://toastallday.com/rewards/" target="_blank" rel="noopener noreferrer">
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
