/** Series and Expression Directory: 002〜004が将来複数表現を持つことを示すシリーズ入口。 */
import { ArrowLeft, FolderPlus, Layers3 } from "lucide-react";
import { Link } from "wouter";
import { ChamberMark } from "@/components/sequence/ChamberMark";
import type { Series } from "@/data/series";

export default function FutureSeries({ currentSeries }: { currentSeries: Series }) {
  return (
    <main className={`future-series future-series--${currentSeries.accent}`}>
      <div className="future-series__image" style={{ backgroundImage: `url(${currentSeries.image})` }} />
      <header className="future-series__header"><ChamberMark /><Link href="/"><ArrowLeft size={15} /> ALL SERIES</Link></header>
      <section className="future-series__body"><p className="eyebrow">memory-chamber / SERIES {currentSeries.id} / GROWING</p><h1>memory-<br />chamber.</h1><p className="future-series__subtitle">{currentSeries.title} — {currentSeries.subtitle}</p><p className="future-series__copy">{currentSeries.description}</p><div className="future-series__construction"><FolderPlus size={20} /><div><strong>ROOMS NOT YET BUILT</strong><span>When the material arrives, add its views here: desktop, structure, map, timeline, or another form entirely.</span></div></div></section>
      <footer className="future-series__footer"><Layers3 size={15} /> SERIES {currentSeries.id} WILL HOLD ITS OWN EXPRESSIONS.</footer>
    </main>
  );
}
