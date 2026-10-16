import { Moon, Sun } from 'lucide-react';
import type { ThemeApi } from '../lib/theme';
import Glass from './Glass';

export function ThemeButton({ theme, small }: { theme: ThemeApi; small?: boolean }) {
  const dark = theme.mode === 'dark';
  const icon = small ? 'size-4' : 'size-5';
  return (
    <button
      onClick={theme.toggle}
      aria-label={dark ? 'Light mode' : 'Dark mode'}
      className="shrink-0 rounded-full transition hover:scale-105 active:scale-95"
    >
      <Glass
        bezel={small ? 10 : 15}
        strength={small ? 12 : 22}
        ice={0}
        edgeLight={small ? 0 : 0.2}
        className={`grid ${small ? 'size-9' : 'glass-thick size-11'} place-items-center rounded-full text-ink dark:text-slate-100`}
      >
        {dark ? <Sun className={icon} /> : <Moon className={icon} />}
      </Glass>
    </button>
  );
}

export function Logo() {
  return (
    <span className="grid size-10 place-items-center rounded-2xl bg-linear-to-br from-coral to-orange-400 font-display text-xl font-bold text-white shadow-lg shadow-coral/30">
      H
    </span>
  );
}
