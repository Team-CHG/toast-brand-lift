import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles } from "@/components/BlogArticleLayout";

const Blog = () => {
  const featuredArticle = blogArticles[0];
  const remainingArticles = blogArticles.slice(1);

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

      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The latest news, promotions, and stories from Toast! All Day.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to={`/blog/${featuredArticle.slug}`}
            className="group block bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-accent/30"
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full w-fit mb-3">
                  {featuredArticle.category}
                </span>
                <span className="text-xs text-muted-foreground mb-2">{featuredArticle.date}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredArticle.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="group bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border/50 hover:border-accent/30 block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Don't Miss Out!</h2>
            <p className="text-foreground mb-8 max-w-xl mx-auto">
              Sign up for our newsletter to get the latest news, events, and exclusive offers.
            </p>
            <a
              href="https://www.toasttab.com/toast-charleston-155-meeting-st/marketing-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
