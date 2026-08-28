import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";
import { brandName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brandName} about Anime Origins guide corrections.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">Contact</span>
          <h1>Corrections and expired codes.</h1>
          <p>
            Found a dead code, a wrong reward pile, or a page that drifted after
            a patch? Open an issue on the project GitHub repository
            (`rrchlmyx/how-to-fish-guide`) and mention{" "}
            <strong>Anime Origins / Summon Desk</strong> in the title.
          </p>
          <p>
            This site does not sell Robux, accounts, or hacks. Do not send
            passwords or session cookies.
          </p>
          <p className="note">
            {brandName} is a fan guide. For official announcements, use the
            Origins Project Discord linked from trusted code trackers — not from
            random DMs.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
