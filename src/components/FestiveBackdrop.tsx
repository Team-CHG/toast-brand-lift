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
    <>
      {/* Fixed background color layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-complementary"
        style={{ zIndex: -2 }}
      />

      {/* Fixed video layer — above background, below page content */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <video
          src={champagneVideo}
          className={`absolute right-0 top-0 h-full w-[55%] md:w-[40%] lg:w-[35%] object-cover transition-all duration-1000 ease-out ${
            visible
              ? "opacity-30 translate-x-0 scale-100"
              : "opacity-0 translate-x-full scale-90"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Gradient to protect left content */}
        <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/60 to-transparent" />
      </div>
    </>
  );
}
