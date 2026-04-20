import { Button } from "@/components/ui/button";
import { CreditCard, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import giftcardDesign from "@/assets/giftcard-design.png";

interface GiftCardSectionProps {
  giftCardUrl?: string;
  balanceUrl?: string;
  locationName?: string;
}

const GiftCardSection = ({
  giftCardUrl,
  balanceUrl,
  locationName,
}: GiftCardSectionProps) => {
  // If both location URLs are provided, render simple direct buttons (location pages)
  const isLocationSpecific = Boolean(giftCardUrl && balanceUrl);
  const giftCardLocations = [
    { name: "Meeting St", url: "https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" },
    { name: "King St", url: "https://order.toasttab.com/egiftcards/toast-king-st-451-king-st" },
    { name: "Summerville", url: "https://order.toasttab.com/egiftcards/toast-summerville-717-old-trolley-road" },
    { name: "West Ashley", url: "https://order.toasttab.com/egiftcards/toast-west-ashley-2026-savannah-hwy-tvrci" },
    { name: "Mt Pleasant", url: "https://order.toasttab.com/egiftcards/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g" },
    { name: "Savannah", url: "https://order.toasttab.com/egiftcards/toast-savannah-1-w-broughton-st" },
  ];

  const checkBalanceLocations = [
    { name: "Meeting St", url: "https://www.toasttab.com/toast-charleston-155-meeting-st/findcard" },
    { name: "King St", url: "https://www.toasttab.com/toast-king-st-451-king-st/findcard" },
    { name: "Summerville", url: "https://www.toasttab.com/toast-summerville-717-old-trolley-road/findcard" },
    { name: "West Ashley", url: "https://www.toasttab.com/toast-west-ashley-2026-savannah-hwy-tvrci/findcard" },
    { name: "Mt Pleasant", url: "https://www.toasttab.com/toast-hungryneck-blvd-1150-hungry-neck-blvd-suite-f-g/findcard" },
    { name: "Savannah", url: "https://www.toasttab.com/toast-savannah-1-w-broughton-st/findcard" },
  ];

  return (
    <section className="py-20 bg-complementary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">Share the Food You Love</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isLocationSpecific
                ? `Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date. These cards are redeemable exclusively at ${locationName ?? "this location"}. Start customizing your card.`
                : "Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date. Can be used in any of Charleston Hospitality Group restaurants. Start customizing your card."}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {isLocationSpecific ? (
                <>
                  <Button asChild size="lg" className="bg-highlight hover:bg-highlight/90 text-white">
                    <a href={giftCardUrl} target="_blank" rel="noopener noreferrer">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Buy e-Gift Card
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={balanceUrl} target="_blank" rel="noopener noreferrer">
                      <Search className="h-5 w-5 mr-2" />
                      Check Balance
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Buy e-Gift Card
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-card z-50">
                  {giftCardLocations.map((loc) => (
                    <DropdownMenuItem key={loc.name} asChild>
                      <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        {loc.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline">
                    <Search className="h-5 w-5 mr-2" />
                    Check Balance
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-card z-50">
                  {checkBalanceLocations.map((loc) => (
                    <DropdownMenuItem key={loc.name} asChild>
                      <a href={loc.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        {loc.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={giftcardDesign} 
              alt="Charleston Hospitality Group Gift Card - Perfect gift for breakfast and brunch lovers" 
              className="rounded-2xl shadow-2xl max-w-full h-auto ring-4 ring-accent/20"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
