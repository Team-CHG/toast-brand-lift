import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <FeatureSections />
      <Footer />
    </div>
  );
};

export default Index;
