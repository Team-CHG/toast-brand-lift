import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/brunch-cocktails.jpg";
import diningRoomImg from "@/assets/blog/dining-room.jpg";

const faqs = [
  {
    question: "Where can you get bottomless mimosas in Charleston?",
    answer:
      "Toast! All Day pours mimosas and bloody marys with brunch at our Charleston, Mt. Pleasant, West Ashley, Summerville, Ladson, and Savannah locations. [confirm current bottomless mimosa availability and pricing]",
  },
  {
    question: "What is the best brunch cocktail to order?",
    answer:
      "A mimosa if you're eating something sweet like French toast, and a bloody mary if you're eating something savory like shrimp and grits. The tomato and horseradish stand up to the spice.",
  },
  {
    question: "What time can you order brunch cocktails in South Carolina?",
    answer:
      "South Carolina allows Sunday alcohol sales starting at 10 a.m. in most areas, and earlier the rest of the week. [confirm current local service times]",
  },
  {
    question: "Do you have non-alcoholic brunch drinks?",
    answer: "Yes. Fresh juice, coffee, and a virgin bloody mary that's just as good as the real thing.",
  },
];

const CharlestonBrunchCocktails = () => (
  <BlogArticleLayout
    seoTitle="Charleston Brunch Cocktails: Mimosas & Bloody Marys"
    seoDescription="A Charleston brunch cocktail guide: what to order with shrimp and grits, how we build our bloody mary, and mimosa pairing tips."
    seoKeywords="bottomless mimosas Charleston, brunch cocktails Charleston, bloody mary Charleston, Charleston brunch drinks"
    heroImage={heroImg}
    heroImageAlt="Mimosas and a garnished bloody mary served at brunch in Charleston SC"
    category="Guides"
    title="Bottomless Mimosas and Bloody Marys: Your Charleston Brunch Cocktail Guide"
    date="August 2026"
    currentSlug="charleston-brunch-cocktails"
    faqs={faqs}
    locations={["meeting", "king"]}
  >
    <p>
      Charleston brunch has a soundtrack, and a big part of it is the clink of a champagne flute. Bachelorette parties, birthday
      tables, Sunday regulars who order the same thing every week: they all start with a drink before the food arrives.
    </p>
    <p>
      We take that part of the meal seriously without being precious about it. A brunch cocktail should be cold, honest, and
      built to go with breakfast. Nothing on our list requires a lecture.
    </p>
    <p>Here's how we think about it, and what you should order with what.</p>

    <h2>What makes a good mimosa?</h2>
    <p>
      Cold sparkling wine, juice that tastes like fruit, and a ratio that leans toward the wine. That's all. A mimosa poured
      half-and-half with warm juice from a carton is a sad thing, and you've probably had one.
    </p>
    <p>
      We keep the bubbles cold and the pour generous. If you want to make an event of it, order a flight and try a few juices
      across the table. [confirm current mimosa flight and bottomless offerings]
    </p>
    <img
      src={diningRoomImg}
      alt="Guests enjoying brunch cocktails in the dining room at Toast! All Day in Charleston SC"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>How should a bloody mary be built?</h2>
    <p>
      Ours starts with a tomato base we season ourselves, then horseradish, citrus, and enough pepper to wake you up without
      erasing your breakfast. The garnish should be edible, not architectural. A pickle, a celery stalk, maybe a shrimp if you're
      feeling coastal.
    </p>
    <p>
      A bloody mary is the right call with anything savory, especially{" "}
      <Link to="/blog/shrimp-and-grits-charleston">shrimp and grits</Link>. The acidity cuts the richness and the heat plays with
      the sauce.
    </p>

    <h3>What pairs with what?</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Peach-stuffed French toast with a mimosa, since the citrus keeps the sweetness in check.</li>
      <li>Shrimp and grits with a bloody mary.</li>
      <li>Biscuits and gravy with black coffee, honestly. Sometimes the answer isn't a cocktail.</li>
      <li>Eggs benedict with either one, which is part of why benedicts stay so popular.</li>
    </ul>

    <h3>What if you're not drinking?</h3>
    <p>
      Order the virgin bloody mary. It's the same base with the same garnish and nobody at the table will treat you differently.
      Fresh juice and good coffee are always here too.
    </p>

    <h2>Brunch drinking in Charleston, practically speaking</h2>
    <p>
      Downtown, walk or grab a ride. Parking on the peninsula is a hassle sober and worse after two mimosas. Our Meeting Street
      and King Street rooms are both an easy walk from most hotels. Out in Mt. Pleasant, Summerville, and Ladson you'll park out
      front, so plan a designated driver.
    </p>
    <p>
      Groups are welcome and common. Call your location ahead for anything large so we can set the table properly. [confirm
      current large party policy]
    </p>

    <h2>Charleston brunch cocktail questions</h2>
    <h3>Can you buy a bottle for the table?</h3>
    <p>[confirm current bottle service options]</p>
    <h3>Do you do bachelorette parties?</h3>
    <p>Constantly. Give us a heads up and we'll do what we can to seat you together.</p>
    <h3>Is there a happy hour?</h3>
    <p>[confirm current happy hour or drink specials by location]</p>
    <h3>Do all locations serve alcohol?</h3>
    <p>[confirm alcohol service by location]</p>

    <h2>Pull up a chair</h2>
    <p>
      Come start your morning slow. Browse the <a href="/menus/downtown">downtown menu</a>, find your spot on our{" "}
      <Link to="/locations">locations page</Link>, or head to <Link to="/">our homepage</Link> to plan the day. If you're still
      deciding where to eat, <Link to="/blog/best-brunch-charleston">our best brunch in Charleston guide</Link> is a good place
      to start.
    </p>
  </BlogArticleLayout>
);

export default CharlestonBrunchCocktails;