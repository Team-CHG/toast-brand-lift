import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const MothersDay = () => {
  return (
    <BlogArticleLayout
      seoTitle="Mother's Day Brunch at Toast All Day | Free Mimosa & Beignets for Mom"
      seoDescription="Celebrate Mother's Day at Toast All Day with a free mimosa and beignets for Mom when you purchase 2 entrees. Exclusive to app and loyalty members. All Charleston locations."
      seoKeywords="Mother's Day brunch Charleston, free mimosa moms, Mother's Day restaurant deal, beignets, brunch special Charleston SC"
      heroImage="https://toastallday.com/wp-content/uploads/2025/05/Toast-Mothers-Day-Horizontal-Header-Post-1920-x-1080-px-1-1-1080x675.jpg"
      heroImageAlt="Mother's Day celebration at Toast All Day with mimosas and beignets"
      category="Events"
      title="Celebrate Mother's Day with a Free Mimosa and Beignets!"
      date="May 2025"
      currentSlug="mothers-day"
    >
      <p>
        Mother's Day is the perfect excuse to gather the family around the table and treat Mom to something truly special. This year, Toast All Day is making it easy — and delicious — to celebrate the most important woman in your life with a complimentary mimosa and an order of our golden, pillowy beignets.
      </p>

      <h2>The Offer: Mom Eats (and Sips) on Us</h2>
      <p>
        When your table purchases two or more entrees, Mom receives a free mimosa and a complimentary order of beignets. It's our small way of saying thank you to the moms who do so much. Whether she's a classic Eggs Benedict devotee or a Chicken &amp; Waffles loyalist, pair her favorite dish with a cold glass of bubbly and a dusting of powdered sugar — on the house.
      </p>
      <p>
        This offer is exclusive to Toast All Day app users and loyalty members, so make sure you're signed up before you arrive. Not a member yet? Download the app from the <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">App Store</a> or <a href="https://play.google.com/store/apps/details?id=com.toasttab.toastallday&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Play</a> and you'll also receive a $5 sign-up bonus toward your meal.
      </p>

      <h2>Why Brunch Is the Best Way to Celebrate Mom</h2>
      <p>
        Forget the crowded dinner reservations and overpriced prix-fixe menus. Brunch is relaxed, sunlit, and perfectly paced for catching up over coffee refills. At Toast All Day, our dining rooms fill with families every Mother's Day — grandparents, toddlers, teenagers reluctantly awake before noon — all sharing plates and making memories.
      </p>
      <p>
        Our scratch-made menu features Lowcountry classics alongside creative seasonal dishes. From our signature Lobster Cream Shrimp &amp; Grits to lighter options like avocado toast with poached eggs, there's something for every mom's palate. And yes, the mimosas are bottomless if you're feeling generous.
      </p>

      <h2>Enter to Win on Social Media</h2>
      <p>
        We're also running a Mother's Day giveaway on our social channels. Follow us on Instagram and Facebook for a chance to win a gift card for Mom. Tag a mom who deserves a morning off — it takes two seconds and could earn her a free brunch.
      </p>
      <div className="flex flex-wrap justify-center gap-4 my-6">
        <a href="https://www.instagram.com/p/DJWsG0uR3YC/" target="_blank" rel="noopener noreferrer" className="blog-btn">
          Enter on Instagram
        </a>
        <a href="https://www.facebook.com/reel/1357283998877155" target="_blank" rel="noopener noreferrer" className="blog-btn">
          Enter on Facebook
        </a>
      </div>

      <h2>Can't Make It on Mother's Day?</h2>
      <p>
        If distance or scheduling makes brunch impossible, a <Link to="/gift-cards" className="text-primary hover:underline">Toast All Day gift card</Link> lets Mom choose her own celebration day. E-gift cards are delivered instantly, so even last-minute planners are covered. She'll receive a code she can use at any of our locations — no expiration, no strings.
      </p>

      <div className="text-center my-8">
        <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer" className="blog-btn">
          Send Mom a Gift Card
        </a>
      </div>

      <p>
        Mother's Day tables fill up fast, so we recommend arriving early or placing an online order for pickup. We can't wait to help you make Mom's morning unforgettable.
      </p>
    </BlogArticleLayout>
  );
};

export default MothersDay;
