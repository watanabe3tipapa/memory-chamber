/** Series and Expression Directory: 001の同じ内容世界を、4つの異なる見方として選択するハブ。 */
import { ArrowUpRight, Layers3 } from "lucide-react";
import { Link } from "wouter";
import { ChamberMark } from "@/components/sequence/ChamberMark";
import { getSeries } from "@/data/series";

export default function SeriesHub() {
  const currentSeries = getSeries("001");
  if (!currentSeries) return null;
  return (
    <main className="series-hub">
      <div className="series-hub__image" style={{ backgroundImage: `url(${currentSeries.image})` }} />
      <header className="series-hub__header"><ChamberMark /><span>SERIES 001 / 04 EXPRESSIONS</span></header>
      <section className="series-hub__intro">
        <p className="eyebrow">001 / MEMORY CHAMBER</p>
        <h1>ONE ARCHIVE.<br /><em>FOUR WAYS IN.</em></h1>
        <p>{currentSeries.description}</p>
      </section>
      <section className="expression-grid" aria-label="001の別表現">
        {currentSeries.expressions.map((expression) => (
          <Link key={expression.id} href={`/001/${expression.id}`} className={`expression-card expression-card--${expression.id}`}>
            <div className="expression-card__image" style={{ backgroundImage: `url(${expression.image})` }} />
            <span className="expression-card__number">{expression.label}</span>
            <div><p>{expression.eyebrow}</p><h2>{expression.title}</h2><span>{expression.description}</span></div>
            <ArrowUpRight size={21} />
          </Link>
        ))}
      </section>
      <footer className="series-hub__footer"><Layers3 size={15} /> A SINGLE 001, NEVER A SINGLE VIEW.</footer>
    </main>
  );
}

