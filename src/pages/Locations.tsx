import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap, { locations } from "@/components/LocationsMap";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Locations = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Locations - Toast All Day | Charleston, Mt Pleasant, Summerville, Savannah"
        description="Find your nearest Toast All Day restaurant. 7 locations across Charleston, Mt. Pleasant, Summerville SC and Savannah GA. View hours, menus, and order online."
        keywords="Toast All Day locations, Charleston breakfast, Mt Pleasant brunch, Summerville restaurant, Savannah breakfast, order online"
      />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Interactive Map Section - Celebratory Style */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" aria-labelledby="map-heading">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-complementary to-accent/5" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto relative z-10">
          {/* Header with decorative line */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Find Your Nearest Location
            </h1>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Explore Our Locations</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 id="map-heading" className="sr-only">Interactive Location Map</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Click on any location to see details and get directions.
            </p>
          </div>
          
          {/* Map Container with enhanced styling */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-accent/20">
            <LocationsMap />
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16" aria-labelledby="all-locations">
        <div className="container mx-auto px-4">
          <h2 id="all-locations" className="sr-only">All Toast All Day Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden border-accent/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`${location.name} restaurant exterior at ${location.address}, ${location.city}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {location.temporarilyClosed && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Temporarily Closed
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-accent-foreground">{location.name}</h3>
                  
                  <address className="space-y-3 mb-6 not-italic">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                      <a 
                        href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} 
                        className="hover:text-accent transition-colors"
                        aria-label={`Call ${location.name} at ${location.phone}`}
                      >
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm">{location.hours}</p>
                    </div>
                  </address>

                  <div className="flex flex-col gap-2">
                    <Button asChild variant="accent" size="sm" className="w-full">
                      <a 
                        href={location.orderUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Order online from ${location.name}`}
                      >
                        Order Online
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href={location.reviewUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Leave a review for ${location.name}`}
                      >
                        Review Us
                      </a>
                    </Button>
                    {location.waitlistUrl && (
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <a 
                          href={location.waitlistUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Join waitlist at ${location.name}`}
                        >
                          Join Waitlist
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;