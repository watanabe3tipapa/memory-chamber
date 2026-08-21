/** Series and Expression Directory: シリーズとその別表現を二層で管理する。 */
export type SeriesStatus = "open" | "growing";
export type ExpressionKind = "desktop" | "structure" | "map" | "timeline";

export type Expression = {
  id: ExpressionKind;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type Series = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: SeriesStatus;
  accent: "teal" | "ice" | "amber" | "ink";
  image: string;
  expressions: Expression[];
};

export const series: Series[] = [
  {
    id: "001",
    title: "memory-chamber",
    subtitle: "Four views of one working archive",
    description: "The original environment can be entered through four distinct interfaces: desktop, structure, map, and construction order.",
    status: "open",
    accent: "teal",
    image: "/manus-storage/chamber-001-desktop_120576b9.jpg",
    expressions: [
      { id: "desktop", label: "01", eyebrow: "001 / EXPRESSION 01", title: "DESKTOP", description: "Open the original operating environment. Files, tools, and exits appear on a personal desktop.", image: "/manus-storage/chamber-001-desktop_120576b9.jpg" },
      { id: "structure", label: "02", eyebrow: "001 / EXPRESSION 02", title: "STRUCTURE", description: "Read the same archive as root, trunk, and branches. Select a node to understand its role.", image: "/manus-storage/chamber-002-archive_78ad9ac8.jpg" },
      { id: "map", label: "03", eyebrow: "001 / EXPRESSION 03", title: "MAP", description: "Place the archive across a small invented country, then travel between its content landmarks.", image: "/manus-storage/chamber-003-fantasy-map_2c54b20d.jpg" },
      { id: "timeline", label: "04", eyebrow: "001 / EXPRESSION 04", title: "TIMELINE", description: "Arrange the site corners as a construction trace. The order is ready to receive verified creation dates.", image: "/manus-storage/chamber-003-amber_e1fc9ccc.jpg" },
    ],
  },
  { id: "002", title: "SERIES 002", subtitle: "A second chamber, not yet opened", description: "This series has its own future set of expressions. Its first room can be added without changing the 001 system.", status: "growing", accent: "ice", image: "/manus-storage/chamber-002-archive_78ad9ac8.jpg", expressions: [] },
  { id: "003", title: "SERIES 003", subtitle: "A third chamber, held in reserve", description: "This series will become another independent world with a separate entry and its own visual vocabulary.", status: "growing", accent: "amber", image: "/manus-storage/chamber-003-amber_e1fc9ccc.jpg", expressions: [] },
  { id: "004", title: "SERIES 004", subtitle: "A fourth chamber, waiting for its first trace", description: "This is a prepared address for the next series. New expression types can be registered here when the material arrives.", status: "growing", accent: "ink", image: "/manus-storage/chamber-001-desktop_120576b9.jpg", expressions: [] },
];

export const getSeries = (id: string) => series.find((item) => item.id === id);
export const getExpression = (id: ExpressionKind) => getSeries("001")?.expressions.find((item) => item.id === id);

export type SiteNode = {
  id: string;
  name: string;
  type: "root" | "trunk" | "branch";
  parent?: string;
  description: string;
  tags: string[];
};

export const siteNodes: SiteNode[] = [
  { id: "root", name: "001 / MEMORY CHAMBER", type: "root", description: "The common source. All four expressions describe this same archive from different directions.", tags: ["entry", "environment"] },
  { id: "archive", name: "ARCHIVE", type: "trunk", parent: "root", description: "Texts and recorded traces are gathered as readable documents rather than detached pages.", tags: ["documents", "notes"] },
  { id: "workshop", name: "WORKSHOP", type: "trunk", parent: "root", description: "Editors, terminals, and tools are shown as part of the making process, not hidden infrastructure.", tags: ["applications", "tools"] },
  { id: "horizon", name: "HORIZON", type: "trunk", parent: "root", description: "Other operating systems and external destinations extend the archive beyond a single page.", tags: ["neo", "BeOS", "links"] },
  { id: "blog", name: "BLOG / TECH BLOG", type: "branch", parent: "archive", description: "A branch for writing, logs, and long-lived editorial material.", tags: ["writing"] },
  { id: "media", name: "MUSIC / PICTURES", type: "branch", parent: "archive", description: "A branch for sonic and visual material, carried as personal library shelves.", tags: ["media"] },
  { id: "editors", name: "EDITORS", type: "branch", parent: "workshop", description: "Quarto, Toolsmith, Right Stuff, and other editing environments form a branch of working tools.", tags: ["editing"] },
  { id: "terminal", name: "TERMINAL", type: "branch", parent: "workshop", description: "A command-shaped route through the site ecosystem and its nearby services.", tags: ["command"] },
  { id: "systems", name: "NEO / BEOS / OSX", type: "branch", parent: "horizon", description: "Other OS-like worlds make the archive a network of environments rather than a single interface.", tags: ["systems"] },
  { id: "network", name: "GITHUB / LINKS", type: "branch", parent: "horizon", description: "External services, profiles, and references form the outward-facing branch.", tags: ["network"] },
];

export const mapPins = [
  { id: "desk-hill", name: "DESK HILL", x: 24, y: 66, category: "ENTRY", description: "The desktop is the first hill: an operating environment rather than a conventional menu." },
  { id: "paper-forest", name: "PAPER FOREST", x: 24, y: 28, category: "ARCHIVE", description: "Documents, blogs, and notes grow here as layered written traces." },
  { id: "tool-bay", name: "TOOL BAY", x: 57, y: 72, category: "WORKSHOP", description: "Editors, tools, and terminal routes stay visible as part of the archive." },
  { id: "blue-lake", name: "BLUE LAKE", x: 73, y: 29, category: "MEDIA", description: "Music and pictures are a quieter library shelf, held as material rather than decoration." },
  { id: "far-island", name: "FAR ISLAND", x: 86, y: 58, category: "HORIZON", description: "neo, BeOS, OSX, GitHub, and other links are departures to adjacent worlds." },
];

export const constructionOrder = [
  { order: "01", title: "DESKTOP ENTRY", status: "OPEN", note: "The operating environment establishes the first way to enter 001." },
  { order: "02", title: "ARCHIVE BRANCH", status: "OPEN", note: "Documents, blogs, music, and pictures become readable archive shelves." },
  { order: "03", title: "WORKSHOP BRANCH", status: "OPEN", note: "Editing tools and terminal actions are treated as visible creative infrastructure." },
  { order: "04", title: "HORIZON BRANCH", status: "OPEN", note: "Other systems and external links extend the chamber beyond the original desktop." },
  { order: "05", title: "NEXT VERIFIED DATE", status: "UNSTAMPED", note: "Replace this editorial order with a confirmed creation date when the source record is available." },
];
