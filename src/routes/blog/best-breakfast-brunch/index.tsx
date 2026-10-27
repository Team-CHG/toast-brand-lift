import { createFileRoute } from "@tanstack/react-router";
import BestBreakfastBrunch from "@/pages/events/BestBreakfastBrunch";

export const Route = createFileRoute("/blog/best-breakfast-brunch/")({
  component: BestBreakfastBrunch,
});
