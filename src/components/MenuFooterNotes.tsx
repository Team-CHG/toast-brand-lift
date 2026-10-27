import { Link } from "@/lib/router-compat";

export const ALLERGY_NOTE = "Egg white option available on omelets. Please tell your server about any allergies.";

/** Footer notes from the printed October 2026 menus; Savannah keeps its original note. */
const MenuFooterNotes = ({ printed }: { printed: boolean }) => {
  if (!printed) {
    return <p className="mt-14 border-t border-border pt-6 text-center text-sm text-muted-foreground">{ALLERGY_NOTE}</p>;
  }
  return (
    <footer className="menu-footer mt-14 space-y-3 border-t border-border pt-6 text-center text-sm leading-relaxed text-muted-foreground">
      <p>* Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
      <p>* Some items served at this establishment may contain foreign imported shrimp. Ask for more information.</p>
      <p>A 3% processing fee will be added to all credit card transactions.</p>
      <p>A 20% service charge will be added to all parties of six (6) or more.</p>
      <p>
        <span aria-hidden="true">🥂</span> = Toast Signature Dish
      </p>
      <div className="mx-auto mt-6 max-w-xl border border-highlight/40 bg-complementary/40 p-5">
        <p>
          <Link to="/rewards" className="font-bold uppercase text-highlight hover:underline">Join the VIP Club:</Link>{" "}
          $5 in points the second you sign up. Earn $10 for every $100 spent, double points Monday through Friday 12–3pm, and a birthday surprise just for existing. Plus exclusive perks, member deals, and free food!
        </p>
      </div>
    </footer>
  );
};

export default MenuFooterNotes;
