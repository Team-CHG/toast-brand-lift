import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Utensils, Star, Car, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import toastSavannahImg from "@/assets/locations/toast-savannah.jpg";

const ToastSavannah = () => {
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
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4">{location.name}</h1>
              <p className="text-white/90 text-lg mt-2">{location.address}, {location.fullCity}</p>
            </div>
          </div>
        </section>

        {/* NAP Section */}
        <section className="bg-primary/5 py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center md:text-left md:justify-between items-center">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{location.address}, {location.fullCity}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="font-medium hover:text-primary transition-colors">
                  {location.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{location.hours}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA Section */}
        <section className="py-8 bg-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                  Order Online Now <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>
                  Call to Reserve
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4">Best Breakfast, Brunch & Dinner in {location.neighborhood}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Toast! Savannah brings our award-winning breakfast and brunch experience to the heart of historic Savannah's famous Broughton Street. Our Georgia location offers extended hours until 10pm, so you can enjoy delicious meals from morning through evening.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Located at the corner of Broughton and Bull Street in Savannah's vibrant downtown, we're perfectly positioned for tourists exploring the city's famous squares and locals looking for the best breakfast, brunch, or dinner in the Historic District. Our extended hours make us unique among Toast! locations!
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Extended hours until 10pm</strong> – our only location open for dinner!</li>
                    <li>• Prime location on historic Broughton Street shopping district</li>
                    <li>• Walking distance from Forsyth Park and River Street</li>
                    <li>• Perfect for SCAD students, tourists, and Savannah locals</li>
                    <li>• Full bar with craft cocktails and local Georgia beers</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-background border rounded-xl p-6">
                  <h3 className="text-xl mb-4">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Toast! Savannah</h4>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.fullCity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a 
                        href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Hours</h4>
                      <p className="text-muted-foreground">{location.hours}</p>
                      <p className="text-primary text-sm font-medium mt-1">Open late! Breakfast, Brunch & Dinner</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Parking</h4>
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
                    title={`Map showing ${location.name} location in Downtown Savannah`}
                  />
                </div>
                
                {/* Nearby Attractions */}
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-xl mb-4">Nearby Attractions</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAttractions.map((attraction) => (
                      <span key={attraction} className="bg-background px-3 py-1 rounded-full text-sm border">
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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-4">Ready for the Best Brunch in Savannah?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToastSavannah;
