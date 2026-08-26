export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://how-to-fish-guide-mu.vercel.app"
).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const staticIndexablePaths = [
  "/",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;
