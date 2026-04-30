import { Heart, X } from "lucide-react";
import { useState } from "react";

const PromoBand = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-highlight via-highlight to-accent text-white py-2 px-10 sm:px-12 shadow-md">
      <a
        href="/mothers-day-gift-cards"
        className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity text-center"
      >
        <Heart className="h-4 w-4 fill-white flex-shrink-0" />
        <span className="truncate sm:whitespace-normal">
          No Mom Left Behind · Buy One. Bless Two., every gift card blesses a deserving mom in our community
        </span>
        <span className="underline ml-1 hidden sm:inline">Shop Now →</span>
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsVisible(false);
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close promo banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PromoBand;
