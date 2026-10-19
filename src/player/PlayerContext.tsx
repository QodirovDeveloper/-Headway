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

export type AudioState = 'idle' | 'loading' | 'ready' | 'playing' | 'buffering' | 'paused' | 'error';

export interface NowPlaying {
  level: Level;
  track: string;
}

interface PlayerApi {
  now: NowPlaying | null;
  playing: boolean;
  status: AudioState;
  errorMessage: string | null;
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
  retry: () => void;
  cycleRate: () => void;
  toggleLoop: () => void;
}

interface PlayerTime {
  time: number;
  duration: number;
  buffered: number; // percentage 0-100 buffered ahead of current position
}

// Time updates ~4×/s, so it lives in its own context: only the player bar re-renders.
const ApiContext = createContext<PlayerApi | null>(null);
const TimeContext = createContext<PlayerTime>({ time: 0, duration: 0, buffered: 0 });

const EMPTY: ReadonlySet<string> = new Set();

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio();
    audioRef.current.preload = 'metadata';
  }
  const audio = audioRef.current!;

  const [now, setNow] = useState<NowPlaying | null>(null);
  const [status, setStatus] = useState<AudioState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [rateIdx, setRateIdx] = useState(0);
  const [loop, setLoop] = useState(false);
  const [time, setTime] = useState<PlayerTime>({ time: 0, duration: 0, buffered: 0 });
  const [listenedMap, setListenedMap] = useStored<Record<string, string[]>>('listened', {});

  // Generation counter to discard stale async play/error events from superseded tracks
  const trackGen = useRef(0);
  const isSeeking = useRef(false);

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

  const calculateBuffered = useCallback((currTime: number, dur: number): number => {
    if (!dur || !audio.buffered || audio.buffered.length === 0) return 0;
    try {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (audio.buffered.start(i) <= currTime && currTime <= audio.buffered.end(i)) {
          return Math.min(100, Math.max(0, (audio.buffered.end(i) / dur) * 100));
        }
      }
      // If current time isn't inside any range yet, show the end of the last loaded range
      const last = audio.buffered.length - 1;
      return Math.min(100, Math.max(0, (audio.buffered.end(last) / dur) * 100));
    } catch {
      return 0;
    }
  }, [audio]);

  const play = useCallback(
    (level: Level, t: string) => {
      const gen = ++trackGen.current;
      isSeeking.current = false;
      setErrorMessage(null);

      if (level.id !== now?.level.id || t !== now?.track) {
        audio.pause();
        audio.src = level.audioSrc(t);
        audio.playbackRate = SPEEDS[rateIdx];
        setNow({ level, track: t });
        setStatus('loading');
        setTime({ time: 0, duration: 0, buffered: 0 });
      } else if (audio.paused) {
        setStatus('loading');
      }

      audio.play().catch((err: unknown) => {
        if (gen !== trackGen.current) return; // Stale request, ignore
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setStatus('error');
        setErrorMessage('Playback could not start. Please retry.');
      });
    },
    [audio, now, rateIdx],
  );

  const toggle = useCallback(() => {
    if (!now) return;
    if (audio.paused) {
      const gen = trackGen.current;
      setErrorMessage(null);
      setStatus('loading');
      audio.play().catch((err: unknown) => {
        if (gen !== trackGen.current) return;
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setStatus('error');
        setErrorMessage('Playback could not start. Please retry.');
      });
    } else {
      audio.pause();
      setStatus('paused');
    }
  }, [audio, now]);

  const stop = useCallback(() => {
    trackGen.current++;
    isSeeking.current = false;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    setNow(null);
    setStatus('idle');
    setErrorMessage(null);
    setTime({ time: 0, duration: 0, buffered: 0 });
  }, [audio]);

  const retry = useCallback(() => {
    if (!now) return;
    const { level, track } = now;
    const gen = ++trackGen.current;
    isSeeking.current = false;
    setErrorMessage(null);
    setStatus('loading');
    audio.pause();
    audio.src = level.audioSrc(track);
    audio.playbackRate = SPEEDS[rateIdx];
    audio.play().catch((err: unknown) => {
      if (gen !== trackGen.current) return;
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setStatus('error');
      setErrorMessage('Playback error. Please check your connection.');
    });
  }, [audio, now, rateIdx]);

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
      if (!now) return;
      isSeeking.current = true;
      setStatus('buffering');
      audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds));
    },
    [audio, now],
  );

  const seek = useCallback(
    (fraction: number) => {
      if (!now || !audio.duration) return;
      isSeeking.current = true;
      setStatus('buffering');
      audio.currentTime = Math.max(0, Math.min(audio.duration, fraction * audio.duration));
    },
    [audio, now],
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
    const onPlay = () => {
      if (isSeeking.current) setStatus('buffering');
      else setStatus('playing');
    };

    const onPlaying = () => {
      isSeeking.current = false;
      setStatus('playing');
      setErrorMessage(null);
    };

    const onPause = () => {
      if (!isSeeking.current && audio.currentTime < (audio.duration || 0)) {
        setStatus('paused');
      }
    };

    const onWaiting = () => {
      if (!audio.paused) setStatus('buffering');
    };

    const onCanPlay = () => {
      if (isSeeking.current) {
        isSeeking.current = false;
        if (!audio.paused) setStatus('playing');
        else setStatus('ready');
      } else if (audio.paused && status === 'loading') {
        setStatus('ready');
      }
    };

    const onSeeked = () => {
      isSeeking.current = false;
      if (!audio.paused) setStatus('playing');
      else setStatus('ready');
    };

    const onTimeUpdate = () => {
      const cur = audio.currentTime;
      const dur = audio.duration || 0;
      setTime({
        time: cur,
        duration: dur,
        buffered: calculateBuffered(cur, dur),
      });
      if (now && dur > 0 && cur / dur > 0.7) {
        markListened(now.level.id, now.track);
      }
    };

    const onProgress = () => {
      const cur = audio.currentTime;
      const dur = audio.duration || 0;
      setTime((prev) => ({
        ...prev,
        buffered: calculateBuffered(cur, dur),
      }));
    };

    const onError = () => {
      if (!audio.getAttribute('src')) return;
      isSeeking.current = false;
      setStatus('error');
      const err = audio.error;
      if (err?.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED || err?.code === MediaError.MEDIA_ERR_NETWORK) {
        setErrorMessage('Audio unavailable or network error.');
      } else {
        setErrorMessage('Failed to load audio stream.');
      }
    };

    const onEnded = () => {
      setStatus('paused');
      if (now) markListened(now.level.id, now.track);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('playing', onPlaying);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('seeked', onSeeked);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onTimeUpdate);
    audio.addEventListener('progress', onProgress);
    audio.addEventListener('error', onError);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('playing', onPlaying);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('seeked', onSeeked);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onTimeUpdate);
      audio.removeEventListener('progress', onProgress);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audio, now, status, markListened, calculateBuffered]);

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
      playing: status === 'playing' || status === 'buffering',
      status,
      errorMessage,
      rate: SPEEDS[rateIdx],
      loop,
      listenedIn,
      play,
      toggle,
      stop,
      step,
      skip,
      seek,
      retry,
      cycleRate,
      toggleLoop,
    }),
    [now, status, errorMessage, rateIdx, loop, listenedIn, play, toggle, stop, step, skip, seek, retry, cycleRate, toggleLoop],
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
