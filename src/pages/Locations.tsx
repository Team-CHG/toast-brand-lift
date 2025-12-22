import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap, { locations } from "@/components/LocationsMap";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Locations = () => {
  return <div className="min-h-screen">
      <Navigation />
      <SideDrawer />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Nearest <span className="text-primary">Toast! All Day</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Visit us at any of our locations across South Carolina and Georgia for an unforgettable dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any location to see details and get directions.
            </p>
          </div>
          <LocationsMap />
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  {location.temporarilyClosed && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Temporarily Closed
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm">{location.hours}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button asChild size="sm" className="w-full">
                      <a href={location.orderUrl} target="_blank" rel="noopener noreferrer">
                        Order Online
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={location.menuUrl} target="_blank" rel="noopener noreferrer">
                        View Menu
                      </a>
                    </Button>
                    {location.waitlistUrl && <Button asChild variant="secondary" size="sm" className="w-full">
                        <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
                          Join Waitlist
                        </a>
                      </Button>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Locations;