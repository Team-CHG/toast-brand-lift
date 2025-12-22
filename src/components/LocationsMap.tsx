import React, { useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  orderUrl: string;
  menuUrl: string;
  waitlistUrl?: string;
  embedQuery: string;
}

const locations: Location[] = [
  {
    name: "Toast! on Meeting",
    address: "155 Meeting Street",
    city: "Charleston, SC 29401",
    phone: "(843) 994-3598",
    hours: "Monday – Sunday: 6am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-charleston-155-meeting-st",
    menuUrl: "https://toastallday.com/toast-menu/",
    waitlistUrl: "https://tables.toasttab.com/restaurants/68470c10-a7ea-4c0f-aa51-13ad297c1a49/joinWaitlist",
    embedQuery: "Toast+All+Day,+155+Meeting+St,+Charleston,+SC+29401",
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
    embedQuery: "Toast+All+Day,+453+King+St,+Charleston,+SC+29403",
  },
  {
    name: "Toast! on Coleman",
    address: "835 Coleman Boulevard",
    city: "Mt. Pleasant, SC 29464",
    phone: "(843) 585-3495",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
    menuUrl: "https://toastallday.com/toast-menu/",
    embedQuery: "Toast+All+Day,+835+Coleman+Blvd,+Mt+Pleasant,+SC+29464",
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
    embedQuery: "Toast+All+Day,+1150+Hungry+Neck+Blvd,+Mt+Pleasant,+SC+29464",
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
    embedQuery: "Toast+All+Day,+2026+Savannah+Hwy,+Charleston,+SC+29407",
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
    embedQuery: "Toast+All+Day,+717+Old+Trolley+Rd,+Summerville,+SC+29485",
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
    embedQuery: "Toast+All+Day,+1+W+Broughton+St,+Savannah,+GA+31401",
  },
];

interface LocationsMapProps {
  onLocationSelect?: (location: Location | null) => void;
}

const LocationsMap: React.FC<LocationsMapProps> = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Build Google Maps embed URL - search mode shows all Toast! All Day pins
  const getMapUrl = () => {
    if (selectedLocation) {
      // When a location is selected, zoom into that specific location
      return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3000!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s${encodeURIComponent(selectedLocation.address + ', ' + selectedLocation.city)}!5e0!3m2!1sen!2sus&q=${encodeURIComponent('Toast All Day ' + selectedLocation.address + ' ' + selectedLocation.city)}`;
    }
    // Default: search for "Toast All Day" to show all locations with pins
    return "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d430346.46101056464!2d-79.70159282744464!3d32.577344423327034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sToast%20All%20Day!5e0!3m2!1sen!2sus";
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    onLocationSelect?.(location);
  };

  const closeDetails = () => {
    setSelectedLocation(null);
    onLocationSelect?.(null);
  };

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Locations List */}
        <div className="lg:col-span-1 space-y-3 max-h-[500px] overflow-y-auto pr-2">
          <h3 className="text-lg font-semibold sticky top-0 bg-background py-2">
            Our Locations
          </h3>
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(location)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedLocation?.name === location.name
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border hover:border-primary/50 hover:bg-secondary/50'
              }`}
            >
              <h4 className="font-semibold text-sm">{location.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                {location.address}, {location.city}
              </p>
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div className="lg:col-span-2 relative">
          <iframe
            src={getMapUrl()}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg"
          />

          {/* Selected Location Details Overlay */}
          {selectedLocation && (
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border">
              <button
                onClick={closeDetails}
                className="absolute top-2 right-2 p-1 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              
              <h3 className="text-lg font-bold mb-3 pr-6">{selectedLocation.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    {selectedLocation.address}, {selectedLocation.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${selectedLocation.phone.replace(/[^0-9]/g, '')}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {selectedLocation.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{selectedLocation.hours}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <a href={selectedLocation.orderUrl} target="_blank" rel="noopener noreferrer">
                    Order Online
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={selectedLocation.menuUrl} target="_blank" rel="noopener noreferrer">
                    View Menu
                  </a>
                </Button>
                {selectedLocation.waitlistUrl && (
                  <Button asChild variant="secondary" size="sm">
                    <a href={selectedLocation.waitlistUrl} target="_blank" rel="noopener noreferrer">
                      Join Waitlist
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationsMap;
