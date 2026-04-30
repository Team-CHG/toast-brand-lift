import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const MilitaryDiscount = () => {
  return (
    <BlogArticleLayout
      seoTitle="10% Military Discount at Toast All Day | Active Duty & Veterans"
      seoDescription="Toast All Day proudly offers a 10% military discount to all active duty service members and retired veterans at every location. Just show your military ID."
      seoKeywords="military discount Charleston restaurant, veteran discount brunch, active duty discount, military appreciation restaurant, Toast All Day military"
      heroImage="https://toastallday.com/wp-content/uploads/2025/05/Toast-Military-10-Discount-1920-x-1080-px-1024x576.jpg"
      heroImageAlt="Toast All Day 10% military discount for active duty and veterans"
      category="Offers"
      title="A Toast to Our Troops: 10% Military Discount Every Day"
      date="January 2025"
      currentSlug="military-discount"
    >
      <p>
        The Charleston area is home to Joint Base Charleston, the Naval Weapons Station, and thousands of active duty families and retired veterans. Many of them have been part of the Toast All Day community since we opened our doors twenty years ago. As we mark our 20th anniversary, we're making our appreciation official with a permanent 10% discount for all active duty and retired military.
      </p>

      <h2>How It Works</h2>
      <p>
        Redeeming the discount is simple. Just let your server know at the time of ordering and be prepared to show a valid military ID if you're not in uniform. The 10% applies to your entire check, food and non-alcoholic beverages, at any of our locations. There's no coupon to clip, no app to open, and no minimum purchase required.
      </p>

      <h2>Available at Every Location, Every Day</h2>
      <p>
        This isn't a one-day promotion or a holiday-only gesture. The military discount is available every day we're open, at every Toast All Day location across Charleston and Savannah. Whether you're grabbing a quick breakfast before reporting to base or settling in for a long weekend brunch with the family, the discount applies.
      </p>
      <p>
        Find your nearest location on our <Link to="/locations" className="text-primary hover:underline">locations page</Link>, we have restaurants in downtown Charleston, Mount Pleasant, West Ashley, Summerville, and Savannah.
      </p>

      <h2>Why This Matters to Us</h2>
      <p>
        Toast All Day has always been a community restaurant. We sponsor local teams, hire military spouses, and donate to veteran organizations in the Lowcountry. The discount is one more way we can show up for the people who show up for all of us. It's small compared to the sacrifices service members and their families make, but it's offered with genuine gratitude.
      </p>

      <h2>Pair It with Our Rewards Program</h2>
      <p>
        The military discount stacks with our loyalty program. Sign up through our <Link to="/blog/download-app" className="text-primary hover:underline">mobile app</Link> and you'll earn 1 point for every dollar spent, even on discounted checks. Over time, those points convert to $10 rewards you can use on any future visit. Between the discount and the loyalty perks, regular guests save meaningfully over the course of a year.
      </p>

      <p>
        To every service member and veteran reading this: thank you. We look forward to serving you.
      </p>
    </BlogArticleLayout>
  );
};

export default MilitaryDiscount;
