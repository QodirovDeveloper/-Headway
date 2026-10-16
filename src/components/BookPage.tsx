import { memo, useState } from 'react';
import { Check } from 'lucide-react';
import { trackLabel, useLevel } from '../lib/level';

interface Props {
  p: number;
  activeTrack: string | null;
  listened: ReadonlySet<string>;
  onTrack: (track: string) => void;
  onAnswer: (index: number) => void;
}

function BookPage({ p, activeTrack, listened, onTrack, onAnswer }: Props) {
  const { answersOn, hotspotsOn, pageRatio, pageSrc, printed } = useLevel();
  const [loaded, setLoaded] = useState(false);

  return (
    <section id={`p${p}`} data-page={p} className="scroll-mt-36">
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-ink/10 ring-1 ring-black/5 sm:rounded-3xl dark:shadow-black/40 dark:ring-white/10"
        style={{ aspectRatio: `1 / ${pageRatio(p)}` }}
      >
        {!loaded && <div className="absolute inset-0 animate-pulse bg-paper-2 dark:bg-night-2" />}
        <img
          src={pageSrc(p)}
          alt={`Page ${printed(p)}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 size-full transition-opacity duration-500 dark:brightness-[0.93] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {hotspotsOn(p).map(([t, x, y, w, h]) => {
          const active = t === activeTrack;
          const heard = listened.has(t);
          const state = active
            ? 'bg-coral/35 outline-coral shadow-[0_0_0_6px_rgb(239_90_60/0.25)]'
            : heard
              ? 'bg-mint/10 outline-mint/80 hover:bg-mint/25'
              : 'bg-coral/10 outline-coral/90 animate-pulse-ring hover:bg-coral/25';
          return (
            <button
              key={`${t}@${x},${y}`}
              data-track={t}
              aria-label={`Play ${trackLabel(t)}`}
              onClick={() => onTrack(t)}
              className={`absolute rounded-md outline-2 outline-solid transition after:absolute after:-inset-2.5 after:content-[''] ${state}`}
              style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }}
            />
          );
        })}

        {answersOn(p).map(({ a, i }) => (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            aria-label={`Answers: ${a.ex} — ${a.title}`}
            className="absolute inline-flex -translate-x-2/3 -translate-y-1/2 items-center gap-0.5 rounded-full bg-mint px-1 text-[10px] leading-none font-bold text-white shadow-md ring-2 ring-white transition hover:scale-110 active:scale-95 after:absolute after:-inset-2 after:content-[''] opacity-50 dark:ring-night"
            style={{ left: `max(2px, calc(${a.x}% - 12px))`, top: `${a.y}%` }}
          >
            {/* {/^\d/.test(a.ex) && a.ex} */}
            <Check className="size-3" strokeWidth={3.5} />
          </button>
        ))}

        <span className="glass glass-ink absolute right-2 bottom-2 rounded-full px-2 py-0.5 text-[11px] font-medium tabular-nums">
          {printed(p)}
        </span>
      </div>
    </section>
  );
}

export default memo(BookPage);
