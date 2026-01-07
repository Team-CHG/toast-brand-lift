import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'locations': 'Locations',
  'about': 'About Us',
  'catering': 'Catering',
  'contact': 'Contact',
  'rewards': 'Rewards',
  'franchise': 'Franchise',
  'news-events': 'News & Events',
  'mothers-day': "Mother's Day",
  'download-app': 'Download App',
  'unlimited-drink-pass': 'Unlimited Drink Pass',
  'military-discount': 'Military Discount',
  'anniversary': '20th Anniversary',
  'soup-salad-sandwich': 'Soup, Salad & Sandwich',
  'black-friday-gift-card': 'Black Friday Gift Card',
  'veterans-day': 'Veterans Day',
  'best-brunch': 'Best Brunch',
  'valentines-day': "Valentine's Day",
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
};

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs = ({ className = '' }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on home page
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
  ];

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      path: currentPath,
    });
  });

  // Generate JSON-LD for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://toastallday.com${crumb.path}`
    }))
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb" 
        className={`py-3 px-4 bg-secondary/50 ${className}`}
      >
        <ol className="container mx-auto flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {index === 0 && (
                  <Home className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                )}
                
                {isLast ? (
                  <span 
                    className="text-foreground font-medium" 
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link 
                      to={crumb.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
