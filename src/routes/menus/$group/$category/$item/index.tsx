import { createFileRoute, notFound } from "@tanstack/react-router";
import MenuItemPage from "@/pages/MenuItem";
import { isMenuGroup } from "@/lib/locations";
import { fetchMenu } from "@/lib/menu";

export const Route = createFileRoute("/menus/$group/$category/$item/")({
  loader: async ({ params }) => {
    if (!isMenuGroup(params.group)) throw notFound();
    const menu = await fetchMenu(params.group);
    const section = menu?.sections.find((s) => s.slug === params.category);
    const item = section?.items.find((i) => i.slug === params.item);
    if (!menu || !section || !item) throw notFound();
    return { menu, section, item };
  },
  component: () => {
    const { menu, section, item } = Route.useLoaderData();
    return <MenuItemPage menu={menu} section={section} item={item} />;
  },
});
