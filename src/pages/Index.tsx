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
        
        {/* Locations Map Section */}
        <section className="py-16 px-4 bg-secondary/30" aria-labelledby="locations-heading">
          <div className="container mx-auto">
            <h2 id="locations-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">Find Us</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Visit one of our locations across Charleston, Mt. Pleasant, Summerville, and Savannah
            </p>
            <LocationsMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
