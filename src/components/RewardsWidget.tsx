import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        className="fixed bottom-4 left-4 z-[90] bg-[#ca252a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold animate-in slide-in-from-bottom-4 fade-in"
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm"
            >
              JOIN REWARDS <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-charleston-155-meeting-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Meeting St</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" target="_blank" rel="noopener noreferrer">King St</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-summerville-717-old-trolley-road/rewardsSignup" target="_blank" rel="noopener noreferrer">Summerville</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/rewardsSignup" target="_blank" rel="noopener noreferrer">West Ashley</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/rewardsSignup" target="_blank" rel="noopener noreferrer">Mt Pleasant</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-savannah-1-w-broughton-st/rewardsSignup" target="_blank" rel="noopener noreferrer">Savannah</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return null;
};

export default RewardsWidget;
