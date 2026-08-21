/** Series and Expression Directory: 同じ001を読む4つの入口を共通の操作系で包む。 */
import type { ReactNode } from "react";
import { Grid2X2, Layers3 } from "lucide-react";
import { Link } from "wouter";
import type { Expression, ExpressionKind } from "@/data/series";
import { getSeries } from "@/data/series";
import { ChamberMark } from "./ChamberMark";

export function ExpressionShell({ expression, children }: { expression: Expression; children: ReactNode }) {
  const allExpressions = getSeries("001")?.expressions ?? [];
  return (
    <main className={`expression-shell expression-shell--${expression.id}`}>
      <header className="expression-shell__header">
        <ChamberMark />
        <div className="expression-shell__meta"><span>memory-chamber / SERIES 001</span><span>VIEW {expression.label} OF 04</span></div>
      </header>
      <nav className="expression-switcher" aria-label="001の別表現を選択">
        <span className="expression-switcher__title"><Layers3 size={14} /> 001 VIEWS</span>
        <div>
          {allExpressions.map((item) => <Link key={item.id} href={`/001/${item.id}`} className={item.id === expression.id ? "is-active" : ""}>{item.label} / {item.title}</Link>)}
        </div>
      </nav>
      {children}
      <footer className="expression-shell__footer">
        <Link href="/001"><Layers3 size={15} /> ALL 001 VIEWS</Link>
        <Link href="/"><Grid2X2 size={15} /> ALL SERIES</Link>
      </footer>
    </main>
  );
}

export function expressionClass(id: ExpressionKind) { return `expression-shell--${id}`; }
