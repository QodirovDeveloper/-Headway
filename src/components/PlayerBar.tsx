import { useRef } from 'react';
import {
  Loader2,
  Pause,
  Play,
  RefreshCw,
  Repeat,
  Repeat1,
  RotateCcw,
  RotateCw,
  Send,
  TriangleAlert,
  X,
} from 'lucide-react';
import { gradientOf, trackLabel } from '../lib/level';
import { usePlayer, usePlayerTime } from '../player/PlayerContext';
import Glass from './Glass';

const fmt = (s: number) =>
  Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00';

// Compact player for a classroom screen: one row on wide screens,
// two rows (info / controls) on phones.
export default function PlayerBar() {
  const p = usePlayer();
  if (!p.now) return null;

  const { level, track } = p.now;
  const unit = level.sectionOfTrack(track) ?? level.book.units[0];
  const telegram = level.telegramUrl(track);

  const isBusy = p.status === 'loading' || p.status === 'buffering';
  const isBuffering = p.status === 'buffering';
  const hasError = p.status === 'error';

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <Glass
        bezel={18}
        strength={30}
        className="pointer-events-auto mx-auto flex max-w-3xl animate-sheet-up flex-wrap items-center gap-x-1.5 gap-y-1 rounded-[22px] px-2.5 py-2 glass-legible sm:flex-nowrap sm:gap-x-2"
      >
        {/* Track info & live state label */}
        <span
          className={`relative grid size-9 shrink-0 place-items-center rounded-xl bg-linear-to-br ${gradientOf(unit)} text-xs font-bold text-white shadow tabular-nums`}
        >
          {track.slice(1)}
        </span>
        <div className="min-w-0 flex-1 sm:w-44 sm:flex-none">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-semibold leading-tight">{trackLabel(track)}</p>
            {isBusy && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-coral/15 px-1.5 py-0.5 text-[10px] font-semibold text-coral animate-pulse">
                <Loader2 className="size-2.5 animate-spin" />
                {isBuffering ? 'Buffering…' : 'Loading…'}
              </span>
            )}
          </div>
          <p className="truncate text-[11px] text-ink/55 dark:text-slate-400">
            {level.name} · Unit {unit.n}
          </p>
        </div>

        {/* Telegram + close: top row on phones, row end on wide screens */}
        <div className="flex shrink-0 items-center sm:order-last">
          <a
            href={telegram}
            target="_blank"
            rel="noopener"
            aria-label="Open in Telegram"
            className="grid size-9 place-items-center rounded-full text-sky-500 transition hover:bg-sky-500/10"
          >
            <Send className="size-4" />
          </a>
          <button
            onClick={p.stop}
            aria-label="Close player"
            className="grid size-9 place-items-center rounded-full text-ink/50 transition hover:bg-ink/5 dark:text-slate-400 dark:hover:bg-white/10"
          >
            <X className="size-4.5" />
          </button>
        </div>

        <span className="basis-full sm:hidden" aria-hidden />

        {/* Transport */}
        <div className="flex shrink-0 items-center gap-0.5">
          <IconButton label="Back 5 seconds" onClick={() => p.skip(-5)}>
            <span className="relative grid place-items-center">
              <RotateCcw className="size-5" />
              <span className="absolute text-[7px] font-bold">5</span>
            </span>
          </IconButton>

          {/* Central Play/Pause button with YouTube-style spinner overlay */}
          <button
            onClick={hasError ? p.retry : p.toggle}
            aria-label={
              hasError
                ? 'Retry audio'
                : isBuffering
                  ? 'Buffering audio'
                  : isBusy
                    ? 'Loading audio'
                    : p.playing
                      ? 'Pause'
                      : 'Play'
            }
            className="relative grid size-10 place-items-center rounded-full bg-linear-to-br from-coral to-orange-400 text-white shadow-md shadow-coral/40 transition hover:scale-105 active:scale-95"
          >
            {hasError ? (
              <RefreshCw className="size-4.5" />
            ) : isBusy ? (
              <Loader2 className="size-5 animate-spin" />
            ) : p.playing ? (
              <Pause className="size-4.5 fill-current" />
            ) : (
              <Play className="ml-0.5 size-4.5 fill-current" />
            )}
          </button>

          <IconButton label="Forward 5 seconds" onClick={() => p.skip(+5)}>
            <span className="relative grid place-items-center">
              <RotateCw className="size-5" />
              <span className="absolute text-[7px] font-bold">5</span>
            </span>
          </IconButton>
        </div>

        {/* Error notification or Seek bar */}
        {hasError ? (
          <div className="flex min-w-0 flex-1 items-center justify-between gap-1.5 rounded-xl bg-coral-soft px-2.5 py-1.5 text-xs font-medium text-coral dark:bg-coral/15">
            <div className="flex min-w-0 items-center gap-1.5 truncate">
              <TriangleAlert className="size-3.5 shrink-0" />
              <span className="truncate">{p.errorMessage ?? 'Audio loading error.'}</span>
            </div>
            <button
              onClick={p.retry}
              className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-coral px-2 py-0.5 text-[11px] font-bold text-white transition hover:brightness-105 active:scale-95"
            >
              <RefreshCw className="size-3" /> Retry
            </button>
          </div>
        ) : (
          <SeekBar isBuffering={isBuffering} />
        )}

        {/* Speed & Loop controls */}
        <div className="flex shrink-0 items-center">
          <IconButton label="Playback speed" onClick={p.cycleRate} active={p.rate !== 1}>
            <span className="text-xs font-bold tabular-nums">{p.rate}×</span>
          </IconButton>
          <IconButton label={p.loop ? 'Repeat off' : 'Repeat'} onClick={p.toggleLoop} active={p.loop}>
            {p.loop ? <Repeat1 className="size-4.5" /> : <Repeat className="size-4.5" />}
          </IconButton>
        </div>
      </Glass>
    </div>
  );
}

function IconButton({
  label,
  onClick,
  active,
  children,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`grid size-9 place-items-center rounded-full transition active:scale-90 ${
        active ? 'bg-coral/10 text-coral' : 'text-ink/70 hover:bg-ink/5 dark:text-slate-300 dark:hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

function SeekBar({ isBuffering }: { isBuffering: boolean }) {
  const { seek } = usePlayer();
  const { time, duration, buffered } = usePlayerTime();
  const barRef = useRef<HTMLDivElement>(null);
  const playPct = duration ? Math.min(100, Math.max(0, (time / duration) * 100)) : 0;
  const bufferPct = Math.min(100, Math.max(playPct, buffered));

  const seekTo = (clientX: number) => {
    const r = barRef.current?.getBoundingClientRect();
    if (!r) return;
    seek(Math.min(Math.max((clientX - r.left) / r.width, 0), 1));
  };

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 px-1 text-[11px] text-ink/50 tabular-nums dark:text-slate-400">
      <span className="w-8 shrink-0 text-right">{fmt(time)}</span>
      <div
        ref={barRef}
        role="slider"
        aria-label="Seek timeline"
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(time)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (!duration) return;
          if (e.key === 'ArrowRight') seek(Math.min(1, (time + 5) / duration));
          if (e.key === 'ArrowLeft') seek(Math.max(0, (time - 5) / duration));
        }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          seekTo(e.clientX);
        }}
        onPointerMove={(e) => e.buttons && seekTo(e.clientX)}
        className="group relative flex h-5 min-w-0 flex-1 cursor-pointer touch-none items-center"
      >
        {/* Track background */}
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
          {/* YouTube-style buffered progress bar */}
          <div
            className="absolute top-0 bottom-0 left-0 rounded-full bg-ink/20 dark:bg-white/20 transition-all duration-300"
            style={{ width: `${bufferPct}%` }}
          />
          {/* Played progress bar */}
          <div
            className="absolute top-0 bottom-0 left-0 rounded-full bg-linear-to-r from-coral to-orange-400 transition-all"
            style={{ width: `${playPct}%` }}
          />
        </div>

        {/* Thumb with subtle pulse when buffering */}
        <div
          className={`absolute size-3 -translate-x-1/2 rounded-full bg-white shadow ring-2 ring-coral transition-transform group-active:scale-125 ${
            isBuffering ? 'animate-pulse ring-4 ring-coral/40' : ''
          }`}
          style={{ left: `${playPct}%` }}
        />
      </div>
      <span className="w-8 shrink-0">{fmt(duration)}</span>
    </div>
  );
}
