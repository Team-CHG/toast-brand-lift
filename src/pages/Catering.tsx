import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Users, Award, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import cateringHero from "@/assets/catering-hero.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Catering = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

      {/* Hero Section with parallax image */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={cateringHero} alt="Elegant catering setup by Toast All Day" className="w-full h-full object-cover" width={1920} height={800} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-highlight/15 rounded-full blur-[100px]" />
        
        <FloatingElement className="absolute bottom-1/4 right-10 opacity-20 hidden lg:block" distance={15}>
          <Utensils className="w-16 h-16 text-white" />
        </FloatingElement>

        <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-widest uppercase">Event Catering</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Catering by <span className="text-highlight italic">Toast!</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience exceptional cuisine from Charleston Hospitality Group
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Glass overlay stats */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 py-6 px-6 md:px-12 ring-1 ring-accent/10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
              <div><span className="text-3xl font-bold text-highlight">20+</span><p className="text-sm text-muted-foreground">Years Experience</p></div>
              <div className="h-8 w-px bg-accent/20 hidden md:block" />
              <div><span className="text-3xl font-bold text-accent">100s</span><p className="text-sm text-muted-foreground">Events Catered</p></div>
              <div className="h-8 w-px bg-accent/20 hidden md:block" />
              <div><span className="text-3xl font-bold text-highlight">5★</span><p className="text-sm text-muted-foreground">Client Rating</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative"
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
              <div className="mt-16 bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-highlight/20 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Planning?</h2>
                  <p className="text-lg text-white/80 mb-6">
                    Let us make your next event unforgettable with our delicious catering services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-full hover:scale-105 transition-all">
                      <a href="https://www.ezcater.com/brand/pvt/toast-1" target="_blank" rel="noopener noreferrer">Request Catering</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white text-white bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-md">
                      <a href="/locations">Contact a Location</a>
                    </Button>
                  </div>
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
