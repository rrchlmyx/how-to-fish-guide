import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeTable } from "@/components/code-table";
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
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      modifiedTime: "2026-09-05T00:00:00.000Z",
    },
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = absoluteUrl(`/guides/${guide.slug}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: "2026-08-28",
        dateModified: "2026-09-05",
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        author: { "@type": "Organization", name: brandName },
        publisher: { "@type": "Organization", name: brandName, url: siteUrl },
      },
      ...(guide.codes
        ? [
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What are the latest Anime Origins codes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: guide.quickAnswer,
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I redeem Anime Origins codes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Reach Level 10, tap the orange Codes button on the right HUD, paste the code exactly including punctuation, and confirm.",
                  },
                },
              ],
            },
          ]
        : []),
    ],
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
        {guide.codes ? <CodeTable rows={guide.codes} /> : null}
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
        <section>
          <h2>Keep summoning</h2>
          <ul>
            {guides
              .filter((item) => item.slug !== guide.slug)
              .slice(0, 5)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/guides/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </section>
      </article>
    </PageFrame>
  );
}
