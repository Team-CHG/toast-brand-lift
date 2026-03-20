import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

// Shared article data for blog listing and related posts
export const blogArticles = [
  { title: "Celebrate Mother's Day with Us", description: "Treat Mom to a special brunch! Free Mimosa and Beignets for all moms on Mother's Day.", image: "https://toastallday.com/wp-content/uploads/2025/05/Toast-Mothers-Day-Horizontal-Header-Post-1920-x-1080-px-1-1-1080x675.jpg", category: "Events", slug: "mothers-day", date: "May 2025" },
  { title: "Download Our App and Earn $5", description: "Get rewarded just for downloading! Sign up through our app and receive $5 towards your next meal.", image: "https://toastallday.com/wp-content/uploads/2025/04/Toast-APP-Loyalty-Sign-Up-1920-x-1080-px-1080x675.jpg", category: "Promotions", slug: "download-app", date: "April 2025" },
  { title: "Unlimited Drink Pass", description: "Enjoy unlimited mimosas with our special wristband offer at the Bridge Run!", image: "https://toastallday.com/wp-content/uploads/2025/03/Toast-Bridge-Run-Mimosa-Festival-1920-x-1080-px-web.jpg", category: "Promotions", slug: "unlimited-drink-pass", date: "March 2025" },
  { title: "10% Military Discount", description: "We proudly offer 10% off to all active duty military and veterans.", image: "https://toastallday.com/wp-content/uploads/2025/05/Toast-Military-10-Discount-1920-x-1080-px-1080x675.jpg", category: "Offers", slug: "military-discount", date: "January 2025" },
  { title: "Toast 20th Anniversary Celebration", description: "Join us in celebrating 20 years of serving delicious breakfast and brunch!", image: "https://toastallday.com/wp-content/uploads/2025/02/Toast-20th-Anniversary-Event-Post-web.jpg", category: "Celebration", slug: "anniversary", date: "February 2025" },
  { title: "New Soup, Salad or Sandwich Combo", description: "Try our new $12 lunch combo featuring fresh soup, crisp salads, and handcrafted sandwiches.", image: "https://toastallday.com/wp-content/uploads/2025/01/toast-soup-salad-sandwich-combo.jpg", category: "Menu", slug: "soup-salad-sandwich", date: "January 2025" },
  { title: "Black Friday $20 Bonus Gift Card", description: "Purchase $50 in gift cards and receive a $20 bonus card.", image: "https://toastallday.com/wp-content/uploads/2024/12/Toast_Giving_is_the_Greatest_Gift_web-1.jpg", category: "Promotions", slug: "black-friday-gift-card", date: "December 2024" },
  { title: "Veterans Eat FREE This Veterans Day", description: "We honor our veterans with a free meal on Veterans Day.", image: "https://toastallday.com/wp-content/uploads/2024/11/unnamed-22-1080x675.png", category: "Events", slug: "veterans-day", date: "November 2024" },
  { title: "Best Brunch in Charleston, SC", description: "Discover why Toast! All Day is voted the best brunch spot in Charleston.", image: "https://toastallday.com/wp-content/uploads/2022/02/Toast-All-Day-syrup-pour-chicken-800x675.jpg", category: "News", slug: "best-brunch", date: "February 2022" },
  { title: "Love Is In The Air At Toast!", description: "Celebrate love with our special Valentine's Day menu.", image: "https://toastallday.com/wp-content/uploads/2022/02/49a9faa3-d3c4-4d48-82a7-ea3a05d30e61-copy-1-496x620-1.jpeg", category: "Events", slug: "valentines-day", date: "February 2022" }
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
}

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
}: BlogArticleLayoutProps) => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
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
            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
            [&>ul]:mb-6 [&>ul]:leading-[1.8] [&>ul]:pl-1
            [&>ol]:mb-6 [&>ol]:leading-[1.8] [&>ol]:pl-1
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_a]:text-primary [&_a:hover]:underline
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
