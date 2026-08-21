/** Sequential Memory Directory: 002・003のための追加可能なページ雛形。 */
import { ArrowUpRight, FilePlus2, FolderPlus, LayoutTemplate } from "lucide-react";
import { ChamberMark } from "@/components/sequence/ChamberMark";
import { ChapterNavigator } from "@/components/sequence/ChapterNavigator";
import { SequenceRail } from "@/components/sequence/SequenceRail";
import type { Chapter } from "@/data/chapters";

const blueprints = [
  { icon: FilePlus2, label: "CONTENT", detail: "Write the page-specific copy and source material here." },
  { icon: LayoutTemplate, label: "COMPOSITION", detail: "Give this chamber its own visual rhythm without breaking the sequence." },
  { icon: FolderPlus, label: "CONNECTION", detail: "Add the new route to the shared chapter data and it joins the directory." },
];

export default function ReservedChapter({ chapter }: { chapter: Chapter }) {
  return (
    <main className={`reserved-page reserved-page--${chapter.accent}`}>
      <div className="reserved-page__image" style={{ backgroundImage: `url(${chapter.image})` }} />
      <header className="chapter-page__header">
        <ChamberMark />
        <div className="chapter-page__meta"><span>CHAMBER / RESERVED</span><span>PAGE {chapter.id} OF 003</span></div>
      </header>
      <SequenceRail currentId={chapter.id} />
      <section className="reserved-hero">
        <p className="eyebrow">PAGE {chapter.id} / RESERVED FOR EXPANSION</p>
        <h1>{chapter.title}</h1>
        <p className="reserved-hero__subtitle">{chapter.subtitle}</p>
        <p className="reserved-hero__copy">{chapter.description}</p>
        <div className="reserved-hero__stamp"><span>STATUS</span><strong>AWAITING MATERIAL</strong><ArrowUpRight size={17} /></div>
      </section>
      <section className="blueprint-panel" aria-label={`${chapter.id}ページの追加ガイド`}>
        <div className="blueprint-panel__title"><p>PAGE BLUEPRINT</p><h2>ADD CONTENT<br />WITHOUT LOSING THE ROUTE.</h2></div>
        <div className="blueprint-panel__items">
          {blueprints.map(({ icon: Icon, label, detail }, index) => (
            <article key={label} className="blueprint-item">
              <span>0{index + 1}</span><Icon size={20} /><h3>{label}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <ChapterNavigator currentId={chapter.id} />
    </main>
  );
}

