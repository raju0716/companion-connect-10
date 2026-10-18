import { createFileRoute } from "@tanstack/react-router";
import AdminPlaceholder from "@/pages/admin/AdminPlaceholder";

export const Route = createFileRoute("/admin/moderation")({
  component: () => <AdminPlaceholder title="Moderation" />,
});
