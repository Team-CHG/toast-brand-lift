import { useEffect, useState } from "react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefPreparing from "@/assets/chef-preparing.jpg";
import foodSlide1 from "@/assets/food-slide-1.jpg";
import foodSlide2 from "@/assets/food-slide-2.jpg";
import foodSlide3 from "@/assets/food-slide-3.jpg";
import awardRestaurantGuru from "@/assets/award-restaurant-guru.png";
import awardTripadvisor from "@/assets/award-tripadvisor.jpg";
import giftcardDesign from "@/assets/giftcard-design.png";
import { Button } from "@/components/ui/button";
import { Clock, Award, MapPin, ChevronLeft, ChevronRight, Gift, CreditCard, Search } from "lucide-react";
const foodSlides = [foodSlide1, foodSlide2, foodSlide3];

const FeatureSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % foodSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

  return <>
      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">A Toast to Awards</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Thanks to our customers, Toast! All Day has been awarded the 2023 Top 25 Best Brunches in the U.S. by TripAdvisor! We are proud to be included in their Travelers' Choice "Best of the Best," which is only awarded to the top 1% best reviews worldwide! Come taste our award-winning food today!
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From our signature french toast to perfectly poached eggs, every plate tells a story of quality,
                passion, and dedication to the art of breakfast.
              </p>
              
              {/* Award Badges */}
              <div className="flex items-center gap-6 mb-8">
                <img src={awardRestaurantGuru} alt="Restaurant Guru 2020 Award" className="h-20 w-auto object-contain" />
                <img src={awardTripadvisor} alt="TripAdvisor Travelers Choice 2021" className="h-20 w-auto object-contain rounded-md" />
              </div>
              
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/about">Our Story</a>
              </Button>
            </div>
            
            {/* Food Slideshow */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden ring-4 ring-accent/20">
                {foodSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Delicious breakfast dish ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + foodSlides.length) % foodSlides.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % foodSlides.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {foodSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? "w-8 bg-accent" 
                          : "w-2 bg-card/60 hover:bg-card/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
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

      {/* Gift Cards Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">Share the Food You Love</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date. Can be used in any of Charleston Hospitality Group restaurants. Start customizing your card.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://toastallday.myshopify.com/" target="_blank" rel="noopener noreferrer">
                    <Gift className="h-5 w-5 mr-2" />
                    Buy Physical Gift Card
                  </a>
                </Button>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Buy e-Gift Card
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.toasttab.com//toast-charleston-155-meeting-st/findcard" target="_blank" rel="noopener noreferrer">
                    <Search className="h-5 w-5 mr-2" />
                    Check Balance
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={giftcardDesign} 
                alt="Charleston Hospitality Group Gift Card" 
                className="rounded-2xl shadow-2xl max-w-full h-auto ring-4 ring-accent/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why breakfast lovers keep coming back to Toast All Day.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
            <iframe className="lc_reviews_widget" src="https://reputationhub.site/reputation/widgets/review_widget/iKQtcBZdWcURNnuDKt3F?widgetId=69305a6ff4530a0640fb0bc3" frameBorder="0" scrolling="no" style={{
            minWidth: "100%",
            width: "100%",
            minHeight: "500px"
          }} />
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
            <Button size="lg" asChild variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 hover:bg-primary-foreground/20 text-lg px-8">
              <a href="https://toastallday.com/careers/" target="_blank" rel="noopener noreferrer">
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Never Miss Out on A Celebration!</h2>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
            <a href="https://www.toasttab.com/toast-charleston-155-meeting-st/marketing-signup" target="_blank" rel="noopener noreferrer">
              Sign Up For Exclusive News & Offers!
            </a>
          </Button>
        </div>
      </section>
    </>;
};
export default FeatureSections;