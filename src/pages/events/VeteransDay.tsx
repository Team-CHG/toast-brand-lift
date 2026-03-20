import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const VeteransDay = () => {
  return (
    <BlogArticleLayout
      seoTitle="Veterans Day Free Meal at Toast All Day | November 11th"
      seoDescription="Veterans and active duty military eat FREE at Toast All Day on Veterans Day! Choose a classic breakfast plate or our famous smash burger. All Charleston locations."
      seoKeywords="Veterans Day free meal Charleston, free food for veterans, military free meal restaurant, Veterans Day 2024"
      heroImage="https://toastallday.com/wp-content/uploads/2024/11/unnamed-22-1080x675.png"
      heroImageAlt="Veterans Day free meal at Toast All Day — classic breakfast or smash burger"
      category="Events"
      title="Veterans Eat FREE This Veterans Day"
      date="November 2024"
      currentSlug="veterans-day"
    >
      <p>
        Every Veterans Day, Toast All Day opens its doors to the men and women who have served our country — and this year is no exception. On November 11th, 2024, all veterans and active duty service members can enjoy a free meal at any of our Charleston-area locations.
      </p>

      <h2>Choose Your Free Meal</h2>
      <p>
        Veterans can select from two of our most popular dishes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Classic Breakfast Plate — two eggs cooked your way, choice of bacon or sausage, toast, and hash browns. The breakfast that built Toast All Day.</li>
        <li>Smash Burger — our double-patty smash burger with melted cheese, lettuce, tomato, and house sauce, served with a side of fries.</li>
      </ul>
      <p>
        Both options are full-sized dishes from our regular menu — not a scaled-down "special" plate. We want this to feel like a real meal, not a gesture.
      </p>

      <h2>How to Redeem</h2>
      <p>
        Simply visit any Toast All Day location on November 11th and let your server know you'd like the Veterans Day meal. You'll need to present a valid military ID or be in uniform. The offer is available for dine-in only during regular service hours. No reservation is needed, but we recommend arriving early — Veterans Day is one of our busiest days of the year.
      </p>

      <h2>Beyond Veterans Day</h2>
      <p>
        Our appreciation for the military community doesn't end on November 11th. Toast All Day offers a <Link to="/blog/military-discount" className="text-primary hover:underline">permanent 10% military discount</Link> every day of the year at all locations. If you haven't taken advantage of it yet, just mention it to your server and show your ID. It applies to your full check and works alongside our loyalty rewards program.
      </p>

      <p>
        To all who have served and continue to serve: thank you. We're honored to have you at our table.
      </p>
    </BlogArticleLayout>
  );
};

export default VeteransDay;
