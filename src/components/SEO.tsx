import { useLocation } from "@/lib/router-compat";
import { SITE_URL } from "@/lib/locations";

interface SEOProps {
  title?: string | undefined;
  description?: string | undefined;
  keywords?: string | undefined;
  image?: string | undefined;
  type?: string | undefined;
  noIndex?: boolean | undefined;
}

const defaultMeta = {
  title: "Toast All Day - Award-Winning Breakfast, Brunch & Lunch",
  description:
    "Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations.",
  keywords:
    "breakfast, brunch, lunch, Charleston restaurant, Mt Pleasant breakfast, Summerville brunch, Savannah breakfast, award winning brunch, mimosas, french toast",
  image: "/og-image.jpg",
  type: "website",
};

/**
 * Renders title/meta/link tags as plain React elements. React 19 hoists them
 * into <head> during server rendering, so crawlers get route-specific tags in
 * the initial HTML and the client keeps them in sync on navigation.
 */
const SEO = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  type = defaultMeta.type,
  noIndex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      {!noIndex && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
};

export default SEO;
