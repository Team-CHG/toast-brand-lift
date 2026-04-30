import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const Anniversary = () => {
  return (
    <BlogArticleLayout
      seoTitle="Toast All Day 20th Anniversary | Win Brunch for a Year in Charleston"
      seoDescription="Toast All Day celebrates 20 years! Join our anniversary parties with complimentary champagne, live music, and a chance to win brunch for a year. Events at all Charleston locations."
      seoKeywords="Toast 20th anniversary, restaurant anniversary Charleston, win brunch for a year, free champagne brunch, Charleston celebration"
      heroImage="https://toastallday.com/wp-content/uploads/2025/02/Toast-20th-Anniversary-Event-Post-web.jpg"
      heroImageAlt="Toast All Day 20th anniversary celebration banner"
      category="Celebration"
      title="Toast's Two Decades of Delight"
      date="February 2025"
      currentSlug="anniversary"
    >
      <p>
        Twenty years ago, a small breakfast spot opened on Meeting Street with a simple idea: serve honest, scratch-made food in a room that feels like a friend's kitchen. Two decades, six locations, and countless plates of Shrimp &amp; Grits later, Toast All Day is celebrating its 20th anniversary, and we're throwing a party at every location to mark the occasion.
      </p>

      <h2>What to Expect at the Anniversary Events</h2>
      <p>
        Each celebration features complimentary bubbles with every meal, because no birthday is complete without a toast. Order any dish from our full menu and your server will deliver a glass of sparkling wine alongside it, no purchase minimum, no catch.
      </p>
      <p>
        The first 100 guests at each event will also be entered to win brunch for an entire year. That's 52 free meals at your favorite location. One winner per location will be drawn the following week and notified by phone, so make sure your contact info is up to date when you check in.
      </p>

      <h2>Event Schedule</h2>
      <p>
        We're staggering the celebrations across February so you can attend more than one if you'd like. Each event runs from 7 AM to 3 PM during regular service hours:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>February 8th, Mount Pleasant, 835 Coleman Blvd</li>
        <li>February 15th, West Ashley, 2026 Savannah Hwy</li>
        <li>February 22nd, Summerville, 717 Old Trolley Road</li>
      </ul>
      <p>
        Additional celebrations at our downtown and Savannah locations will be announced on our social media channels. Follow us on <a href="https://www.instagram.com/toastallday/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a> and <a href="https://www.facebook.com/toastallday/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a> for updates.
      </p>

      <h2>Looking Back: How Toast Became a Charleston Staple</h2>
      <p>
        What started as a single dining room on Meeting Street quickly became a neighborhood institution. Locals lined up on weekends for our Eggs Meeting Street, a dish that's been on the menu since day one, and visitors made Toast a mandatory stop on every Charleston trip.
      </p>
      <p>
        Over the years we've expanded to six locations across the Lowcountry and Savannah, earned a spot on TripAdvisor's Top 25, and introduced a rewards program that now has thousands of active members. Through all the growth, the kitchen philosophy hasn't changed: fresh ingredients, generous portions, and a menu that feels like home.
      </p>

      <h2>Looking Ahead</h2>
      <p>
        The 20th anniversary is just the beginning of an exciting year. We have new menu items, app features, and community events planned throughout 2025. If you haven't already, <Link to="/blog/download-app" className="text-primary hover:underline">download our app</Link> to stay in the loop and earn rewards every time you visit.
      </p>

      <p>
        Thank you to every guest, team member, and neighbor who has been part of the Toast story. Here's to twenty more years of great mornings.
      </p>
    </BlogArticleLayout>
  );
};

export default Anniversary;
