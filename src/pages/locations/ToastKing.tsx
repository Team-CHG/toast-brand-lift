import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import GiftCardSection from "@/components/GiftCardSection";
import RewardsCtaSection from "@/components/RewardsCtaSection";
import MenuCarousel from "@/components/MenuCarousel";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Star, Car, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import toastKingImg from "@/assets/locations/toast-king.jpg";

const ToastKing = () => {
  const location = {
    name: "Toast! on King",
    address: "453 King Street",
    city: "Charleston",
    state: "SC",
    zip: "29403",
    fullCity: "Charleston, SC 29403",
    phone: "(843) 793-0364",
    hours: "Monday – Sunday: 7am – 3pm",
    openTime: "07:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/d54baf9c-c752-4df6-81af-70807504a517/joinWaitlist",
    embedQuery: "Toast+All+Day,+453+King+St,+Charleston,+SC+29403",
    image: toastKingImg,
    latitude: 32.7901,
    longitude: -79.9407,
    neighborhood: "Upper King Street",
    nearbyAttractions: ["Marion Square", "Charleston Museum", "Joseph Manigault House", "King Street Shopping"],
    parking: "Street parking available on King Street. Nearby parking garage at 75 Calhoun Street.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch on King Street Charleston | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast & brunch at ${location.address} on King Street, Charleston. Open daily 7am-3pm. Perfect after shopping on Upper King. Farm-fresh ingredients & craft cocktails. Order online!`}
        keywords="King Street brunch Charleston, Upper King breakfast, Charleston brunch restaurant, best breakfast King Street, shopping district brunch, Marion Square dining"
      />
      <LocationSchema
        name={location.name}
        address={location.address}
        city={location.city}
        state={location.state}
        zip={location.zip}
        phone={`+1-${location.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`}
        openTime={location.openTime}
        closeTime={location.closeTime}
        latitude={location.latitude}
        longitude={location.longitude}
        url={`https://toast-all-day.lovable.app/locations/toast-king`}
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={`${location.name} - Best Breakfast Restaurant on King Street Charleston`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4">{location.name}</h1>
              <p className="text-white/90 text-lg mt-2">{location.address}, {location.fullCity}</p>
            </div>
          </div>
        </section>

        {/* NAP Section */}
        <section className="bg-complementary py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center md:text-left md:justify-between items-center">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium text-foreground">{location.address}, {location.fullCity}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="font-medium text-foreground hover:text-accent transition-colors">
                  {location.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium text-foreground">{location.hours}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info Column */}
              <div className="space-y-8">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl mb-4 text-primary">Best Breakfast & Brunch on {location.neighborhood}</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Situated on Charleston's famous King Street, Toast! on King brings our award-winning breakfast experience to one of the city's most vibrant shopping and dining districts. Perfect for brunch after exploring Upper King's boutiques, galleries, and antique shops.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Our King Street location is a favorite among shoppers, locals, and visitors alike. With a prime location near Marion Square and the Charleston Museum, it's the ideal spot to fuel up before a day of exploring the historic district or unwind after browsing the city's best boutiques.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Located in the heart of Charleston's premier shopping district</li>
                    <li>• Perfect brunch spot before or after King Street shopping</li>
                    <li>• Walking distance from Marion Square and Charleston Museum</li>
                    <li>• Spacious seating perfect for groups and families</li>
                    <li>• Full craft cocktail menu with local favorites</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 text-primary">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Toast! on King</h4>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.fullCity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a 
                        href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Hours</h4>
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Parking</h4>
                      <p className="text-muted-foreground">{location.parking}</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                      Order Online <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/rewards">
                      <Gift className="mr-2 h-4 w-4" /> Join Rewards
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Map Column */}
              <div className="space-y-6">
                <div className="h-[400px] lg:h-[500px]">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-lg"
                    title={`Map showing ${location.name} location on ${location.neighborhood}`}
                  />
                </div>
                
                {/* Nearby Attractions */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 text-primary">Nearby Attractions</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAttractions.map((attraction) => (
                      <span key={attraction} className="bg-background px-3 py-1 rounded-full text-sm border text-foreground">
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Carousel */}
        <MenuCarousel />

        {/* Secondary CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4 text-primary">Ready for the Best Brunch on King Street?</h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Skip the wait! Order online for pickup or join our digital waitlist before you arrive.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                    Order Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                    Join Waitlist
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Guests Say */}
        <section className="py-16 px-0 md:px-4 bg-complementary">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-8 text-primary">What Our Guests Say</h2>
            <div className="w-full mx-auto">
              <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/AgA9wVRqpCliIwezK0mZ?widgetId=698b4c183d9d96088f750bb3"
                frameBorder="0"
                scrolling="no"
                style={{ minWidth: '100%', width: '100%', minHeight: '1200px', height: 'auto' }}
                title="King Street Guest Reviews"
                onLoad={(e) => {
                  const iframe = e.currentTarget;
                  const handleResize = (event: MessageEvent) => {
                    if (event.data && event.data.height) {
                      iframe.style.height = event.data.height + 'px';
                    }
                  };
                  window.addEventListener('message', handleResize);
                }}
              />
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <GiftCardSection giftCardUrl="https://order.toasttab.com/egiftcards/toast-king-st-451-king-st" />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastKing;
