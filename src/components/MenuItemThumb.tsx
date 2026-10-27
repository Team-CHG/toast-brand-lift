import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  src: string | null;
  alt: string;
  className?: string;
}

/** Uniform rounded-square menu item photo. Items without a photo show no image at all. */
const MenuItemThumb = ({ src, alt, className }: Props) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-complementary bg-muted transition-colors duration-300 group-hover:border-highlight",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default MenuItemThumb;
