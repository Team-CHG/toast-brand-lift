import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import MenuItemPage from "@/pages/MenuItem";
import { isMenuGroup } from "@/lib/locations";
import { fetchMenu, legacyMenuRedirect } from "@/lib/menu";

export const Route = createFileRoute("/menus/$group/$category/$item/")({
  loader: async ({ params }) => {
    if (!isMenuGroup(params.group)) throw notFound();
    const menu = await fetchMenu(params.group);
    if (!menu) throw notFound();
    const section = menu.sections.find((s) => s.slug === params.category);
    const item = section?.items.find((i) => i.slug === params.item);
    if (!section || !item) {
      const to = menu.printed ? legacyMenuRedirect(menu, params.category, params.item) : null;
      if (to) throw redirect({ href: to, statusCode: 301 });
      throw notFound();
    }
    return { menu, section, item };
  },
  component: () => {
    const { menu, section, item } = Route.useLoaderData();
    return <MenuItemPage menu={menu} section={section} item={item} />;
  },
});
