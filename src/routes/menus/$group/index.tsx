import { createFileRoute, notFound } from "@tanstack/react-router";
import MenuGroup from "@/pages/MenuGroup";
import { isMenuGroup } from "@/lib/locations";
import { fetchMenu } from "@/lib/menu";

export const Route = createFileRoute("/menus/$group/")({
  loader: async ({ params }) => {
    if (!isMenuGroup(params.group)) throw notFound();
    const menu = await fetchMenu(params.group);
    if (!menu) throw notFound();
    return menu;
  },
  component: () => <MenuGroup menu={Route.useLoaderData()} />,
});
