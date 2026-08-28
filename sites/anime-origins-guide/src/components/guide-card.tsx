import Link from "next/link";
import type { Guide } from "@/lib/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link className="guide-card" href={`/guides/${guide.slug}`}>
      <span>{guide.category}</span>
      <strong>{guide.title}</strong>
      <p>{guide.description}</p>
      <small>{guide.readTime} read</small>
    </Link>
  );
}
