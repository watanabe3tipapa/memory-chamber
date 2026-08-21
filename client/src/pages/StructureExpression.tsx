/** Series and Expression Directory: 001の根・幹・枝を選択できるサイトマップ表現。 */
import { useState } from "react";
import { CircleDot, MousePointer2 } from "lucide-react";
import { ExpressionShell } from "@/components/sequence/ExpressionShell";
import { getExpression, siteNodes } from "@/data/series";

const positions: Record<string, { x: string; y: string }> = {
  root: { x: "50%", y: "77%" }, archive: { x: "27%", y: "51%" }, workshop: { x: "50%", y: "42%" }, horizon: { x: "73%", y: "51%" },
  blog: { x: "13%", y: "20%" }, media: { x: "30%", y: "14%" }, editors: { x: "43%", y: "12%" }, terminal: { x: "57%", y: "15%" }, systems: { x: "70%", y: "14%" }, network: { x: "87%", y: "20%" },
};

export default function StructureExpression() {
  const expression = getExpression("structure");
  const [selectedId, setSelectedId] = useState("root");
  const selected = siteNodes.find((node) => node.id === selectedId) ?? siteNodes[0];
  if (!expression) return null;
  return (
    <ExpressionShell expression={expression}>
      <section className="structure-expression">
        <div className="structure-expression__intro"><p className="eyebrow">{expression.eyebrow}</p><h1>ROOT.<br />TRUNK.<br /><em>BRANCH.</em></h1><p>001 is a single archive, but its inner logic can be read as a growing organism. Select a node to reveal what it holds.</p></div>
        <div className="tree-stage" aria-label="001の根・幹・枝サイトマップ">
          <svg className="tree-stage__lines" viewBox="0 0 1000 680" preserveAspectRatio="none" aria-hidden="true">
            <path d="M500,520 C500,430 350,410 270,340 M500,520 C500,420 500,370 500,280 M500,520 C500,430 650,410 730,340" />
            <path d="M270,340 C220,270 130,190 130,136 M270,340 C290,250 310,185 300,95 M500,280 C470,210 430,150 430,82 M500,280 C530,205 570,165 570,102 M730,340 C710,250 700,175 700,96 M730,340 C790,250 860,190 870,136" />
          </svg>
          {siteNodes.map((node) => (
            <button key={node.id} type="button" className={`tree-node tree-node--${node.type} ${selectedId === node.id ? "is-selected" : ""}`} style={{ left: positions[node.id].x, top: positions[node.id].y }} onClick={() => setSelectedId(node.id)}>
              <CircleDot size={node.type === "root" ? 18 : 14} /><span>{node.name}</span>
            </button>
          ))}
          <aside className="tree-detail" aria-live="polite"><span>SELECTED NODE</span><h2>{selected.name}</h2><p>{selected.description}</p><div>{selected.tags.map((tag) => <small key={tag}>#{tag}</small>)}</div></aside>
        </div>
        <p className="structure-expression__hint"><MousePointer2 size={14} /> SELECT A ROOT, TRUNK, OR BRANCH.</p>
      </section>
    </ExpressionShell>
  );
}

