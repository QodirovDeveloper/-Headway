import { useEffect } from 'react';
import { useStored } from './storage';

export type ThemeMode = 'light' | 'dark';

export interface ThemeApi {
  mode: ThemeMode;
  toggle: () => void;
}

const systemMode = (): ThemeMode =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export function useTheme(): ThemeApi {
  const [mode, setMode] = useStored<ThemeMode>('theme', systemMode());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#0d111c' : '#f7f2e9');
  }, [mode]);

  return { mode, toggle: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')) };
}
