import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroVideoDesktop from "@/assets/hero-video-desktop.webm";
import sparklesOverlay from "@/assets/sparkles-overlay.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const videoSrc = isMobile ? heroVideo : heroVideoDesktop;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  const sparkleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden pt-16 sm:pt-20 min-h-[85vh] md:min-h-screen flex items-center"
    >
      {/* Parallax video background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <video
          key={videoSrc}
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Sparkles overlay with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40"
        style={{ y: sparkleY }}
      >
        <img
          src={sparklesOverlay}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.p
            className="text-accent-foreground/90 tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Award-Winning Breakfast & Brunch
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Celebrate the
            <br />
            <span className="text-accent italic">Possibilities</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            TripAdvisor Top 25 Best Brunches in the U.S.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href="/locations">Find a Location</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white/60 text-white hover:bg-white/10 hover:border-white text-base px-8 py-6 rounded-full backdrop-blur-sm"
            >
              <a href="/locations">Order Online</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
