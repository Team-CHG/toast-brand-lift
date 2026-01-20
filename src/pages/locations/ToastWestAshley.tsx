import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import GiftCardSection from "@/components/GiftCardSection";
import RewardsCtaSection from "@/components/RewardsCtaSection";
import MenuCarousel from "@/components/MenuCarousel";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Star, Car, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import toastWestAshleyImg from "@/assets/locations/toast-west-ashley.jpg";

const ToastWestAshley = () => {
  const location = {
    name: "Toast! West Ashley",
    address: "2026 Savannah Hwy",
    city: "Charleston",
    state: "SC",
    zip: "29407",
    fullCity: "Charleston, SC 29407",
    phone: "(843) 483-8940",
    hours: "Monday – Sunday: 7am – 3pm",
    openTime: "07:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/236efb55-104c-49e1-8b73-3d9af66684ce/joinWaitlist",
    embedQuery: "Toast+All+Day,+2026+Savannah+Hwy,+Charleston,+SC+29407",
    image: toastWestAshleyImg,
    latitude: 32.7720,
    longitude: -79.9894,
    neighborhood: "West Ashley",
    nearbyAttractions: ["Avondale Shopping District", "Charles Towne Landing", "Citadel Mall", "West Ashley Greenway"],
    parking: "Free parking lot available with convenient access from Savannah Highway.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch in West Ashley Charleston | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast & brunch at ${location.address}, West Ashley. Open daily 7am-3pm. Near Avondale & Charles Towne Landing. Farm-fresh ingredients & craft cocktails. Order online!`}
        keywords="West Ashley breakfast, Savannah Highway brunch, best brunch West Ashley, Charleston restaurant, Avondale dining, family breakfast West Ashley SC"
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
        url={`https://toast-all-day.lovable.app/locations/toast-west-ashley`}
      />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={`${location.name} - Best Breakfast Restaurant in West Ashley Charleston`}
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

        {/* Primary CTA Section */}
        <section className="py-8 bg-accent">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                  Order Online Now <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-card hover:bg-card/90 text-foreground">
                <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-card hover:bg-card/90 text-foreground">
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>
                  Call to Reserve
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4">Best Breakfast & Brunch in {location.neighborhood}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Toast! West Ashley serves the Savannah Highway corridor with our signature breakfast and brunch offerings. This location provides a comfortable setting for locals and travelers alike to enjoy delicious, freshly-prepared meals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Conveniently located near the Avondale shopping district and Charles Towne Landing State Historic Site, our West Ashley location is perfect for a weekend brunch or a weekday breakfast before exploring Charleston's west side. With easy parking and a welcoming atmosphere, we've become a neighborhood favorite.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-complementary rounded-xl p-6">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Easy access from Savannah Highway with free parking</li>
                    <li>• Perfect brunch before visiting Charles Towne Landing</li>
                    <li>• Near the eclectic shops and cafes of Avondale</li>
                    <li>• Great spot for West Ashley Greenway cyclists and walkers</li>
                    <li>• Neighborhood-friendly atmosphere with local regulars</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card border rounded-xl p-6">
                  <h3 className="text-xl mb-4">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Toast! West Ashley</h4>
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
                    title={`Map showing ${location.name} location in West Ashley`}
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

        {/* Menu Carousel */}
        <MenuCarousel />

        {/* Secondary CTA */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-4">Ready for the Best Brunch in West Ashley?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
        </section>

        {/* Gift Card Section */}
        <GiftCardSection giftCardUrl="https://order.toasttab.com/egiftcards/toast-west-ashley-2026-savannah-hwy-tvrci" />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastWestAshley;
