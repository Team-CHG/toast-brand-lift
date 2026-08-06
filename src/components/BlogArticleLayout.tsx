import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import pageBackgroundTexture from "@/assets/page-background-texture.avif";
import bestBreakfastBrunchImg from "@/assets/blog/best-breakfast-brunch.jpg";
import mothersDayImg from "@/assets/blog/mothers-day.jpg";
import downloadAppImg from "@/assets/blog/download-app.jpg";
import unlimitedDrinkPassImg from "@/assets/blog/unlimited-drink-pass.jpg";
import militaryDiscountImg from "@/assets/blog/military-discount.jpg";
import anniversaryImg from "@/assets/blog/anniversary.jpg";
import soupSaladSandwichImg from "@/assets/blog/soup-salad-sandwich.jpg";
import blackFridayGiftCardImg from "@/assets/blog/black-friday-gift-card.jpg";
import veteransDayImg from "@/assets/blog/veterans-day.jpg";
import bestBrunchImg from "@/assets/blog/best-brunch.jpg";
import valentinesDayImg from "@/assets/blog/valentines-day.jpg";
import bestBrunchCharlestonImg from "@/assets/blog/best-brunch-charleston.jpg";
import shrimpAndGritsImg from "@/assets/blog/shrimp-and-grits-charleston.jpg";
import lowcountryCuisineImg from "@/assets/blog/lowcountry-cuisine.jpg";
import breakfastMtPleasantImg from "@/assets/blog/breakfast-mt-pleasant.jpg";
import breakfastSummervilleImg from "@/assets/blog/breakfast-summerville.jpg";
import brunchSavannahImg from "@/assets/blog/brunch-savannah.jpg";
import brunchCocktailsImg from "@/assets/blog/brunch-cocktails.jpg";
import peachFrenchToastImg from "@/assets/blog/peach-french-toast.jpg";
import dogFriendlyBrunchImg from "@/assets/blog/dog-friendly-brunch.jpg";
import downtownCharlestonImg from "@/assets/blog/downtown-charleston.jpg";

// Shared article data for blog listing and related posts
export const blogArticles = [
  { title: "The Best Brunch in Charleston: What Makes Ours Top 25 in the U.S.", description: "Charleston has no shortage of brunch. Here's what earned us a spot on TripAdvisor's Top 25 Best Brunches in the U.S.", image: bestBrunchCharlestonImg, category: "Guides", slug: "best-brunch-charleston", date: "August 2026" },
  { title: "Where to Get Shrimp and Grits in Charleston (and What Makes Them Lowcountry)", description: "Stone-ground grits, sweet local shrimp, and the sauce that ties it together. A guide to shrimp and grits in Charleston.", image: shrimpAndGritsImg, category: "Guides", slug: "shrimp-and-grits-charleston", date: "August 2026" },
  { title: "What Is Lowcountry Cuisine? A Local's Guide", description: "Rice, shrimp, okra, and Gullah Geechee roots. A plain-spoken guide to Lowcountry cooking and where to taste it.", image: lowcountryCuisineImg, category: "Guides", slug: "what-is-lowcountry-cuisine", date: "August 2026" },
  { title: "Best Breakfast in Mt. Pleasant, SC", description: "Where to eat breakfast in Mt. Pleasant, from early coffee runs to a full sit-down plate off Hungry Neck Blvd.", image: breakfastMtPleasantImg, category: "Guides", slug: "best-breakfast-mt-pleasant", date: "August 2026" },
  { title: "Best Breakfast in Summerville, SC", description: "A local guide to breakfast in Summerville, including biscuits, grits, and where to go on Old Trolley Road.", image: breakfastSummervilleImg, category: "Guides", slug: "best-breakfast-summerville", date: "August 2026" },
  { title: "Best Breakfast and Brunch in Savannah, GA", description: "Brunch on Broughton Street and beyond. Where to eat breakfast in Savannah before you walk the squares.", image: brunchSavannahImg, category: "Guides", slug: "best-brunch-savannah", date: "August 2026" },
  { title: "Bottomless Mimosas and Bloody Marys: Your Charleston Brunch Cocktail Guide", description: "What to order with brunch in Charleston, from mimosa flights to a properly built bloody mary.", image: brunchCocktailsImg, category: "Guides", slug: "charleston-brunch-cocktails", date: "August 2026" },
  { title: "Peach-Stuffed French Toast and Other Southern Breakfast Classics Explained", description: "Peach-stuffed French toast, biscuits and gravy, grits, and country ham. What Southern breakfast dishes actually are.", image: peachFrenchToastImg, category: "Guides", slug: "southern-breakfast-classics", date: "August 2026" },
  { title: "Dog-Friendly Brunch Spots in Charleston", description: "Brunch with your dog in Charleston. Patio tips, what to bring, and where a well-behaved pup is welcome.", image: dogFriendlyBrunchImg, category: "Guides", slug: "dog-friendly-brunch-charleston", date: "August 2026" },
  { title: "Where to Eat Before or After Exploring Historic Downtown Charleston", description: "Fuel up before the walking tour or refuel after. Where to eat near historic downtown Charleston.", image: downtownCharlestonImg, category: "Guides", slug: "where-to-eat-downtown-charleston", date: "August 2026" },
  { title: "Toast! All Day Named One of the Best Brunch and Breakfast Spots in Charleston", description: "We're honored to be recognized as one of the best brunch and breakfast spots in Charleston, SC. Discover why locals love our all-day breakfast and mimosas.", image: bestBreakfastBrunchImg, category: "News", slug: "best-breakfast-brunch", date: "March 2026" },
  { title: "Celebrate Mother's Day with Us", description: "Treat Mom to a special brunch! Free Mimosa and Beignets for all moms on Mother's Day.", image: mothersDayImg, category: "Events", slug: "mothers-day", date: "May 2025" },
  { title: "Download Our App and Earn $5", description: "Get rewarded just for downloading! Sign up through our app and receive $5 towards your next meal.", image: downloadAppImg, category: "Promotions", slug: "download-app", date: "April 2025" },
  { title: "Unlimited Drink Pass", description: "Enjoy unlimited mimosas with our special wristband offer at the Bridge Run!", image: unlimitedDrinkPassImg, category: "Promotions", slug: "unlimited-drink-pass", date: "March 2025" },
  { title: "10% Military Discount", description: "We proudly offer 10% off to all active duty military and veterans.", image: militaryDiscountImg, category: "Offers", slug: "military-discount", date: "January 2025" },
  { title: "Toast 20th Anniversary Celebration", description: "Join us in celebrating 20 years of serving delicious breakfast and brunch!", image: anniversaryImg, category: "Celebration", slug: "anniversary", date: "February 2025" },
  { title: "New Soup, Salad or Sandwich Combo", description: "Try our new $12 lunch combo featuring fresh soup, crisp salads, and handcrafted sandwiches.", image: soupSaladSandwichImg, category: "Menu", slug: "soup-salad-sandwich", date: "January 2025" },
  { title: "Black Friday $20 Bonus Gift Card", description: "Purchase $50 in gift cards and receive a $20 bonus card.", image: blackFridayGiftCardImg, category: "Promotions", slug: "black-friday-gift-card", date: "December 2024" },
  { title: "Veterans Eat FREE This Veterans Day", description: "We honor our veterans with a free meal on Veterans Day.", image: veteransDayImg, category: "Events", slug: "veterans-day", date: "November 2024" },
  { title: "Best Brunch in Charleston, SC", description: "Discover why Toast! All Day is voted the best brunch spot in Charleston.", image: bestBrunchImg, category: "News", slug: "best-brunch", date: "March 2026" },
  { title: "Love Is In The Air At Toast!", description: "Celebrate love with our special Valentine's Day menu.", image: valentinesDayImg, category: "Events", slug: "valentines-day", date: "February 2022" }
];

interface BlogArticleLayoutProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  heroImage: string;
  heroImageAlt: string;
  category: string;
  title: string;
  date?: string;
  children: React.ReactNode;
  currentSlug: string;
  /** Optional FAQ pairs used only for FAQPage structured data */
  faqs?: { question: string; answer: string }[];
  /** Optional location names for Restaurant structured data */
  locations?: string[];
}

const restaurantLocations: Record<string, { name: string; street: string; city: string; state: string; zip: string; phone: string }> = {
  meeting: { name: "Toast! on Meeting", street: "129 Meeting St", city: "Charleston", state: "SC", zip: "29401", phone: "+1-843-994-3598" },
  king: { name: "Toast! on King", street: "453 King Street", city: "Charleston", state: "SC", zip: "29403", phone: "+1-843-793-0364" },
  "mt-pleasant": { name: "Toast! Mt. Pleasant", street: "1150 Hungry Neck Blvd.", city: "Mt. Pleasant", state: "SC", zip: "29464", phone: "+1-843-350-5256" },
  "west-ashley": { name: "Toast! West Ashley", street: "2026 Savannah Hwy", city: "Charleston", state: "SC", zip: "29407", phone: "+1-843-483-8940" },
  summerville: { name: "Toast! Summerville", street: "717 Old Trolley Road", city: "Summerville", state: "SC", zip: "29485", phone: "+1-843-900-4422" },
  savannah: { name: "Toast! Savannah", street: "1 W Broughton Street", city: "Savannah", state: "GA", zip: "31401", phone: "+1-912-513-8920" },
};

const BlogArticleLayout = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  heroImage,
  heroImageAlt,
  category,
  title,
  date,
  children,
  currentSlug,
  faqs,
  locations,
}: BlogArticleLayoutProps) => {
  const { pathname } = useLocation();
  const url = `https://toastallday.com${pathname}`;

  useEffect(() => {
    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: seoDescription,
        image: `https://toastallday.com${heroImage}`,
        articleSection: category,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: "Toast! All Day" },
        publisher: {
          "@type": "Organization",
          name: "Toast! All Day",
          logo: { "@type": "ImageObject", url: "https://toastallday.com/toast-logo.png" },
        },
      },
    ];

    if (faqs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }

    locations?.forEach((key) => {
      const loc = restaurantLocations[key];
      if (!loc) return;
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: loc.name,
        url: "https://toastallday.com/locations",
        telephone: loc.phone,
        priceRange: "$$",
        servesCuisine: ["American", "Breakfast", "Brunch", "Southern"],
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: loc.city,
          addressRegion: loc.state,
          postalCode: loc.zip,
          addressCountry: "US",
        },
      });
    });

    const nodes = schemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "blog-article");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => nodes.forEach((n) => n.remove());
  }, [title, seoDescription, heroImage, category, url, faqs, locations]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Banner with title overlay */}
      <header className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          {date && (
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
              <span className="mx-1">|</span>
              <span>{category}</span>
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight font-body">
            {title}
          </h1>
        </div>
      </header>

      {/* Article body */}
      <div
        className="py-12 md:py-16"
        style={{
          backgroundImage: `url(${pageBackgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article content */}
          <div className="text-foreground/80 leading-relaxed text-base md:text-lg
            [&>p]:mb-6 [&>p]:leading-[1.8]
            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-medium [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:font-body
            [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:font-body
            [&>ul]:mb-6 [&>ul]:leading-[1.8] [&>ul]:pl-1
            [&>ol]:mb-6 [&>ol]:leading-[1.8] [&>ol]:pl-1
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_a]:text-primary [&_a:hover]:underline
            [&_a.blog-btn]:bg-[#647da6] [&_a.blog-btn]:text-white [&_a.blog-btn]:no-underline [&_a.blog-btn]:hover:bg-[#546d96] [&_a.blog-btn]:px-8 [&_a.blog-btn]:py-3 [&_a.blog-btn]:rounded-full [&_a.blog-btn]:font-semibold [&_a.blog-btn]:transition-colors [&_a.blog-btn]:inline-flex [&_a.blog-btn]:items-center [&_a.blog-btn]:gap-2 [&_a.blog-btn]:text-sm
          ">
            {children}
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
