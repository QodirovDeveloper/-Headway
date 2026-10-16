/** Track label hotspot on a page: [track, x%, y%, width%, height%]. */
export type Hotspot = [track: string, x: number, y: number, w: number, h: number];

export interface Section {
  /** Unit number, or 'W' (Writing) / 'A' (Audioscripts). */
  n: number | string;
  title: string;
  /** First and last PDF page of the section. */
  from: number;
  to: number;
}

export interface Book {
  /** PDF page number → audio hotspots on that page. */
  pages: Record<string, Hotspot[]>;
  /** PDF page number → height / width. */
  ratio: Record<string, number>;
  units: Section[];
  extra: Section[];
  /** Track id (e.g. "T1.1") → Telegram post id. */
  posts: Record<string, number>;
  channel: string;
  /** Printed page number = PDF page − offset. */
  pageOffset: number;
}

export interface Answer {
  /** PDF page number. */
  p: number;
  /** Centre of the exercise number, in % of the page. */
  x: number;
  y: number;
  /** Exercise label: '1', '2', 'GS 1', … */
  ex: string;
  title: string;
  /** 'key' = exact answers, 'sample' = example answers. */
  kind: 'key' | 'sample';
  /** Lines of the key. Text in [brackets] is the answer. */
  items: string[];
}

export type LevelId = 'beginner' | 'elementary' | 'pre-intermediate' | 'intermediate' | 'upper-intermediate';

export interface LevelData {
  book: Book;
  answers: Answer[];
}

export interface LevelMeta {
  id: LevelId;
  name: string;
  cefr: string;
  /** Tailwind gradient stops for this level's accents. */
  gradient: string;
  /** Lazy-loads the level's book data (keeps the first page light). */
  load?: () => Promise<LevelData>;
  /** Shown on the level card before the data is opened. */
  stats?: { units: number; tracks: number; answers: number };
}
