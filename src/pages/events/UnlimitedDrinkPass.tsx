import BlogArticleLayout from "@/components/BlogArticleLayout";

const UnlimitedDrinkPass = () => {
  return (
    <BlogArticleLayout
      seoTitle="Unlimited Mimosa Wristband at Toast All Day | Bridge Run 2025"
      seoDescription="Celebrate the Cooper River Bridge Run with Toast All Day's unlimited mimosa wristband! Available at our Mount Pleasant and King Street locations on April 5th."
      seoKeywords="unlimited mimosas Bridge Run, Cooper River Bridge Run brunch, mimosa festival Charleston, Toast All Day wristband, Bridge Run celebration"
      heroImage="https://toastallday.com/wp-content/uploads/2025/03/Toast-Bridge-Run-Mimosa-Festival-1920-x-1080-px-web.jpg"
      heroImageAlt="Toast All Day Bridge Run Mimosa Festival wristband event"
      category="Promotions"
      title="Celebrate the 20th Anniversary with Unlimited Mimosas at the Bridge Run"
      date="March 2025"
      currentSlug="unlimited-drink-pass"
    >
      <p>
        The Cooper River Bridge Run is Charleston's biggest annual fitness event, drawing tens of thousands of runners and spectators to the streets every April. This year, Toast All Day is turning race day into a full-blown celebration — combining our 20th anniversary festivities with an <strong>unlimited mimosa wristband</strong> you can grab at two of our locations along the race route.
      </p>

      <h2>How the Wristband Works</h2>
      <p>
        Purchase your wristband in advance through Eventbrite and check in at either our <strong>Mount Pleasant location</strong> (near the starting line) or our <strong>King Street location</strong> (at the finish). Once the wristband is on, your mimosas are unlimited for the duration of your visit. Pair them with any dish on our full brunch menu and turn your post-run recovery into a proper celebration.
      </p>

      <div className="flex flex-wrap justify-center gap-4 my-8">
        <a href="https://www.eventbrite.com/e/toast-bridge-run-mimosa-festival-tickets-1304651721419?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="blog-btn">
          Get Your Wristband on Eventbrite
        </a>
      </div>

      <h2>Event Details</h2>
      <p>
        The mimosa festival runs on <strong>Saturday, April 5th, 2025</strong> during regular service hours. Both participating locations will have a check-in station where you can pick up your wristband and start sipping. No need to print anything — just show your Eventbrite confirmation on your phone.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li><strong className="text-foreground">Toast Mount Pleasant</strong> — near the Bridge Run starting line</li>
        <li><strong className="text-foreground">Toast King Street</strong> — 451 King St, near the finish line</li>
      </ul>

      <h2>Why Brunch After the Bridge Run Just Makes Sense</h2>
      <p>
        You've just walked or run 10 kilometers over the Ravenel Bridge — you've earned a seat, a plate of Chicken &amp; Waffles, and more than one mimosa. Bridge Run morning is one of our busiest days of the year, and the energy in the dining room is electric. Finisher medals clinking against champagne flutes, running groups celebrating together, families cheering each other on over pancakes.
      </p>
      <p>
        If you'd rather skip the crowds and order ahead, our <a href="https://apps.apple.com/us/app/toast-all-day/id6744418742" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mobile app</a> lets you place a pickup order so your food is ready when you walk through the door.
      </p>

      <h2>Don't Forget to Sign Up for Rewards</h2>
      <p>
        If you're joining us for the Bridge Run event, sign up for our loyalty program while you wait. New members receive a <strong>$5 instant bonus</strong> and start earning points on every purchase. It's the best way to keep the celebration going long after race day.
      </p>

      <div className="text-center my-8">
        <a href="https://www.toasttab.com/toast-king-st-451-king-st/rewardsSignup" target="_blank" rel="noopener noreferrer" className="blog-btn">
          Join the Rewards Program
        </a>
      </div>
    </BlogArticleLayout>
  );
};

export default UnlimitedDrinkPass;
