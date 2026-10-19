import { useEffect, useState, type ReactNode } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { api, errorText } from '../lib/api';
import type { Sheet } from '../lib/apiTypes';
import { useLevel } from '../lib/level';
import Glass from './Glass';
import SheetFrame, { SheetStatus } from './SheetFrame';

/** Split "I [am] here" into text and answer parts. */
function parse(line: string) {
  return line.split(/(\[[^\]]+\])/g).filter(Boolean).map((part) =>
    part.startsWith('[') ? { answer: true, text: part.slice(1, -1) } : { answer: false, text: part },
  );
}

/** The teacher's view: the whole answer key, each line hidden until tapped. */
export default function AnswerSheet({ index, onClose }: { index: number; onClose: () => void }) {
  const level = useLevel();
  const a = level.answers[index];
  const [items, setItems] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());

  useEffect(() => {
    api<Sheet>(`sheet?level=${level.id}&i=${index}`)
      .then((s) => (s.mode === 'key' ? setItems(s.items) : setError('Answer keys are for the teacher.')))
      .catch((e) => setError(errorText(e)));
  }, [level.id, index]);

  const withAnswers = (items ?? []).map((s, i) => (s.includes('[') ? i : -1)).filter((i) => i >= 0);
  const allOpen = withAnswers.every((i) => open.has(i));
  const revealed = withAnswers.filter((i) => open.has(i)).length;

  const flip = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  let footer: ReactNode;
  if (withAnswers.length > 0)
    footer = (
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
    );

  return (
    <SheetFrame
      a={a}
      progress={{ done: revealed, total: withAnswers.length }}
      note={a.kind === 'sample' ? 'This is a sample answer — yours may be different.' : undefined}
      onClose={onClose}
      footer={footer}
    >
      {!items ? (
        <SheetStatus error={error} />
      ) : (
        items.map((line, i) => {
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
        })
      )}
    </SheetFrame>
  );
}
