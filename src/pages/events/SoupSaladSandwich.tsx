import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const SoupSaladSandwich = () => {
  return (
    <BlogArticleLayout
      seoTitle="$12 Lunch Combo at Toast All Day | Soup, Salad & Sandwich"
      seoDescription="Toast All Day's $12 lunch combo lets you mix and match any two items: BLT, grilled cheese, fried chicken sandwich, lobster bisque, she crab soup, Caesar salad & more."
      seoKeywords="$12 lunch combo Charleston, soup salad sandwich deal, affordable lunch Charleston SC, she crab soup, lobster bisque"
      heroImage="https://toastallday.com/wp-content/uploads/2025/01/toast-soup-salad-sandwich-combo.jpg"
      heroImageAlt="Toast All Day $12 soup, salad, and sandwich lunch combo"
      category="Menu"
      title="Introducing Our $12 Soup, Salad & Sandwich Lunch Combo"
      date="January 2025"
      currentSlug="soup-salad-sandwich"
    >
      <p>
        Toast All Day has always been known for breakfast and brunch, but our lunch menu deserves its own spotlight. Starting this January, we're rolling out a <strong>$12 lunch combo</strong> that lets you mix and match any two items from our sandwich, soup, and salad selections. It's a straightforward deal designed for the midday crowd — fast, filling, and easy on the wallet.
      </p>

      <h2>Pick Any Two</h2>
      <p>
        The combo works like this: choose any two items from the lists below and pay $12. No substitution fees, no hidden charges. Want two soups? Go for it. A sandwich and a salad? Classic move. Two sandwiches because you skipped breakfast? We won't judge.
      </p>

      <h3>Sandwiches</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li><strong className="text-foreground">BLT</strong> — thick-cut bacon, lettuce, tomato, and mayo on toasted bread</li>
        <li><strong className="text-foreground">Ultimate Grilled Cheese</strong> — a melty, buttery upgrade on the childhood classic</li>
        <li><strong className="text-foreground">Fried Chicken Sandwich</strong> — crispy fried chicken with pickles and house sauce</li>
        <li><strong className="text-foreground">Seasonal Wrap</strong> — rotating ingredients based on what's fresh and local</li>
      </ul>

      <h3>Soups</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li><strong className="text-foreground">Lobster Bisque</strong> — rich, creamy, and loaded with tender lobster</li>
        <li><strong className="text-foreground">She Crab Soup</strong> — a Lowcountry classic that's been on our menu for years</li>
        <li><strong className="text-foreground">Seasonal Soup</strong> — changes weekly based on seasonal ingredients</li>
      </ul>

      <h3>Salads</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li><strong className="text-foreground">Caesar Salad</strong> — crisp romaine, shaved parmesan, croutons, and house-made dressing</li>
        <li><strong className="text-foreground">Mixed Greens</strong> — a lighter option with seasonal vegetables and vinaigrette</li>
      </ul>

      <h2>Why $12?</h2>
      <p>
        We know the lunch market in Charleston is competitive, and we wanted to offer something that feels genuinely worthwhile — not a stripped-down "value meal" but two full-sized items from our regular menu at a price that makes it a no-brainer to come back every week. Our She Crab Soup alone is worth a visit, and pairing it with a fried chicken sandwich for twelve dollars is hard to beat.
      </p>

      <h2>Available at All Locations</h2>
      <p>
        The combo is available during lunch hours at every Toast All Day location. Whether you're near our downtown restaurants, out in Summerville, or visiting our Savannah spot, you can take advantage of the deal. Check our <Link to="/locations" className="text-primary hover:underline">locations page</Link> for hours and directions.
      </p>

      <p>
        Pair your lunch combo with our loyalty program and you'll earn points toward future rewards on every visit. A $12 lunch twice a week adds up to a free $10 reward in just five weeks.
      </p>
    </BlogArticleLayout>
  );
};

export default SoupSaladSandwich;
