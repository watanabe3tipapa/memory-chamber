/** Series and Expression Directory: 全シリーズへ帰還する共通の記号と索引リンク。 */
import { Link } from "wouter";

export function ChamberMark({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className={`chamber-mark ${compact ? "chamber-mark--compact" : ""}`} aria-label="Series Directoryへ戻る"><img src="/manus-storage/chamber-mark_b902f5d0.png" alt="" />{!compact && <span>WATANABE3TI<br />SERIES DIRECTORY</span>}</Link>;
}

