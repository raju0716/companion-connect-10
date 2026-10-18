import { createFileRoute } from "@tanstack/react-router";
import UserProfilePage from "@/pages/UserProfilePage";

export const Route = createFileRoute("/_public/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — ÉLITE" },
      { name: "description", content: "Manage your account, profiles and subscription." },
      { property: "og:title", content: "My Profile — ÉLITE" },
      { property: "og:description", content: "Manage your account, profiles and subscription." },
    ],
  }),
  component: UserProfilePage,
});
