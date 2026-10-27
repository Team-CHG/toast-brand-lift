import { locationsForGroup, type MenuGroupSlug } from "@/lib/locations";

/** Lists the locations that serve a menu, linking to each location page. */
const MenuLocations = ({ group }: { group: MenuGroupSlug }) => {
  const locs = locationsForGroup(group);
  return (
    <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
      Served at{" "}
      {locs.map((l, i) => (
        <span key={l.slug}>
          {i > 0 && (i === locs.length - 1 ? " and " : ", ")}
          <a href={`/locations/${l.slug}`} className="font-semibold text-primary underline-offset-4 hover:text-highlight hover:underline">
            {l.name}
          </a>
        </span>
      ))}
    </p>
  );
};

export default MenuLocations;
