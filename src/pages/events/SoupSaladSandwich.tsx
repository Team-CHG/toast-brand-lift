import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { Utensils } from "lucide-react";

const SoupSaladSandwich = () => {
  const sandwiches = ["BLT", "Ultimate Grilled Cheese", "Fried Chicken", "Seasonal Wrap"];
  const soups = ["Lobster Bisque", "She Crab", "Seasonal Soup"];
  const salads = ["Caesar", "Mixed Greens"];

  return (
    <BlogArticleLayout
      seoTitle="$12 Lunch Combo - Toast All Day | Soup, Salad & Sandwich"
      seoDescription="Try Toast All Day's $12 lunch combo! Mix and match any 2: BLT, grilled cheese, lobster bisque, she crab soup, Caesar salad & more."
      seoKeywords="lunch combo, soup salad sandwich, $12 lunch special, Charleston lunch, affordable lunch"
      heroImage="https://toastallday.com/wp-content/uploads/2025/01/toast-soup-salad-sandwich-combo.jpg"
      heroImageAlt="Soup, Salad or Sandwich Combo"
      category="Menu"
      title="New Soup, Salad or Sandwich Combo"
      date="January 2025"
      currentSlug="soup-salad-sandwich"
    >
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
        <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-primary mb-2">$12 Lunch Special</h2>
        <p className="text-xl text-muted-foreground">Mix and match any two items!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Sandwiches</h3>
          <ul className="space-y-2">
            {sandwiches.map((item, index) => (
              <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Soups</h3>
          <ul className="space-y-2">
            {soups.map((item, index) => (
              <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Salads</h3>
          <ul className="space-y-2">
            {salads.map((item, index) => (
              <li key={index} className="text-muted-foreground text-center py-2 border-b border-border/30 last:border-0">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-6">Visit any Toast All Day location to enjoy this delicious lunch combo!</p>
        <Link to="/locations" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
          Find a Location
        </Link>
      </div>
    </BlogArticleLayout>
  );
};

export default SoupSaladSandwich;
