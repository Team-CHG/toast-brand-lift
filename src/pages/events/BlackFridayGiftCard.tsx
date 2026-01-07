import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Gift, Calendar, PartyPopper } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const BlackFridayGiftCard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Black Friday Gift Card Deal - Toast All Day | Free $20 Bonus"
        description="Black Friday special! Buy $50 in Toast All Day gift cards and get a FREE $20 bonus card. Perfect holiday gift for breakfast and brunch lovers. Limited time offer."
        keywords="Black Friday gift card, restaurant gift card, bonus gift card, holiday gift, brunch gift"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2024/12/Toast_Giving_is_the_Greatest_Gift_web-1.jpg"
          alt="Black Friday Gift Card Offer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-3">Promotions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            A Free $20 Gift Card: Our Black Friday Toast to You!
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Offer Highlight */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 mb-12 text-center">
            <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Buy $50 in Gift Cards, Get a $20 Bonus!
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Offer valid through December 15th, 2024</span>
            </div>
          </div>

          {/* Details */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              This holiday season, give the gift of delicious brunch! Purchase $50 or more in Toast All Day gift cards and receive a FREE $20 bonus gift card. Perfect for friends, family, or yourself!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://toastallday.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Buy Physical Gift Card
            </a>
            <a 
              href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Buy e-Gift Card
            </a>
          </div>

          {/* 20th Anniversary Teaser */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
            <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Coming in 2025!</h3>
            <p className="text-muted-foreground">
              Toast All Day is celebrating our 20th anniversary in 2025! Stay tuned for special events and promotions throughout the year.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlackFridayGiftCard;
