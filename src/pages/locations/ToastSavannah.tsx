import { useEffect } from "react";
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
import toastSavannahImg from "@/assets/locations/toast-savannah.jpg";

const ToastSavannah = () => {
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
  const location = {
    name: "Toast! Savannah",
    address: "1 W Broughton Street",
    city: "Savannah",
    state: "GA",
    zip: "31401",
    fullCity: "Savannah, GA 31401",
    phone: "(912) 513-8920",
    hours: "Monday – Sunday: 7am – 10pm",
    openTime: "07:00",
    closeTime: "22:00",
    orderUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/97f1d59a-b51c-4a46-92e7-4251dd54980d/joinWaitlist",
    embedQuery: "Toast+All+Day,+1+W+Broughton+St,+Savannah,+GA+31401",
    image: toastSavannahImg,
    latitude: 32.0809,
    longitude: -81.0912,
    neighborhood: "Historic Downtown Savannah",
    nearbyAttractions: ["Forsyth Park", "River Street", "City Market", "Savannah College of Art & Design"],
    parking: "Nearby public parking available on Bryan Street and at the Whitaker Street Parking Garage.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch in Downtown Savannah GA | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast, brunch & dinner at ${location.address}, Downtown Savannah. Open daily 7am-10pm! Near Forsyth Park & River Street. Farm-fresh ingredients & craft cocktails. Order online!`}
        keywords="Savannah breakfast, Broughton Street brunch, best brunch downtown Savannah GA, River Street dining, Forsyth Park restaurant, Savannah dinner, SCAD dining"
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
        url={`https://toast-all-day.lovable.app/locations/toast-savannah`}
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={`${location.name} - Best Breakfast & Dinner Restaurant in Downtown Savannah GA`}
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
                  <h2 className="text-3xl mb-4 text-primary">Best Breakfast, Brunch & Dinner in {location.neighborhood}</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Toast! Savannah brings our award-winning breakfast and brunch experience to the heart of historic Savannah's famous Broughton Street. Our Georgia location offers extended hours until 10pm, so you can enjoy delicious meals from morning through evening.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Located at the corner of Broughton and Bull Street in Savannah's vibrant downtown, we're perfectly positioned for tourists exploring the city's famous squares and locals looking for the best breakfast, brunch, or dinner in the Historic District. Our extended hours make us unique among Toast! locations!
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Extended hours until 10pm</strong> – our only location open for dinner!</li>
                    <li>• Prime location on historic Broughton Street shopping district</li>
                    <li>• Walking distance from Forsyth Park and River Street</li>
                    <li>• Perfect for SCAD students, tourists, and Savannah locals</li>
                    <li>• Full bar with craft cocktails and local Georgia beers</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 text-primary">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Toast! Savannah</h4>
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
                      <p className="text-accent text-sm font-medium mt-1">Open late! Breakfast, Brunch & Dinner</p>
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
                    title={`Map showing ${location.name} location in Downtown Savannah`}
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
              <h2 className="text-3xl mb-4 text-primary">Ready for the Best Brunch in Savannah?</h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Skip the wait! Order online for pickup or join our digital waitlist before you arrive. Open until 10pm!
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
        <section className="py-20 bg-complementary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">What Our Guests Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See why breakfast lovers keep coming back to Toast All Day.
              </p>
            </div>
            <div className="w-full max-w-7xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
              <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/15q8bl9vxp8ZuylBaGaS?widgetId=698b56d03d9d96088f80e03b"
                frameBorder="0"
                scrolling="no"
                title="Savannah Guest Reviews"
                style={{ minWidth: '100%', width: '100%', minHeight: '600px' }}
              />
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <GiftCardSection giftCardUrl="https://order.toasttab.com/egiftcards/toast-savannah-1-w-broughton-st" />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastSavannah;
