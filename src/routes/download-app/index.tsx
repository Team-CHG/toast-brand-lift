import { createFileRoute } from "@tanstack/react-router";
import DownloadAppPage from "@/pages/DownloadApp";

export const Route = createFileRoute("/download-app/")({
  component: DownloadAppPage,
});
