import { useState } from "react";
import { Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src: string | null;
  alt: string;
  className?: string;
}

/** Uniform rounded-square menu item photo with icon fallback for missing or broken images. */
const MenuItemThumb = ({ src, alt, className }: Props) => {
  const [failed, setFailed] = useState(false);
  const showImage = !!src && !failed;
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-complementary bg-muted transition-colors duration-300 group-hover:border-highlight",
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <Utensils className="h-6 w-6 text-accent sm:h-7 sm:w-7" aria-hidden="true" />
      )}
    </div>
  );
};

export default MenuItemThumb;
