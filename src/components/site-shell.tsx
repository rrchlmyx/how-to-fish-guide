import Link from "next/link";
import { steamStoreUrl } from "@/lib/site";

const navItems = [
  { href: "/guides", label: "Guides" },
  { href: "/guides/co-op-multiplayer", label: "Co-op" },
  { href: "/guides/islands-progression", label: "Islands" },
  { href: "/guides/lures-and-baits", label: "Lures" },
  { href: "/guides/fish-list", label: "Fish List" },
  { href: "/guides/cooking-and-prices", label: "Prices" },
];

export function FishMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`fish-mark ${small ? "fish-mark-small" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path d="M11 32c9-14 25-18 39-8l8-7v30l-8-7c-14 10-30 6-39-8Z" />
        <circle cx="42" cy="27" r="2.5" />
        <path d="M17 32h15M25 23l5 9-5 9" />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Hook and Haul home">
          <FishMark small />
          <span>
            <strong>Hook &amp; Haul</strong>
            <small>How to Fish Field Guide</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="play-link"
          href={steamStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on Steam
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <FishMark small />
            <span>
              <strong>Hook &amp; Haul</strong>
              <small>Independent fan field guide</small>
            </span>
          </Link>
          <p>
            Clear, source-linked guides for the co-op fishing adventure by Dazed Games.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/guides">All guides</Link>
          <Link href="/guides/beginner-guide">Beginner route</Link>
          <Link href="/guides/co-op-multiplayer">Co-op</Link>
          <Link href="/guides/quest-items-trophies">Quest trophies</Link>
          <Link href="/guides/fish-list">Collection</Link>
          <Link href="/guides/cooking-and-prices">Cooking &amp; prices</Link>
        </div>
        <div>
          <h2>Site</h2>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="source-note">
          <h2>Source policy</h2>
          <p>
            We cross-check current guides and link every article to its references.
            In-game text wins when updates conflict.
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Hook &amp; Haul</span>
        <span>Not affiliated with Dazed Games, Landfall, or Valve.</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

