import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Coins, PartyPopper, SendHorizontal, Zap } from 'lucide-react';
import { api, errorText } from '../lib/api';
import type { CheckResult, Gap, Segment, Sheet } from '../lib/apiTypes';
import { useAuthApi } from '../lib/auth';
import { useLevel } from '../lib/level';
import SheetFrame, { SheetStatus } from './SheetFrame';

type Quiz = Extract<Sheet, { mode: 'quiz' }>;
type Pos = { item: number; b: number };
type Feedback = { tone: 'good' | 'bad' | 'info'; text: string };

const isGap = (s: Segment): s is Gap => typeof s !== 'string';
const same = (p: Pos | null, item: number, b: number) => p?.item === item && p.b === b;

/** The student's view: fill each gap. The answer is shown only once the student finds it. */
export default function QuizSheet({ index, onClose }: { index: number; onClose: () => void }) {
  const level = useLevel();
  const auth = useAuthApi();
  const a = level.answers[index];
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<Pos | null>(null);
  const [wrong, setWrong] = useState<ReadonlySet<string>>(new Set());
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [shake, setShake] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  const gaps = quiz ? quiz.items.flatMap((line, item) => line.filter(isGap).map((g) => ({ item, g }))) : [];
  const done = gaps.filter(({ g }) => g.answer).length;
  /** The next gap still to find after `at` (wrapping round), or null when all are found. */
  const nextOpen = (at: Pos) => {
    const open = gaps.filter(({ item, g }) => !g.answer && !same(at, item, g.b));
    const pick = open.find(({ item, g }) => item > at.item || (item === at.item && g.b > at.b)) ?? open[0];
    return pick ? { item: pick.item, b: pick.g.b } : null;
  };

  useEffect(() => {
    api<Sheet>(`sheet?level=${level.id}&i=${index}`)
      .then((s) => {
        if (s.mode !== 'quiz') return setError('This view is for students.');
        setQuiz(s);
        const first = s.items.flatMap((line, item) => line.filter(isGap).filter((g) => !g.answer).map((g) => ({ item, b: g.b })))[0];
        if (s.kind === 'key' && first) setActive(first);
      })
      .catch((e) => setError(errorText(e)));
  }, [level.id, index]);

  // keep the chosen gap in view
  useEffect(() => {
    if (active) document.getElementById(`gap-${active.item}-${active.b}`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [active]);

  const choose = (p: Pos) => {
    setActive(p);
    setWrong(new Set());
    setTyped('');
    setFeedback(null);
  };

  const patch = (p: Pos, change: Partial<Gap>) =>
    setQuiz((q) =>
      q && {
        ...q,
        items: q.items.map((line, item) =>
          item === p.item ? line.map((s) => (isGap(s) && s.b === p.b ? { ...s, ...change } : s)) : line,
        ),
      },
    );

  async function check(value: string) {
    if (!active || busy || !value.trim()) return;
    const at = active;
    setBusy(true);
    try {
      const r = await api<CheckResult>('check', { level: level.id, i: index, item: at.item, b: at.b, value });
      auth.setWallet({ xp: r.xp, silver: r.silver });
      if (r.correct) {
        patch(at, { answer: r.answer, choices: [], tries: r.tries });
        setFeedback(r.reward ? { tone: 'good', text: '+1 XP · +1 SILVER' } : { tone: 'info', text: 'Correct!' });
        setTyped('');
        const next = nextOpen(at);
        window.setTimeout(() => {
          if (!same(activeRef.current, at.item, at.b)) return; // the student already moved on
          setActive(next);
          setWrong(new Set());
          if (next) setFeedback(null);
        }, 900);
      } else {
        patch(at, { tries: r.tries });
        setWrong((w) => new Set(w).add(value));
        setShake((n) => n + 1);
        setFeedback({ tone: 'bad', text: 'Not quite — try again.' });
      }
    } catch (e) {
      setFeedback({ tone: 'bad', text: errorText(e) });
    } finally {
      setBusy(false);
    }
  }

  const onType = (e: FormEvent) => {
    e.preventDefault();
    void check(typed);
  };

  const gap = active && quiz ? quiz.items[active.item].filter(isGap).find((g) => g.b === active.b) : undefined;
  const sample = quiz?.kind === 'sample';

  let footer = null;
  if (quiz && sample)
    footer = <p className="text-center text-sm text-ink/60 dark:text-slate-400">Open answers — talk about them with your teacher.</p>;
  else if (quiz && gaps.length > 0 && done === gaps.length)
    footer = (
      <p className="flex items-center justify-center gap-2 rounded-2xl bg-mint-soft py-3 font-bold text-teal-800 dark:bg-mint/20 dark:text-teal-200">
        <PartyPopper className="size-5" /> Exercise complete!
      </p>
    );
  else if (quiz && gap && !gap.answer)
    footer = (
      <div key={shake} className={shake ? 'animate-shake' : ''}>
        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold text-ink/55 dark:text-slate-400">
          <span>Choose the answer, or type it</span>
          {gap.tries >= quiz.rewardTries ? (
            <span className="text-coral">No XP for this gap now — find it anyway!</span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <Zap className="size-3.5 fill-amber-400 text-amber-500" />
              <Coins className="size-3.5 text-slate-400" />
              {quiz.rewardTries - gap.tries} {quiz.rewardTries - gap.tries === 1 ? 'try' : 'tries'} for a reward
            </span>
          )}
        </div>
        <div className="grid max-h-[34dvh] gap-2 overflow-y-auto sm:grid-cols-2">
          {gap.choices.map((c) => {
            const no = wrong.has(c);
            return (
              <button
                key={c}
                disabled={busy || no}
                onClick={() => void check(c)}
                className={`glass glass-crystal-pane rounded-xl px-3.5 py-2.5 text-left text-[15px] leading-snug font-semibold transition active:scale-[0.98] ${
                  no ? 'text-coral line-through opacity-60' : 'hover:brightness-[1.04]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
        <form onSubmit={onType} className="mt-2 flex gap-2">
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Type the answer…"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
            className="h-11 min-w-0 flex-1 rounded-xl bg-white/80 px-3.5 text-[15px] ring-1 ring-ink/10 outline-none focus:ring-2 focus:ring-mint dark:bg-white/10 dark:ring-white/15"
          />
          <button
            type="submit"
            disabled={busy || !typed.trim()}
            aria-label="Check"
            className="grid h-11 w-12 place-items-center rounded-xl bg-mint text-white shadow-md shadow-mint/30 transition active:scale-95 disabled:opacity-50"
          >
            {busy ? <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : <SendHorizontal className="size-5" />}
          </button>
        </form>
        {feedback && <FeedbackLine f={feedback} />}
      </div>
    );
  else if (quiz)
    footer = feedback ? <FeedbackLine f={feedback} /> : <p className="text-center text-sm text-ink/60 dark:text-slate-400">Tap a gap to answer it.</p>;

  return (
    <SheetFrame
      a={a}
      progress={sample ? undefined : { done, total: gaps.length }}
      note={sample ? 'These are open questions — there is no single right answer.' : undefined}
      onClose={onClose}
      footer={footer}
    >
      {!quiz ? (
        <SheetStatus error={error} />
      ) : (
        quiz.items.map((line, item) => (
            <li key={item} className="glass glass-crystal-pane rounded-2xl p-3.5 text-[15px] leading-loose">
              {line.map((s, k) =>
                !isGap(s) ? (
                  <span key={k}>{s}</span>
                ) : s.answer ? (
                  <span key={k} className="rounded-md bg-mint-soft px-1 py-0.5 font-semibold text-teal-800 dark:bg-mint/20 dark:text-teal-200">
                    {s.answer}
                  </span>
                ) : sample ? (
                  <span key={k} className="answer-blank inline-block w-16 rounded-md align-middle">
                    &nbsp;
                  </span>
                ) : (
                  <button
                    key={k}
                    id={`gap-${item}-${s.b}`}
                    onClick={() => choose({ item, b: s.b })}
                    aria-label="Answer this gap"
                    className={`answer-blank inline-block h-[1.5em] w-[4.5rem] rounded-md align-middle transition ${
                      same(active, item, s.b)
                        ? 'outline-2 outline-offset-2 outline-mint'
                        : s.tries >= quiz.rewardTries
                          ? 'outline-1 outline-coral/60 outline-dashed'
                          : 'hover:brightness-95'
                    }`}
                  />
                ),
              )}
            </li>
          ))
      )}
    </SheetFrame>
  );
}

function FeedbackLine({ f }: { f: Feedback }) {
  const tone =
    f.tone === 'good'
      ? 'bg-mint-soft text-teal-800 dark:bg-mint/20 dark:text-teal-200'
      : f.tone === 'bad'
        ? 'bg-coral/12 text-coral dark:bg-coral/20 dark:text-orange-200'
        : 'bg-ink/5 text-ink/70 dark:bg-white/10 dark:text-slate-300';
  return <p className={`mt-2 animate-fade-in rounded-xl px-3 py-2 text-center text-sm font-bold ${tone}`}>{f.text}</p>;
}
