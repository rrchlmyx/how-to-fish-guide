import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Hook & Haul independent game guide.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Terms of use"
      intro="Hook & Haul is an informational fan guide. Use the live game and official channels as the final authority."
      sections={[
        {
          title: "No guarantee",
          body: "Guides are researched in good faith, but game updates can make instructions, values, or routes outdated. The site does not guarantee that every detail remains correct after a patch.",
        },
        {
          title: "Independent fan site",
          body: "Hook & Haul is not endorsed by Dazed Games, Landfall, Valve, or any source linked from an article. All trademarks belong to their owners.",
        },
        {
          title: "Permitted use",
          body: "You may use the guides for personal play. Republishing the site, scraping substantial portions, or presenting the editorial work as your own is not permitted.",
        },
        {
          title: "Changes",
          body: "These terms may be updated as hosting, analytics, advertising, or site features change.",
        },
      ]}
    />
  );
}

