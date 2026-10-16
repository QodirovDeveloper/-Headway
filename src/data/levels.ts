import type { LevelMeta } from './types';

/** All Headway 4th edition Student's Books, in order. Data is loaded only when a level is opened. */
export const LEVELS: LevelMeta[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    cefr: 'A1',
    gradient: 'from-amber-500 to-orange-500',
    load: () => import('./beginner').then((m) => m.default),
    stats: { units: 14, tracks: 182, answers: 246 },
  },
  {
    id: 'elementary',
    name: 'Elementary',
    cefr: 'A2',
    gradient: 'from-rose-500 to-red-600',
    load: () => import('./elementary').then((m) => m.default),
    stats: { units: 12, tracks: 168, answers: 333 },
  },
  {
    id: 'pre-intermediate',
    name: 'Pre-Intermediate',
    cefr: 'B1',
    gradient: 'from-emerald-500 to-teal-600',
    load: () => import('./pre-intermediate').then((m) => m.default),
    stats: { units: 12, tracks: 161, answers: 375 },
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    cefr: 'B1+',
    gradient: 'from-sky-500 to-blue-600',
    load: () => import('./intermediate').then((m) => m.default),
    stats: { units: 12, tracks: 142, answers: 327 },
  },
  {
    id: 'upper-intermediate',
    name: 'Upper-Intermediate',
    cefr: 'B2',
    gradient: 'from-violet-500 to-purple-700',
    // Coming soon: its pages and audio were taken out of public/. The book data is still in
    // ./upper-intermediate — once the media is back, restore:
    //   load: () => import('./upper-intermediate').then((m) => m.default),
    //   stats: { units: 12, tracks: 75, answers: 320 },
  },
];

export const findLevel = (id: string) => LEVELS.find((l) => l.id === id);
