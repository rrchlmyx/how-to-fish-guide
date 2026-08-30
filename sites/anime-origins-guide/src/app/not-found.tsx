import Link from "next/link";
import { PageFrame } from "@/components/site-shell";
import { brandName } from "@/lib/site";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell article">
          <span className="eyebrow">404</span>
          <h1>No unit summoned here.</h1>
          <p>
            {brandName} does not have that page. Start with codes or the
            beginner loop.
          </p>
          <p>
            <Link href="/guides/codes">Working codes</Link>
            {" · "}
            <Link href="/guides/beginner-guide">Beginner guide</Link>
            {" · "}
            <Link href="/guides/traits">Traits</Link>
            {" · "}
            <Link href="/">Home</Link>
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
