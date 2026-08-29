import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/site-shell";
import { getGuide, guides } from "@/lib/guides";
import { absoluteUrl, siteUrl } from "@/lib/site";

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
      modifiedTime: "2026-08-30T00:00:00.000Z",
    },
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides
    .filter((item) => item.slug !== guide.slug && item.category === guide.category)
    .slice(0, 3);

  const pageUrl = absoluteUrl(`/guides/${guide.slug}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: "2026-08-25",
        dateModified: "2026-08-30",
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        inLanguage: "en",
        author: {
          "@type": "Organization",
          name: "Hook & Haul Editorial",
        },
        publisher: {
          "@type": "Organization",
          name: "Hook & Haul",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/icon.svg`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: absoluteUrl("/guides"),
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={articleSchema} />
      <section className="article-hero">
        <div className="shell article-hero-inner">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/guides">Guides</Link>
              <span>/</span>
              <span>{guide.category}</span>
            </nav>
            <span className="category-pill">{guide.category}</span>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <div className="article-meta">
              <span>Updated {guide.updated}</span>
              <span>{guide.readTime} read</span>
              <span>Sources listed below</span>
            </div>
          </div>
          <div className="article-marker" aria-hidden="true">
            <span>{guides.findIndex((item) => item.slug === guide.slug) + 1}</span>
            <small>FIELD NOTE</small>
          </div>
        </div>
      </section>

      <div className="shell article-layout">
        <article className="article">
          <aside className="quick-answer">
            <span>Quick answer</span>
            <p>{guide.quickAnswer}</p>
          </aside>

          {guide.sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`}>
              <span className="section-index">{String(index + 1).padStart(2, "0")}</span>
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
            </section>
          ))}

          <section className="sources" id="sources">
            <span className="section-index">SRC</span>
            <h2>Sources and verification</h2>
            <p>
              This page summarizes third-party reporting and current game guides. Use the
              live game UI as the final authority after patches.
            </p>
            <ol>
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <aside className="article-sidebar">
          <div className="toc-card">
            <span>On this page</span>
            {guide.sections.map((section, index) => (
              <a key={section.heading} href={`#section-${index + 1}`}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {section.heading}
              </a>
            ))}
            <a href="#sources">
              <i>S</i>
              Sources
            </a>
          </div>
          <div className="truth-card">
            <strong>Accuracy promise</strong>
            <p>
              Facts come from linked sources. Unconfirmed details are omitted or clearly
              marked.
            </p>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow dark">Keep moving</span>
                <h2>Related field notes</h2>
              </div>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/guides/${item.slug}`}>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                  <i aria-hidden="true">→</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageFrame>
  );
}

