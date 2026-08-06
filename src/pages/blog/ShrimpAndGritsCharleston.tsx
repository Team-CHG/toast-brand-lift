import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/shrimp-and-grits-charleston.jpg";
import lowcountryImg from "@/assets/blog/lowcountry-cuisine.jpg";

const faqs = [
  {
    question: "Where can you get shrimp and grits in Charleston?",
    answer:
      "Toast! All Day serves Lowcountry shrimp and grits every day at our Meeting Street and King Street locations downtown, plus Mt. Pleasant, West Ashley, Summerville, Ladson, and Savannah.",
  },
  {
    question: "What makes shrimp and grits Lowcountry?",
    answer:
      "Stone-ground grits from Carolina corn, local shrimp, and a sauce built on pan drippings rather than heavy cream. The dish started as a shrimper's breakfast along the South Carolina and Georgia coast.",
  },
  {
    question: "Is shrimp and grits a breakfast dish or a dinner dish?",
    answer:
      "Both, historically. It began as breakfast for fishing families and moved onto dinner menus later. We serve it from open to close.",
  },
  {
    question: "Are your grits stone-ground?",
    answer: "Yes. We cook Carolina stone-ground grits low and slow. They take time, and that time shows up in the texture.",
  },
];

const ShrimpAndGritsCharleston = () => (
  <BlogArticleLayout
    seoTitle="Shrimp and Grits in Charleston: A Local's Guide"
    seoDescription="Where to get shrimp and grits in Charleston and what makes them truly Lowcountry, from stone-ground grits to local shrimp."
    seoKeywords="shrimp and grits Charleston, Lowcountry shrimp and grits, Charleston seafood breakfast, stone-ground grits"
    heroImage={heroImg}
    heroImageAlt="Bowl of Lowcountry shrimp and grits at Toast! All Day in Charleston SC"
    category="Guides"
    title="Where to Get Shrimp and Grits in Charleston (and What Makes Them Lowcountry)"
    date="August 2026"
    currentSlug="shrimp-and-grits-charleston"
    faqs={faqs}
    locations={["meeting", "king"]}
  >
    <p>
      Shrimp and grits in Charleston is not a trend. It's breakfast, and it has been for generations along this stretch of coast.
      Shrimpers came in off the water, cooked whatever hadn't sold, spooned it over the pot of grits already on the stove, and ate
      standing up.
    </p>
    <p>
      Restaurants got hold of it later and dressed it up. Some of those versions are wonderful. Some of them have wandered a long
      way from the original. We cook ours somewhere close to home.
    </p>
    <p>
      Here's what actually separates a Lowcountry bowl from a bowl of shrimp sitting on porridge, and where to find the real thing
      while you're in town.
    </p>

    <h2>What makes shrimp and grits Lowcountry?</h2>
    <p>Three things, and none of them are complicated.</p>
    <p>
      The grits come first. Stone-ground Carolina corn, cooked low and slow until they're loose and creamy but still taste like
      corn. Instant grits set up like spackle and taste like salt. You can tell in one bite.
    </p>
    <p>
      Then the shrimp. Local when the season allows, cooked hot and fast so they stay snappy. Overcooked shrimp turns rubbery in
      about fifteen seconds, which is why we cook them to order and not ahead.
    </p>
    <p>
      Last, the sauce. A true Lowcountry version builds it in the pan from the shrimp, the pork, and a little stock. It should be
      savory and a little smoky, not a blanket of cream that hides everything underneath.
    </p>
    <img
      src={lowcountryImg}
      alt="Lowcountry table spread with shrimp, okra, and cornbread in Charleston SC"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>How do we make ours?</h2>
    <p>
      Our grits go on early and get stirred all morning. The shrimp hit a hot pan with our sauce, then everything goes into the
      bowl together so the grits soak up the drippings on the way to your table. Scallions on top. That's it. [confirm current
      recipe details and any seasonal variations]
    </p>
    <p>
      If you want the wider context on this style of cooking, we wrote{" "}
      <Link to="/blog/what-is-lowcountry-cuisine">a plain-spoken guide to Lowcountry cuisine</Link> that covers rice, okra, and
      the Gullah Geechee roots underneath all of it.
    </p>

    <h3>Where to eat shrimp and grits in Charleston</h3>
    <p>
      Downtown, you're never far from a bowl. We serve ours on Meeting Street, a few blocks from the Market, and on upper King
      Street where the walk is shorter from the northern hotels. Off the peninsula, you'll find the same bowl in Mt. Pleasant,
      West Ashley, Summerville, and Ladson.
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>Toast! on Meeting, 129 Meeting St, closest to the historic district.</li>
      <li>Toast! on King, 453 King Street, easy walk from upper King hotels.</li>
      <li>Toast! Mt. Pleasant, 1150 Hungry Neck Blvd, if you're coming over the Ravenel Bridge.</li>
      <li>Toast! Summerville, 717 Old Trolley Road.</li>
      <li>Toast! Savannah, 1 W Broughton Street, for the Georgia side of the Lowcountry.</li>
    </ul>

    <h3>What should you drink with it?</h3>
    <p>
      Coffee if it's early, a bloody mary if it isn't. The spice in the sauce plays well with tomato and horseradish. Our{" "}
      <Link to="/blog/charleston-brunch-cocktails">brunch cocktail guide</Link> goes deeper on that.
    </p>

    <h2>Common questions about shrimp and grits</h2>
    <h3>Is it spicy?</h3>
    <p>Ours has warmth, not heat. If you want it hotter, ask and we'll bring hot sauce.</p>
    <h3>Can you get it without pork?</h3>
    <p>Ask your server and we'll do what we can. [confirm current substitution options]</p>
    <h3>Do you serve it all day?</h3>
    <p>Yes. Order it at 8 in the morning or 2 in the afternoon, same bowl.</p>
    <h3>Are the shrimp local?</h3>
    <p>When the local season is running, yes. [confirm current sourcing]</p>

    <h2>Come get a bowl</h2>
    <p>
      The best way to understand Lowcountry shrimp and grits is to eat them somewhere that has been making them the same way for
      twenty years. Look at the <a href="/menus/downtown">downtown menu</a>, pick a table on our{" "}
      <Link to="/locations">locations page</Link>, or head back to <Link to="/">our homepage</Link> to plan the rest of your
      morning. If it's your first Charleston brunch, start with{" "}
      <Link to="/blog/best-brunch-charleston">our best brunch in Charleston guide</Link>.
    </p>
  </BlogArticleLayout>
);

export default ShrimpAndGritsCharleston;