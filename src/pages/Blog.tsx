import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles } from "@/components/BlogArticleLayout";
import pageBackgroundTexture from "@/assets/page-background-texture.png";


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
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center bg-[#e4faff]">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-wide">
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {blogArticles.map((article) => (
              <div key={article.slug} className="group">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{article.date}</span>
                    <span>|</span>
                    <span>{article.category}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-medium font-body text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">
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
