import { createFileRoute } from "@tanstack/react-router";
import MenusIndex from "@/pages/MenusIndex";

export const Route = createFileRoute("/menus/")({
  component: MenusIndex,
});
