import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";
import { brandName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the ${brandName} Anime Origins guide.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">Legal</span>
          <h1>Privacy policy</h1>
          <h2>Basic server data</h2>
          <p>
            Hosting providers may process technical logs such as IP address,
            browser type, requested page, and timestamp to deliver and secure
            the site. {brandName} does not sell personal information.
          </p>
          <h2>Analytics</h2>
          <p>
            The site uses Google Analytics 4 and Vercel Analytics to understand
            aggregate usage. Google and Vercel may process device, browser,
            approximate location, and interaction data under their own terms.
            IP anonymization is enabled for GA4.
          </p>
          <h2>External links</h2>
          <p>
            Guides link to Roblox and third-party sources. Those sites have
            their own privacy practices.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
