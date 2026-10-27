import React, { useState } from 'react';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLocation } from '@/lib/locations';
import { useIsMobile } from '@/hooks/use-mobile';
import toastMeetingImg from '@/assets/locations/toast-meeting.avif';
import toastKingImg from '@/assets/locations/toast-king.jpg';

import toastMtPleasantImg from '@/assets/locations/toast-mt-pleasant.jpg';
import toastWestAshleyImg from '@/assets/locations/toast-west-ashley.jpg';
import toastSummervilleImg from '@/assets/locations/toast-summerville.jpg';
import toastSavannahImg from '@/assets/locations/toast-savannah.jpg';
interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  orderUrl: string;
  menuUrl: string;
  waitlistUrl?: string;
  reviewUrl: string;
  embedQuery: string;
  temporarilyClosed?: boolean;
  image: string;
}
const base = (slug: string) => {
  const l = getLocation(slug);
  return {
    name: l.name,
    address: l.street,
    city: `${l.city}, ${l.state} ${l.zip}`,
    phone: l.phone,
    hours: l.hours,
    orderUrl: l.orderUrl,
    menuUrl: `/menus/${l.menuGroup}`,
    waitlistUrl: l.waitlistUrl,
  };
};
const locations: Location[] = [{
  ...base("toast-meeting"),
  reviewUrl: "https://g.page/r/CbjkUb_VOmzFEAE/review",
  embedQuery: "Toast+All+Day,+127+Meeting+St,+Charleston,+SC+29401",
  image: toastMeetingImg
}, {
  ...base("toast-king"),
  reviewUrl: "https://g.page/r/Cf1kHg4xwRH-EAE/review",
  embedQuery: "Toast+All+Day,+453+King+St,+Charleston,+SC+29403",
  image: toastKingImg
}, {
  ...base("toast-mt-pleasant"),
  reviewUrl: "https://g.page/r/CZ-MhIXdCf71EAE/review",
  embedQuery: "Toast+All+Day,+1150+Hungry+Neck+Blvd,+Mt+Pleasant,+SC+29464",
  image: toastMtPleasantImg
}, {
  ...base("toast-west-ashley"),
  reviewUrl: "https://g.page/r/Cc7pS_ELZC-mEAE/review",
  embedQuery: "Toast+All+Day,+2026+Savannah+Hwy,+Charleston,+SC+29407",
  image: toastWestAshleyImg
}, {
  ...base("toast-summerville"),
  reviewUrl: "https://g.page/r/CfHscKnFZrnUEAE/review",
  embedQuery: "Toast+All+Day,+717+Old+Trolley+Rd,+Summerville,+SC+29485",
  image: toastSummervilleImg
}, {
  ...base("toast-savannah"),
  reviewUrl: "https://g.page/r/Cb2KNFpxhv-aEAE/review",
  embedQuery: "Toast+All+Day,+1+W+Broughton+St,+Savannah,+GA+31401",
  image: toastSavannahImg
}];
export { locations };
export type { Location };
interface LocationsMapProps {
  onLocationSelect?: (location: Location | null) => void;
}
const LocationsMap: React.FC<LocationsMapProps> = ({
  onLocationSelect
}) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  // Mobile: defer the Google Maps iframe (heavy 3rd-party JS) until the
  // user taps. Eliminates ~500KB+ of JS from initial mobile load.
  const isMobile = useIsMobile();
  const [mapMounted, setMapMounted] = useState(false);
  const shouldRenderMap = !isMobile || mapMounted;

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
  return <div className="relative">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Locations List */}
        <div className="lg:col-span-1 space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {locations.map((location, index) => <button key={index} onClick={() => handleLocationClick(location)} className={`w-full text-left p-4 rounded-lg border transition-all ${selectedLocation?.name === location.name ? 'border-accent bg-accent/10 shadow-md' : 'border-accent/20 hover:border-accent/50 hover:bg-accent/5'}`}>
              <h4 className="font-semibold text-sm text-foreground">{location.name}</h4>
              {location.temporarilyClosed && <p className="text-xs font-semibold text-red-600 mt-1">Temporarily Closed</p>}
              <p className="text-xs text-muted-foreground mt-1">
                {location.address}, {location.city}
              </p>
            </button>)}
        </div>

        {/* Map Container */}
        <div className="lg:col-span-2 relative">
          {shouldRenderMap ? (
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
          ) : (
            <button
              type="button"
              onClick={() => setMapMounted(true)}
              aria-label="Load interactive map"
              className="w-full h-[500px] rounded-xl shadow-lg flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/10 via-background to-highlight/10 border border-accent/20 active:scale-[0.99] transition-transform"
            >
              <MapPin className="h-10 w-10 text-accent" />
              <span className="text-base font-semibold text-foreground">Tap to load map</span>
              <span className="text-xs text-muted-foreground px-6 text-center">
                Interactive Google Map · {locations.length} locations
              </span>
            </button>
          )}

          {/* Selected Location Details Overlay */}
          {selectedLocation && <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-accent/30">
              <button onClick={closeDetails} className="absolute top-2 right-2 p-1 hover:bg-accent/10 rounded-full transition-colors">
                <X className="h-4 w-4" />
              </button>
              
              <h3 className="text-lg font-bold mb-3 pr-6 text-accent-foreground">{selectedLocation.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    {selectedLocation.address}, {selectedLocation.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={`tel:${selectedLocation.phone.replace(/[^0-9]/g, '')}`} className="text-sm hover:text-accent transition-colors">
                    {selectedLocation.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{selectedLocation.hours}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild variant="accent" size="sm">
                  <a href={selectedLocation.orderUrl} target="_blank" rel="noopener noreferrer">
                    Order Online
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-highlight text-highlight-foreground font-bold shadow-md shadow-highlight/30 ring-2 ring-highlight/40 hover:bg-highlight/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <a href={selectedLocation.reviewUrl} target="_blank" rel="noopener noreferrer">
                    ⭐ Review Us
                  </a>
                </Button>
                {selectedLocation.waitlistUrl && <Button asChild variant="secondary" size="sm">
                    <a href={selectedLocation.waitlistUrl} target="_blank" rel="noopener noreferrer">
                      Join Waitlist
                    </a>
                  </Button>}
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default LocationsMap;