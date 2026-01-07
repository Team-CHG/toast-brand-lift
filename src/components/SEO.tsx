import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

const defaultMeta = {
  title: 'Toast All Day - Award-Winning Breakfast, Brunch & Lunch',
  description: 'Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations.',
  keywords: 'breakfast, brunch, lunch, Charleston restaurant, Mt Pleasant breakfast, Summerville brunch, Savannah breakfast, award winning brunch, mimosas, french toast',
  image: '/og-image.jpg',
  type: 'website',
};

const SEO = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  type = defaultMeta.type,
  noIndex = false,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://toastallday.com${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://toastallday.com${image}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);
    
    // Robots
    if (noIndex) {
      updateMetaTag('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else {
      updateMetaTag('meta[name="robots"]', 'content', 'index, follow');
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', type);
    updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    updateMetaTag('meta[property="og:image"]', 'content', fullImageUrl);
    updateMetaTag('meta[property="og:site_name"]', 'content', 'Toast All Day');

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', fullImageUrl);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    return () => {
      // Cleanup is optional since we're updating in place
    };
  }, [title, description, keywords, image, type, noIndex, canonicalUrl, fullImageUrl]);

  return null;
};

export default SEO;
