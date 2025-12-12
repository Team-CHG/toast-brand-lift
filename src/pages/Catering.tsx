import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Calendar, Users, Award } from "lucide-react";

const Catering = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SideDrawer />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Catering by <span className="text-primary">Toast! All Day</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience exceptional cuisine from Charleston Hospitality Group
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Charleston Hospitality Group offers an eclectic mix of delicious menu options - from casual BBQ rehearsal dinners, brunch-style Bridal/Baby showers to exciting Moroccan night themed receptions. Our experience and expertise will help you create an unforgettable event for any occasion that will satisfy every palette.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <a href="https://www.ezcater.com/brand/pvt/toast-1" target="_blank" rel="noopener noreferrer">
                  Request Catering Now
                </a>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Diverse Menu Options</h3>
                  <p className="text-muted-foreground">
                    From classic breakfast favorites to southern comfort food, we offer a wide range of dishes to suit any event and dietary preference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Perfect for Any Occasion</h3>
                  <p className="text-muted-foreground">
                    Whether it's a corporate breakfast, bridal shower, baby shower, or family gathering, we've got you covered.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Groups of All Sizes</h3>
                  <p className="text-muted-foreground">
                    We can accommodate intimate gatherings or large events, with flexible catering packages to meet your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Award-Winning Quality</h3>
                  <p className="text-muted-foreground">
                    Bring the same exceptional food that earned us Top 25 Best Brunches in the U.S. to your event.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let us make your next event unforgettable with our delicious catering services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://www.ezcater.com/brand/pvt/toast-1" target="_blank" rel="noopener noreferrer">
                    Request Catering
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/locations">
                    Contact a Location
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
