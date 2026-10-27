import { createFileRoute } from "@tanstack/react-router";
import MilitaryDiscount from "@/pages/events/MilitaryDiscount";

export const Route = createFileRoute("/blog/military-discount/")({
  component: MilitaryDiscount,
});
