import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { LOCATIONS, fullAddress } from "@/lib/locations";

interface Faq {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

const locationList = LOCATIONS.map((l) => `${l.name}, ${fullAddress(l)}, ${l.phone}`).join("; ");
const hoursList = LOCATIONS.map((l) => `${l.name}: ${l.hours.replace(/–/g, "-")}`).join("; ");

export const FAQS: Faq[] = [
  {
    question: "Where are Toast! All Day's locations?",
    answer: `We have 6 locations: ${locationList}.`,
    link: { href: "/locations", label: "See all locations" },
  },
  { question: "What are your hours?", answer: `${hoursList}.` },
  {
    question: "What is Toast! All Day known for?",
    answer:
      "Lowcountry breakfast, brunch and lunch. Signature dishes include Famous Shrimp & Grits, Eggs Meeting Street, New Orleans Beignets, Peach Stuffed French Toast, the Blue Crab & Shrimp omelet and the Double Smash Burger.",
  },
  {
    question: "Do you serve lunch?",
    answer:
      "Yes: burgers, po' boys, a Philly cheesesteak, the Low Country Fried Green BLT, chicken tenderloins, salads and She Crab Soup.",
  },
  {
    question: "Do you have mimosas and Bloody Marys?",
    answer:
      "Yes. Mimosas are made fresh to order in several flavors, plus the 20 oz MegaMosa and four Bloody Marys (Classic, Pig Candy, Diablo and the tequila Bloody Maria).",
  },
  {
    question: "Do you have vegetarian options?",
    answer: "Yes. The Roasted Veggie omelet is vegetarian, and an egg-white option is available on omelets.",
  },
  { question: "Do you have a kids menu?", answer: "Yes, kids breakfast and kids lunch." },
  {
    question: "Is there a rewards program?",
    answer:
      "Yes, the VIP Club: $5 in points when you sign up, $10 for every $100 spent, double points Mon-Fri 12-3pm, and a birthday surprise.",
    link: { href: "/rewards", label: "Join the VIP Club" },
  },
  {
    question: "Do you cater?",
    answer: "Yes. Every location offers catering for meetings, parties and events.",
    link: { href: "/catering", label: "Order catering" },
  },
  {
    question: "Is there a service charge for large parties?",
    answer: "A 20% service charge is added for parties of six or more.",
  },
  // [CONFIRM] Do you have gluten-free options?
  // [CONFIRM] Do you take reservations or use a waitlist? (The site currently says both.)
  // [CONFIRM] Is breakfast served all day?
  // [CONFIRM] Which locations are dog-friendly?
];

const FaqSection = ({ className = "" }: { className?: string }) => (
  <section aria-labelledby="faq-heading" className={`px-4 py-16 md:py-20 ${className}`}>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
    <div className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-border border border-border bg-card shadow-soft">
        {FAQS.map((f) => (
          <details key={f.question} className="group px-5 py-4 md:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-primary [&::-webkit-details-marker]:hidden">
              {f.question}
              <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-highlight transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {f.answer}
              {f.link && (
                <>
                  {" "}
                  <a href={f.link.href} className="font-semibold text-highlight underline-offset-4 hover:underline">
                    {f.link.label}
                  </a>
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
