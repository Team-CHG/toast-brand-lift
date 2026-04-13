import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Users, Award } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import pageBackgroundTexture from "@/assets/page-background-texture.png";

const Catering = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Catering Services - Toast All Day | Charleston Hospitality Group"
        description="Toast All Day catering for weddings, corporate events, bridal showers & more. Award-winning breakfast and brunch catering in Charleston, Mt Pleasant & Summerville."
        keywords="catering Charleston, brunch catering, breakfast catering, wedding catering SC, corporate catering, event catering"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-highlight/5" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[120px]" />
        <FloatingElement className="absolute bottom-10 right-10 opacity-10 hidden lg:block" distance={15}>
          <Utensils className="w-20 h-20 text-accent" />
        </FloatingElement>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Catering by <span className="text-highlight italic">Toast! All Day</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience exceptional cuisine from Charleston Hospitality Group
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-12 text-center bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-accent/10">
                <p className="text-lg text-primary/80 mb-8">
                  Charleston Hospitality Group offers an eclectic mix of delicious menu options - from casual BBQ rehearsal dinners, brunch-style Bridal/Baby showers to exciting Moroccan night themed receptions. Our experience and expertise will help you create an unforgettable event for any occasion that will satisfy every palette.
                </p>
                <Button asChild size="lg" className="text-lg px-8 bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full shadow-lg hover:scale-105 transition-all">
                  <a href="https://www.ezcater.com/brand/pvt/toast-1" target="_blank" rel="noopener noreferrer">
                    Request Catering Now
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {[
                { icon: Utensils, title: "Diverse Menu Options", desc: "From classic breakfast favorites to southern comfort food, we offer a wide range of dishes to suit any event and dietary preference." },
                { icon: Calendar, title: "Perfect for Any Occasion", desc: "Whether it's a corporate breakfast, bridal shower, baby shower, or family gathering, we've got you covered." },
                { icon: Users, title: "Groups of All Sizes", desc: "We can accommodate intimate gatherings or large events, with flexible catering packages to meet your needs." },
                { icon: Award, title: "Award-Winning Quality", desc: "Bring the same exceptional food that earned us Top 25 Best Brunches in the U.S. to your event." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-accent/10 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Section */}
            <ScrollReveal delay={0.3}>
              <div className="mt-16 bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Planning?</h2>
                <p className="text-lg text-white/80 mb-6">
                  Let us make your next event unforgettable with our delicious catering services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full hover:scale-105 transition-all">
                    <a href="https://www.ezcater.com/brand/pvt/toast-1" target="_blank" rel="noopener noreferrer">
                      Request Catering
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                    <a href="/locations">Contact a Location</a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
