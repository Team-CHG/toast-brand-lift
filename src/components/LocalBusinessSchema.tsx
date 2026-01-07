import { useEffect } from 'react';

interface LocationData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
}

const locations: LocationData[] = [
  {
    name: "Toast! on Meeting",
    address: "155 Meeting Street",
    city: "Charleston",
    state: "SC",
    zip: "29401",
    phone: "+1-843-994-3598",
    hours: "Mo-Su 06:00-15:00",
  },
  {
    name: "Toast! on King",
    address: "453 King Street",
    city: "Charleston",
    state: "SC",
    zip: "29403",
    phone: "+1-843-793-0364",
    hours: "Mo-Su 07:00-15:00",
  },
  {
    name: "Toast! on Coleman",
    address: "835 Coleman Boulevard",
    city: "Mt. Pleasant",
    state: "SC",
    zip: "29464",
    phone: "+1-843-585-3495",
    hours: "Mo-Su 07:00-15:00",
  },
  {
    name: "Toast! Mt. Pleasant",
    address: "1150 Hungry Neck Blvd.",
    city: "Mt. Pleasant",
    state: "SC",
    zip: "29464",
    phone: "+1-843-350-5256",
    hours: "Mo-Su 07:00-15:00",
  },
  {
    name: "Toast! West Ashley",
    address: "2026 Savannah Hwy",
    city: "Charleston",
    state: "SC",
    zip: "29407",
    phone: "+1-843-483-8940",
    hours: "Mo-Su 07:00-15:00",
  },
  {
    name: "Toast! Summerville",
    address: "717 Old Trolley Road",
    city: "Summerville",
    state: "SC",
    zip: "29485",
    phone: "+1-843-900-4422",
    hours: "Mo-Su 07:00-15:00",
  },
  {
    name: "Toast! Savannah",
    address: "1 W Broughton Street",
    city: "Savannah",
    state: "GA",
    zip: "31401",
    phone: "+1-912-513-8920",
    hours: "Mo-Su 07:00-22:00",
  },
];

const LocalBusinessSchema = () => {
  useEffect(() => {
    // Main organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Toast All Day",
      "url": "https://toastallday.com",
      "logo": "https://toastallday.com/toast-logo.png",
      "description": "Award-winning breakfast, brunch, and lunch restaurant serving fresh, locally-sourced ingredients across Charleston, Mt. Pleasant, Summerville, and Savannah.",
      "sameAs": [
        "https://www.facebook.com/ToastofCharleston/",
        "https://www.instagram.com/toastofcharleston/",
        "https://www.tiktok.com/@toast.all.day"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-843-994-3598",
        "contactType": "customer service",
        "areaServed": ["US"],
        "availableLanguage": ["English"]
      }
    };

    // Create location schemas
    const locationSchemas = locations.map((loc) => ({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `https://toastallday.com/locations#${loc.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      "name": loc.name,
      "image": "https://toastallday.com/og-image.jpg",
      "url": "https://toastallday.com/locations",
      "telephone": loc.phone,
      "priceRange": "$$",
      "servesCuisine": ["American", "Breakfast", "Brunch"],
      "menu": "https://toastallday.com/locations",
      "acceptsReservations": "Yes",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": loc.address,
        "addressLocality": loc.city,
        "addressRegion": loc.state,
        "postalCode": loc.zip,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7765,
        "longitude": -79.9311
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": loc.hours.includes("06:00") ? "06:00" : "07:00",
        "closes": loc.hours.includes("22:00") ? "22:00" : "15:00"
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
        "url": "https://toastallday.com/locations"
      }
    }));

    // Website schema for sitelinks search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Toast All Day",
      "url": "https://toastallday.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://toastallday.com/locations?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Combine all schemas
    const allSchemas = [organizationSchema, websiteSchema, ...locationSchemas];

    // Add to DOM
    const existingScripts = document.querySelectorAll('script[data-schema="local-business"]');
    existingScripts.forEach(s => s.remove());

    allSchemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'local-business');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[data-schema="local-business"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return null;
};

export default LocalBusinessSchema;
