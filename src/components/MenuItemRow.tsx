import { Link } from "@/lib/router-compat";
import MenuItemThumb from "@/components/MenuItemThumb";
import MenuTags from "@/components/MenuTags";
import { itemPriceText, type MenuItemData } from "@/lib/menu";

interface Props {
  href: string;
  item: MenuItemData;
  /** Heading level for the item name */
  as?: "h2" | "h3";
  thumbClassName?: string;
  priceClassName?: string;
  nameClassName?: string;
}

/** One menu item as a semantic list entry; the whole row stays clickable. */
const MenuItemRow = ({
  href,
  item,
  as: H = "h3",
  thumbClassName = "h-16 w-16 sm:h-24 sm:w-24",
  priceClassName = "text-base font-bold text-highlight sm:text-lg",
  nameClassName = "text-base font-bold uppercase leading-snug sm:text-lg",
}: Props) => {
  const price = itemPriceText(item);
  return (
    <li className="menu-item group relative flex min-h-24 gap-4 py-5 sm:min-h-28 sm:gap-6 sm:py-6">
      <MenuItemThumb src={item.image_url} alt={item.name} className={thumbClassName} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <H className={`item-name text-primary transition-colors group-hover:text-highlight ${nameClassName}`}>
            <Link
              to={href}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-hidden focus-visible:after:ring-2 focus-visible:after:ring-ring"
            >
              {item.name}
              {item.advisory && "*"}
            </Link>
            <MenuTags item={item} />
          </H>
          {price && <span className={`item-price shrink-0 text-right ${priceClassName}`}>{price}</span>}
        </div>
        {item.description && <p className="item-desc mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
        {item.addons && <p className="item-addons mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{item.addons}</p>}
      </div>
    </li>
  );
};

export default MenuItemRow;
