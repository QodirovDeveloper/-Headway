// Answer keys live only on the server: the site gets the lines with gaps, never the answers.
import { ANSWERS as beginner } from '../src/data/beginner/answers';
import { ANSWERS as elementary } from '../src/data/elementary/answers';
import { ANSWERS as intermediate } from '../src/data/intermediate/answers';
import { ANSWERS as preIntermediate } from '../src/data/pre-intermediate/answers';
import { ANSWERS as upperIntermediate } from '../src/data/upper-intermediate/answers';
import type { Answer, LevelId } from '../src/data/types';
import type { Segment, Sheet } from '../src/lib/apiTypes';

const KEYS: Record<LevelId, Answer[]> = {
  beginner,
  elementary,
  'pre-intermediate': preIntermediate,
  intermediate,
  'upper-intermediate': upperIntermediate,
};

/** XP and SILVER are given only if the gap is found within this many tries (no guessing through the list). */
export const REWARD_TRIES = 2;
const CHOICES = 4;

export function exercise(level: string, i: number): Answer | undefined {
  return Object.hasOwn(KEYS, level) ? KEYS[level as LevelId][i] : undefined;
}

/** Answers in [brackets] on one line, in order. */
const gapsOf = (line: string) => [...line.matchAll(/\[([^\]]+)\]/g)].map((m) => m[1]);

/** Identifies one gap: level/exercise/line/gap. */
export const gapKey = (level: string, i: number, item: number, b: number) => `${level}/${i}/${item}/${b}`;

export function answerOf(level: string, i: number, item: number, b: number) {
  const line = exercise(level, i)?.items[item];
  return line === undefined ? undefined : gapsOf(line)[b];
}

/** Compare answers loosely: case, curly quotes, spacing and end punctuation don't matter. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:"]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Right if it matches the whole key or one of its alternatives ("a / b"). */
export function isRight(value: string, answer: string) {
  const v = norm(value);
  return v !== '' && [answer, ...answer.split(' / ')].some((a) => norm(a) === v);
}

// Seeded shuffle, so a gap shows the same choices every time it is opened.
function seeded(text: string) {
  let h = 2166136261;
  for (let k = 0; k < text.length; k++) h = Math.imul(h ^ text.charCodeAt(k), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), h | 1);
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(list: T[], rnd: () => number) {
  const a = [...list];
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(rnd() * (k + 1));
    [a[k], a[j]] = [a[j], a[k]];
  }
  return a;
}

/** Wrong choices come from the other gaps of the same exercise, then from the exercises next to it. */
function choicesFor(level: string, i: number, answer: string, key: string) {
  const list = KEYS[level as LevelId];
  const seen = new Set([norm(answer)]);
  const others: string[] = [];
  const take = (a: Answer | undefined) => {
    if (!a || a.kind === 'sample') return;
    for (const line of a.items)
      for (const g of gapsOf(line))
        if (!seen.has(norm(g))) {
          seen.add(norm(g));
          others.push(g);
        }
  };
  take(list[i]);
  for (let d = 1; others.length < CHOICES - 1 && d <= 4; d++) {
    take(list[i - d]);
    take(list[i + d]);
  }
  const rnd = seeded(key);
  return shuffle([answer, ...shuffle(others, rnd).slice(0, CHOICES - 1)], rnd);
}

export function teacherSheet(a: Answer): Sheet {
  return { mode: 'key', items: a.items };
}

/** The exercise as a student sees it: gaps carry choices, and the answer only once found. */
export function studentSheet(level: string, i: number, a: Answer, progress: Map<string, { tries: number; solved: boolean }>): Sheet {
  const items = a.items.map((line, item) => {
    let b = 0;
    return line
      .split(/(\[[^\]]+\])/g)
      .filter(Boolean)
      .map((part): Segment => {
        if (!part.startsWith('[')) return part;
        const gap = b++;
        if (a.kind === 'sample') return { b: gap, choices: [], tries: 0 };
        const answer = part.slice(1, -1);
        const key = gapKey(level, i, item, gap);
        const p = progress.get(key);
        return { b: gap, choices: p?.solved ? [] : choicesFor(level, i, answer, key), tries: p?.tries ?? 0, answer: p?.solved ? answer : undefined };
      });
  });
  return { mode: 'quiz', kind: a.kind, items, rewardTries: REWARD_TRIES };
}
