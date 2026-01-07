import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Utensils } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const SoupSaladSandwich = () => {
  const sandwiches = ["BLT", "Ultimate Grilled Cheese", "Fried Chicken", "Seasonal Wrap"];
  const soups = ["Lobster Bisque", "She Crab", "Seasonal Soup"];
  const salads = ["Caesar", "Mixed Greens"];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="$12 Lunch Combo - Toast All Day | Soup, Salad & Sandwich"
        description="Try Toast All Day's $12 lunch combo! Mix and match any 2: BLT, grilled cheese, lobster bisque, she crab soup, Caesar salad & more. Available at all locations."
        keywords="lunch combo, soup salad sandwich, $12 lunch special, Charleston lunch, affordable lunch"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2025/01/toast-soup-salad-sandwich-combo.jpg"
          alt="Soup, Salad or Sandwich Combo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-3">Menu</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            New Soup, Salad or Sandwich Combo
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Price Highlight */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 mb-12 text-center">
            <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-primary mb-2">$12 Lunch Special</h2>
            <p className="text-xl text-muted-foreground">Mix and match any two items!</p>
          </div>

          {/* Menu Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Sandwiches</h3>
              <ul className="space-y-2">
                {sandwiches.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Soups</h3>
              <ul className="space-y-2">
                {soups.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Salads</h3>
              <ul className="space-y-2">
                {salads.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Visit any Toast All Day location to enjoy this delicious lunch combo!
            </p>
            <Link 
              to="/locations"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoupSaladSandwich;
