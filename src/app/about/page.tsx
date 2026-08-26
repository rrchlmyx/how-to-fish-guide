import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "About",
  description: "How Hook & Haul researches and maintains How to Fish game guides.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About the field guide"
      title="Built to answer the question before the next cast."
      intro="Hook & Haul is an independent, fan-made guide for How to Fish. It focuses on specific player problems instead of padded news or invented details."
      sections={[
        {
          title: "How we research",
          body: "Each guide starts with the official Steam listing and current game information, then cross-checks at least two recent walkthroughs where possible. References appear at the bottom of every guide.",
        },
        {
          title: "How we handle updates",
          body: "How to Fish is new and can change quickly. We date every article, avoid pretending that uncertain values are permanent, and treat the live game UI as the final authority.",
        },
        {
          title: "Independence",
          body: "Hook & Haul is not affiliated with Dazed Games, Landfall, or Valve. Game names and trademarks belong to their respective owners.",
        },
      ]}
    />
  );
}

