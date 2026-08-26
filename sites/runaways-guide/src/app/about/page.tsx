import type { Metadata } from "next";
import { PageFrame } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "How State Line researches RUNAWAYS Roblox guides.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">About</span>
          <h1>Built to answer the search, not to invent the game.</h1>
          <p>
            State Line is an independent fan guide for the Roblox experience
            RUNAWAYS by supercat games. It is not affiliated with Roblox
            Corporation or the developer.
          </p>
          <h2>Editorial rule</h2>
          <p>
            AI organizes verified writeups. If two sources disagree on a number,
            the page says so and tells you to trust the live lobby. Codes are
            dated because they expire.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
