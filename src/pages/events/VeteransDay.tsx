import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Shield, MapPin, Utensils } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const VeteransDay = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Veterans Day Free Meal - Toast All Day | Honor Our Heroes"
        description="Veterans eat FREE at Toast All Day on Veterans Day! Choose classic breakfast or smash burger. Valid at all 6 Charleston locations with military ID. Thank you for your service."
        keywords="Veterans Day free meal, free food veterans, military free meal, Veterans Day restaurant"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2024/11/unnamed-22-1080x675.png"
          alt="Veterans Day Free Meal"
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
            Veterans Eat FREE This Veterans Day
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Offer */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 mb-12 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              FREE Meal for All Veterans
            </h2>
            <p className="text-xl text-muted-foreground">November 11th, 2024</p>
          </div>

          {/* Menu Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Choose Your Free Meal</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <Utensils className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="text-xl font-bold text-foreground mb-2">Classic Breakfast</h4>
                <p className="text-muted-foreground">Our signature breakfast plate with eggs, bacon, and all the fixings.</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border/50">
                <Utensils className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="text-xl font-bold text-foreground mb-2">Smash Burger</h4>
                <p className="text-muted-foreground">Our famous smash burger served with your choice of sides.</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">How to Redeem</h3>
            <ul className="space-y-3 max-w-md mx-auto">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                Present valid Military ID or wear uniform
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                Available at all 6 Charleston locations
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                Valid on November 11th, 2024 only
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your service. We look forward to serving you!
            </p>
            <Link 
              to="/locations"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Find a Location
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VeteransDay;
