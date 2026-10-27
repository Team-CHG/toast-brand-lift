import { createFileRoute } from "@tanstack/react-router";
import SouthernBreakfastClassics from "@/pages/blog/SouthernBreakfastClassics";

export const Route = createFileRoute("/blog/southern-breakfast-classics/")({
  component: SouthernBreakfastClassics,
});
