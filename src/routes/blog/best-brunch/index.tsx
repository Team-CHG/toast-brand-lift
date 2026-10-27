import { createFileRoute } from "@tanstack/react-router";
import BestBrunch from "@/pages/events/BestBrunch";

export const Route = createFileRoute("/blog/best-brunch/")({
  component: BestBrunch,
});
