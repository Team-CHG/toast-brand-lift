import { createFileRoute } from "@tanstack/react-router";
import MenuGroup from "@/pages/MenuGroup";

export const Route = createFileRoute("/menus/$group/")({
  component: MenuGroup,
});
