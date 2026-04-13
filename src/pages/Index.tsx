import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap from "@/components/LocationsMap";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import { MapPin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Toast All Day - Award-Winning Breakfast, Brunch & Lunch in Charleston"
        description="Toast All Day serves gourmet breakfast, brunch, and lunch with fresh, locally-sourced ingredients. TripAdvisor Top 25 Best Brunches in the U.S. Visit our Charleston, Mt. Pleasant, Summerville & Savannah locations."
        keywords="breakfast Charleston, brunch Charleston, best breakfast SC, award winning brunch, mimosas, french toast, eggs benedict"
      />
      <Navigation />
      <SideDrawer />
      <main>
        <HeroCarousel />
        <FeatureSections />

        {/* Locations Map Section */}
        <section
          className="relative py-24 md:py-32 px-4 overflow-hidden"
          aria-labelledby="locations-heading"
          style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-highlight/5" />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <FloatingElement className="absolute top-1/4 right-10 opacity-10 hidden lg:block" delay={2} distance={20}>
            <MapPin className="w-20 h-20 text-accent" />
          </FloatingElement>

          <div className="container mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium tracking-widest uppercase">
                  Join the Celebration
                </span>
              </div>
              <h2
                id="locations-heading"
                className="text-4xl md:text-6xl font-bold text-primary mb-6"
              >
                Find Us
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Raise a glass and celebrate with us across Charleston, Mt. Pleasant, Summerville & Savannah!
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-accent/10">
                <LocationsMap />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Can't decide which location? All serve our award-winning menu!
              </p>
              <a
                href="/locations"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
              >
                View all locations
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
