import { ArrowLeft, ArrowRight, BookOpen, CircleCheck, HeadphoneOff, Headphones, Layers } from 'lucide-react';
import type { Section } from '../data/types';
import { coverSrc, gradientOf, isUnit, sectionId, useLevel } from '../lib/level';
import { hubHref, sectionHref } from '../lib/route';
import { useStored } from '../lib/storage';
import type { ThemeApi } from '../lib/theme';
import { usePlayer } from '../player/PlayerContext';
import Glass from './Glass';
import GlassText from './GlassText';
import { ThemeButton } from './TopBar';

export interface LastVisit {
  id: string;
  page: number;
}

/** One book's home: cover, stats, and its units. */
export default function Home({ theme }: { theme: ThemeApi }) {
  const level = useLevel();
  const [last] = useStored<LastVisit | null>(`last.${level.id}`, null);
  const lastSection = last ? level.findSection(last.id) : undefined;

  return (
    <div className="mx-auto max-w-5xl px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-32 sm:px-6">
      <nav className="flex items-center justify-between py-2">
        <Glass
          as="a"
          href={hubHref}
          bezel={14}
          strength={20}
          ice={0}
          edgeLight={0.2}
          className="glass-thick inline-flex items-center gap-2 rounded-full py-2 pr-3.5 pl-2.5 text-sm font-semibold transition hover:-translate-y-px"
        >
          <ArrowLeft className="size-4" /> All levels
        </Glass>
        <ThemeButton theme={theme} />
      </nav>

      <header className="animate-rise flex items-end gap-5 pt-6 pb-8 sm:gap-8 sm:pt-10">
        <img
          src={coverSrc(level.id)}
          alt={`Headway ${level.name} cover`}
          className="w-28 shrink-0 rotate-[-2deg] rounded-xl shadow-2xl shadow-ink/30 ring-1 ring-black/10 sm:w-44"
        />
        <div className="min-w-0">
          <span
            className={`inline-block rounded-full bg-linear-to-r ${level.gradient} px-2.5 py-1 text-xs font-bold tracking-wider text-white`}
          >
            {level.cefr}
          </span>
          <GlassText className="mt-3 text-4xl leading-[0.95] font-black tracking-tight sm:text-6xl">
            {level.name}
          </GlassText>
          <p className="mt-2 text-sm text-ink/60 dark:text-slate-400">Headway 4th edition · Student's Book</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Stat icon={<Layers className="size-4" />} value={level.book.units.length} label="units" />
            <Stat icon={<Headphones className="size-4" />} value={level.tracks.length} label="tracks" />
            {level.answers.length > 0 && (
              <Stat icon={<CircleCheck className="size-4" />} value={level.answers.length} label="answer keys" />
            )}
          </div>
        </div>
      </header>

      {lastSection && last && <ContinueCard section={lastSection} page={last.page} />}

      <SectionTitle>Units</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {level.book.units.map((u, i) => (
          <SectionCard key={sectionId(u)} section={u} index={i} />
        ))}
      </div>

      {level.book.extra.length > 0 && (
        <>
          <SectionTitle>More</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {level.book.extra.map((s, i) => (
              <SectionCard key={sectionId(s)} section={s} index={i} wide />
            ))}
          </div>
        </>
      )}

      <footer className="mt-14 text-center text-xs leading-relaxed text-ink/45 dark:text-slate-500">
        Book and audio © Oxford University Press. For study use only.
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <GlassText as="h2" size="md" className="mt-10 mb-4 text-2xl font-black tracking-tight">
      {children}
    </GlassText>
  );
}

export function Stat({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <Glass
      as="span"
      bezel={14}
      strength={20}
      ice={0}
      edgeLight={0.18}
      className="glass-card glass-thick inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm"
    >
      <span className="text-coral">{icon}</span>
      <b className="font-semibold tabular-nums">{value}</b>
      <span className="text-ink/60 dark:text-slate-400">{label}</span>
    </Glass>
  );
}

function ContinueCard({ section, page }: { section: Section; page: number }) {
  const level = useLevel();
  return (
    <Glass
      as="a"
      href={sectionHref(level.id, sectionId(section), page)}
      bezel={28}
      strength={44}
      edgeLight={0.16}
      className="glass-tone glass-thick group animate-rise mb-2 flex items-center gap-4 overflow-hidden rounded-3xl p-4 transition hover:-translate-y-0.5 sm:p-5"
    >
      <span className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${gradientOf(section)} font-display text-2xl font-semibold text-white`}>
        {isUnit(section) ? section.n : <BookOpen className="size-6" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold tracking-[0.18em] text-ink/55 uppercase dark:text-white/55">Continue reading</span>
        <span className="mt-0.5 block truncate text-lg font-semibold">
          {isUnit(section) ? `Unit ${section.n} · ` : ''}
          {section.title}
        </span>
        <span className="text-sm text-ink/60 dark:text-white/60">Page {level.printed(page)}</span>
      </span>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink/5 transition group-hover:translate-x-1 group-hover:bg-coral group-hover:text-white dark:bg-white/10">
        <ArrowRight className="size-5" />
      </span>
    </Glass>
  );
}

function SectionCard({ section, index, wide }: { section: Section; index: number; wide?: boolean }) {
  const level = useLevel();
  const listened = usePlayer().listenedIn(level.id);
  const tracks = level.tracksOf(section);
  const done = tracks.filter((t) => listened.has(t)).length;
  const answers = level.answersOf(section).length;
  const pct = tracks.length ? Math.round((done / tracks.length) * 100) : 0;

  return (
    <Glass
      as="a"
      href={sectionHref(level.id, sectionId(section))}
      style={{ animationDelay: `${index * 35}ms` }}
      bezel={26}
      strength={40}
      ice={0}
      edgeLight={0.16}
      className={`glass-card glass-thick group animate-rise flex overflow-hidden rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:p-5 ${wide ? 'items-center gap-4' : 'flex-col'}`}
    >
      <span
        aria-hidden
        className={`absolute -top-10 -right-10 size-32 rounded-full bg-linear-to-br ${gradientOf(section)} opacity-15 blur-2xl transition group-hover:opacity-30`}
      />
      <span
        className={`relative grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${gradientOf(section)} font-display text-2xl font-semibold text-white shadow-md sm:size-14`}
      >
        {isUnit(section) ? section.n : <BookOpen className="size-6" />}
      </span>

      <span className={`relative flex min-w-0 flex-1 flex-col ${wide ? '' : 'mt-4'}`}>
        {isUnit(section) && (
          <span className="text-[11px] font-semibold tracking-[0.18em] text-ink/45 uppercase dark:text-slate-500">Unit {section.n}</span>
        )}
        <span className="text-[15px] leading-snug font-semibold sm:text-base">{section.title}</span>
        <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink/55 dark:text-slate-400">
          {tracks.length > 0 && (
            <span className="inline-flex items-center gap-1">
              <Headphones className="size-3.5" />
              {tracks.length}
            </span>
          )}
          {tracks.length === 0 && isUnit(section) && (
            <span className="inline-flex items-center gap-1">
              <HeadphoneOff className="size-3.5" />
              No audio yet
            </span>
          )}
          {answers > 0 && (
            <span className="inline-flex items-center gap-1">
              <CircleCheck className="size-3.5" />
              {answers}
            </span>
          )}
          <span>
            pp. {level.printed(section.from)}–{level.printed(section.to)}
          </span>
        </span>

        {tracks.length > 0 && (
          <span className="mt-3 block">
            <span className="block h-1.5 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10">
              <span
                className={`block h-full rounded-full bg-linear-to-r ${gradientOf(section)} transition-all duration-700`}
                style={{ width: `${pct}%` }}
              />
            </span>
            <span className="mt-1.5 block text-[11px] text-ink/45 tabular-nums dark:text-slate-500">
              {done}/{tracks.length} listened
            </span>
          </span>
        )}
      </span>
    </Glass>
  );
}
