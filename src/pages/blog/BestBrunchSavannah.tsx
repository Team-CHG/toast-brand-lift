import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/brunch-savannah.jpg";
import shrimpImg from "@/assets/blog/shrimp-and-grits-charleston.jpg";

const faqs = [
  {
    question: "Where is the best breakfast and brunch in Savannah, GA?",
    answer:
      "Toast! All Day serves breakfast, brunch, and lunch daily at 1 W Broughton Street in downtown Savannah, steps from City Market and the historic squares.",
  },
  {
    question: "Do you need reservations for brunch in Savannah?",
    answer: "No. We're walk-in only, and mornings before 9 are the quietest time to come.",
  },
  {
    question: "Is your Savannah location downtown?",
    answer: "Yes, right at the corner of Broughton and Bull Street, in the middle of the historic district.",
  },
  {
    question: "What time do you open in Savannah?",
    answer:
      "Early, and we serve the full menu until close. Current Savannah hours are listed on our locations page.",
  },
];

const BestBrunchSavannah = () => (
  <BlogArticleLayout
    seoTitle="Best Breakfast & Brunch in Savannah, GA | Broughton St"
    seoDescription="Where to eat breakfast and brunch in Savannah, GA. Shrimp and grits, French toast, and mimosas on Broughton Street downtown."
    seoKeywords="best brunch Savannah GA, breakfast in Savannah, Broughton Street restaurant, Savannah brunch downtown"
    heroImage={heroImg}
    heroImageAlt="Brunch French toast and sparkling wine on a Broughton Street patio in Savannah GA"
    category="Guides"
    title="Best Breakfast and Brunch in Savannah, GA"
    date="August 2026"
    currentSlug="best-brunch-savannah"
    faqs={faqs}
    locations={["savannah"]}
  >
    <p>
      Savannah is a walking city, and walking cities run on breakfast. You'll cover more ground here than you planned to, in
      heat you weren't expecting, under oaks that make you stop and look up. Start with a real meal.
    </p>
    <p>
      For breakfast and brunch in Savannah, GA, we're at 1 W Broughton Street, right where Broughton meets Bull. That's about as
      central as the historic district gets. City Market is a few blocks one way, Forsyth Park is a pleasant stroll the other.
    </p>
    <p>Here's how to plan the morning.</p>

    <h2>What makes brunch in Savannah worth planning around?</h2>
    <p>
      Savannah sits in the same Lowcountry that Charleston does, which means the food shares a pantry: shrimp, crab, rice, grits,
      and pork. You'll see the same dishes on both sides of the state line, cooked a little differently depending on who's in the
      kitchen. If that history interests you, we wrote{" "}
      <Link to="/blog/what-is-lowcountry-cuisine">a guide to Lowcountry cuisine</Link> that covers the whole coast.
    </p>
    <p>
      Our Savannah kitchen runs the same recipes as our Charleston rooms. Stone-ground Carolina grits cooked low and slow, eggs
      poached to order, biscuits made in house.
    </p>
    <img
      src={shrimpImg}
      alt="Shrimp and grits served for brunch at Toast! All Day in Savannah GA"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>What should you order in Savannah?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Lowcountry shrimp and grits, the plate that best explains this whole coast.</li>
      <li>Peach-stuffed French toast, Georgia peaches and all.</li>
      <li>Eggs benedict with a side of grits.</li>
      <li>A mimosa, because Savannah is one of the few cities where nobody will judge you for it at 10 a.m.</li>
    </ul>
    <p>
      More on the drinks in <Link to="/blog/charleston-brunch-cocktails">our brunch cocktail guide</Link>. The{" "}
      <a href="/menus/savannah">Savannah menu</a> has the current lineup if you'd rather decide before you sit down.
    </p>

    <h3>When is the best time to go?</h3>
    <p>
      Before 9 if you want a quiet table and a head start on the squares. Between 10 and noon on weekends the room fills up with
      a good mix of locals and visitors. We don't take reservations, so it's always worth walking in.
    </p>

    <h3>What can you walk to afterward?</h3>
    <p>
      Broughton Street shopping is right outside the door. Chippewa Square, City Market, and the riverfront are all within ten
      minutes on foot, and Forsyth Park is a nice twenty-minute walk south if you've eaten enough to justify it.
    </p>

    <h2>Savannah brunch questions</h2>
    <h3>Is parking difficult downtown?</h3>
    <p>Garages nearby are your best bet, and metered spots free up early in the morning.</p>
    <h3>Do you have outdoor seating?</h3>
    <p>
      Broughton Street is made for people watching, and seating depends on the day and the weather. Call ahead if a table outside
      is what you're after.
    </p>
    <h3>Are you dog friendly?</h3>
    <p>
      Well-behaved dogs are welcome in outdoor seating areas. See our{" "}
      <Link to="/blog/dog-friendly-brunch-charleston">dog-friendly brunch guide</Link> for timing and etiquette, and give us a
      call first so we can point you to the right table.
    </p>
    <h3>Do you serve lunch?</h3>
    <p>Yes, breakfast and lunch run together all day on one menu.</p>

    <h2>Come find us on Broughton</h2>
    <p>
      Whether it's your first morning in Savannah or your fiftieth, we'd be glad to feed you. Look at the{" "}
      <a href="/menus/savannah">Savannah menu</a>, get directions on our <Link to="/locations">locations page</Link>, or start
      from <Link to="/">our homepage</Link>. If Charleston is next on your trip,{" "}
      <Link to="/blog/best-brunch-charleston">our Charleston brunch guide</Link> will get you sorted there too.
    </p>
  </BlogArticleLayout>
);

export default BestBrunchSavannah;