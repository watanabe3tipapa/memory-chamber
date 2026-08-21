/** Series and Expression Directory: 全シリーズへ帰還する共通の記号と索引リンク。 */
import { Link } from "wouter";

export function ChamberMark({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className={`chamber-mark ${compact ? "chamber-mark--compact" : ""}`} aria-label="memory-chamberの索引へ戻る"><img src="/manus-storage/chamber-mark_b902f5d0.png" alt="" />{!compact && <span>memory-chamber<br />ARCHIVE DIRECTORY</span>}</Link>;
}
