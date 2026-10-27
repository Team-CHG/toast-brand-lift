import { createFileRoute } from "@tanstack/react-router";
import MenuCategory from "@/pages/MenuCategory";

export const Route = createFileRoute("/menus/$group/$category/")({
  component: MenuCategory,
});
