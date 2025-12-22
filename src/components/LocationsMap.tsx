import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Phone, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  orderUrl: string;
  menuUrl: string;
  waitlistUrl?: string;
  coordinates: [number, number];
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
    coordinates: [-79.9311, 32.7820],
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
    coordinates: [-79.9403, 32.7873],
  },
  {
    name: "Toast! on Coleman",
    address: "835 Coleman Boulevard",
    city: "Mt. Pleasant, SC 29464",
    phone: "(843) 585-3495",
    hours: "Monday – Sunday: 7am – 3pm",
    orderUrl: "https://order.toasttab.com/online/toast-coleman-blvd-835-coleman-boulevard",
    menuUrl: "https://toastallday.com/toast-menu/",
    coordinates: [-79.8627, 32.7938],
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
    coordinates: [-79.8563, 32.8134],
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
    coordinates: [-79.9851, 32.7677],
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
    coordinates: [-80.1756, 32.9784],
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
    coordinates: [-81.0912, 32.0809],
  },
];

interface LocationsMapProps {
  onLocationSelect?: (location: Location | null) => void;
}

const LocationsMap: React.FC<LocationsMapProps> = ({ onLocationSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapReady, setIsMapReady] = useState(false);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsMapReady(true);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !isMapReady || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.95, 32.78],
      zoom: 9,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      locations.forEach((location) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.innerHTML = `
          <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `;

        el.addEventListener('click', () => {
          setSelectedLocation(location);
          onLocationSelect?.(location);
          map.current?.flyTo({
            center: location.coordinates,
            zoom: 14,
            duration: 1000,
          });
        });

        const marker = new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .addTo(map.current!);

        markersRef.current.push(marker);
      });
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.current?.remove();
    };
  }, [isMapReady, mapboxToken, onLocationSelect]);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    onLocationSelect?.(location);
    map.current?.flyTo({
      center: location.coordinates,
      zoom: 14,
      duration: 1000,
    });
  };

  const closeDetails = () => {
    setSelectedLocation(null);
    onLocationSelect?.(null);
    map.current?.flyTo({
      center: [-79.95, 32.78],
      zoom: 9,
      duration: 1000,
    });
  };

  if (!isMapReady) {
    return (
      <div className="bg-secondary/50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Enter Your Mapbox Token</h3>
        <p className="text-muted-foreground mb-6">
          To view the interactive map, please enter your Mapbox public token. 
          You can get one for free at{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="pk.eyJ1Ijoi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit}>Load Map</Button>
        </div>
      </div>
    );
  }

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
          <div 
            ref={mapContainer} 
            className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg"
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
