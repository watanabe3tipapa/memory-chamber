/** Series and Expression Directory: 001のコーナーを、確認済みの日付を後から注入できる作成順として読む。 */
import { useState } from "react";
import { ArrowUpRight, Clock3, Radio, Stamp } from "lucide-react";
import { ExpressionShell } from "@/components/sequence/ExpressionShell";
import { constructionOrder, getExpression } from "@/data/series";

export default function TimelineExpression() {
  const expression = getExpression("timeline");
  const [selectedOrder, setSelectedOrder] = useState(constructionOrder[0].order);
  const selected = constructionOrder.find((item) => item.order === selectedOrder) ?? constructionOrder[0];
  if (!expression) return null;
  return (
    <ExpressionShell expression={expression}>
      <section className="timeline-expression">
        <div className="timeline-expression__intro"><p className="eyebrow">memory-chamber / {expression.eyebrow}</p><h1>memory-<br /><em>chamber.</em></h1><p className="expression-view-title">THE BUILD LEFT A TRACE.</p><p>This is an editorial construction order, not an invented calendar. Confirmed creation dates can replace each open stamp later.</p></div>
        <div className="timeline-board">
          <div className="timeline-board__spine" />
          <div className="timeline-list">
            {constructionOrder.map((item, index) => <button key={item.order} type="button" className={`timeline-entry ${item.order === selectedOrder ? "is-selected" : ""}`} onClick={() => setSelectedOrder(item.order)}><span className="timeline-entry__order">{item.order}</span><span className="timeline-entry__dot" /><span className="timeline-entry__content"><small>{item.status === "OPEN" ? "ORDER RECORDED" : "DATE TO CONFIRM"}</small><strong>{item.title}</strong><em>{index === 0 ? "ORIGIN" : `AFTER ${constructionOrder[index - 1].order}`}</em></span></button>)}
          </div>
          <aside className="timeline-detail"><p><Clock3 size={15} /> CURRENT TRACE</p><h2>{selected.title}</h2><p>{selected.note}</p><span><Stamp size={13} /> {selected.status === "OPEN" ? "ORDER ESTABLISHED" : "AWAITING VERIFIED DATE"}</span></aside>
        </div>
        <aside className="mdn-observation">
          <div className="mdn-observation__meta"><Radio size={14} /> EXTERNAL OBSERVATION / MdN / 2026.07.28</div>
          <div className="mdn-observation__body"><div><p className="eyebrow">CURRENT WEB SIGNAL</p><h2>INTERACTION<br />AS DIALOGUE.</h2></div><p>MdN’s latest Web feature frames interaction design as the work of aligning a user’s purpose with the intent behind an interface. For memory-chamber, this is a reminder that each view is not decoration, but a different conversation with the same archive.</p><a href="https://www.mdn.co.jp/web/Practical_methods/8016" target="_blank" rel="noreferrer">READ THE SOURCE ON MdN <ArrowUpRight size={14} /></a></div>
        </aside>
      </section>
    </ExpressionShell>
  );
}
