import Link from "next/link";
import { PageFrame } from "@/components/site-shell";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="page-hero info-hero">
        <div className="shell">
          <span className="eyebrow">404</span>
          <h1>That chart is not on this boat.</h1>
          <p>
            The page may have moved, or it is only on a preview deploy that is
            not production yet.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/guides">
              Browse guides
            </Link>
            <Link className="button button-ghost" href="/guides/beginner-guide">
              Beginner route
            </Link>
            <Link className="button button-ghost" href="/guides/quest-items-trophies">
              Quest trophies
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
