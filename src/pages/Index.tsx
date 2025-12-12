import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SideDrawer />
      <HeroCarousel />
      <FeatureSections />
      <Footer />
    </div>
  );
};

export default Index;
