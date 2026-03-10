/**
 * Fixed decorative background layer.
 */
export default function FestiveBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 bg-complementary"
      style={{ zIndex: -2 }}
    />
  );
}
