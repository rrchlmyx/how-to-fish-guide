import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the State Line independent RUNAWAYS guide.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">Legal</span>
          <h1>Terms of use</h1>
          <h2>No guarantee</h2>
          <p>
            Codes expire without notice and class prices change. The live game
            UI is the final authority after a patch.
          </p>
          <h2>Independent fan site</h2>
          <p>
            State Line is not endorsed by Roblox Corporation or supercat games.
            All trademarks belong to their owners.
          </p>
          <h2>Permitted use</h2>
          <p>
            You may use the guides for personal play. Republishing the site or
            presenting the editorial work as your own is not permitted.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
