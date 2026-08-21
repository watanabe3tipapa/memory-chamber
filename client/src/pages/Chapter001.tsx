/** Series and Expression Directory: 001の原点を、独立したDesktop表現として公開する。 */
import { ArrowDown } from "lucide-react";
import { DesktopChamber } from "@/components/desktop/DesktopChamber";
import { ExpressionShell } from "@/components/sequence/ExpressionShell";
import { getExpression } from "@/data/series";

export default function Chapter001() {
  const expression = getExpression("desktop");
  if (!expression) return null;
  return (
    <ExpressionShell expression={expression}>
      <section className="desktop-expression"><div className="desktop-expression__intro"><p className="eyebrow">{expression.eyebrow}</p><h1>DESKTOP<br /><em>AS A DOOR.</em></h1><p>A preserved operating environment remains the original way to enter 001. The same archive can be read elsewhere as a tree, map, or construction trace.</p><a href="#desktop">ENTER DESKTOP <ArrowDown size={15} /></a></div><div id="desktop" className="desktop-expression__stage"><DesktopChamber /></div></section>
    </ExpressionShell>
  );
}

