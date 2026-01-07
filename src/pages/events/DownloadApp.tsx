import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Gift, Star, Smartphone, Bell, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Download Toast All Day App | Earn $5 Sign-Up Bonus"
        description="Download the Toast All Day app and get $5 instantly! Earn points, access exclusive offers, order online seamlessly, and track your rewards. Available on iOS and Android."
        keywords="Toast All Day app, restaurant app, rewards app, mobile ordering, loyalty program app"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-3">Promotions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Download our New App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover a seamless way to enjoy your favorite meals and rewards. Our app brings everything you love about Toast All Day right to your fingertips.
          </p>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-semibold">Earn $5 Just for Signing Up</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold">1 Point for Every $1 Spent</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold">Exclusive Discounts & Offers</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer">
              <img src="https://toastallday.com/wp-content/uploads/2025/04/toast-apple-btn-web.png" alt="Download on App Store" className="h-14" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img src="https://toastallday.com/wp-content/uploads/2025/04/toast-google-play-btn-web.png" alt="Get it on Google Play" className="h-14" />
            </a>
          </div>

          {/* Hero Image */}
          <img 
            src="https://toastallday.com/wp-content/uploads/2025/04/toast-app-hero.jpg"
            alt="Toast All Day App"
            className="w-full rounded-2xl shadow-xl mb-16"
          />

          {/* Features */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Enhance Your Rewards Experience</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Instant Rewards Access</h4>
              <p className="text-muted-foreground">Easily view and track your points in real-time, ensuring you're always in the loop with your rewards status.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Effortless Redemption</h4>
              <p className="text-muted-foreground">Redeem your offers and birthday perks directly from your phone, making it simpler than ever to enjoy your benefits.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Seamless Online Ordering</h4>
              <p className="text-muted-foreground">Order your favorite meals with just a few taps, saving you time and hassle.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Receive real-time updates and announcements, so you're always informed about the latest offers and events.</p>
            </div>
          </div>

          {/* Steps */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Get Started in 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <p className="text-foreground">Download the Toast All Day app from your app store.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <p className="text-foreground">Sign in or create an account to start tracking your rewards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <p className="text-foreground">Start earning points and enjoy exclusive benefits!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadApp;
