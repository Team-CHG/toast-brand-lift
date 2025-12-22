import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import LocationsMap from "@/components/LocationsMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SideDrawer />
      <HeroCarousel />
      <FeatureSections />
      
      {/* Locations Map Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Find Us</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Visit one of our locations across Charleston, Mt. Pleasant, Summerville, and Savannah
          </p>
          <LocationsMap />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
