import Link from "next/link";
import { brandName, robloxUrl } from "@/lib/site";

const navItems = [
  { href: "/guides", label: "Guides" },
  { href: "/guides/codes", label: "Codes" },
  { href: "/guides/beginner-guide", label: "Beginner" },
  { href: "/guides/traits", label: "Traits" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label={`${brandName} home`}>
          <span className="mark" aria-hidden="true" />
          <span>
            <strong>{brandName}</strong>
            <small>Anime Origins notes</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="play-link" href={robloxUrl} target="_blank" rel="noreferrer">
          Play on Roblox <span aria-hidden="true">↗</span>
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
          <Link href="/" className="brand">
            <span className="mark" aria-hidden="true" />
            <span>
              <strong>{brandName}</strong>
              <small>Independent Roblox guide</small>
            </span>
          </Link>
          <p>
            Source-linked notes for Anime Origins. In-game popups win when
            guides disagree.
          </p>
        </div>
        <div>
          <h2>Guides</h2>
          <Link href="/guides/beginner-guide">Beginner</Link>
          <Link href="/guides/codes">Codes</Link>
          <Link href="/guides/how-to-redeem-codes">Redeem codes</Link>
          <Link href="/guides/traits">Traits</Link>
          <Link href="/guides/summon-guide">Summons</Link>
        </div>
        <div>
          <h2>Site</h2>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/guides">All guides</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 {brandName}</span>
        <span>Not affiliated with Roblox or Origins Project.</span>
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
