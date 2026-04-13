import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap, { locations } from "@/components/LocationsMap";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const Locations = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Locations - Toast All Day | Charleston, Mt Pleasant, Summerville, Savannah"
        description="Find your nearest Toast All Day restaurant. 7 locations across Charleston, Mt. Pleasant, Summerville SC and Savannah GA."
        keywords="Toast All Day locations, Charleston breakfast, Mt Pleasant brunch, Summerville restaurant, Savannah breakfast"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Interactive Map Section */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        aria-labelledby="map-heading"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <FloatingElement className="absolute top-1/3 right-10 opacity-10 hidden lg:block" delay={2} distance={20}>
          <MapPin className="w-20 h-20 text-accent" />
        </FloatingElement>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Find Your Nearest Location
            </h1>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-highlight" />
              <span className="text-highlight uppercase tracking-widest text-sm font-medium">Explore Our Locations</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-highlight" />
            </div>
            <h2 id="map-heading" className="sr-only">Interactive Location Map</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Click on any location to see details and get directions.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-accent/10">
              <LocationsMap />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 relative" aria-labelledby="all-locations"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4">
          <h2 id="all-locations" className="sr-only">All Toast All Day Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl ring-1 ring-accent/10 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={`${location.name} restaurant exterior at ${location.address}, ${location.city}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {location.temporarilyClosed && (
                      <div className="absolute top-3 right-3 bg-highlight text-highlight-foreground text-xs font-semibold px-2 py-1 rounded-full">
                        Temporarily Closed
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{location.name}</h3>
                    
                    <address className="space-y-3 mb-6 not-italic">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-primary">{location.address}</p>
                          <p className="text-muted-foreground">{location.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                        <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="hover:text-accent transition-colors text-primary" aria-label={`Call ${location.name}`}>{location.phone}</a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">{location.hours}</p>
                      </div>
                    </address>

                    <div className="flex flex-col gap-2">
                      <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">Order Online</a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full rounded-full border-accent/20">
                        <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer">Review Us</a>
                      </Button>
                      {location.waitlistUrl && (
                        <Button asChild size="sm" className="w-full bg-complementary hover:bg-complementary/80 text-primary font-semibold rounded-full">
                          <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">Join Waitlist</a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
