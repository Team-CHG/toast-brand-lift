import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles } from "@/components/BlogArticleLayout";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import blogHero from "@/assets/blog-hero.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog - Toast All Day | News, Promotions & Events"
        description="Stay updated with Toast All Day news, events, and promotions. Mother's Day specials, military discounts, 20th anniversary celebrations, and exclusive offers."
        keywords="Toast All Day blog, restaurant news Charleston, brunch promotions, special offers, military discount, holiday specials"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <img
          src={blogHero}
          alt="Toast All Day brunch dishes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide">
          BLOG
        </h1>
      </section>

      {/* Articles List */}
      <section
        className="py-16 md:py-20"
        style={{
          backgroundImage: `url(${pageBackgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="divide-y divide-border/50">
            {blogArticles.map((article) => (
              <div key={article.slug} className="py-10 first:pt-0 last:pb-0">
                <Link to={`/blog/${article.slug}`} className="group block">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span>|</span>
                    <span>{article.category}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <span className="text-sm font-semibold text-primary tracking-wide uppercase group-hover:underline">
                    read more →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
