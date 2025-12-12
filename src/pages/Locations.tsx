import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  {
    name: "Toast! on Meeting",
    address: "155 Meeting Street",
    city: "Charleston, SC 29401",
    phone: "(843) 994-3598",
    hours: "Monday – Sunday: 6am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/68470c10-a7ea-4c0f-aa51-13ad297c1a49/joinWaitlist",
  },
  {
    name: "Toast! on King",
    address: "453 King Street",
    city: "Charleston, SC 29403",
    phone: "(843) 793-0364",
    hours: "Monday – Sunday: 7am-3pm",
    orderUrl: "https://order.toasttab.com/online/toast-king-st-451-king-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/d54baf9c-c752-4df6-81af-70807504a517/joinWaitlist",
  },
  {
    name: "Toast! on Coleman",
    address: "835 Coleman Boulevard",
    city: "Mt. Pleasant, SC 29464",
    phone: "(843) 585-3495",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
    menuUrl: "https://toastallday.com/toast-menu/",
  },
  {
    name: "Toast! Mt. Pleasant",
    address: "1150 Hungry Neck Blvd.",
    city: "Mt. Pleasant, SC 29464",
    phone: "(843) 350-5256",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/05cb9aff-c588-49f4-83c3-125ca914376c/joinWaitlist",
  },
  {
    name: "Toast! West Ashley",
    address: "2026 Savannah Hwy",
    city: "Charleston, SC 29407",
    phone: "(843) 483-8940",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-west-ashley-2026-savannah-hwy-tvrci",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/236efb55-104c-49e1-8b73-3d9af66684ce/joinWaitlist",
  },
  {
    name: "Toast! Summerville",
    address: "717 Old Trolley Road",
    city: "Summerville, SC 29485",
    phone: "(843) 900-4422",
    hours: "Monday-Sunday: 7am-3pm",
    orderUrl: "https://order.toasttab.com/online/toast-summerville-717-old-trolley-road-ste-9%20&%2010",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/48ca16ab-9cc0-4c0b-a826-d3cc2118e44a/joinWaitlist",
  },
  {
    name: "Toast! Savannah",
    address: "1 W Broughton Street",
    city: "Savannah, GA 31401",
    phone: "(912) 513-8920",
    hours: "Monday – Sunday: 7AM – 10PM",
    orderUrl: "https://order.toasttab.com/online/toast-savannah-1-w-broughton-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/97f1d59a-b51c-4a46-92e7-4251dd54980d/joinWaitlist",
  },
];

const Locations = () => {
  return (
    <div className="min-h-screen">
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

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                    {location.waitlistUrl && (
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <a href={location.waitlistUrl} target="_blank" rel="noopener noreferrer">
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
