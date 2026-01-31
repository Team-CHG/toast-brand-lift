import pageBackground from "@/assets/page-background.avif";

/**
 * Site-wide background with consistent image and color overlay.
 * - Uses a single background image across all pages
 * - Applies a complementary color overlay to maintain brand consistency
 */
export default function FestiveBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pageBackground})` }}
      />
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-complementary/90 to-accent/10" />
    </div>
  );
}
