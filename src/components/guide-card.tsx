import Link from "next/link";
import type { Guide } from "@/lib/guides";

const categoryIcons: Record<Guide["category"], string> = {
  "Start Here": "◎",
  Progression: "⌁",
  Gear: "⚙",
  Collection: "◇",
};

export function GuideCard({ guide, featured = false }: { guide: Guide; featured?: boolean }) {
  return (
    <article className={`guide-card ${featured ? "featured-card" : ""}`}>
      <div className="card-topline">
        <span className="category-pill">
          <i aria-hidden="true">{categoryIcons[guide.category]}</i>
          {guide.category}
        </span>
        <span>{guide.readTime}</span>
      </div>
      <h2>
        <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
      </h2>
      <p>{guide.description}</p>
      <Link className="card-link" href={`/guides/${guide.slug}`}>
        Read field guide <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

