import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import toastWestAshleyImg from "@/assets/locations/toast-west-ashley.jpg";

const ToastWestAshley = () => {
  const location = {
    name: "Toast! West Ashley",
    address: "2026 Savannah Hwy",
    city: "Charleston, SC 29407",
    phone: "(843) 483-8940",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/236efb55-104c-49e1-8b73-3d9af66684ce/joinWaitlist",
    embedQuery: "Toast+All+Day,+2026+Savannah+Hwy,+Charleston,+SC+29407",
    image: toastWestAshleyImg,
    description: "Toast! West Ashley serves the Savannah Highway corridor with our signature breakfast and brunch offerings. This location provides a comfortable setting for locals and travelers alike to enjoy delicious, freshly-prepared meals.",
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.embedQuery}`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${location.name} - Toast All Day | West Ashley Breakfast & Brunch`}
        description={`Visit ${location.name} at ${location.address}, ${location.city}. ${location.hours}. Award-winning breakfast in West Ashley.`}
        keywords="Toast West Ashley, Savannah Highway breakfast, West Ashley brunch, Charleston restaurant"
      />
      <Navigation />
      <SideDrawer />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img 
            src={location.image} 
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4">{location.name}</h1>
              <p className="text-white/90 text-lg mt-2">{location.address}, {location.city}</p>
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
                  <h2 className="text-3xl mb-4">About This Location</h2>
                  <p className="text-muted-foreground leading-relaxed">{location.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg">Address</h3>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg">Phone</h3>
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
                      <h3 className="text-lg">Hours</h3>
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                      Order Online <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={location.menuUrl} target="_blank" rel="noopener noreferrer">
                      View Menu
                    </a>
                  </Button>
                  {location.waitlistUrl && (
                    <Button asChild variant="secondary" size="lg">
                      <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                        Join Waitlist
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Map Column */}
              <div className="h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToastWestAshley;
