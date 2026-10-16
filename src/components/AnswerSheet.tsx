import { useEffect, useState } from 'react';
import { CircleCheck, Eye, EyeOff, Lightbulb, X } from 'lucide-react';
import { useLevel } from '../lib/level';
import Glass from './Glass';

/** Split "I [am] here" into text and answer parts. */
function parse(line: string) {
  return line.split(/(\[[^\]]+\])/g).filter(Boolean).map((part) =>
    part.startsWith('[') ? { answer: true, text: part.slice(1, -1) } : { answer: false, text: part },
  );
}

export default function AnswerSheet({ index, onClose }: { index: number; onClose: () => void }) {
  const { answers, printed } = useLevel();
  const a = answers[index];
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const withAnswers = a.items.map((s, i) => (s.includes('[') ? i : -1)).filter((i) => i >= 0);
  const allOpen = withAnswers.every((i) => open.has(i));

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

  const flip = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  const label = /^\d/.test(a.ex)
    ? `Exercise ${a.ex}`
    : a.ex === 'S'
      ? 'Starter'
      : a.ex === '?'
        ? 'What do you think?'
        : a.ex.replace('GS', 'Grammar Spot').replace('GP', 'Grammar');

  const revealed = withAnswers.filter((i) => open.has(i)).length;

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
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 ring-1 ring-mint/30 text-[11px] font-bold tracking-[0.14em] text-teal-700 uppercase dark:bg-mint/15 dark:text-teal-200 dark:ring-0">
              <CircleCheck className="size-3.5" />
              {label} · Page {printed(a.p)}
            </p>
            <h2 id="answer-title" className="mt-2 text-2xl leading-tight font-black tracking-tight">
              {a.title}
            </h2>
            {withAnswers.length > 0 && (
              <div className="mt-3 flex items-center gap-2.5">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10">
                  <span
                    className="block h-full rounded-full bg-linear-to-r from-teal-300 to-mint transition-all duration-500"
                    style={{ width: `${(revealed / withAnswers.length) * 100}%` }}
                  />
                </span>
                <span className="text-xs font-semibold text-ink/55 tabular-nums dark:text-slate-400">
                  {revealed} / {withAnswers.length}
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

        {a.kind === 'sample' && (
          <p className="mx-5 mb-3 flex items-start gap-2 rounded-2xl bg-amber-100/70 px-3.5 py-2.5 text-sm text-amber-900 sm:mx-6 dark:bg-amber-400/10 dark:text-amber-200">
            <Lightbulb className="mt-0.5 size-4 shrink-0" />
            This is a sample answer — yours may be different.
          </p>
        )}

        <ol className="flex-1 space-y-2 overflow-y-auto overscroll-contain [scrollbar-color:rgb(26_29_41/0.25)_transparent] [scrollbar-width:thin] dark:[scrollbar-color:rgb(255_255_255/0.25)_transparent] px-5 pt-1 pb-4 sm:px-6">
          {a.items.map((line, i) => {
            const shown = open.has(i);
            const hasAnswer = withAnswers.includes(i);
            return (
              <li key={i}>
                <button
                  onClick={() => hasAnswer && flip(i)}
                  className={`glass glass-crystal-pane flex w-full items-start gap-3 rounded-2xl p-3.5 text-left text-[15px] leading-relaxed transition ${
                    shown ? 'ring-1 ring-mint/50' : 'hover:brightness-[1.03]'
                  } ${hasAnswer ? 'active:scale-[0.99]' : 'cursor-default'}`}
                >
                  <span className="flex-1">
                    {parse(line).map((part, k) =>
                      part.answer ? (
                        <span
                          key={k}
                          className={`rounded-md px-1 transition-all duration-300 ${
                            shown ? 'bg-mint-soft font-semibold text-teal-800 dark:bg-mint/20 dark:text-teal-200' : 'answer-blank'
                          }`}
                        >
                          {part.text}
                        </span>
                      ) : (
                        <span key={k}>{part.text}</span>
                      ),
                    )}
                  </span>
                  {hasAnswer && (
                    <span className={`mt-0.5 shrink-0 transition ${shown ? 'text-ink/30 dark:text-slate-500' : 'text-mint'}`}>
                      {shown ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>

        {withAnswers.length > 0 && (
          <footer className="px-5 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
            <button
              onClick={() => setOpen(allOpen ? new Set() : new Set(withAnswers))}
              className="block w-full rounded-2xl transition hover:brightness-105 active:scale-[0.99]"
            >
              <Glass
                as="span"
                bezel={18}
                strength={38}
                ice={0}
                edgeLight={0.3}
                dispersion={0.18}
                className="glass-crystal glass-thick flex h-13 items-center justify-center gap-2 rounded-2xl text-base font-bold"
              >
                {allOpen ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                {allOpen ? 'Hide all' : 'Show all'}
              </Glass>
            </button>
          </footer>
        )}
      </Glass>
    </div>
  );
}
