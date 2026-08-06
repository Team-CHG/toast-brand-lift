import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/lowcountry-cuisine.jpg";
import biscuitsImg from "@/assets/blog/biscuits.jpg";

const faqs = [
  {
    question: "What is Lowcountry cuisine?",
    answer:
      "Lowcountry cuisine is the coastal cooking of South Carolina and Georgia, built on rice, shrimp, crab, okra, corn, and pork, with deep Gullah Geechee and West African roots.",
  },
  {
    question: "What are the most famous Lowcountry dishes?",
    answer:
      "Shrimp and grits, she-crab soup, Frogmore stew (Lowcountry boil), red rice, okra soup, and hoppin' John are the dishes you'll see most often.",
  },
  {
    question: "Is Lowcountry food the same as Southern food?",
    answer:
      "Not quite. Lowcountry cooking is a coastal branch of Southern food, leaning on seafood and rice in ways inland Southern cooking does not.",
  },
  {
    question: "Where can you try Lowcountry cooking in Charleston?",
    answer:
      "Toast! All Day serves Lowcountry breakfast and brunch daily in Charleston, Mt. Pleasant, West Ashley, Summerville, Ladson, and Savannah.",
  },
];

const WhatIsLowcountryCuisine = () => (
  <BlogArticleLayout
    seoTitle="What Is Lowcountry Cuisine? A Local's Guide"
    seoDescription="Lowcountry cuisine explained: rice, shrimp, okra, Gullah Geechee roots, and the dishes to order on your first trip to Charleston."
    seoKeywords="what is Lowcountry cuisine, Lowcountry food Charleston, Gullah Geechee food, Southern coastal cooking"
    heroImage={heroImg}
    heroImageAlt="Lowcountry cuisine spread with shrimp, okra soup, and cornbread in Charleston SC"
    category="Guides"
    title="What Is Lowcountry Cuisine? A Local's Guide"
    date="August 2026"
    currentSlug="what-is-lowcountry-cuisine"
    faqs={faqs}
    locations={["meeting", "savannah"]}
  >
    <p>
      Visitors ask us this at the table almost every day. What is Lowcountry cuisine, exactly, and how is it different from
      Southern food in general? Fair question, and the short answer is geography. The Lowcountry is the flat, marshy coastal strip
      running from around Charleston, South Carolina down through Savannah, Georgia, and the food grew straight out of what that
      land and water produce.
    </p>
    <p>
      Rice, shrimp, crab, oysters, okra, corn, and pork. That's the pantry. Everything else is technique and time.
    </p>
    <p>
      The deeper answer involves the people who built this cooking, and that part matters more than any ingredient list.
    </p>

    <h2>Where does Lowcountry cooking come from?</h2>
    <p>
      Enslaved West Africans brought rice knowledge to these coastal plantations, and that expertise made Carolina Gold rice one
      of the most valuable crops in early America. Their descendants, the Gullah Geechee, kept the cooking alive: one-pot rice
      dishes, okra soups, benne seeds, slow-simmered greens, and seafood stews built from whatever the tide gave up.
    </p>
    <p>
      Later influences layered on top. French technique from Huguenot settlers, Caribbean spice from the shipping trade, and
      plain Southern farmhouse cooking from inland. What you eat in Charleston today is all of that at once.
    </p>

    <h2>Which dishes define Lowcountry cuisine?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Shrimp and grits, originally a shrimper's breakfast, now the signature plate of the region.</li>
      <li>She-crab soup, cream-based and rich, traditionally finished with a little sherry.</li>
      <li>Frogmore stew, also called a Lowcountry boil, shrimp and sausage and corn and potatoes dumped on a table.</li>
      <li>Red rice, tomato-stained and smoky, a direct descendant of West African jollof.</li>
      <li>Hoppin' John, black-eyed peas and rice, eaten on New Year's Day for luck.</li>
      <li>Okra soup, thickened the old way, no roux required.</li>
    </ul>
    <p>
      Our shrimp and grits get their own deep dive in{" "}
      <Link to="/blog/shrimp-and-grits-charleston">this guide to shrimp and grits in Charleston</Link>.
    </p>
    <img
      src={biscuitsImg}
      alt="Homemade Southern buttermilk biscuits at Toast! All Day in Charleston SC"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>What does Lowcountry food look like at breakfast?</h2>
    <p>
      This is our favorite part, because breakfast is where Lowcountry cooking is most itself. Grits show up. Biscuits show up.
      Country ham, sausage gravy, fried green tomatoes, and crab all find their way onto morning plates in ways they never would
      further north.
    </p>
    <p>
      At our tables you'll see shrimp and grits next to peach-stuffed French toast, which sounds like a mismatch and absolutely
      is not. If you want a walkthrough of the sweet side, read{" "}
      <Link to="/blog/southern-breakfast-classics">Southern breakfast classics explained</Link>.
    </p>

    <h3>Is Lowcountry food spicy?</h3>
    <p>
      Generally no. It's seasoned, not hot. Heat usually arrives at the table in a bottle so everybody can decide for themselves.
    </p>

    <h3>What should a first-time visitor order?</h3>
    <p>
      Shrimp and grits, no question. Then something with a biscuit involved. Then come back the next morning and try the other
      half of the menu, because one meal isn't enough to cover it.
    </p>

    <h2>Lowcountry cuisine questions</h2>
    <h3>What is Carolina Gold rice?</h3>
    <p>
      A heritage long-grain rice that built the coastal economy in the 1700s. It nearly disappeared and has been brought back by
      small growers.
    </p>
    <h3>Are grits and polenta the same thing?</h3>
    <p>Close relatives, different corn and different grind. Grits are usually dent corn and taste softer and sweeter.</p>
    <h3>Is Savannah food Lowcountry too?</h3>
    <p>
      It is. The Lowcountry crosses the state line. Our{" "}
      <Link to="/blog/best-brunch-savannah">Savannah breakfast and brunch guide</Link> covers that side.
    </p>
    <h3>When is shrimp season in South Carolina?</h3>
    <p>Local shrimp typically run from late spring into fall. [confirm current local sourcing windows]</p>

    <h2>Taste it for yourself</h2>
    <p>
      Reading about Lowcountry cooking is fine. Eating it is better. Look through the{" "}
      <a href="/menus/downtown">downtown menu</a>, find the closest table on our{" "}
      <Link to="/locations">locations page</Link>, or start at <Link to="/">our homepage</Link> and plan a slow morning. Bring an
      appetite and a little patience for the grits, because good ones are worth the wait.
    </p>
  </BlogArticleLayout>
);

export default WhatIsLowcountryCuisine;