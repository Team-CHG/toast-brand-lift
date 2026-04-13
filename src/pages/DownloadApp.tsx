import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SideDrawer from "@/components/SideDrawer";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import appScreenshot from "@/assets/app-screenshot.png";
import FestiveBackdrop from "@/components/FestiveBackdrop";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import pageBackgroundTexture from "@/assets/page-background-texture.png";
import { motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Download Our App - Toast All Day"
        description="Download the Toast All Day app for exclusive deals, faster rewards, and seamless ordering."
        keywords="Toast All Day app, mobile app, download app, restaurant app"
      />
      <FestiveBackdrop />
      <Navigation />
      <SideDrawer />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-highlight/10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[120px]" />
        <FloatingElement className="absolute top-1/3 left-10 opacity-15 hidden lg:block" delay={1} distance={15}>
          <Smartphone className="w-20 h-20 text-accent" />
        </FloatingElement>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Smartphone className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Mobile App</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6">
              Download <span className="text-complementary italic">Our App</span>
            </h1>
            <p className="text-xl text-highlight font-semibold mb-2">It's Cheaper to Order on the App!</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get exclusive app-only deals, earn rewards faster, and enjoy seamless ordering right from your phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* App showcase */}
      <section className="py-20 relative"
        style={{ backgroundImage: `url(${pageBackgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-accent/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Your Breakfast, Your Way</h2>
                    <ul className="space-y-3 text-muted-foreground mb-8">
                      <li className="flex items-center gap-2"><span className="text-highlight font-bold">✓</span> Exclusive app-only deals & discounts</li>
                      <li className="flex items-center gap-2"><span className="text-highlight font-bold">✓</span> Earn rewards 2x faster</li>
                      <li className="flex items-center gap-2"><span className="text-highlight font-bold">✓</span> Skip the line with mobile ordering</li>
                      <li className="flex items-center gap-2"><span className="text-highlight font-bold">✓</span> Get $5 just for signing up</li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button asChild size="lg" className="text-lg px-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:scale-105 transition-all">
                        <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                          App Store
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-lg px-6 rounded-full border-accent/20 hover:scale-105 transition-all">
                        <a href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&hl=en_US" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                          Google Play
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <motion.div whileHover={{ rotate: 2, scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
                      <img src={appScreenshot} alt="Toast All Day mobile app" className="max-w-xs md:max-w-sm rounded-3xl shadow-2xl" loading="lazy" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadApp;
