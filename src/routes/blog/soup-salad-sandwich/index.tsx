import { createFileRoute } from "@tanstack/react-router";
import SoupSaladSandwich from "@/pages/events/SoupSaladSandwich";

export const Route = createFileRoute("/blog/soup-salad-sandwich/")({
  component: SoupSaladSandwich,
});
