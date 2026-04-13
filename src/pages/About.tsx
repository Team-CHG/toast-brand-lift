import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import { Award, Heart, Users } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Toast All Day | Our Story Since 2005"
        description="Toast All Day opened in 2005 and was named a must-eat destination by the NY Times. Voted TripAdvisor Top 25 Best Brunches. Learn about our 20-year journey serving fresh, southern cuisine."
        keywords="Toast All Day history, Charleston restaurant story, NY Times recommended, best brunch Charleston, southern cuisine, award winning breakfast"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/5" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-highlight/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Est. 2005</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              About <span className="text-highlight italic">Toast! All Day</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A must-eat destination by the New York Times since 2005
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 relative" aria-labelledby="story-heading"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-accent/10">
                <h2 id="story-heading" className="text-3xl font-bold mb-6 text-primary">Who We Are</h2>
                <p className="text-lg text-primary/80 mb-6">
                  Toast! Restaurant opened in 2005, and is hailed as a must-eat by the NY Times. Voted best breakfast and open for lunch and dinner. Toast! All Day!
                </p>
                <p className="text-lg text-primary/80 mb-6">
                  Our food is fresh, southern, and home-made goodness. Whether you are looking for our Deluxe Stuffed French Toast or you want to try creamy homemade grits with generous helpings of shrimp, you are sure to find something to please your taste buds.
                </p>
                <p className="text-lg text-primary/80 mb-8">
                  Try our Peach-stuffed French Toast for a real southern treat. Whether it's a Toast! Classic Breakfast with Carolina stone-ground grits or a comfort food like our Southern Fried Pork Chops, we've got something for every appetite.
                </p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 relative overflow-hidden" aria-labelledby="awards-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />
        <FloatingElement className="absolute top-10 right-10 opacity-10 hidden lg:block" delay={1} distance={15}>
          <Award className="w-20 h-20 text-accent" />
        </FloatingElement>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 id="awards-heading" className="text-3xl md:text-5xl font-bold text-primary">Awards & Recognition</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, title: "Top 25 Brunches", desc: "2023 TripAdvisor Travelers' Choice \"Best of the Best\"" },
              { icon: Users, title: "NY Times Featured", desc: "Named as a must-eat destination" },
              { icon: Heart, title: "20 Years Strong", desc: "Celebrating our 20th anniversary in 2025" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-accent/10 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cheer With Us Section */}
      <section className="py-16 relative" aria-labelledby="cta-heading"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-accent/10">
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6 text-primary">Cheer With Us</h2>
              <p className="text-lg text-primary/80 mb-8">
                Thanks to our customers, Toast! All Day has been awarded the 2023 Top 25 Best Brunches in the U.S. by TripAdvisor! We are proud to be included in their Travelers' Choice "Best of the Best," which is only awarded to the top 1% best reviews worldwide! Come taste our award-winning food today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/locations" className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
                  Find a Location Near You
                </a>
                <a href="/catering" className="inline-flex items-center justify-center px-8 py-3 bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
                  Explore Catering Services
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
