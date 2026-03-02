import { useRef, useEffect, useState } from "react";
import champagneVideo from "@/assets/champagne-glasses.mp4";

/**
 * Fixed decorative video branding element on the far right side.
 * Slides in from the right, then plays on loop. Stays visible while scrolling.
 */
export default function FestiveBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasSlid, setHasSlid] = useState(false);

  useEffect(() => {
    // Trigger slide-in after mount
    const timer = setTimeout(() => setHasSlid(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasSlid && videoRef.current) {
      // Start playing after slide-in animation completes (~700ms)
      const playTimer = setTimeout(() => {
        videoRef.current?.play().catch(() => {});
      }, 700);
      return () => clearTimeout(playTimer);
    }
  }, [hasSlid]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 right-0 h-screen z-[0] flex items-center justify-end"
      style={{
        transform: hasSlid ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <video
        ref={videoRef}
        src={champagneVideo}
        muted
        loop
        playsInline
        className="h-full w-auto max-w-none mix-blend-screen"
        style={{
          objectFit: "contain",
          objectPosition: "right center",
        }}
      />
    </div>
  );
}
