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
import toastMeetingImg from "@/assets/locations/toast-meeting.jpg";

const ToastMeeting = () => {
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
    name: "Toast! on Meeting",
    address: "129 Meeting St",
    city: "Charleston",
    state: "SC",
    zip: "29401",
    fullCity: "Charleston, SC 29401",
    phone: "(843) 994-3598",
    hours: "Monday – Sunday: 6am – 3pm",
    openTime: "06:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/68470c10-a7ea-4c0f-aa51-13ad297c1a49/joinWaitlist",
    embedQuery: "Toast+All+Day,+129+Meeting+St,+Charleston,+SC+29401",
    image: toastMeetingImg,
    latitude: 32.7832,
    longitude: -79.9364,
    neighborhood: "Downtown Charleston",
    nearbyAttractions: ["Charleston City Market", "Waterfront Park", "Rainbow Row", "The Battery"],
    parking: "Street parking and nearby parking garages available on Meeting Street and Market Street."
  };
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;
  
  return (
    <div className="min-h-screen">
      <SEO title={`Best Brunch in Downtown Charleston | ${location.name} - Toast All Day`} description={`Award-winning breakfast & brunch at 129 Meeting St, Downtown Charleston. Open daily 6am-3pm. Farm-fresh ingredients, craft cocktails & family-friendly dining near City Market. Order online or join our waitlist!`} keywords="best brunch downtown Charleston, Charleston breakfast restaurant, Meeting Street brunch, Charleston City Market dining, farm to table Charleston, Sunday brunch Charleston SC" />
      <LocationSchema name={location.name} address={location.address} city={location.city} state={location.state} zip={location.zip} phone={`+1-${location.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`} openTime={location.openTime} closeTime={location.closeTime} latitude={location.latitude} longitude={location.longitude} url={`https://toast-all-day.lovable.app/locations/toast-meeting`} />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img src={location.image} alt={`${location.name} - Best Breakfast Restaurant in Downtown Charleston`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4">{location.name}</h1>
              <p className="text-white/90 text-lg mt-2">{location.address}, {location.fullCity}</p>
            </div>
          </div>
        </section>

        {/* NAP Section - Consistent Name, Address, Phone */}
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
                  <h2 className="text-3xl mb-4 text-primary">Best Breakfast & Brunch in {location.neighborhood}</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Located in the heart of historic downtown Charleston, Toast! on Meeting is our flagship location offering award-winning breakfast and brunch with locally-sourced ingredients. Just steps from the famous Charleston City Market, we're the perfect stop for both tourists exploring the Holy City and locals looking for their morning fix.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Our downtown Charleston location features a cozy, welcoming atmosphere with both indoor seating and a charming outdoor patio. Whether you're craving our signature chicken and waffles, fluffy buttermilk pancakes, or a refreshing mimosa flight, Toast! on Meeting delivers an unforgettable dining experience in the heart of Charleston.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Walking distance from Charleston City Market & Waterfront Park</li>
                    <li>• Early opening at 6am – perfect for early risers</li>
                    <li>• Pet-friendly outdoor patio seating</li>
                    <li>• Full bar with craft cocktails and local beers</li>
                    <li>• Great for brunch before exploring Rainbow Row or The Battery</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 text-primary">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Toast! on Meeting</h4>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.fullCity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="text-muted-foreground hover:text-accent transition-colors">
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
                  <iframe src={mapUrl} width="100%" height="100%" style={{
                  border: 0,
                  borderRadius: '0.75rem'
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="shadow-lg" title={`Map showing ${location.name} location in ${location.neighborhood}`} />
                </div>
                
                {/* Nearby Attractions */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl mb-4 text-primary">Nearby Attractions</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAttractions.map(attraction => <span key={attraction} className="bg-background px-3 py-1 rounded-full text-sm border text-foreground">
                        {attraction}
                      </span>)}
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
              <h2 className="text-3xl mb-4 text-primary">Ready for the Best Brunch in Charleston?</h2>
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
                src="https://reputationhub.site/reputation/widgets/review_widget/Uz6YkC2Cqk92rFC2504Q?widgetId=698b5367d6e303bafa40304b"
                frameBorder="0"
                scrolling="no"
                title="Meeting Street Guest Reviews"
                style={{ minWidth: '100%', width: '100%', minHeight: '600px' }}
              />
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <GiftCardSection giftCardUrl="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastMeeting;
