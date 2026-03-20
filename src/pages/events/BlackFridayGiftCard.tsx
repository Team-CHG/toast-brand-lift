import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const BlackFridayGiftCard = () => {
  return (
    <BlogArticleLayout
      seoTitle="Black Friday Gift Card Deal at Toast All Day | Buy $50, Get $20 Free"
      seoDescription="Black Friday special: buy $50 in Toast All Day gift cards and get a FREE $20 bonus card. Available through December 15th. Perfect holiday gift for brunch lovers."
      seoKeywords="Black Friday gift card deal, restaurant gift card bonus, holiday gift card Charleston, brunch gift card, Toast All Day gift card"
      heroImage="https://toastallday.com/wp-content/uploads/2024/12/Toast_Giving_is_the_Greatest_Gift_web-1.jpg"
      heroImageAlt="Toast All Day Black Friday gift card promotion — buy $50 get $20 free"
      category="Promotions"
      title="A Free $20 Gift Card: Our Black Friday Toast to You"
      date="December 2024"
      currentSlug="black-friday-gift-card"
    >
      <p>
        The holiday shopping season is here, and if you have a brunch lover on your list — or you simply want to treat yourself — Toast All Day has a deal worth grabbing. From now through December 15th, 2024, purchase $50 or more in Toast All Day gift cards and receive a free $20 bonus card on top.
      </p>

      <h2>How the Bonus Works</h2>
      <p>
        Buy $50 in gift cards (any combination — one $50 card, five $10 cards, whatever works), and we'll add a $20 bonus card to your order at no extra charge. The bonus card is a separate card you can keep for yourself or give to someone else. Think of it as a reward for being a thoughtful gift-giver.
      </p>
      <p>
        Both physical and e-gift cards qualify for the promotion. Physical cards can be purchased at our <a href="https://toastallday.myshopify.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">online shop</a> or in person at any location. E-gift cards are available through <a href="https://order.toasttab.com/egiftcards/toast-charleston-155-meeting-st" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">our e-gift card portal</a> and deliver instantly via email — perfect for last-minute shoppers.
      </p>

      <h2>Why Gift Cards Make Great Gifts</h2>
      <p>
        Not everyone wants another candle or pair of socks. A Toast All Day gift card is an experience — a lazy Saturday morning with Shrimp &amp; Grits, a mimosa flight with friends, or a weekday lunch break that feels like a mini vacation. Our cards work at every location, never expire, and carry no fees. The recipient chooses when, where, and what to order.
      </p>

      <h2>Stock Up for the Holidays</h2>
      <p>
        Gift cards are one of those things you can never have too many of. Teachers, mail carriers, babysitters, coworkers, in-laws — everyone eats, and everyone appreciates a good brunch. At $50 for $70 in total value, this is one of the best gift card promotions we've ever offered.
      </p>

      <h2>Coming in 2025: Our 20th Anniversary</h2>
      <p>
        Toast All Day is turning 20 in 2025, and we have a year of celebrations planned — special events, anniversary menus, giveaways, and more. Gift card holders will be first in line to enjoy everything we have in store. Stay tuned to our <Link to="/blog" className="text-primary hover:underline">blog</Link> for announcements throughout the year.
      </p>

      <p>
        The $20 bonus card offer ends December 15th, so don't wait. Pick up your gift cards today and give the gift of great mornings.
      </p>
    </BlogArticleLayout>
  );
};

export default BlackFridayGiftCard;
