import Link from "next/link";
import { PageFrame } from "@/components/site-shell";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">404</span>
          <h1>Wrong turn. State line not found.</h1>
          <p>
            That URL is not on this guide. Try codes, classes, or the Mexico
            route instead.
          </p>
          <p>
            <Link href="/guides/codes">Working codes</Link>
            {" · "}
            <Link href="/guides/classes">Classes</Link>
            {" · "}
            <Link href="/guides/mexico-route">Mexico route</Link>
            {" · "}
            <Link href="/">Home</Link>
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
