import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Report an outdated RUNAWAYS code, class cost, or route note.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">Contact</span>
          <h1>Expired codes and bad costs.</h1>
          <p>
            Open an issue on the project GitHub repository
            (`rrchlmyx/how-to-fish-guide`) and mention{" "}
            <strong>RUNAWAYS / State Line</strong> in the title. Include the
            page URL, the disputed detail, and a current source or in-game
            screenshot.
          </p>
          <p>
            This site does not sell Robux, accounts, or hacks. Do not send
            passwords or session cookies.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
