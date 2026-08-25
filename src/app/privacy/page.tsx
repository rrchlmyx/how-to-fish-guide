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
      intro="This policy describes the information a basic guide site may process. It will be updated before analytics or advertising is enabled."
      sections={[
        {
          title: "Basic server data",
          body: "Hosting providers may process technical logs such as IP address, browser type, requested page, and timestamp to deliver and secure the site. Hook & Haul does not sell personal information.",
        },
        {
          title: "Analytics",
          body: "If privacy-conscious analytics or Google Analytics is enabled, this page will identify the provider and available controls. No analytics identifier is active until it is explicitly configured.",
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

