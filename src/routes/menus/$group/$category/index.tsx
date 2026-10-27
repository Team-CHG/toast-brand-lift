import { createFileRoute, notFound } from "@tanstack/react-router";
import MenuCategory from "@/pages/MenuCategory";
import { isMenuGroup } from "@/lib/locations";
import { fetchMenu } from "@/lib/menu";

export const Route = createFileRoute("/menus/$group/$category/")({
  loader: async ({ params }) => {
    if (!isMenuGroup(params.group)) throw notFound();
    const menu = await fetchMenu(params.group);
    const section = menu?.sections.find((s) => s.slug === params.category);
    if (!menu || !section) throw notFound();
    return { menu, section };
  },
  component: () => {
    const { menu, section } = Route.useLoaderData();
    return <MenuCategory menu={menu} section={section} />;
  },
});
