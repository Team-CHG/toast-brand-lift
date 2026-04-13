import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles } from "@/components/BlogArticleLayout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog - Toast All Day | News, Promotions & Events"
        description="Stay updated with Toast All Day news, events, and promotions."
        keywords="Toast All Day blog, restaurant news Charleston, brunch promotions"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/5" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-wide">
              BLOG
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 md:py-20 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {blogArticles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 0.1}>
                <div className="group">
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="overflow-hidden rounded-3xl mb-4 ring-1 ring-accent/10">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{article.date}</span>
                      <span>|</span>
                      <span className="text-highlight font-medium">{article.category}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-medium text-primary group-hover:text-accent transition-colors leading-snug mb-2">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                      {article.description}
                    </p>
                    <span className="text-sm font-semibold text-highlight tracking-wide uppercase group-hover:underline">
                      read more →
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
