import BlogArticleLayout from "@/components/BlogArticleLayout";
import badgeAppStore from "@/assets/badge-app-store.png";
import badgeGooglePlay from "@/assets/badge-google-play.png";
const DownloadApp = () => {
  return (
    <BlogArticleLayout
      seoTitle="Download the Toast All Day App | Earn $5 Instantly + Rewards"
      seoDescription="Download the Toast All Day app and get a $5 sign-up bonus. Earn 1 point per dollar, access exclusive discounts, order ahead, and track your rewards from your phone."
      seoKeywords="Toast All Day app, restaurant rewards app, mobile ordering Charleston, loyalty program, $5 sign-up bonus"
      heroImage="https://toastallday.com/wp-content/uploads/2025/04/Toast-APP-Loyalty-Sign-Up-1920-x-1080-px-1080x675.jpg"
      heroImageAlt="Toast All Day mobile app showing rewards dashboard"
      category="Promotions"
      title="Download Our New App and Start Earning Rewards"
      date="April 2025"
      currentSlug="download-app"
    >
      <p>
        After twenty years of serving Charleston's favorite brunch, we're bringing the full Toast All Day experience to your pocket. Our brand-new app puts rewards tracking, online ordering, and exclusive offers in one place — and to celebrate the launch, every new user gets <strong>$5 in instant rewards</strong> just for signing up.
      </p>

      <h2>Why We Built the App</h2>
      <p>
        Our loyalty program has been running on the web for years, and it works well — but we heard the same feedback from regulars: "I forgot to check in," "I didn't know I had points," "Can I just order from my phone?" The app solves all three. Your rewards balance is always visible, you earn points automatically when you pay through the app, and you can place pickup orders without waiting in line.
      </p>

      

      <h2>How the Rewards Work</h2>
      <p>
        The program is straightforward: <strong>earn 1 point for every dollar you spend</strong>. Points accumulate toward $10 rewards that you can apply to any future visit. There are no blackout dates, no complicated tiers, and no expiration tricks. Eat brunch, earn points, redeem when you're ready.
      </p>
      <p>
        On top of the standard earning rate, app users get access to <strong>exclusive promotions</strong> that don't appear on our website or social media. Think surprise double-point days, birthday perks, and early access to seasonal menu items. If you're the kind of person who visits Toast more than once a month, the savings add up quickly.
      </p>

      <h2>Online Ordering, Simplified</h2>
      <p>
        The app connects directly to our kitchen system at every location. Browse the full menu, customize your order, choose pickup or dine-in, and pay — all before you leave the house. Your food is timed to be ready when you arrive, so there's no standing around. Online orders through the app also earn loyalty points automatically.
      </p>

      <h2>Getting Started Takes 60 Seconds</h2>
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
        <li><strong className="text-foreground">Download</strong> the Toast All Day app from the App Store or Google Play.</li>
        <li><strong className="text-foreground">Create an account</strong> with your name, email, and phone number.</li>
        <li><strong className="text-foreground">Start earning</strong> — your $5 sign-up bonus is loaded instantly.</li>
      </ol>

      <p>
        Already a loyalty member on the web? Your existing points transfer automatically when you log in with the same email. Nothing is lost, and everything is easier to manage from the app going forward.
      </p>

      <h2>Stay in the Loop</h2>
      <p>
        Enable push notifications and you'll be the first to hear about new menu launches, holiday specials, and limited-time promotions. We keep notifications infrequent and relevant — no spam, just brunch news worth reading.
      </p>

      <p>
        Download the app today and put your next $5 toward the best breakfast in Charleston.
      </p>
    </BlogArticleLayout>
  );
};

export default DownloadApp;
