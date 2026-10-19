import { ArrowRight, CircleCheck, Headphones, Layers, Lock } from 'lucide-react';
import { LEVELS, findLevel } from '../data/levels';
import type { LevelMeta } from '../data/types';
import { useAuthApi } from '../lib/auth';
import { coverSrc } from '../lib/level';
import { levelHref } from '../lib/route';
import { useStored } from '../lib/storage';
import type { ThemeApi } from '../lib/theme';
import { usePlayer } from '../player/PlayerContext';
import Glass from './Glass';
import GlassText from './GlassText';
import { LogOutButton, WalletBar } from './Page';
import { Logo, ThemeButton } from './TopBar';

/** Start page: all five Student's Books. */
export default function Hub({ theme }: { theme: ThemeApi }) {
  const [lastLevel] = useStored<string | null>('lastLevel', null);
  const { user } = useAuthApi();
  const last = lastLevel ? findLevel(lastLevel) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-32 sm:px-6">
      <nav className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold tracking-tight">Headway</span>
        </div>
        <div className="flex items-center gap-2">
          <LogOutButton />
          <ThemeButton theme={theme} />
        </div>
      </nav>
      <div className="mt-2">
        <WalletBar />
      </div>

      <header className="animate-rise pt-10 pb-10 sm:pt-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">4th edition · Student's Books</p>
        <GlassText className="mt-3 text-[3.4rem] leading-[0.95] font-black tracking-tight sm:text-8xl">
          Headway
          <br />
          <span className="font-extrabold text-ink/80 dark:text-slate-300">from A1 to B2</span>
        </GlassText>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65 dark:text-slate-400">
          {user.role !== 'student'
            ? 'Pick a level and flip through the book. Tap a track label to play the audio, and tap ✓ to see the answers.'
            : 'Pick your level and flip through the book. Tap ✓ to do an exercise — every right answer gives you 1 XP and 1 SILVER.'}
        </p>
      </header>

      {last?.load && (
        <Glass
          as="a"
          href={levelHref(last.id)}
          bezel={28}
          strength={44}
          edgeLight={0.16}
          className="glass-tone glass-thick group animate-rise mb-8 flex items-center gap-4 rounded-3xl p-4 transition hover:-translate-y-0.5 sm:p-5"
        >
          <img src={coverSrc(last.id)} alt="" className="h-16 w-12 rounded-md object-cover shadow-md" />
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold tracking-[0.18em] text-ink/55 uppercase dark:text-white/55">Continue</span>
            <span className="mt-0.5 block truncate text-lg font-semibold">Headway {last.name}</span>
          </span>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink/5 transition group-hover:translate-x-1 group-hover:bg-coral group-hover:text-white dark:bg-white/10">
            <ArrowRight className="size-5" />
          </span>
        </Glass>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {LEVELS.map((l, i) => (
          <LevelCard key={l.id} level={l} index={i} />
        ))}
      </div>

      <footer className="mt-14 text-center text-xs leading-relaxed text-ink/45 dark:text-slate-500">
        Books and audio © Oxford University Press. For study use only.
      </footer>
    </div>
  );
}

function LevelCard({ level, index }: { level: LevelMeta; index: number }) {
  const listened = usePlayer().listenedIn(level.id).size;
  const ready = Boolean(level.load);
  const s = level.stats;

  const body = (
    <>
      <Glass
        as="span"
        bezel={16}
        strength={26}
        ice={0}
        edgeLight={0.2}
        className="glass-thick block rounded-[22px] p-1.5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl"
      >
        <span className="relative block overflow-hidden rounded-2xl">
          <img
            src={coverSrc(level.id)}
            alt={`Headway ${level.name} cover`}
            loading="lazy"
            className={`aspect-[4/5] w-full object-cover ${ready ? '' : 'grayscale'}`}
          />
          <span
            className={`absolute top-2 left-2 rounded-full bg-linear-to-r ${level.gradient} px-2 py-0.5 text-[11px] font-bold tracking-wider text-white shadow`}
          >
            {level.cefr}
          </span>
          {!ready && (
            <span className="absolute inset-0 grid place-items-center bg-ink/40 text-white">
              <span className="glass glass-ink inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold">
                <Lock className="size-3.5" /> Coming soon
              </span>
            </span>
          )}
        </span>
      </Glass>
      <span className="mt-3 block px-1">
        <span className="block leading-tight font-semibold">{level.name}</span>
        {s && (
          <span className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink/55 tabular-nums dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Layers className="size-3.5" /> {s.units}
            </span>
            <span className="inline-flex items-center gap-1">
              <Headphones className="size-3.5" /> {listened > 0 ? `${listened}/` : ''}
              {s.tracks}
            </span>
            {s.answers > 0 && (
              <span className="inline-flex items-center gap-1">
                <CircleCheck className="size-3.5" /> {s.answers}
              </span>
            )}
          </span>
        )}
      </span>
    </>
  );

  const cls = 'group animate-rise block';
  const style = { animationDelay: `${index * 60}ms` };
  return ready ? (
    <a href={levelHref(level.id)} className={cls} style={style}>
      {body}
    </a>
  ) : (
    <div className={`${cls} cursor-not-allowed opacity-80`} style={style}>
      {body}
    </div>
  );
}
