import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import heroImg from "@/assets/blog/dog-friendly-brunch.jpg";
import downtownImg from "@/assets/blog/downtown-charleston.jpg";

const faqs = [
  {
    question: "Are there dog-friendly brunch spots in Charleston?",
    answer:
      "Yes. Many Charleston restaurants with patios welcome leashed dogs in outdoor seating, including Toast! All Day. [confirm current patio pet policy by location]",
  },
  {
    question: "Can dogs sit inside restaurants in South Carolina?",
    answer:
      "State health rules keep pets out of indoor dining rooms, with the exception of service animals. Outdoor patios are where dogs are welcome.",
  },
  {
    question: "What should you bring for brunch with your dog?",
    answer:
      "A short leash, a collapsible water bowl, a chew or toy, and a little patience. Mornings are cooler and calmer than midday, which makes everything easier.",
  },
  {
    question: "Do you have water for dogs?",
    answer: "Ask your server and we'll bring a bowl. [confirm availability by location]",
  },
];

const DogFriendlyBrunchCharleston = () => (
  <BlogArticleLayout
    seoTitle="Dog-Friendly Brunch in Charleston, SC | Patio Guide"
    seoDescription="Planning a dog-friendly brunch in Charleston? Patio tips, what to bring, timing advice, and where your leashed pup is welcome."
    seoKeywords="dog friendly brunch Charleston, dog friendly restaurants Charleston SC, pet friendly patio Charleston"
    heroImage={heroImg}
    heroImageAlt="Golden retriever beside a dog-friendly brunch patio table in Charleston SC"
    category="Guides"
    title="Dog-Friendly Brunch Spots in Charleston"
    date="August 2026"
    currentSlug="dog-friendly-brunch-charleston"
    faqs={faqs}
    locations={["meeting", "king"]}
  >
    <p>
      Charleston is a dog town. Walk down East Bay on a Saturday morning and you'll pass more leashes than strollers. So it makes
      sense that one of the questions we get most often is whether you can bring your dog to brunch.
    </p>
    <p>
      Short answer: outside, yes, at plenty of places around town including ours. Inside, no, and that's a state health rule
      rather than a restaurant preference.
    </p>
    <p>
      Here's how to make a dog-friendly brunch in Charleston go smoothly, from timing to what to pack.
    </p>

    <h2>Where can dogs go at a Charleston restaurant?</h2>
    <p>
      Outdoor seating. Patios, sidewalk tables, courtyards. South Carolina allows leashed dogs in those spaces at the
      restaurant's discretion, while indoor dining rooms are off limits to everyone except service animals.
    </p>
    <p>
      Patio availability varies by our location, so call ahead if bringing your dog is the deciding factor. [confirm current
      outdoor seating and pet policy at each location]
    </p>
    <img
      src={downtownImg}
      alt="Historic downtown Charleston street with sidewalk cafe tables, a dog-friendly brunch area"
      loading="lazy"
      width={1200}
      height={675}
      className="w-full rounded-2xl my-8"
    />

    <h2>What's the best time to bring a dog to brunch?</h2>
    <p>
      Early. Charleston heat is no joke from May through September, and pavement gets hot fast. An 8 a.m. table means cool
      concrete, a calmer patio, and fewer people walking past your dog's nose.
    </p>
    <p>
      Peak brunch hours between 10 and noon are the hardest on a dog. More foot traffic, more servers moving quickly, more
      temptation on the ground.
    </p>

    <h3>What should you bring?</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>A short, non-retractable leash so your dog stays under your chair and out of the walkway.</li>
      <li>A collapsible water bowl, though we'll bring water if you ask.</li>
      <li>A chew or a favorite toy to keep them occupied while you eat.</li>
      <li>Shade awareness. Pick the table under the umbrella, not the one in full sun.</li>
    </ul>

    <h3>Simple patio etiquette</h3>
    <p>
      Keep the leash short, don't feed from the plate, and if your dog is having a rough morning, it's fine to take the meal to
      go. Every dog owner has had that day. Nobody judges.
    </p>

    <h2>What to do before or after</h2>
    <p>
      Waterfront Park, the Battery, and Hampton Park all make good walks around a downtown brunch. Over the bridge, Shem Creek
      boardwalk and Pitt Street Bridge are favorites, and our{" "}
      <Link to="/blog/best-breakfast-mt-pleasant">Mt. Pleasant breakfast guide</Link> covers that side of the harbor. If you're
      pairing brunch with a walking tour of the historic district, read{" "}
      <Link to="/blog/where-to-eat-downtown-charleston">where to eat around downtown Charleston</Link>.
    </p>

    <h2>Dog-friendly brunch questions</h2>
    <h3>Are all your patios dog friendly?</h3>
    <p>[confirm which locations have outdoor seating that allows pets]</p>
    <h3>Can you order takeout and eat in a park instead?</h3>
    <p>Absolutely, and on a hot day that's often the kinder choice.</p>
    <h3>Do you have anything for dogs on the menu?</h3>
    <p>[confirm whether a plain dog treat or plain protein option is available]</p>
    <h3>What about service animals?</h3>
    <p>Service animals are welcome anywhere in our restaurants, indoors included.</p>

    <h2>Bring the whole family</h2>
    <p>
      Dogs included. Take a look at the <a href="/menus/downtown">downtown menu</a>, find the closest patio on our{" "}
      <Link to="/locations">locations page</Link>, or start at <Link to="/">our homepage</Link>. Still deciding what to order?{" "}
      <Link to="/blog/best-brunch-charleston">Our Charleston brunch guide</Link> will point you in the right direction.
    </p>
  </BlogArticleLayout>
);

export default DogFriendlyBrunchCharleston;