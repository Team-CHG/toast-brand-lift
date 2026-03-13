import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Shield, Heart, CheckCircle } from "lucide-react";

const MilitaryDiscount = () => {
  return (
    <BlogArticleLayout
      seoTitle="10% Military Discount - Toast All Day | Veterans & Active Duty"
      seoDescription="Toast All Day honors our military with 10% off for all active duty and retired veterans. Show your military ID and enjoy award-winning breakfast and brunch."
      seoKeywords="military discount Charleston, veteran discount restaurant, active duty discount, military appreciation"
      heroImage="https://toastallday.com/wp-content/uploads/2025/05/Toast-Military-10-Discount-1920-x-1080-px-1024x576.jpg"
      heroImageAlt="Toast Military Discount"
      category="Offers"
      title="A Toast to Our Troops"
      date="January 2025"
      currentSlug="military-discount"
    >
      <p className="text-center text-xl text-muted-foreground">
        Celebrating 20 Years with a Special Military Discount
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At Toast All Day, we believe in honoring those who dedicate their lives to serving our country. As we celebrate our 20th anniversary, we're taking this milestone as an opportunity to give back to the heroes who have given so much for us. To show our appreciation, we're proud to offer a <strong className="text-primary">10% discount</strong> to all active duty and retired veterans.
      </p>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-16 h-16 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4 text-center">A Special Thank You to Our Service Members</h2>
        <p className="text-center text-muted-foreground">
          Our military customers have always been an integral part of our Toast All Day family. Your dedication, sacrifice, and bravery inspire us, and we want to express our gratitude in a meaningful way. Whether you're stopping by for breakfast, brunch, lunch, or dinner, let us serve you with the same commitment and care that you have shown our country.
        </p>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border/50">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How to Redeem Your Discount</h3>
        <p className="text-center text-muted-foreground mb-6">
          Receiving your <strong className="text-primary">10% military discount</strong> is simple:
        </p>
        <div className="space-y-4 max-w-md mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground">Notify your server at the time of ordering.</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground">Be prepared to show a valid military ID if not in uniform.</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground">Enjoy your meal, knowing that it comes with our deepest thanks and appreciation.</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-primary/10 rounded-2xl p-8">
        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-4">A TOAST to Our Troops!</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This special offer is our way of celebrating you, our brave service members, as we mark 20 incredible years in the community. Whether you're a longtime customer or visiting for the first time, we invite you to join us for a delicious meal and a warm welcome.
        </p>
      </div>
    </BlogArticleLayout>
  );
};

export default MilitaryDiscount;
