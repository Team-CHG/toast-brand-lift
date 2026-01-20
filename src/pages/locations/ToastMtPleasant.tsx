import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import LocationSchema from "@/components/LocationSchema";
import GiftCardSection from "@/components/GiftCardSection";
import RewardsCtaSection from "@/components/RewardsCtaSection";
import MenuCarousel from "@/components/MenuCarousel";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, Utensils, Star, Car, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import toastMtPleasantImg from "@/assets/locations/toast-mt-pleasant.jpg";

const ToastMtPleasant = () => {
  const location = {
    name: "Toast! Mt. Pleasant",
    address: "1150 Hungry Neck Blvd.",
    city: "Mt. Pleasant",
    state: "SC",
    zip: "29464",
    fullCity: "Mt. Pleasant, SC 29464",
    phone: "(843) 350-5256",
    hours: "Monday – Sunday: 7am – 3pm",
    openTime: "07:00",
    closeTime: "15:00",
    orderUrl: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/05cb9aff-c588-49f4-83c3-125ca914376c/joinWaitlist",
    embedQuery: "Toast+All+Day,+1150+Hungry+Neck+Blvd,+Mt+Pleasant,+SC+29464",
    image: toastMtPleasantImg,
    latitude: 32.8138,
    longitude: -79.8621,
    neighborhood: "Hungry Neck",
    nearbyAttractions: ["Belle Hall Shopping Center", "Towne Centre", "I'On Community", "Carolina Park"],
    parking: "Large free parking lot with easy access directly in front of the restaurant.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`Best Brunch in Mt Pleasant SC | ${location.name} - Toast All Day`}
        description={`Award-winning breakfast & brunch at ${location.address}, Mt. Pleasant. Open daily 7am-3pm. Family-friendly dining near Belle Hall & Towne Centre. Farm-fresh ingredients & craft cocktails. Order online!`}
        keywords="Mt Pleasant brunch, Hungry Neck breakfast, best brunch Mt Pleasant SC, East Cooper restaurant, family breakfast Mt Pleasant, Belle Hall dining"
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
        url={`https://toast-all-day.lovable.app/locations/toast-mt-pleasant`}
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
                  <h2 className="text-3xl mb-4">Best Breakfast & Brunch in {location.neighborhood}, Mt. Pleasant</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our Hungry Neck Boulevard location in Mt. Pleasant offers the full Toast! experience with ample seating and a family-friendly atmosphere. Conveniently located for residents of Mt. Pleasant and visitors exploring the East Cooper area.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This spacious location near Belle Hall Shopping Center and Towne Centre is perfect for families, large groups, and anyone seeking a delicious breakfast or brunch in Mt. Pleasant. With a large parking lot and welcoming atmosphere, it's become a go-to destination for East Cooper residents.
                  </p>
                </div>

                {/* Unique Local Content */}
                <div className="bg-complementary rounded-xl p-6">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Why Locals Love This Location
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Spacious seating perfect for families and large groups</li>
                    <li>• Large free parking lot with easy access</li>
                    <li>• Convenient location near Belle Hall & Towne Centre shopping</li>
                    <li>• Kid-friendly menu with favorites for the whole family</li>
                    <li>• Perfect brunch spot for I'On and Carolina Park residents</li>
                  </ul>
                </div>

                {/* NAP Display */}
                <div className="space-y-4 bg-card border rounded-xl p-6">
                  <h3 className="text-xl mb-4">Contact & Hours</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Toast! Mt. Pleasant</h4>
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

        {/* Menu Carousel */}
        <MenuCarousel />

        {/* Secondary CTA */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl mb-4">Ready for the Best Brunch in Mt. Pleasant?</h2>
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
        <GiftCardSection giftCardUrl="https://order.toasttab.com/egiftcards/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g" />

        {/* Rewards CTA Section */}
        <RewardsCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ToastMtPleasant;
