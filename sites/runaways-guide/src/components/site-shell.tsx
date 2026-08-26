import Link from "next/link";
import { robloxUrl } from "@/lib/site";

const navItems = [
  { href: "/guides", label: "Guides" },
  { href: "/guides/codes", label: "Codes" },
  { href: "/guides/classes", label: "Classes" },
  { href: "/guides/mexico-route", label: "Mexico" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="State Line home">
          <span className="mark" aria-hidden="true" />
          <span>
            <strong>State Line</strong>
            <small>RUNAWAYS field notes</small>
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
              <strong>State Line</strong>
              <small>Independent Roblox guide</small>
            </span>
          </Link>
          <p>
            Source-linked notes for RUNAWAYS. In-game text wins when guides
            disagree.
          </p>
        </div>
        <div>
          <h2>Guides</h2>
          <Link href="/guides/beginner-guide">Beginner</Link>
          <Link href="/guides/codes">Codes</Link>
          <Link href="/guides/classes">Classes</Link>
          <Link href="/guides/mexico-route">Mexico route</Link>
        </div>
        <div>
          <h2>Site</h2>
          <Link href="/about">About</Link>
          <Link href="/guides">All guides</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 State Line</span>
        <span>Not affiliated with Roblox or supercat games.</span>
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
