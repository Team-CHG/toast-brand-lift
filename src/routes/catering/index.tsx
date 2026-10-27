import { createFileRoute } from "@tanstack/react-router";
import Catering from "@/pages/Catering";

export const Route = createFileRoute("/catering/")({
  component: Catering,
});
