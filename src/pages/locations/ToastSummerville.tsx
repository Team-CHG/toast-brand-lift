import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import GiftCardSection from "@/components/GiftCardSection";
import RewardsCtaSection from "@/components/RewardsCtaSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Utensils, Star, Car, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import toastSummervilleImg from "@/assets/locations/toast-summerville.jpg";

const ToastSummerville = () => {
  const location = {
    name: "Toast! Summerville",
    address: "717 Old Trolley Road",
    city: "Summerville",
    state: "SC",
    zip: "29485",
    fullCity: "Summerville, SC 29485",
    phone: "(843) 900-4422",
    hours: "Monday – Sunday: 7am – 3pm",
    openTime: "07:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/48ca16ab-9cc0-4c0b-a826-d3cc2118e44a/joinWaitlist",
    embedQuery: "Toast+All+Day,+717+Old+Trolley+Rd,+Summerville,+SC+29485",
    image: toastSummervilleImg,
    latitude: 33.0185,
    longitude: -80.1756,
    neighborhood: "Old Trolley Road",
    nearbyAttractions: ["Azalea Park", "Downtown Summerville", "Hutchinson Square", "Summerville-Dorchester Museum"],
    parking: "Spacious free parking lot with easy access from Old Trolley Road.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch in Summerville SC | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast & brunch at ${location.address}, Summerville SC. Open daily 7am-3pm. Near Downtown Summerville & Azalea Park. Farm-fresh ingredients & craft cocktails. Order online!`}
        keywords="Summerville breakfast, Old Trolley Road brunch, best brunch Summerville SC, Flowertown restaurant, family breakfast Summerville, Dorchester County dining"
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
        url={`https://toast-all-day.lovable.app/locations/toast-summerville`}
      />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={`${location.name} - Best Breakfast Restaurant in Summerville SC`}
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
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4">Best Breakfast & Brunch in Summerville, "Flowertown in the Pines"</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Toast! Summerville brings our award-winning breakfast and brunch to the charming town of Summerville. Known as "Flowertown in the Pines," this location offers the perfect spot for a delicious meal in a welcoming atmosphere.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Located on Old Trolley Road, we're the ideal destination for Summerville residents and visitors looking for the best breakfast and brunch in Dorchester County. With easy access from I-26 and plenty of parking, it's never been easier to enjoy the Toast! experience in Summerville.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-complementary rounded-xl p-6">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Perfect brunch spot for Summerville's growing community</li>
                    <li>• Near beautiful Azalea Park and downtown Summerville</li>
                    <li>• Easy access from I-26 with spacious parking</li>
                    <li>• Family-friendly with kids' menu favorites</li>
                    <li>• Great meeting spot before the famous Flowertown Festival</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card border rounded-xl p-6">
                  <h3 className="text-xl mb-4">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Toast! Summerville</h4>
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
                    title={`Map showing ${location.name} location in Summerville`}
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
            <h2 className="text-3xl mb-4">Ready for the Best Brunch in Summerville?</h2>
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
        <GiftCardSection />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastSummerville;
