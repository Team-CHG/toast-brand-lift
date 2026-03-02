import { useEffect, useState } from "react";
import champagneVideo from "@/assets/champagne-glasses.mp4";

/**
 * Fixed decorative champagne glasses video that slides in from the right
 * as the user scrolls down.
 */
export default function FestiveBackdrop() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Map first 400px of scroll to 0→1 progress
      const progress = Math.min(window.scrollY / 400, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = (1 - scrollProgress) * 100;
  const scale = 0.85 + scrollProgress * 0.15;
  const opacity = scrollProgress * 0.3;

  return (
    <>
      {/* Fixed background color layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-complementary"
        style={{ zIndex: -2 }}
      />

      {/* Fixed video layer — behind page content */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <video
          src={champagneVideo}
          className="absolute left-1/2 top-0 h-full w-[80%] md:w-[60%] lg:w-[50%] -translate-x-1/2 object-cover will-change-transform"
          style={{
            transform: `translateX(${translateX}%) scale(${scale})`,
            opacity,
            transition: "transform 0.15s linear, opacity 0.15s linear",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/60 to-transparent" />
      </div>
    </>
  );
}
