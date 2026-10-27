import { createFileRoute } from "@tanstack/react-router";
import MenuItemPage from "@/pages/MenuItem";

export const Route = createFileRoute("/menus/$group/$category/$item/")({
  component: MenuItemPage,
});
