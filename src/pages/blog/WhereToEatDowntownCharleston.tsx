import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/downtown-charleston.jpg";
import brunchImg from "@/assets/blog/best-brunch-charleston.jpg";

const faqs = [
  {
    question: "Where should you eat before a Charleston walking tour?",
    answer:
      "Eat a full breakfast downtown before you start. Toast! All Day on Meeting Street sits a few blocks from the Market and most tour meeting points, and we open early.",
  },
  {
    question: "What is there to eat near the Charleston City Market?",
    answer:
      "The Market area has plenty of options. Our Meeting Street location is a short walk away and serves breakfast, brunch, and lunch all day.",
  },
  {
    question: "How long does it take to walk historic downtown Charleston?",
    answer:
      "A loop from the Market down to the Battery and back is roughly two hours at a comfortable pace, longer if you stop at Rainbow Row and the waterfront.",
  },
  {
    question: "Is it hard to find breakfast early in downtown Charleston?",
    answer:
      "Not on Meeting Street. We open early so you can eat before the tour groups start moving. Current opening hours are listed on our locations page.",
  },
];

const WhereToEatDowntownCharleston = () => (
  <BlogArticleLayout
    seoTitle="Where to Eat in Historic Downtown Charleston, SC"
    seoDescription="Eating before or after exploring historic downtown Charleston? Here's how to time your meal, what to order, and where to walk after."
    seoKeywords="where to eat downtown Charleston, restaurants near Charleston City Market, historic downtown Charleston food, breakfast downtown Charleston"
    heroImage={heroImg}
    heroImageAlt="Historic downtown Charleston SC street with pastel buildings and sidewalk restaurant tables"
    category="Guides"
    title="Where to Eat Before or After Exploring Historic Downtown Charleston"
    date="August 2026"
    currentSlug="where-to-eat-downtown-charleston"
    faqs={faqs}
    locations={["meeting", "king"]}
  >
    <p>
      Historic downtown Charleston is a lot of walking. Cobblestones, humidity, and a peninsula full of things worth stopping
      for. People underestimate it constantly, usually right up until they're sitting on a bench near the Battery wondering where
      the nearest water is.
    </p>
    <p>
      The fix is simple. Eat a real meal before you start, or plan a proper one for when you finish. We're on Meeting Street and
      upper King Street, which puts us at both ends of most downtown Charleston itineraries.
    </p>
    <p>Here's how we'd time it.</p>

    <h2>Where should you eat before a walking tour?</h2>
    <p>
      Somewhere close to your starting point that opens early. Most walking tours meet near the City Market or Washington Square,
      and our Meeting Street room at 129 Meeting St is a few blocks from both. Get there 45 minutes before your tour and you'll
      eat without rushing.
    </p>
    <p>
      Order something with protein and something with grits. Sweet-only breakfasts tend to fade around the second hour of
      walking, which is right when the guide starts talking about earthquake bolts.
    </p>
    <img
      src={brunchImg}
      alt="Breakfast and brunch spread before exploring historic downtown Charleston SC"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>What about after you've walked all morning?</h2>
    <p>
      This is our favorite shift. People come in warm, a little tired, and ready to sit for an hour. Breakfast runs all day here,
      so you can order pancakes at 2 p.m. without explaining yourself, or move to the lunch side with a sandwich and soup.
    </p>
    <p>
      A mimosa or a bloody mary is fair game at that point too. Our{" "}
      <Link to="/blog/charleston-brunch-cocktails">brunch cocktail guide</Link> covers what goes with what.
    </p>
    <p>
      Give the <a href="/menus/downtown">downtown menu</a> a look and plan your table before you start walking.
    </p>

    <h3>A simple downtown day, food included</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>8:00, breakfast on Meeting Street. Shrimp and grits, coffee, maybe a biscuit for the road.</li>
      <li>9:30, walk the Market, then head south on Church Street toward the Battery.</li>
      <li>11:00, Rainbow Row, Waterfront Park, and the harbor views.</li>
      <li>1:00, back north for lunch, or up King Street for shopping and a late brunch at our King Street location.</li>
      <li>Afternoon, Gateway Walk and the churchyards if you still have energy.</li>
    </ul>

    <h3>What if you're bringing a dog?</h3>
    <p>
      Charleston is friendly about it on patios. See{" "}
      <Link to="/blog/dog-friendly-brunch-charleston">our dog-friendly brunch guide</Link> for timing and etiquette.
    </p>

    <h3>What should visitors order first?</h3>
    <p>
      Shrimp and grits, every time. It's the plate that explains this coast better than any plaque will. Read the background in{" "}
      <Link to="/blog/what-is-lowcountry-cuisine">our Lowcountry cuisine guide</Link>.
    </p>

    <h2>Downtown Charleston dining questions</h2>
    <h3>Do you need reservations?</h3>
    <p>Not with us. We're walk-in only at every location.</p>
    <h3>Where should you park downtown?</h3>
    <p>The garages near the Market are the least stressful option. Metered street spots open up early in the morning.</p>
    <h3>Is Meeting Street or King Street better for visitors?</h3>
    <p>Meeting Street if you're touring the historic district, King Street if you're shopping or staying uptown.</p>
    <h3>How early can you eat breakfast?</h3>
    <p>
      Early enough to beat the tour groups. Check our <Link to="/locations">locations page</Link> for today's opening time on
      Meeting Street and King Street.
    </p>

    <h2>Start your day with us</h2>
    <p>
      Charleston rewards people who eat well before they explore. Look through the{" "}
      <a href="/menus/downtown">downtown menu</a>, pick your table on our <Link to="/locations">locations page</Link>, or head
      to <Link to="/">toastallday.com</Link> to plan the rest. If you want the full brunch rundown first, read{" "}
      <Link to="/blog/best-brunch-charleston">the best brunch in Charleston</Link>.
    </p>
  </BlogArticleLayout>
);

export default WhereToEatDowntownCharleston;