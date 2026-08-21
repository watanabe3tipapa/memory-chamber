/** Sequential Memory Directory: 001の原点となる、操作できるデスクトップ型チャンバー。 */
import { useEffect, useState } from "react";
import { Folder, FileText, Music2, Image, Settings2, TerminalSquare, Wrench, X, Minimize2, Maximize2, Search, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

type DesktopItem = {
  id: string;
  label: string;
  icon: "folder" | "file" | "music" | "image" | "settings" | "terminal" | "tool";
  kind: "folder" | "file" | "link";
  description: string;
};

const items: DesktopItem[] = [
  { id: "readme", label: "Readme", icon: "file", kind: "file", description: "This desktop is the first page of a sequential personal archive. Open a file, move through the sequence, leave a trace." },
  { id: "documents", label: "Documents", icon: "folder", kind: "folder", description: "Notes, BLOG, Tech-BLOG, and future texts are held in this chamber." },
  { id: "applications", label: "Applications", icon: "folder", kind: "folder", description: "Editors, toolmakers, and experimental utilities are treated as archive material too." },
  { id: "music", label: "Music", icon: "music", kind: "folder", description: "A shelf for listening, source material, and temporal markers." },
  { id: "pictures", label: "Pictures", icon: "image", kind: "folder", description: "A visual trace is stored here, distinct from the next numbered rooms." },
  { id: "tools", label: "Tools", icon: "tool", kind: "link", description: "Tools are not backstage. They are part of the record of making." },
  { id: "settings", label: "Settings", icon: "settings", kind: "file", description: "This page keeps the original desktop as an active starting point inside a new sequence." },
  { id: "terminal", label: "Terminal", icon: "terminal", kind: "file", description: "The terminal is a shortcut to the site ecosystem: neo, BeOS, editors, and releases." },
];

function ItemIcon({ type }: { type: DesktopItem["icon"] }) {
  const common = { size: 34, strokeWidth: 1.5 };
  if (type === "folder") return <Folder {...common} />;
  if (type === "file") return <FileText {...common} />;
  if (type === "music") return <Music2 {...common} />;
  if (type === "image") return <Image {...common} />;
  if (type === "settings") return <Settings2 {...common} />;
  if (type === "terminal") return <TerminalSquare {...common} />;
  return <Wrench {...common} />;
}

export function DesktopChamber() {
  const [, setLocation] = useLocation();
  const [booted, setBooted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [opened, setOpened] = useState<DesktopItem | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setBooted(true), 1050);
    return () => window.clearTimeout(timeout);
  }, []);

  const openItem = (item: DesktopItem) => {
    setSelected(item.id);
    setOpened(item);
  };

  return (
    <section className="desktop-chamber" aria-label="001 Original Desktop">
      {!booted && (
        <div className="boot-layer" aria-live="polite">
          <div className="boot-layer__module"><span>001</span></div>
          <p>STARTING CHAMBER…</p>
          <div className="boot-layer__bar"><span /></div>
        </div>
      )}
      <div className="desktop-chamber__wallpaper" />
      <div className="desktop-chamber__menubar">
        <span className="desktop-chamber__apple">●</span>
        <span>Finder</span><span>File</span><span>Edit</span><span>View</span><span>Special</span>
        <span className="desktop-chamber__clock">001 / 09:41</span>
      </div>
      <div className="desktop-chamber__ticker">WATANABE3TI.COM / PAGE 001 / ORIGINAL DESKTOP</div>
      <div className="desktop-icons" role="list" aria-label="001のデスクトップ項目">
        {items.map((item) => (
          <button
            type="button"
            role="listitem"
            key={item.id}
            className={`desktop-icon ${selected === item.id ? "is-selected" : ""}`}
            onClick={() => setSelected(item.id)}
            onDoubleClick={() => openItem(item)}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") openItem(item); }}
            aria-label={`${item.label}を開く`}
          >
            <span className="desktop-icon__image"><ItemIcon type={item.icon} /></span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      {opened && (
        <article className={`desktop-window ${isMaximized ? "is-maximized" : ""}`} aria-label={`${opened.label} ウィンドウ`}>
          <header className="desktop-window__bar">
            <div className="desktop-window__controls">
              <button type="button" onClick={() => setOpened(null)} aria-label="閉じる"><X size={12} /></button>
              <button type="button" onClick={() => setOpened(null)} aria-label="最小化"><Minimize2 size={12} /></button>
              <button type="button" onClick={() => setIsMaximized((value) => !value)} aria-label="拡大または縮小"><Maximize2 size={12} /></button>
            </div>
            <strong>{opened.label}</strong>
          </header>
          <div className="desktop-window__body">
            <p className="desktop-window__meta">TYPE / {opened.kind.toUpperCase()} &nbsp; · &nbsp; PAGE / 001</p>
            <h2>{opened.label}</h2>
            <p>{opened.description}</p>
            {opened.id === "readme" && <button type="button" onClick={() => setLocation("/001/structure")} className="desktop-window__action">OPEN STRUCTURE VIEW <ExternalLink size={14} /></button>}
          </div>
        </article>
      )}
      <div className="desktop-chamber__trash"><span>⌫</span><small>Trash</small></div>
      <div className="desktop-dock" aria-label="クイックアクション">
        <button type="button" onClick={() => openItem(items[0])}><Search size={17} /><span>Readme</span></button>
        <button type="button" onClick={() => openItem(items[6])}><Settings2 size={17} /><span>Settings</span></button>
        <button type="button" onClick={() => openItem(items[7])}><TerminalSquare size={17} /><span>Terminal</span></button>
        <button type="button" onClick={() => setLocation("/001/structure")}><span className="desktop-dock__next">02</span><span>Structure</span></button>
      </div>
    </section>
  );
}
