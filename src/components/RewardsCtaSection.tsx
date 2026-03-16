import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RewardsCtaSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Earning!</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our rewards program today and start enjoying the benefits!
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" className="text-lg px-10">
              Sign Up Now <ChevronDown className="ml-1 h-5 w-5" />
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
    </section>
  );
};

export default RewardsCtaSection;
