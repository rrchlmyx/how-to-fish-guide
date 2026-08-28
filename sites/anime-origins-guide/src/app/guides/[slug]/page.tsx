import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { getGuide, guides } from "@/lib/guides";
import { absoluteUrl, brandName, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = absoluteUrl(`/guides/${guide.slug}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    author: { "@type": "Organization", name: brandName },
    publisher: { "@type": "Organization", name: brandName, url: siteUrl },
  };

  return (
    <PageFrame>
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <div className="shell">
          <nav className="eyebrow">
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link>
          </nav>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <p className="note">
            Updated {guide.updated} · {guide.readTime} read
          </p>
        </div>
      </section>
      <article className="shell article">
        <aside className="quick-answer">
          <span>Quick answer</span>
          <p>{guide.quickAnswer}</p>
        </aside>
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.note && <p className="note">{section.note}</p>}
          </section>
        ))}
        <section className="sources">
          <h2>Sources</h2>
          <ol>
            {guide.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </PageFrame>
  );
}
