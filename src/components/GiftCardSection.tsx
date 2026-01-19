import { Button } from "@/components/ui/button";
import { CreditCard, Search } from "lucide-react";
import giftcardDesign from "@/assets/giftcard-design.png";

const GiftCardSection = () => {
  return (
    <section className="py-20 bg-complementary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary">Share the Food You Love</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Available in any denomination, choose the gift that fits the occasion. Our eGifts are delivered in minutes or can be scheduled for a future delivery date. Can be used in any of Charleston Hospitality Group restaurants. Start customizing your card.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Buy e-Gift Card
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.toasttab.com//toast-charleston-155-meeting-st/findcard" target="_blank" rel="noopener noreferrer">
                  <Search className="h-5 w-5 mr-2" />
                  Check Balance
                </a>
              </Button>
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
