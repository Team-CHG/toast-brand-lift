import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const RewardsWidget = () => {
  const [state, setState] = useState<"minimized" | "expanded">("minimized");

  const handleMinimizedClick = () => {
    setState("expanded");
  };

  const handleCloseExpanded = () => {
    setState("minimized");
  };

  // Minimized button at bottom
  if (state === "minimized") {
    return (
      <button
        onClick={handleMinimizedClick}
        className="fixed bottom-4 left-4 z-[90] bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold animate-in slide-in-from-bottom-4 fade-in"
      >
        Get $10
      </button>
    );
  }

  // Expanded widget at bottom left
  if (state === "expanded") {
    return (
      <div className="fixed bottom-4 left-4 z-[90] bg-card rounded-xl shadow-2xl w-72 p-4 animate-in zoom-in-95 slide-in-from-bottom-4 fade-in duration-300">
        <button
          onClick={handleCloseExpanded}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="text-center mb-3">
          <h3 className="text-base font-bold text-primary">
            Sign up for rewards
          </h3>
        </div>

        <div className="space-y-1.5 mb-3 text-xs">
          <p className="text-foreground"><span className="font-semibold">$10</span> for every $100 spent</p>
          <p className="text-foreground"><span className="font-semibold">2x points</span> Mon–Fri, 12–3 PM</p>
          <p className="text-foreground"><span className="font-semibold">Birthday surprise</span> included!</p>
        </div>

        <Button
          size="sm"
          asChild
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm"
        >
          <a
            href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN REWARDS
          </a>
        </Button>
      </div>
    );
  }

  return null;
};

export default RewardsWidget;
