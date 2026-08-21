/** Series and Expression Directory: 001〜004を入口ごとに分け、シリーズ単位で選ぶLP。 */
import { ArrowDownRight, ArrowUpRight, Layers3, Orbit } from "lucide-react";
import { Link } from "wouter";
import { ChamberMark } from "@/components/sequence/ChamberMark";
import { series } from "@/data/series";

export default function Home() {
  return (
    <main className="series-directory">
      <div className="series-directory__noise" />
      <header className="series-directory__header"><ChamberMark /><p>ONE ARCHIVE MAY HAVE MANY READINGS.<br />EACH SERIES MAY HAVE MANY EXPRESSIONS.</p></header>
      <section className="series-directory__hero"><div><p className="eyebrow">memory-chamber / SERIES DIRECTORY 001—004</p><h1>memory-<br /><em>chamber.</em></h1><p>The directory is the first interface. 001 is open in four views; 002—004 remain quiet series addresses, ready for their own expression systems.</p><a href="#series" className="series-directory__jump">READ THE INDEX <ArrowDownRight size={18} /></a></div><aside className="series-directory__rail"><Orbit size={29} /><span>ACTIVE SERIAL INDEX</span>{series.map((item) => <a key={item.id} href={`#series-${item.id}`}><strong>{item.id}</strong><small>{item.status === "open" ? "OPEN" : "RESERVED"}</small></a>)}<p>ONE SERIES<br />MANY EXPRESSIONS</p></aside></section>
      <section id="series" className="series-index"><div className="series-index__head"><span>memory-chamber / SERIAL SHELF</span><span>SELECT AN ARCHIVE</span></div><div className="series-index__list">{series.map((item, index) => <Link id={`series-${item.id}`} key={item.id} href={`/${item.id}`} className={`series-card series-card--${item.accent} ${item.status === "growing" ? "series-card--reserved" : ""}`}><div className="series-card__image" style={{ backgroundImage: `url(${item.image})` }} /><div className="series-card__number"><small>0{index + 1}</small><strong>{item.id}</strong></div><div className="series-card__copy"><p>{item.status === "open" ? "04 VIEWS OPEN" : "RESERVED SERIES ADDRESS"}</p><h2>{item.title}</h2><span>{item.subtitle}</span></div><div className="series-card__action">{item.status === "open" ? <Layers3 size={19} /> : <ArrowUpRight size={19} />}</div></Link>)}</div></section>
      <footer className="series-directory__footer"><span>memory-chamber / SERIES & EXPRESSION DIRECTORY</span><span>001 OPEN · 002—004 PREPARED</span><ArrowUpRight size={15} /></footer>
    </main>
  );
}
