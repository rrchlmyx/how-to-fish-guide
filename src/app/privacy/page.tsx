import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Hook & Haul game guide.",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="This policy describes the information Hook & Haul and its service providers may process."
      sections={[
        {
          title: "Basic server data",
          body: "Hosting providers may process technical logs such as IP address, browser type, requested page, and timestamp to deliver and secure the site. Hook & Haul does not sell personal information.",
        },
        {
          title: "Analytics",
          body: "Hook & Haul uses Google Analytics 4 to understand aggregate site usage. Google may process device, browser, approximate location, and interaction data under its own privacy terms. The site configures IP anonymization and does not use analytics data to sell personal information.",
        },
        {
          title: "External links",
          body: "Guides link to Steam and third-party sources. Those sites have their own privacy practices, and leaving Hook & Haul means their policies apply.",
        },
        {
          title: "Contact",
          body: "Questions about this policy can be sent to privacy@hookandhaul.guide.",
        },
      ]}
    />
  );
}

