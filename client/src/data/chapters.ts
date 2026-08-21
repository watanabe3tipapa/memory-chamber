/** Sequential Memory Directory: 連番ページの情報設計を一元化するデータ定義。 */
export type ChapterStatus = "active" | "reserved";

export type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ChapterStatus;
  accent: "teal" | "ice" | "amber";
  image: string;
};

export const chapters: Chapter[] = [
  {
    id: "001",
    title: "ORIGINAL DESKTOP",
    subtitle: "The first chamber",
    description:
      "A working desktop that gathers documents, tools, traces, and departures into one personal environment.",
    status: "active",
    accent: "teal",
    image: "/manus-storage/chamber-001-desktop_120576b9.jpg",
  },
  {
    id: "002",
    title: "RESERVED ARCHIVE",
    subtitle: "A room for the next trace",
    description:
      "The next page is prepared as an independent chamber, ready to accept its own material and rhythm.",
    status: "reserved",
    accent: "ice",
    image: "/manus-storage/chamber-002-archive_78ad9ac8.jpg",
  },
  {
    id: "003",
    title: "ANNOTATION FIELD",
    subtitle: "A room for future notes",
    description:
      "A separate page for another layer of annotation, research, or an experiment still to be named.",
    status: "reserved",
    accent: "amber",
    image: "/manus-storage/chamber-003-amber_e1fc9ccc.jpg",
  },
];

export const getChapter = (id: string) => chapters.find((chapter) => chapter.id === id);

