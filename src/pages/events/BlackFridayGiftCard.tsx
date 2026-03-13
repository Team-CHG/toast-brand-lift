import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Gift, Calendar, PartyPopper } from "lucide-react";

const BlackFridayGiftCard = () => {
  return (
    <BlogArticleLayout
      seoTitle="Black Friday Gift Card Deal - Toast All Day | Free $20 Bonus"
      seoDescription="Black Friday special! Buy $50 in Toast All Day gift cards and get a FREE $20 bonus card. Perfect holiday gift for breakfast and brunch lovers."
      seoKeywords="Black Friday gift card, restaurant gift card, bonus gift card, holiday gift, brunch gift"
      heroImage="https://toastallday.com/wp-content/uploads/2024/12/Toast_Giving_is_the_Greatest_Gift_web-1.jpg"
      heroImageAlt="Black Friday Gift Card Offer"
      category="Promotions"
      title="A Free $20 Gift Card: Our Black Friday Toast to You!"
      date="December 2024"
      currentSlug="black-friday-gift-card"
    >
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
        <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-foreground mb-4">Buy $50 in Gift Cards, Get a $20 Bonus!</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Offer valid through December 15th, 2024</span>
        </div>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        This holiday season, give the gift of delicious brunch! Purchase $50 or more in Toast All Day gift cards and receive a FREE $20 bonus gift card. Perfect for friends, family, or yourself!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="https://toastallday.myshopify.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
          Buy Physical Gift Card
        </a>
        <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
          Buy e-Gift Card
        </a>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
        <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-4">Coming in 2025!</h3>
        <p className="text-muted-foreground">
          Toast All Day is celebrating our 20th anniversary in 2025! Stay tuned for special events and promotions throughout the year.
        </p>
      </div>
    </BlogArticleLayout>
  );
};

export default BlackFridayGiftCard;
