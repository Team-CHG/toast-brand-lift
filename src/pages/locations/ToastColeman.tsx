import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Utensils, Star, Car, Gift, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import toastColemanImg from "@/assets/locations/toast-coleman.jpg";

const ToastColeman = () => {
  const location = {
    name: "Toast! on Coleman",
    address: "835 Coleman Boulevard",
    city: "Mt. Pleasant",
    state: "SC",
    zip: "29464",
    fullCity: "Mt. Pleasant, SC 29464",
    phone: "(843) 585-3495",
    hours: "Monday – Sunday: 7am – 3pm",
    openTime: "07:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
    menuUrl: "https://toastallday.com/toast-menu/",
    embedQuery: "Toast+All+Day,+835+Coleman+Blvd,+Mt+Pleasant,+SC+29464",
    temporarilyClosed: true,
    image: toastColemanImg,
    latitude: 32.7946,
    longitude: -79.8627,
    neighborhood: "Coleman Boulevard",
    nearbyAttractions: ["Shem Creek", "Patriots Point", "Mount Pleasant Pier", "Old Village"],
    parking: "Free parking lot available on-site with ample spaces.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch in Mt Pleasant SC | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast & brunch at ${location.address}, Mt. Pleasant. Near Shem Creek & Patriots Point. Farm-fresh ingredients & craft cocktails. Currently temporarily closed.`}
        keywords="Mt Pleasant breakfast, Coleman Boulevard brunch, Shem Creek dining, best brunch Mt Pleasant SC, East Cooper restaurant, family brunch Mt Pleasant"
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
        url={`https://toast-all-day.lovable.app/locations/toast-coleman`}
      />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={`${location.name} - Best Breakfast Restaurant in Mt Pleasant SC`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4">{location.name}</h1>
              <p className="text-white/90 text-lg mt-2">{location.address}, {location.fullCity}</p>
            </div>
          </div>
        </section>

        {/* Temporarily Closed Notice */}
        {location.temporarilyClosed && (
          <section className="bg-destructive/10 border-b border-destructive/20 py-4">
            <div className="container mx-auto px-4 flex items-center justify-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <p className="text-destructive font-semibold">This location is temporarily closed. Please visit our other Mt. Pleasant location!</p>
            </div>
          </section>
        )}

        {/* NAP Section */}
        <section className="bg-complementary py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center md:text-left md:justify-between items-center">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">{location.address}, {location.fullCity}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="font-medium hover:text-accent transition-colors">
                  {location.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">{location.hours}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Location CTA */}
        <section className="py-8 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent-foreground mb-4">Looking for Toast! in Mt. Pleasant? Visit our Hungry Neck location!</p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/locations/toast-mt-pleasant">
                Visit Toast! Mt. Pleasant
              </Link>
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4">About Our {location.neighborhood} Location</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Toast! on Coleman brings our beloved breakfast and brunch experience to the Coleman Boulevard corridor in Mt. Pleasant. This location features a welcoming atmosphere perfect for families and friends gathering for a delicious meal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Conveniently located near Shem Creek and Patriots Point, our Coleman Boulevard location has been a favorite for Mt. Pleasant residents and visitors to the East Cooper area. While we're temporarily closed, we invite you to visit our nearby Hungry Neck Boulevard location for the same great Toast! experience.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-complementary rounded-xl p-6">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    About This Location
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Minutes from Shem Creek's waterfront restaurants and bars</li>
                    <li>• Easy access from Patriots Point and the USS Yorktown</li>
                    <li>• Family-friendly atmosphere with kids' menu options</li>
                    <li>• Convenient location on busy Coleman Boulevard</li>
                    <li>• Free on-site parking</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card border rounded-xl p-6">
                  <h3 className="text-xl mb-4">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Toast! on Coleman</h4>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.fullCity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
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
                      <h4 className="font-semibold">Hours</h4>
                      <p className="text-muted-foreground">{location.hours}</p>
                      <p className="text-destructive text-sm font-medium mt-1">Currently Temporarily Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Parking</h4>
                      <p className="text-muted-foreground">{location.parking}</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/locations/toast-mt-pleasant">
                      Visit Hungry Neck Location
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={location.menuUrl} target="_blank" rel="noopener noreferrer">
                      <Utensils className="mr-2 h-4 w-4" /> View Full Menu
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
                    title={`Map showing ${location.name} location in Mt Pleasant`}
                  />
                </div>
                
                {/* Nearby Attractions */}
                <div className="bg-complementary rounded-xl p-6">
                  <h3 className="text-xl mb-4">Nearby Attractions</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAttractions.map((attraction) => (
                      <span key={attraction} className="bg-card px-3 py-1 rounded-full text-sm border">
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-4">Visit Our Other Mt. Pleasant Location</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              While this location is temporarily closed, you can enjoy the same great Toast! experience at our Hungry Neck Boulevard location, just minutes away!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/locations/toast-mt-pleasant">
                  Toast! Mt. Pleasant
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/locations">
                  View All Locations
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToastColeman;
