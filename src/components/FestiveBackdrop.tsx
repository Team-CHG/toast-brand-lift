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

      {/* Champagne glasses video - right side, not too far */}
      <video
        src={champagneVideo}
        className="absolute right-[-5%] md:right-0 top-0 h-full w-[60%] md:w-[45%] lg:w-[40%] object-cover opacity-25"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Soft gradient to protect left-side content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/70 to-transparent" />
    </div>
  );
}
