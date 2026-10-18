import { createFileRoute } from "@tanstack/react-router";
import SafetyPage from "@/pages/SafetyPage";

export const Route = createFileRoute("/_public/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Guidelines — ÉLITE" },
      { name: "description", content: "Client rules, consent, privacy and our 18+ policy." },
      { property: "og:title", content: "Safety & Guidelines — ÉLITE" },
      { property: "og:description", content: "Client rules, consent, privacy and our 18+ policy." },
    ],
  }),
  component: SafetyPage,
});
