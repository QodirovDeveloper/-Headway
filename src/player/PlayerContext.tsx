import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { trackLabel, type Level } from '../lib/level';
import { useStored } from '../lib/storage';

export const SPEEDS = [1, 0.75, 0.9, 1.25, 1.5, 2] as const;

export interface NowPlaying {
  level: Level;
  track: string;
}

interface PlayerApi {
  now: NowPlaying | null;
  playing: boolean;
  missing: boolean;
  rate: number;
  loop: boolean;
  /** Tracks this browser has listened to, per level. */
  listenedIn: (levelId: string) => ReadonlySet<string>;
  play: (level: Level, track: string) => void;
  toggle: () => void;
  stop: () => void;
  step: (delta: 1 | -1) => void;
  skip: (seconds: number) => void;
  seek: (fraction: number) => void;
  cycleRate: () => void;
  toggleLoop: () => void;
}

interface PlayerTime {
  time: number;
  duration: number;
}

// Time updates ~4×/s, so it lives in its own context: only the player bar re-renders.
const ApiContext = createContext<PlayerApi | null>(null);
const TimeContext = createContext<PlayerTime>({ time: 0, duration: 0 });

const EMPTY: ReadonlySet<string> = new Set();

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio();
    audioRef.current.preload = 'none';
  }
  const audio = audioRef.current!;

  const [now, setNow] = useState<NowPlaying | null>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);
  const [rateIdx, setRateIdx] = useState(0);
  const [loop, setLoop] = useState(false);
  const [time, setTime] = useState<PlayerTime>({ time: 0, duration: 0 });
  const [listenedMap, setListenedMap] = useStored<Record<string, string[]>>('listened', {});

  const sets = useMemo(
    () => Object.fromEntries(Object.entries(listenedMap).map(([k, v]) => [k, new Set(v)])),
    [listenedMap],
  );
  const listenedIn = useCallback((id: string) => sets[id] ?? EMPTY, [sets]);

  const markListened = useCallback(
    (id: string, t: string) =>
      setListenedMap((m) => ((m[id] ?? []).includes(t) ? m : { ...m, [id]: [...(m[id] ?? []), t] })),
    [setListenedMap],
  );

  const play = useCallback(
    (level: Level, t: string) => {
      if (level.id !== now?.level.id || t !== now?.track) {
        audio.src = level.audioSrc(t);
        audio.playbackRate = SPEEDS[rateIdx];
        setNow({ level, track: t });
        setMissing(false);
        setTime({ time: 0, duration: 0 });
      }
      audio.play().catch(() => {});
    },
    [audio, now, rateIdx],
  );

  const toggle = useCallback(() => {
    if (!now) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }, [audio, now]);

  const stop = useCallback(() => {
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    setNow(null);
    setPlaying(false);
  }, [audio]);

  const step = useCallback(
    (delta: 1 | -1) => {
      if (!now) return;
      const { tracks } = now.level;
      const next = tracks[tracks.indexOf(now.track) + delta];
      if (next) play(now.level, next);
    },
    [now, play],
  );

  const skip = useCallback(
    (seconds: number) => {
      audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds));
    },
    [audio],
  );

  const seek = useCallback(
    (fraction: number) => {
      if (audio.duration) audio.currentTime = fraction * audio.duration;
    },
    [audio],
  );

  const cycleRate = useCallback(() => {
    setRateIdx((i) => {
      const next = (i + 1) % SPEEDS.length;
      audio.playbackRate = SPEEDS[next];
      return next;
    });
  }, [audio]);

  const toggleLoop = useCallback(() => {
    setLoop((l) => {
      audio.loop = !l;
      return !l;
    });
  }, [audio]);

  useEffect(() => {
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      setTime({ time: audio.currentTime, duration: audio.duration || 0 });
      if (now && audio.duration && audio.currentTime / audio.duration > 0.7) markListened(now.level.id, now.track);
    };
    const onError = () => {
      if (audio.getAttribute('src')) {
        setMissing(true);
        setPlaying(false);
      }
    };
    const onEnded = () => now && markListened(now.level.id, now.track);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onTime);
    audio.addEventListener('error', onError);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onTime);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audio, now, markListened]);

  // Lock-screen / headphone controls on phones.
  useEffect(() => {
    if (!('mediaSession' in navigator) || !now) return;
    const unit = now.level.sectionOfTrack(now.track);
    navigator.mediaSession.metadata = new MediaMetadata({
      title: trackLabel(now.track),
      artist: unit ? `Unit ${unit.n} · ${unit.title}` : `Headway ${now.level.name}`,
      album: `Headway ${now.level.name}`,
      artwork: [{ src: `/${now.level.id}/cover.webp`, sizes: '640x800', type: 'image/webp' }],
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => step(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => step(1));
  }, [now, step]);

  const api = useMemo<PlayerApi>(
    () => ({
      now,
      playing,
      missing,
      rate: SPEEDS[rateIdx],
      loop,
      listenedIn,
      play,
      toggle,
      stop,
      step,
      skip,
      seek,
      cycleRate,
      toggleLoop,
    }),
    [now, playing, missing, rateIdx, loop, listenedIn, play, toggle, stop, step, skip, seek, cycleRate, toggleLoop],
  );

  return (
    <ApiContext.Provider value={api}>
      <TimeContext.Provider value={time}>{children}</TimeContext.Provider>
    </ApiContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error('usePlayer must be used inside <PlayerProvider>');
  return ctx;
}

export const usePlayerTime = () => useContext(TimeContext);
