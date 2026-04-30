import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const ValentinesDay = () => {
  return (
    <BlogArticleLayout
      seoTitle="Valentine's Day Brunch at Toast All Day | Romantic Specials & Cocktails"
      seoDescription="Celebrate Valentine's Day at Toast All Day with romantic brunch specials: Be Mine Mimosa, Red Velvet Waffles, Mocha-berry Bliss latte, and Sweetheart Spiked Lemonade."
      seoKeywords="Valentine's Day brunch Charleston, romantic brunch SC, Valentine's restaurant specials, red velvet waffles, Valentine's Day mimosa"
      heroImage="https://toastallday.com/wp-content/uploads/2022/02/49a9faa3-d3c4-4d48-82a7-ea3a05d30e61-copy-1-496x620-1.jpeg"
      heroImageAlt="Valentine's Day romantic brunch setting at Toast All Day"
      category="Events"
      title="Love Is in the Air at Toast"
      date="February 2022"
      currentSlug="valentines-day"
    >
      <p>
        Valentine's Day calls for something better than an overpriced dinner in a dark room. At Toast All Day, we celebrate love the way we do everything, with a sunlit dining room, excellent food, and just the right amount of champagne. Our Valentine's Day specials are designed for couples, friends, and anyone who believes brunch is the most romantic meal of the day.
      </p>

      <h2>The Valentine's Day Menu</h2>
      <p>
        Alongside our full regular menu, we're offering a curated lineup of seasonal specials that lean into the holiday spirit without going overboard. Every item is made from scratch in our kitchen, no shortcuts, no gimmicks.
      </p>

      <h3>Signature Cocktails</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Be Mine Mimosa, our classic mimosa with a romantic twist. Sparkling wine meets fresh-squeezed juice with a berry garnish that turns every sip pink.</li>
        <li>Sweetheart Spiked Lemonade, sweet, tart, and refreshing with a kick. Perfect for the person who claims they don't like mimosas but orders three anyway.</li>
      </ul>

      <h3>Specialty Latte</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Mocha-berry Bliss, rich espresso meets dark chocolate and a swirl of berry syrup. It's dessert in a mug, and it's acceptable before noon.</li>
      </ul>

      <h3>Sweet Treat</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Red Velvet Waffles, fluffy Belgian waffles with a red velvet twist, served with cream cheese drizzle and your choice of breakfast meats. The showstopper of the menu, and extremely Instagram-friendly.</li>
      </ul>

      <h2>Why Brunch Is the Better Valentine's Date</h2>
      <p>
        Think about it: natural light, no rush, and a menu that invites sharing. Brunch is relaxed in a way that a prix-fixe dinner never is. You can linger over coffee, split a waffle, order a second round of mimosas, and still have the whole afternoon ahead of you. No awkward "should we get dessert or ask for the check" calculus, just good food, good company, and sunshine.
      </p>

      <h2>Gift a Brunch Date</h2>
      <p>
        Not sure what to get your valentine? A <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Toast All Day e-gift card</a> is delivered instantly and lets them choose their own celebration date. It's thoughtful, practical, and guaranteed to be used, unlike that heart-shaped box of chocolates.
      </p>

      <p>
        Valentine's Day tables fill quickly, so we recommend arriving early. We don't take reservations, but the wait is always worth it. We'll see you there.
      </p>
    </BlogArticleLayout>
  );
};

export default ValentinesDay;
