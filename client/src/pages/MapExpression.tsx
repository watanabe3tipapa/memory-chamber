/** Series and Expression Directory: 001のコンテンツを幼い手描き風の架空地図へ配置する表現。 */
import { useState } from "react";
import { MapPinned, Sparkles } from "lucide-react";
import { ExpressionShell } from "@/components/sequence/ExpressionShell";
import { getExpression, mapPins } from "@/data/series";

export default function MapExpression() {
  const expression = getExpression("map");
  const [selectedId, setSelectedId] = useState(mapPins[0].id);
  const selected = mapPins.find((pin) => pin.id === selectedId) ?? mapPins[0];
  if (!expression) return null;
  return (
    <ExpressionShell expression={expression}>
      <section className="map-expression">
        <div className="map-expression__intro"><p className="eyebrow">{expression.eyebrow}</p><h1>THE LITTLE<br /><em>COUNTRY OF 001.</em></h1><p>Every corner is placed in an invented territory. Choose a hand-drawn pin to read what lives there.</p></div>
        <div className="fantasy-map" style={{ backgroundImage: `url(${expression.image})` }} aria-label="001の架空地図">
          {mapPins.map((pin) => <button key={pin.id} type="button" className={`map-pin ${selectedId === pin.id ? "is-selected" : ""}`} style={{ left: `${pin.x}%`, top: `${pin.y}%` }} onClick={() => setSelectedId(pin.id)}><span>✦</span><small>{pin.name}</small></button>)}
          <aside className="map-card" aria-live="polite"><p><MapPinned size={14} /> {selected.category}</p><h2>{selected.name}</h2><p>{selected.description}</p><span>CONTENT SLOT / READY</span></aside>
          <div className="map-compass"><Sparkles size={15} /><span>NOT TO SCALE<br />BUT TRUE ENOUGH</span></div>
        </div>
      </section>
    </ExpressionShell>
  );
}

