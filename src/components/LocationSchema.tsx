import { useEffect } from 'react';

interface LocationSchemaProps {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  openTime: string;
  closeTime: string;
  latitude: number;
  longitude: number;
  url: string;
  image?: string;
  priceRange?: string;
  servesCuisine?: string[];
}

const LocationSchema = ({
  name,
  address,
  city,
  state,
  zip,
  phone,
  openTime,
  closeTime,
  latitude,
  longitude,
  url,
  image = "https://toast-all-day.lovable.app/og-image.jpg",
  priceRange = "$$",
  servesCuisine = ["American", "Breakfast", "Brunch", "Lunch"]
}: LocationSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": url,
      "name": name,
      "image": image,
      "url": url,
      "telephone": phone,
      "priceRange": priceRange,
      "servesCuisine": servesCuisine,
      "menu": "https://toastallday.com/toast-menu/",
      "acceptsReservations": "Yes",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address,
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": zip,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": openTime,
        "closes": closeTime
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2500",
        "bestRating": "5"
      },
      "hasMenu": {
        "@type": "Menu",
        "name": "Toast All Day Menu",
        "url": "https://toastallday.com/toast-menu/"
      },
      "potentialAction": [
        {
          "@type": "OrderAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://order.toasttab.com",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModePickUp"]
        },
        {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tables.toasttab.com"
          }
        }
      ]
    };

    // Remove existing location-specific schema
    const existingScript = document.querySelector(`script[data-schema="location-${name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', `location-${name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`);
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector(`script[data-schema="location-${name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}"]`);
      if (script) {
        script.remove();
      }
    };
  }, [name, address, city, state, zip, phone, openTime, closeTime, latitude, longitude, url, image, priceRange, servesCuisine]);

  return null;
};

export default LocationSchema;
