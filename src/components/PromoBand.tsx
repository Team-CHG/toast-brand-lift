import { Gift, X } from "lucide-react";
import { useState } from "react";

const PromoBand = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 relative">
      <a
        href="https://charlestonhospitalitygroup.com/giftcard-raffle-contest/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Gift className="h-4 w-4" />
        <span>Buy a $50 gift card, get a $20 bonus + enter our raffle!</span>
        <span className="underline ml-1">Learn More →</span>
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsVisible(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded-full transition-colors"
        aria-label="Close promo banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PromoBand;
