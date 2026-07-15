import { Gift, X, Sparkles, PartyPopper } from "lucide-react";
import { useState } from "react";

const PromoBand = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-highlight via-highlight to-accent text-white py-2 px-10 sm:px-12 shadow-md overflow-hidden animate-[promo-slide-in_0.6s_ease-out]">
      {/* Floating confetti sparkles */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkles className="absolute left-[8%] top-1 h-3 w-3 text-yellow-200 animate-[confetti-float_2.4s_ease-in-out_infinite]" />
        <Sparkles className="absolute left-[28%] top-2 h-2.5 w-2.5 text-white/80 animate-[confetti-float_3s_ease-in-out_infinite_0.4s]" />
        <PartyPopper className="absolute left-[45%] top-0.5 h-3 w-3 text-yellow-200 animate-[confetti-float_2.8s_ease-in-out_infinite_0.8s]" />
        <Sparkles className="absolute right-[30%] top-1.5 h-3 w-3 text-yellow-100 animate-[confetti-float_2.6s_ease-in-out_infinite_0.2s]" />
        <PartyPopper className="absolute right-[12%] top-2 h-3 w-3 text-white/90 animate-[confetti-float_3.2s_ease-in-out_infinite_1s]" />
        <Sparkles className="absolute right-[55%] top-1 h-2.5 w-2.5 text-yellow-200 animate-[confetti-float_2.2s_ease-in-out_infinite_0.6s]" />
      </span>
      <a
        href="/rewards"
        className="relative flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity text-center"
      >
        <Gift className="h-4 w-4 flex-shrink-0 animate-[gift-bounce_1.4s_ease-in-out_infinite]" />
        <span className="truncate sm:whitespace-normal">
          Celebrate your birthday at Toast · Get $10 and a bottle of champagne on us!
        </span>
        <span className="underline ml-1 hidden sm:inline">Sign Up Now →</span>
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsVisible(false);
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors z-10"
        aria-label="Close promo banner"
      >
        <X className="h-4 w-4" />
      </button>
      <style>{`
        @keyframes promo-slide-in {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes confetti-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-4px) rotate(15deg); opacity: 1; }
        }
        @keyframes gift-bounce {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-2px) rotate(8deg); }
        }
      `}</style>
    </div>
  );
};

export default PromoBand;

