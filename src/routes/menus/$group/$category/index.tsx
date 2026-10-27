import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import MenuCategory from "@/pages/MenuCategory";
import { isMenuGroup } from "@/lib/locations";
import { fetchMenu, legacyMenuRedirect } from "@/lib/menu";

export const Route = createFileRoute("/menus/$group/$category/")({
  loader: async ({ params }) => {
    if (!isMenuGroup(params.group)) throw notFound();
    const menu = await fetchMenu(params.group);
    if (!menu) throw notFound();
    const section = menu.sections.find((s) => s.slug === params.category);
    if (!section) {
      const to = menu.printed ? legacyMenuRedirect(menu, params.category) : null;
      if (to) throw redirect({ href: to, statusCode: 301 });
      throw notFound();
    }
    return { menu, section };
  },
  component: () => {
    const { menu, section } = Route.useLoaderData();
    return <MenuCategory menu={menu} section={section} />;
  },
});
