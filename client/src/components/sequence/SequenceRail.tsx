/** Sequential Memory Directory: 連番ページの現在地と移動先を同時に示す縦型レール。 */
import { Link, useLocation } from "wouter";
import { chapters } from "@/data/chapters";

export function SequenceRail({ currentId }: { currentId?: string }) {
  const [location] = useLocation();

  return (
    <nav className="sequence-rail" aria-label="連番ページの移動">
      <span className="sequence-rail__label">SEQUENCE</span>
      <div className="sequence-rail__track">
        {chapters.map((chapter, index) => {
          const isCurrent = currentId === chapter.id || location === `/${chapter.id}`;
          return (
            <Link
              key={chapter.id}
              href={`/${chapter.id}`}
              className={`sequence-rail__item sequence-rail__item--${chapter.accent} ${isCurrent ? "is-current" : ""}`}
              aria-current={isCurrent ? "page" : undefined}
            >
              <span className="sequence-rail__node">{index + 1}</span>
              <span className="sequence-rail__number">{chapter.id}</span>
              <span className="sequence-rail__status">{chapter.status === "active" ? "OPEN" : "RESERVED"}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

