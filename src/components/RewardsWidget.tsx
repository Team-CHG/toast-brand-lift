import { useState } from "react";
import { X, ChevronDown, Sparkles, PartyPopper, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";


const RewardsWidget = () => {
  const [state, setState] = useState<"minimized" | "expanded">("minimized");
  const [showLocations, setShowLocations] = useState(false);

  const handleMinimizedClick = () => {
    setState("expanded");
  };

  const handleCloseExpanded = () => {
    setState("minimized");
    setShowLocations(false);
  };

  // Minimized button at bottom
  if (state === "minimized") {
    return (
      <button
        onClick={handleMinimizedClick}
        className="fixed bottom-4 left-4 z-[90] bg-[#ca252a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold animate-in slide-in-from-bottom-4 fade-in flex items-center gap-2"
      >
        <Gift className="h-4 w-4 animate-[widget-bounce_1.4s_ease-in-out_infinite]" />
        Get $10
      </button>
    );
  }

  // Expanded widget at bottom left
  if (state === "expanded") {
    return (
      <div className="fixed bottom-4 left-4 z-[90] bg-card rounded-xl shadow-2xl w-72 p-4 animate-in zoom-in-95 slide-in-from-bottom-4 fade-in duration-300 overflow-hidden">
        {/* Celebration confetti */}
        <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Sparkles className="absolute left-3 top-2 h-3 w-3 text-highlight animate-[confetti-float_2.4s_ease-in-out_infinite]" />
          <PartyPopper className="absolute right-8 top-1 h-3.5 w-3.5 text-accent animate-[confetti-float_2.8s_ease-in-out_infinite_0.5s]" />
          <Sparkles className="absolute left-8 top-8 h-2.5 w-2.5 text-highlight/80 animate-[confetti-float_3s_ease-in-out_infinite_0.9s]" />
          <Sparkles className="absolute right-14 top-10 h-2.5 w-2.5 text-accent/80 animate-[confetti-float_2.6s_ease-in-out_infinite_0.3s]" />
          <PartyPopper className="absolute left-2 bottom-14 h-3 w-3 text-highlight animate-[confetti-float_3.2s_ease-in-out_infinite_1.1s]" />
          <Sparkles className="absolute right-3 bottom-16 h-3 w-3 text-accent animate-[confetti-float_2.2s_ease-in-out_infinite_0.7s]" />
        </span>
        <button
          onClick={handleCloseExpanded}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="relative text-center mb-3">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Gift className="h-5 w-5 text-highlight animate-[widget-bounce_1.4s_ease-in-out_infinite]" />
            <h3 className="text-base font-bold text-primary">Join Toast! Rewards</h3>
          </div>
          <p className="text-xs text-muted-foreground">Earn perks every time you visit.</p>
        </div>

        <ul className="relative space-y-1.5 mb-3 text-xs text-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
            <span>Get $5 instantly for signing up!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
            <span>$10 for every $100 spent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
            <span>2x points Mon–Fri, 12–3 PM</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
            <span>Birthday surprise included!</span>
          </li>
        </ul>


        {!showLocations ? (
          <Button
            size="sm"
            className="relative w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm"
            onClick={() => setShowLocations(true)}
          >
            SIGN UP NOW <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <div className="relative space-y-1 mt-1">
            <p className="text-xs font-semibold text-muted-foreground text-center">Select a location:</p>
            {[
              { name: "Meeting St", url: "https://www.toasttab.com/toast-charleston/rewardsSignup" },
              { name: "King St", url: "https://www.toasttab.com/toast-king/rewardsSignup" },
              { name: "Summerville", url: "https://www.toasttab.com/toast-summerville/rewardsSignup" },
              { name: "West Ashley", url: "https://www.toasttab.com/toast-west-ashley/rewardsSignup" },
              { name: "Mt Pleasant", url: "https://www.toasttab.com/toast-mtpleasant/rewardsSignup" },
              { name: "Savannah", url: "https://www.toasttab.com/toast-savannah/rewardsSignup" },
            ].map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-sm py-1.5 px-2 rounded-md hover:bg-muted transition-colors text-foreground"
              >
                {loc.name}
              </a>
            ))}
          </div>
        )}
        <style>{`
          @keyframes confetti-float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-6px) rotate(20deg); opacity: 1; }
          }
          @keyframes widget-bounce {
            0%, 100% { transform: translateY(0) rotate(-8deg); }
            50% { transform: translateY(-3px) rotate(10deg); }
          }
        `}</style>
      </div>
    );
  }

  return null;
};

export default RewardsWidget;
