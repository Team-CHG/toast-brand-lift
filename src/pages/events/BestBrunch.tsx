import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { ArrowLeft, Star, MapPin } from "lucide-react";

const BestBrunch = () => {
  const menuHighlights = [
    {
      name: "Eggs Meeting Street",
      description: "Crab cakes, fried green tomatoes, and perfectly poached eggs with hollandaise sauce."
    },
    {
      name: "Lowcountry Shrimp & Grits",
      description: "Creamy stone-ground grits topped with sautéed shrimp in our signature lobster cream sauce."
    },
    {
      name: "Chicken & Waffles",
      description: "Crispy fried chicken served atop a fluffy Belgian waffle with maple syrup."
    },
    {
      name: "Avocado Toast",
      description: "Fresh avocado on artisan bread with poached eggs and everything seasoning."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SideDrawer />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://toastallday.com/wp-content/uploads/2022/02/Toast-All-Day-syrup-pour-chicken-800x675.jpg"
          alt="Best Brunch in Charleston"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </Link>
          <span className="block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-3">News</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            The Best Brunch in Charleston, SC
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-xl text-muted-foreground">
              Discover why Toast! All Day has been voted the best brunch spot in Charleston for nearly two decades.
            </p>
          </div>

          {/* Menu Highlights */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Must-Try Menu Items</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {menuHighlights.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Why Toast */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Toast All Day?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-muted-foreground">Charleston Locations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000s</div>
                <p className="text-muted-foreground">Happy Guests Daily</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Experience the best brunch in Charleston for yourself!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/locations"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Find a Location
              </Link>
              <a 
                href="https://toastallday.com/order-online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestBrunch;
