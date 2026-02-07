import { useEffect, useState } from "react";
import foodSlide1 from "@/assets/food-slide-1.jpg";
import foodSlide2 from "@/assets/food-slide-2.jpg";
import foodSlide3 from "@/assets/food-slide-3.jpg";
import menuImage1 from "@/assets/food-slide-1-new.jpg";
import menuImage2 from "@/assets/food-slide-2-new.jpg";
import awardRestaurantGuru from "@/assets/award-restaurant-guru.png";
import awardTripadvisor from "@/assets/award-tripadvisor.jpg";
import giftcardDesign from "@/assets/giftcard-design.png";
import homeBackground from "@/assets/home-background.avif";
import homeDecorativeBackground from "@/assets/home-decorative-background.avif";
import homeDecorativeTopMobile from "@/assets/home-decorative-top-mobile.avif";
import homeDecorativeBottomMobile from "@/assets/home-decorative-bottom-mobile.avif";
import homeDecorativeBottomMobile2 from "@/assets/home-decorative-bottom-mobile-2.avif";
import homeBackground2 from "@/assets/home-background-2.avif";
import homeBackground3 from "@/assets/home-background-3.avif";
import giftcardBackground from "@/assets/giftcard-background.avif";
import menuSectionBackground from "@/assets/menu-section-background.avif";
import newsletterBackground from "@/assets/newsletter-background.avif";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CreditCard, Search, Mail, Star } from "lucide-react";
import MenuCarousel from "@/components/MenuCarousel";
const foodSlides = [foodSlide1, foodSlide2, foodSlide3];
const FeatureSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % foodSlides.length);
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
      {/* Decorative Background Image Section */}
      <section className="relative h-40 sm:h-44 md:h-52 lg:h-64 bg-background overflow-hidden">
        {/* Mobile background */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${homeDecorativeTopMobile})` }}
        />
        {/* Desktop background */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${homeDecorativeBackground})` }}
        />
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom gradient fade to match Awards section background */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section - A Toast to Awards */}
      <section id="about" className="py-6 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="order-2">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 text-primary">A Toast to Awards</h2>
              <p className="text-xs sm:text-sm md:text-lg text-muted-foreground mb-2 md:mb-6 leading-relaxed">
                Thanks to our customers, Toast! All Day has been awarded the 2023 Top 25 Best Brunches in the U.S. by TripAdvisor! We are proud to be included in their Travelers' Choice "Best of the Best," which is only awarded to the top 1% best reviews worldwide!
              </p>
              <p className="hidden md:block text-lg text-muted-foreground mb-6 leading-relaxed">
                From our signature french toast to perfectly poached eggs, every plate tells a story of quality,
                passion, and dedication to the art of breakfast.
              </p>
              
              {/* Award Badges */}
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mb-4 md:mb-8">
                <img src={awardRestaurantGuru} alt="Restaurant Guru 2020 Award" className="h-10 sm:h-14 md:h-20 w-auto object-contain" />
                <img src={awardTripadvisor} alt="TripAdvisor Travelers Choice 2021" className="h-10 sm:h-14 md:h-20 w-auto object-contain rounded-md" />
              </div>
              
              <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-base md:px-6 md:py-3">
                <a href="/about">Our Story</a>
              </Button>
            </div>
            
            {/* Food Slideshow */}
            <div className="order-1 relative">
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden ring-2 md:ring-4 ring-accent/20">
                {foodSlides.map((slide, index) => (
                  <img 
                    key={index} 
                    src={slide} 
                    alt={`Delicious breakfast dish featuring Toast All Day signature menu item ${index + 1}`} 
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`} 
                  />
                ))}
                
                {/* Navigation Arrows */}
                <button onClick={() => setCurrentSlide(prev => (prev - 1 + foodSlides.length) % foodSlides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => setCurrentSlide(prev => (prev + 1) % foodSlides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all shadow-lg">
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {foodSlides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-accent" : "w-2 bg-card/60 hover:bg-card/80"}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Background Image Section - Bottom */}
      <section className="relative h-40 sm:h-44 md:h-52 lg:h-64 bg-background overflow-hidden">
        {/* Mobile background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${homeDecorativeBottomMobile2})` }}
        />
        {/* Desktop background */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${homeDecorativeBackground})` }}
        />
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom gradient fade to match Why Choose Us section background */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-complementary to-transparent" />
      </section>

      {/* Why Choose Us - Editorial Style */}
      <section className="py-12 bg-complementary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1} />
              <span className="text-primary font-medium">Fresh Daily</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1} />
              <span className="text-primary font-medium">Award Winning</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1} />
              <span className="text-primary font-medium">Locally Sourced</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1} />
              <span className="text-primary font-medium">Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview - Explore Our Menu */}
      <section id="menu" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Explore Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From classic breakfast favorites to innovative brunch creations, our menu celebrates the art of morning
              dining.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <article className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                alt="Toast All Day chef preparing fresh gourmet breakfast dishes in the kitchen" 
                className="w-full h-64 object-cover" 
                src="/lovable-uploads/82d1d24f-7f8c-4d59-a4bd-06ba2cb769ad.png"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Chef's Specials</h3>
                <p className="text-muted-foreground mb-4">
                  Rotating seasonal dishes crafted by our culinary team featuring the finest local ingredients.
                </p>
                <Button variant="outline" asChild>
                  <a href="/locations" aria-label="Order Chef's Specials online">Order Online</a>
                </Button>
              </div>
            </article>
            <article className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={menuImage2} 
                alt="Full bar selection with craft cocktails and mimosas at Toast All Day" 
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Full Bar & Cocktails</h3>
                <p className="text-muted-foreground mb-4">
                  Hand-crafted cocktails, mimosas, and brunch beverages to complement your meal perfectly.
                </p>
                <Button variant="outline" asChild>
                  <a href="/locations" aria-label="Order cocktails and drinks online">Order Online</a>
                </Button>
              </div>
            </article>
          </div>
          
          {/* Menu Carousel - No headers, just the slideshow */}
          <div className="mt-16">
            <MenuCarousel showHeader={false} />
          </div>
        </div>
      </section>

      {/* Gift Cards Section - Share the Food You Love */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">Share the Food You Love</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date. Can be used in any of Charleston Hospitality Group restaurants. Start customizing your card.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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
                alt="Charleston Hospitality Group Gift Card - Perfect gift for breakfast and brunch lovers" 
                className="rounded-2xl shadow-2xl max-w-full h-auto ring-4 ring-accent/20"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
          style={{ backgroundImage: `url(${homeBackground3})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why breakfast lovers keep coming back to Toast All Day.
            </p>
          </div>
          <div className="w-full max-w-7xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
            <iframe className="lc_reviews_widget" src="https://reputationhub.site/reputation/widgets/review_widget/Uz6YkC2Cqk92rFC2504Q?widgetId=695d4e89b6efb8608acba4e1" frameBorder="0" scrolling="no" style={{
            minWidth: "100%",
            width: "100%",
            minHeight: "600px"
          }} />
          </div>
        </div>
      </section>

      {/* Newsletter & CTA Section */}
      <section className="py-20 text-primary-foreground relative overflow-hidden">
        {/* Full background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${newsletterBackground})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#4d2410]">Never Miss Out on A Celebration!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-[#4d2410]">
            Join our community and be the first to know about exclusive offers, new menu items, and special events.
          </p>
          
          <div className="flex justify-center px-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <a href="https://www.toasttab.com/toast-charleston-155-meeting-st/marketing-signup" target="_blank" rel="noopener noreferrer" className="text-sm font-medium">
                <Mail className="h-5 w-5 mr-2" />
                Sign Up For Exclusive News & Offers!
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default FeatureSections;