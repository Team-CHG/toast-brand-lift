import { useEffect, useState } from "react";
import champagneVideo from "@/assets/champagne-glasses.mp4";

/**
 * Fixed decorative champagne glasses video on the right side of the viewport.
 * Slides in from the right and pops into position on load.
 */
export default function FestiveBackdrop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 10 }}
    >
      <video
        src={champagneVideo}
        className={`absolute right-[5%] top-0 h-full w-[50%] md:w-[38%] lg:w-[32%] object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          visible
            ? "opacity-20 translate-x-0 scale-100"
            : "opacity-0 translate-x-[80%] scale-75"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Gradient to protect left content */}
      <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/80 to-transparent" />
    </div>
  );
}
