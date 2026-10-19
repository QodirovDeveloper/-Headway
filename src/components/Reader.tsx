import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, CircleCheck, Headphones } from 'lucide-react';
import type { Section } from '../data/types';
import { useAuthApi } from '../lib/auth';
import { gradientOf, isUnit, pageNumbers, sectionId, trackLabel, useLevel } from '../lib/level';
import { levelHref, sectionHref } from '../lib/route';
import { useStored } from '../lib/storage';
import type { ThemeApi } from '../lib/theme';
import { usePlayer } from '../player/PlayerContext';
import AnswerSheet from './AnswerSheet';
import BookPage from './BookPage';
import Glass from './Glass';
import type { LastVisit } from './Home';
import QuizSheet from './QuizSheet';
import { ThemeButton } from './TopBar';

interface Props {
  section: Section;
  startPage?: number;
  theme: ThemeApi;
}

export default function Reader({ section, startPage, theme }: Props) {
  const level = useLevel();
  const pages = pageNumbers(section);
  const tracks = level.tracksOf(section);
  const answerCount = level.answersOf(section).length;
  const { now, playing, listenedIn, play, toggle } = usePlayer();
  const activeTrack = now?.level.id === level.id ? now.track : null;
  const listened = listenedIn(level.id);

  const [answerIdx, setAnswerIdx] = useState<number | null>(null);
  const teacher = useAuthApi().user.role !== 'student';
  const closeSheet = useCallback(() => setAnswerIdx(null), []);
  const [current, setCurrent] = useState(startPage ?? section.from);
  const [, setLast] = useStored<LastVisit | null>(`last.${level.id}`, null);
  const [, setLastLevel] = useStored<string | null>('lastLevel', null);
  const chipsRef = useRef<HTMLDivElement>(null);

  // The header tucks itself away after a few seconds without being touched, or when the
  // page is scrolled down; scrolling up (or the small tab) brings it back.
  const headerRef = useRef<HTMLElement>(null);
  const hovering = useRef(false);
  const hideTimer = useRef(0);
  const quietUntil = useRef(0); // ignore scrolls we caused ourselves (opening a page, chip jumps)
  const [barHidden, setBarHidden] = useState(false);
  const revealBar = useCallback(() => {
    setBarHidden(false);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (!hovering.current && !headerRef.current?.querySelector(':focus-visible')) setBarHidden(true);
    }, 6000);
  }, []);
  const showBar = useCallback(() => {
    quietUntil.current = Date.now() + 1200;
    revealBar();
  }, [revealBar]);
  useEffect(() => {
    showBar();
    return () => window.clearTimeout(hideTimer.current);
  }, [showBar]);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - lastY;
      if (Math.abs(dy) < 6) return;
      lastY = window.scrollY;
      if (hovering.current || Date.now() < quietUntil.current) return;
      if (dy < 0) return revealBar();
      window.clearTimeout(hideTimer.current);
      setBarHidden(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [revealBar]);

  const pos = level.sections.indexOf(section);
  const prev = level.sections[pos - 1];
  const next = level.sections[pos + 1];

  // Open at the requested page, otherwise at the top.
  useEffect(() => {
    if (startPage) document.getElementById(`p${startPage}`)?.scrollIntoView({ block: 'start' });
    else window.scrollTo({ top: 0 });
  }, [startPage]);

  // Which page is in the middle of the screen right now.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.page));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('[data-page]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [section]);

  useEffect(() => {
    setLast({ id: sectionId(section), page: current });
    setLastLevel(level.id);
  }, [section, current, level.id, setLast, setLastLevel]);

  // Keep the playing track's chip visible.
  useEffect(() => {
    if (!activeTrack) return;
    chipsRef.current
      ?.querySelector<HTMLElement>(`[data-chip="${activeTrack}"]`)
      ?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeTrack]);

  const onTrack = useCallback(
    (t: string) => (t === activeTrack ? toggle() : play(level, t)),
    [activeTrack, play, toggle, level],
  );

  const onChip = (t: string) => {
    document.querySelector(`[data-track="${t}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    onTrack(t);
  };

  return (
    <div className="pb-32">
      <header
        ref={headerRef}
        inert={barHidden}
        onPointerEnter={() => {
          hovering.current = true;
          showBar();
        }}
        onPointerLeave={() => {
          hovering.current = false;
          showBar();
        }}
        onPointerDown={showBar}
        onFocus={showBar}
        className={`pointer-events-none sticky top-0 z-30 px-2 pt-[max(0.5rem,env(safe-area-inset-top))] transition-transform duration-300 sm:px-3 ${
          barHidden ? '-translate-y-[calc(100%_+_2.5rem)]' : ''
        }`}
      >
        <Glass
          bezel={20}
          strength={34}
          className="pointer-events-auto mx-auto max-w-3xl rounded-[22px] glass-legible"
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <a
              href={levelHref(level.id)}
              aria-label={`Back to ${level.name}`}
              className="grid size-9 shrink-0 place-items-center rounded-full transition hover:bg-ink/5 active:scale-95 dark:hover:bg-white/10"
            >
              <ArrowLeft className="size-4.5" />
            </a>
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-lg bg-linear-to-br ${gradientOf(section)} font-display text-base font-semibold text-white shadow-md`}
            >
              {isUnit(section) ? section.n : <BookOpen className="size-4" />}
            </span>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-sm leading-tight font-semibold">
                {isUnit(section) && <span className="text-ink/50 dark:text-slate-400">Unit {section.n} · </span>}
                {section.title}
              </h1>
              <p className="flex items-center gap-2.5 text-[11px] text-ink/55 tabular-nums dark:text-slate-400">
                <span>{level.name}</span>
                <span>
                  p. {level.printed(current)} <span className="opacity-60">/ {level.printed(section.to)}</span>
                </span>
                {tracks.length > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Headphones className="size-3.5" /> {tracks.length}
                  </span>
                )}
                {answerCount > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <CircleCheck className="size-3.5" /> {answerCount}
                  </span>
                )}
              </p>
            </div>
            <ThemeButton theme={theme} small />
          </div>

          {tracks.length > 0 && (
            <div ref={chipsRef} className="no-scrollbar flex gap-1.5 overflow-x-auto px-2.5 pb-2">
              {tracks.map((t) => {
                const active = t === activeTrack;
                const heard = listened.has(t);
                return (
                  <button
                    key={t}
                    data-chip={t}
                    onClick={() => onChip(t)}
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums transition active:scale-95 ${
                      active
                        ? 'bg-coral text-white shadow-md shadow-coral/30'
                        : 'bg-white/55 text-ink ring-1 ring-white/70 hover:ring-coral/40 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10'
                    }`}
                  >
                    {active && playing ? <EqualizerIcon /> : heard && <Check className="size-3.5 text-mint" strokeWidth={3} />}
                    {trackLabel(t)}
                  </button>
                );
              })}
            </div>
          )}
        </Glass>
      </header>

      {/* Pull-down tab while the header is tucked away */}
      <button
        onClick={showBar}
        aria-label="Show header"
        tabIndex={barHidden ? 0 : -1}
        className={`fixed top-0 left-1/2 z-30 -translate-x-1/2 pt-[max(0.5rem,env(safe-area-inset-top))] transition duration-300 ${
          barHidden ? 'translate-y-0' : 'pointer-events-none -translate-y-[calc(100%_+_1.5rem)]'
        }`}
      >
        <Glass
          bezel={11}
          strength={18}
          className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-ink/70 transition hover:text-ink dark:text-slate-300 dark:hover:text-white"
        >
          <span className="tabular-nums">
            {isUnit(section) ? `Unit ${section.n} · ` : ''}p. {level.printed(current)}
          </span>
          <ChevronDown className="size-3.5" />
        </Glass>
      </button>

      <main className="mx-auto flex max-w-3xl flex-col gap-5 px-3 pt-5 sm:gap-8 sm:px-4 sm:pt-8">
        {pages.map((p) => (
          <BookPage
            key={p}
            p={p}
            activeTrack={activeTrack}
            listened={listened}
            onTrack={onTrack}
            onAnswer={setAnswerIdx}
          />
        ))}

        <nav className="mt-4 grid grid-cols-2 gap-3">
          {prev ? <NavCard levelId={level.id} section={prev} dir="prev" /> : <span />}
          {next ? <NavCard levelId={level.id} section={next} dir="next" /> : <span />}
        </nav>
      </main>

      {answerIdx != null &&
        (teacher ? (
          <AnswerSheet key={answerIdx} index={answerIdx} onClose={closeSheet} />
        ) : (
          <QuizSheet key={answerIdx} index={answerIdx} onClose={closeSheet} />
        ))}
    </div>
  );
}

function NavCard({ levelId, section, dir }: { levelId: string; section: Section; dir: 'prev' | 'next' }) {
  return (
    <a
      href={sectionHref(levelId, sectionId(section))}
      className={`glass glass-card group flex flex-col gap-1 rounded-3xl p-4 transition hover:-translate-y-0.5 hover:shadow-lg ${dir === 'next' ? 'items-end text-right' : ''}`}
    >
      <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-ink/50 uppercase dark:text-slate-400">
        {dir === 'prev' && <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />}
        {dir === 'prev' ? 'Previous' : 'Next'}
        {dir === 'next' && <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />}
      </span>
      <span className="leading-snug font-semibold">
        {isUnit(section) ? `Unit ${section.n} · ` : ''}
        {section.title}
      </span>
    </a>
  );
}

function EqualizerIcon() {
  return (
    <span className="flex h-3 items-end gap-[2px]" aria-hidden>
      {[0, 150, 300].map((d) => (
        <span key={d} className="h-full w-[3px] origin-bottom animate-eq rounded-full bg-white" style={{ animationDelay: `${d}ms` }} />
      ))}
    </span>
  );
}
