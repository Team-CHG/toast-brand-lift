import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap from "@/components/LocationsMap";
import SEO from "@/components/SEO";

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
        
        {/* Locations Map Section - Celebratory Style */}
        <section className="relative py-20 px-4 overflow-hidden" aria-labelledby="locations-heading">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-complementary to-accent/5" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto relative z-10">
            {/* Header with decorative line */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                <span className="text-accent uppercase tracking-widest text-sm font-medium">Join the Celebration</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
              </div>
              <h2 id="locations-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Find Us
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Visit one of our locations across Charleston, Mt. Pleasant, Summerville, and Savannah
              </p>
            </div>
            
            {/* Map Container with enhanced styling */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-accent/20">
              <LocationsMap />
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">Can't decide which location? All serve our award-winning menu!</p>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
