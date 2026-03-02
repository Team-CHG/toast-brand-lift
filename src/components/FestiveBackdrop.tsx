import champagneVideo from "@/assets/champagne-glasses.mp4";

/**
 * Fixed decorative champagne glasses video on the right side of the viewport.
 * Acts as a branding element giving the website a celebratory feel.
 * Stays visible while scrolling.
 */
export default function FestiveBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-complementary" />

      {/* Champagne glasses video - fixed on far right */}
      <div className="absolute right-0 top-0 h-full w-[280px] md:w-[400px] lg:w-[500px] flex items-center justify-end">
        <video
          src={champagneVideo}
          className="h-full w-full object-cover object-left mix-blend-screen opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/80 to-transparent" />
    </div>
  );
}
