import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import homeBackground from "@/assets/home-background.avif";
import homeBackground2 from "@/assets/home-background-2.avif";
import homeBackground3 from "@/assets/home-background-3.avif";

const IMAGES = [homeBackground, homeBackground2, homeBackground3] as const;

function hashStringToIndex(input: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % mod;
}

/**
 * Subtle, site-wide festive background textures.
 * - Uses different images per route (stable “interchangeably”)
 * - Blends into the design system colors via HSL CSS vars
 * - Very low opacity so it doesn't overpower sections
 */
export default function FestiveBackdrop() {
  const location = useLocation();

  const [topImg, midImg, botImg] = useMemo(() => {
    const base = hashStringToIndex(location.pathname, IMAGES.length);
    return [IMAGES[base], IMAGES[(base + 1) % IMAGES.length], IMAGES[(base + 2) % IMAGES.length]];
  }, [location.pathname]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top ambience */}
      <div
        className="absolute inset-x-0 top-0 h-[55vh] bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(var(--background)) 0%, transparent 45%, transparent 100%), url(${topImg})`,
        }}
      />

      {/* Mid ambience (very subtle so it doesn't feel repetitive) */}
      <div
        className="absolute inset-x-0 top-[45vh] h-[70vh] bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 0%, hsl(var(--muted)) 50%, transparent 100%), url(${midImg})`,
        }}
      />

      {/* Bottom ambience */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55vh] bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(0deg, hsl(var(--background)) 0%, transparent 55%, transparent 100%), url(${botImg})`,
        }}
      />
    </div>
  );
}
