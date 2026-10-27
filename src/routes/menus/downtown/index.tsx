import { createFileRoute } from "@tanstack/react-router";
import DowntownMenuChooser from "@/pages/DowntownMenuChooser";

export const Route = createFileRoute("/menus/downtown/")({
  component: DowntownMenuChooser,
});
