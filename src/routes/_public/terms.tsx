import { createFileRoute } from "@tanstack/react-router";
import TermsPage from "@/pages/TermsPage";

export const Route = createFileRoute("/_public/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ÉLITE" },
      { name: "description", content: "Platform rules, age verification, cancellations and liability." },
      { property: "og:title", content: "Terms & Conditions — ÉLITE" },
      { property: "og:description", content: "Platform rules, age verification, cancellations and liability." },
    ],
  }),
  component: TermsPage,
});
