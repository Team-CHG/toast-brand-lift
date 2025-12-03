import { useEffect } from "react";
import chickenWaffles from "@/assets/chicken-waffles.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefPreparing from "@/assets/chef-preparing.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Award, MapPin } from "lucide-react";

const FeatureSections = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Breakfast Done Right</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Toast All Day, we believe breakfast is the most important meal – and it should be extraordinary. We
                source the freshest ingredients, craft each dish with care, and serve it all in a warm, welcoming
                atmosphere.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our signature french toast to perfectly poached eggs, every plate tells a story of quality,
                passion, and dedication to the art of breakfast.
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/about">Our Story</a>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={chickenWaffles}
                alt="Chicken and waffles with fresh berries"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover ring-4 ring-accent/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">Why Toast All Day?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Fresh Daily</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everything made fresh each morning using locally sourced ingredients and time-honored recipes.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Award Winning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized nationally for our innovative menu and commitment to culinary excellence.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Nationwide</h3>
              <p className="text-muted-foreground leading-relaxed">
                Growing coast to coast with locations opening in communities across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Explore Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From classic breakfast favorites to innovative brunch creations, our menu celebrates the art of morning
              dining.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={chefPreparing} alt="Chef preparing food" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Chef's Specials</h3>
                <p className="text-muted-foreground mb-4">
                  Rotating seasonal dishes crafted by our culinary team featuring the finest local ingredients.
                </p>
                <Button variant="outline" asChild>
                  <a href="/locations">Order Online</a>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={restaurantInterior} alt="Restaurant interior" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Full Bar & Cocktails</h3>
                <p className="text-muted-foreground mb-4">
                  Hand-crafted cocktails, mimosas, and brunch beverages to complement your meal perfectly.
                </p>
                <Button variant="outline" asChild>
                  <a href="/locations">Order Online</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why breakfast lovers keep coming back to Toast All Day.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/iKQtcBZdWcURNnuDKt3F?widgetId=69305a6ff4530a0640fb0bc3"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%", minHeight: "500px" }}
            />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Find a Toast All Day Near You</h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            With locations opening nationwide, we're bringing exceptional breakfast to your neighborhood.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <a href="/locations">Find Your Location</a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 hover:bg-primary-foreground/20 text-lg px-8"
            >
              <a href="https://toastallday.com/careers/" target="_blank" rel="noopener noreferrer">
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSections;
