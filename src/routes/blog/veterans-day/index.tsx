import { createFileRoute } from "@tanstack/react-router";
import VeteransDay from "@/pages/events/VeteransDay";

export const Route = createFileRoute("/blog/veterans-day/")({
  component: VeteransDay,
});
