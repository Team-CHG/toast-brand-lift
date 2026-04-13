/**
 * Fixed decorative background layer with blue-red gradient feel.
 */
export default function FestiveBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 bg-gradient-to-br from-background via-accent/3 to-highlight/3"
      style={{ zIndex: -2 }}
    />
  );
}
