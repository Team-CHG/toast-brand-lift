import { createFileRoute } from "@tanstack/react-router";
import DownloadApp from "@/pages/events/DownloadApp";

export const Route = createFileRoute("/blog/download-app/")({
  component: DownloadApp,
});
