import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SideDrawer />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Toast! All Day</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A must-eat destination by the New York Times since 2005
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Toast! Restaurant opened in 2005, and is hailed as a must-eat by the NY Times. Voted best breakfast and open for lunch and dinner. Toast! All Day!
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our food is fresh, southern, and home-made goodness. Whether you are looking for our Deluxe Stuffed French Toast or you want to try creamy homemade grits with generous helpings of shrimp, you are sure to find something to please your taste buds.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Try our Peach-stuffed French Toast for a real southern treat. Whether it's a Toast! Classic Breakfast with Carolina stone-ground grits or a comfort food like our Southern Fried Pork Chops, we've got something for every appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Top 25 Brunches</h3>
              <p className="text-muted-foreground">
                2023 TripAdvisor Travelers' Choice "Best of the Best"
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">NY Times Featured</h3>
              <p className="text-muted-foreground">
                Named as a must-eat destination
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">20 Years Strong</h3>
              <p className="text-muted-foreground">
                Celebrating our 20th anniversary in 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cheer With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Cheer With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thanks to our customers, Toast! All Day has been awarded the 2023 Top 25 Best Brunches in the U.S. by TripAdvisor! We are proud to be included in their Travelers' Choice "Best of the Best," which is only awarded to the top 1% best reviews worldwide! Come taste our award-winning food today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/locations"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
              >
                Find a Location
              </a>
              <a
                href="/catering"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-medium transition-colors"
              >
                Catering Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
