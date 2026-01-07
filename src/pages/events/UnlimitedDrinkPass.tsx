import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Calendar, MapPin, Wine } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const UnlimitedDrinkPass = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Unlimited Mimosa Wristband - Toast All Day 20th Anniversary"
        description="Celebrate Toast All Day's 20th anniversary at the Bridge Run! Get unlimited mimosas with our special wristband offer at Toast Coleman or Toast on King."
        keywords="unlimited mimosas, Bridge Run Charleston, 20th anniversary, mimosa festival, brunch event"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2025/03/Toast-Bridge-Run-Mimosa-Festival-1920-x-1080-px-web.jpg"
          alt="Toast Bridge Run Mimosa Festival"
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
            Celebrate the 20th Anniversary with Unlimited Fun!
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Join us for a day of endless enjoyment at <a href="https://toastallday.com/toast-coleman-boulevard/" className="text-primary hover:underline">Toast Coleman Boulevard</a> in Mount Pleasant at the starting line, and our <a href="https://toastallday.com/toast-king-st/" className="text-primary hover:underline">Toast on King</a> at the finish! Get your exclusive wristband offer, featuring unlimited mimosas. A perfect way to toast your achievements at the Bridge Run!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign Up Here!
            </a>
            <a 
              href="https://www.eventbrite.com/e/toast-bridge-run-mimosa-festival-tickets-1304651721419?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Your Wristband
            </a>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Toast's 20th Anniversary Event</h2>
            <div className="flex items-center justify-center">
              <Wine className="w-16 h-16 text-primary mb-4" />
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Join us on April 5th for a day filled with celebration and indulgence. Enjoy unlimited mimosas with our special wristband offer. Perfect for celebrating your Bridge Run success!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Date</h4>
                <p className="text-muted-foreground">April 5, 2024</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Check-in at Toast Coleman or Toast King St, Charleston, SC</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">20th Anniversary Extravaganza</h3>
            <p className="text-xl text-primary font-semibold">Unlimited Mimosas Await!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnlimitedDrinkPass;
