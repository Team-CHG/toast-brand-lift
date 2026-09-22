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
            <Button size="lg" className="text-lg px-10 bg-accent hover:bg-accent/90 text-white">
              Sign Up Now <ChevronDown className="ml-1 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-charleston/rewardsSignup" target="_blank" rel="noopener noreferrer">Meeting St</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-king/rewardsSignup" target="_blank" rel="noopener noreferrer">King St</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-summerville/rewardsSignup" target="_blank" rel="noopener noreferrer">Summerville</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-west-ashley/rewardsSignup" target="_blank" rel="noopener noreferrer">West Ashley</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-mtpleasant/rewardsSignup" target="_blank" rel="noopener noreferrer">Mt Pleasant</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="https://www.toasttab.com/toast-savannah/rewardsSignup" target="_blank" rel="noopener noreferrer">Savannah</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default RewardsCtaSection;
