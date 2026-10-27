import { createFileRoute } from "@tanstack/react-router";
import Anniversary from "@/pages/events/Anniversary";

export const Route = createFileRoute("/blog/anniversary/")({
  component: Anniversary,
});
