import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Gift, Star, Percent } from "lucide-react";

const MothersDay = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SideDrawer />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2025/05/Toast-Mothers-Day-Horizontal-Header-Post-1920-x-1080-px-1.jpg"
          alt="Mother's Day at Toast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-3">Events</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Celebrate Mother's Day with a Free Mimosa and Beignets!
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/10 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get an order of beignets and mimosa for Moms with the purchase of 2 entrees
            </h2>
            <p className="text-lg text-muted-foreground">Exclusive to app and loyalty users</p>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer">
              <img src="https://toastallday.com/wp-content/uploads/2025/04/toast-apple-btn-web.png" alt="Download on App Store" className="h-12" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img src="https://toastallday.com/wp-content/uploads/2025/04/toast-google-play-btn-web.png" alt="Get it on Google Play" className="h-12" />
            </a>
          </div>

          {/* Benefits */}
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Exclusive App & Loyalty Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 text-center border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Instant Rewards</h4>
              <p className="text-muted-foreground text-sm">Receive $5 in rewards just for signing up and start using your points immediately!</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Earn Points</h4>
              <p className="text-muted-foreground text-sm">Accumulate 1 point for every dollar spent and enjoy exclusive benefits.</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center border border-border/50">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Special Discounts</h4>
              <p className="text-muted-foreground text-sm">Enjoy up to 20% savings on online orders and access to unique promotions.</p>
            </div>
          </div>

          {/* Giveaway Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Follow us on Social & Enter to Win!</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.instagram.com/p/DJWsG0uR3YC/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Enter on Instagram
              </a>
              <a 
                href="https://www.facebook.com/reel/1357283998877155" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Enter on Facebook
              </a>
            </div>
          </div>

          {/* Gift Card Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Can't Join Us for Mother's Day?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Surprise Mom with a gift card from Toast All Day! Perfect for those who can't make it out, our gift cards let her enjoy a delightful meal at her convenience.
            </p>
            <a 
              href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Order Gift Card
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MothersDay;
