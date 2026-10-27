import { DIETARY_LABEL, type MenuItemData } from "@/lib/menu";

/** Small text tags next to an item name, only for labels the menu confirms. */
const MenuTags = ({ item }: { item: Pick<MenuItemData, "dietary" | "signature"> }) => {
  if (!item.signature && item.dietary.length === 0) return null;
  return (
    <span className="ml-2 inline-flex flex-wrap gap-1 align-middle">
      {item.signature && (
        <span className="border border-highlight px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-highlight">Signature</span>
      )}
      {item.dietary.map((d) => (
        <span key={d} className="border border-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
          {DIETARY_LABEL[d]}
        </span>
      ))}
    </span>
  );
};

export default MenuTags;
