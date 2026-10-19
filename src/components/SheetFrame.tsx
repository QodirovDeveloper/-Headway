import { useEffect, type ReactNode } from 'react';
import { CircleCheck, Lightbulb, X } from 'lucide-react';
import type { Answer } from '../data/types';
import { useLevel } from '../lib/level';
import Glass from './Glass';

/** "Exercise 3", "Grammar Spot 2", … */
export function exerciseLabel(ex: string) {
  if (/^\d/.test(ex)) return `Exercise ${ex}`;
  if (ex === 'S') return 'Starter';
  if (ex === '?') return 'What do you think?';
  return ex.replace('GS', 'Grammar Spot').replace('GP', 'Grammar');
}

interface Props {
  a: Answer;
  /** Gaps done / all gaps — drawn as a bar under the title. */
  progress?: { done: number; total: number };
  /** Shown above the list for sample answers. */
  note?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

/** The clear-crystal sheet that slides up over the book page (answer key or exercise). */
export default function SheetFrame({ a, progress, note, onClose, children, footer }: Props) {
  const { printed } = useLevel();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 animate-fade-in bg-ink/40 dark:bg-black/70" onClick={onClose} />

      <Glass
        role="dialog"
        aria-modal="true"
        aria-labelledby="answer-title"
        bezel={30}
        strength={52}
        ice={0}
        edgeLight={0.22}
        dispersion={0.14}
        className="glass-crystal glass-thick flex max-h-[88dvh] w-full max-w-2xl animate-sheet-up flex-col rounded-t-[2rem] sm:rounded-[2rem]"
      >
        <div className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-ink/15 sm:hidden dark:bg-white/15" />

        <header className="flex items-start gap-3 px-5 pt-3 pb-4 sm:px-6 sm:pt-6">
          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] text-teal-700 uppercase ring-1 ring-mint/30 dark:bg-mint/15 dark:text-teal-200 dark:ring-0">
              <CircleCheck className="size-3.5" />
              {exerciseLabel(a.ex)} · Page {printed(a.p)}
            </p>
            <h2 id="answer-title" className="mt-2 text-2xl leading-tight font-black tracking-tight">
              {a.title}
            </h2>
            {progress && progress.total > 0 && (
              <div className="mt-3 flex items-center gap-2.5">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10">
                  <span
                    className="block h-full rounded-full bg-linear-to-r from-teal-300 to-mint transition-all duration-500"
                    style={{ width: `${(progress.done / progress.total) * 100}%` }}
                  />
                </span>
                <span className="text-xs font-semibold text-ink/55 tabular-nums dark:text-slate-400">
                  {progress.done} / {progress.total}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="glass glass-crystal-pane grid size-10 shrink-0 place-items-center rounded-full transition hover:scale-105 active:scale-95"
          >
            <X className="size-5" />
          </button>
        </header>

        {note && (
          <p className="mx-5 mb-3 flex items-start gap-2 rounded-2xl bg-amber-100/70 px-3.5 py-2.5 text-sm text-amber-900 sm:mx-6 dark:bg-amber-400/10 dark:text-amber-200">
            <Lightbulb className="mt-0.5 size-4 shrink-0" />
            {note}
          </p>
        )}

        <ol className="flex-1 space-y-2 overflow-y-auto overscroll-contain px-5 pt-1 pb-4 [scrollbar-color:rgb(26_29_41/0.25)_transparent] [scrollbar-width:thin] sm:px-6 dark:[scrollbar-color:rgb(255_255_255/0.25)_transparent]">
          {children}
        </ol>

        {footer && <footer className="px-5 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">{footer}</footer>}
      </Glass>
    </div>
  );
}

/** Spinner or error line inside a sheet while the server answers. */
export function SheetStatus({ error }: { error: string | null }) {
  return error ? (
    <li className="rounded-2xl bg-coral/12 px-4 py-3 text-sm font-medium text-coral dark:bg-coral/20 dark:text-orange-200">{error}</li>
  ) : (
    <li className="grid place-items-center py-10">
      <span className="size-8 animate-spin rounded-full border-4 border-mint/20 border-t-mint" />
    </li>
  );
}
