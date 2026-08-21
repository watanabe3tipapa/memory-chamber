/** Sequential Memory Directory: 前後と全体索引へ必ず戻れる共通ナビゲーション。 */
import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { Link } from "wouter";
import { chapters } from "@/data/chapters";

export function ChapterNavigator({ currentId }: { currentId: string }) {
  const index = chapters.findIndex((chapter) => chapter.id === currentId);
  const previous = index > 0 ? chapters[index - 1] : undefined;
  const next = index < chapters.length - 1 ? chapters[index + 1] : undefined;

  return (
    <nav className="chapter-navigator" aria-label="ページ移動">
      {previous ? (
        <Link href={`/${previous.id}`} className="chapter-navigator__side chapter-navigator__side--previous">
          <ArrowLeft size={16} />
          <span><small>PREVIOUS</small>{previous.id} — {previous.title}</span>
        </Link>
      ) : <div className="chapter-navigator__side is-empty" />}
      <Link href="/" className="chapter-navigator__index"><Grid2X2 size={15} /> DIRECTORY</Link>
      {next ? (
        <Link href={`/${next.id}`} className="chapter-navigator__side chapter-navigator__side--next">
          <span><small>NEXT</small>{next.id} — {next.title}</span>
          <ArrowRight size={16} />
        </Link>
      ) : <div className="chapter-navigator__side is-empty" />}
    </nav>
  );
}

