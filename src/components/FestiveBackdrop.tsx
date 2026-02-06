import pageBackground from "@/assets/page-background.png";
import pageBackgroundMobile from "@/assets/page-background-mobile.avif";

/**
 * Site-wide background with consistent image and color overlay.
 * - Uses different background images for desktop and mobile
 * - Applies a complementary color overlay to maintain brand consistency
 */
export default function FestiveBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${pageBackground})` }}
      />
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${pageBackgroundMobile})` }}
      />
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-complementary/90 to-accent/10" />
    </div>
  );
}
