import { createFileRoute } from "@tanstack/react-router";
import AddProfilePage from "@/pages/AddProfilePage";

export const Route = createFileRoute("/_public/add-profile")({
  head: () => ({
    meta: [
      { title: "Add Your Profile — ÉLITE" },
      { name: "description", content: "List your profile on ÉLITE." },
      { property: "og:title", content: "Add Your Profile — ÉLITE" },
      { property: "og:description", content: "List your profile on ÉLITE." },
    ],
  }),
  component: AddProfilePage,
});
