import { createContext, useContext, useEffect, useState } from 'react';
import type { Answer, LevelData, LevelMeta, Section } from '../data/types';

/** Everything the UI needs about one book, with helpers bound to it. */
export interface Level extends LevelMeta {
  book: LevelData['book'];
  answers: Answer[];
  sections: Section[];
  /** Track ids in book order: T1.1, T1.2, … */
  tracks: string[];
  trackUnit: (t: string) => number;
  sectionOfTrack: (t: string) => Section | undefined;
  tracksOf: (s: Section) => string[];
  answersOf: (s: Section) => Answer[];
  answersOn: (p: number) => { a: Answer; i: number }[];
  hotspotsOn: (p: number) => LevelData['book']['pages'][string];
  pageRatio: (p: number) => number;
  pageSrc: (p: number) => string;
  audioSrc: (t: string) => string;
  telegramUrl: (t: string) => string;
  /** Printed page number in the book. */
  printed: (p: number) => number;
  findSection: (id: string) => Section | undefined;
}

const parts = (t: string) => t.slice(1).split('.').map(Number) as [number, number];

export const trackLabel = (t: string) => `T ${t.slice(1)}`;
export const sectionId = (s: Section) => String(s.n);
export const isUnit = (s: Section): s is Section & { n: number } => typeof s.n === 'number';
export const pageNumbers = (s: Section) => Array.from({ length: s.to - s.from + 1 }, (_, i) => s.from + i);
export const coverSrc = (id: string) => `/${id}/cover.webp`;

export function makeLevel(meta: LevelMeta, data: LevelData): Level {
  const { book, answers } = data;
  const sections = [...book.units, ...book.extra];
  const tracks = Object.keys(book.posts).sort((a, b) => {
    const [ua, na] = parts(a);
    const [ub, nb] = parts(b);
    return ua - ub || na - nb;
  });
  const trackUnit = (t: string) => parts(t)[0];

  return {
    ...meta,
    book,
    answers,
    sections,
    tracks,
    trackUnit,
    sectionOfTrack: (t) => book.units.find((u) => u.n === trackUnit(t)),
    tracksOf: (s) => (isUnit(s) ? tracks.filter((t) => trackUnit(t) === s.n) : []),
    answersOf: (s) => answers.filter((a) => a.p >= s.from && a.p <= s.to),
    answersOn: (p) => answers.map((a, i) => ({ a, i })).filter(({ a }) => a.p === p),
    hotspotsOn: (p) => book.pages[p] ?? [],
    pageRatio: (p) => book.ratio[p] ?? 1.3,
    pageSrc: (p) => `/${meta.id}/pages/p${String(p).padStart(3, '0')}.webp`,
    audioSrc: (t) => `/${meta.id}/audio/${t}.mp3`,
    telegramUrl: (t) => `https://t.me/${book.channel}/${book.posts[t]}`,
    printed: (p) => p - book.pageOffset,
    findSection: (id) => sections.find((s) => sectionId(s) === id),
  };
}

/** Section colours — literal class names so Tailwind can see them. */
const GRADIENTS = [
  'from-rose-500 to-orange-400',
  'from-amber-500 to-yellow-400',
  'from-lime-500 to-emerald-500',
  'from-emerald-500 to-teal-400',
  'from-cyan-500 to-sky-500',
  'from-sky-500 to-indigo-500',
  'from-indigo-500 to-violet-500',
  'from-violet-500 to-fuchsia-500',
  'from-fuchsia-500 to-pink-500',
  'from-pink-500 to-rose-500',
  'from-orange-500 to-amber-500',
  'from-teal-500 to-cyan-500',
  'from-red-500 to-rose-400',
  'from-blue-500 to-cyan-400',
];
export const gradientOf = (s: Section) =>
  isUnit(s) ? GRADIENTS[(s.n - 1) % GRADIENTS.length] : s.n === 'A' ? 'from-stone-500 to-stone-700' : 'from-slate-500 to-slate-700';

// ---- loading + context ----

const cache = new Map<string, Level>();

export function useLevelData(meta: LevelMeta | undefined) {
  const [level, setLevel] = useState<Level | null>(() => (meta ? cache.get(meta.id) ?? null : null));
  useEffect(() => {
    if (!meta?.load) return;
    const hit = cache.get(meta.id);
    if (hit) return setLevel(hit);
    let alive = true;
    meta.load().then((data) => {
      const l = makeLevel(meta, data);
      cache.set(meta.id, l);
      if (alive) setLevel(l);
    });
    return () => {
      alive = false;
    };
  }, [meta]);
  return meta && level?.id === meta.id ? level : null;
}

export const LevelContext = createContext<Level | null>(null);

export function useLevel() {
  const l = useContext(LevelContext);
  if (!l) throw new Error('useLevel must be used inside a level');
  return l;
}
