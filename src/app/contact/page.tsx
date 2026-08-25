import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Report an outdated or inaccurate How to Fish guide.",
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Found a route change or a bad catch?"
      intro="Corrections are useful when they include the page, the disputed detail, and a current source or in-game screenshot."
      sections={[
        {
          title: "Corrections",
          body: "Email corrections to editor@hookandhaul.guide. Include the guide URL, what changed, the current game version if known, and where the replacement information can be verified.",
        },
        {
          title: "Source suggestions",
          body: "Official developer posts, Steam announcements, clear in-game screenshots, and recent high-quality walkthroughs are preferred. We do not publish unverified codes or copied wiki text.",
        },
        {
          title: "Response time",
          body: "New-game information changes quickly, so factual corrections are prioritized over general requests. Critical progression errors should be reviewed first.",
        },
      ]}
    />
  );
}

