import type { ReactNode } from 'react';
import { ArrowLeft, Coins, Lock, LogOut, ShieldCheck, ShoppingBag, Trophy, Users, Zap } from 'lucide-react';
import { MARKET_OPEN, type OrderStatus } from '../lib/apiTypes';
import { useAuthApi } from '../lib/auth';
import { hubHref } from '../lib/route';
import type { ThemeApi } from '../lib/theme';
import { usePlayer } from '../player/PlayerContext';
import Glass from './Glass';
import GlassText from './GlassText';
import { ThemeButton } from './TopBar';

export function LogOutButton() {
  const auth = useAuthApi();
  const player = usePlayer();
  return (
    <button
      onClick={() => {
        player.stop();
        location.hash = hubHref;
        void auth.logOut();
      }}
      className="rounded-full transition hover:-translate-y-px active:scale-95"
    >
      <Glass as="span" bezel={14} strength={20} ice={0} edgeLight={0.2} className="glass-thick inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold">
        <LogOut className="size-4" /> Log out
      </Glass>
    </button>
  );
}

function Chip({ href, children }: { href?: string; children: ReactNode }) {
  return (
    <Glass
      as={href ? 'a' : 'span'}
      href={href}
      bezel={12}
      strength={16}
      ice={0}
      className="glass-tone inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-sm font-semibold transition hover:-translate-y-px"
    >
      {children}
    </Glass>
  );
}

/** XP and SILVER for students, plus the Ranking / Market (and Admin) links. */
export function WalletBar() {
  const { user } = useAuthApi();
  const student = user.role === 'student';
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-1.5 sm:mx-0 sm:px-0">
      {student && (
        <>
          <Chip>
            <Zap className="size-4 fill-amber-400 text-amber-500" />
            <span className="tabular-nums">{user.xp.toLocaleString()}</span> XP
          </Chip>
          <Chip>
            <Coins className="size-4 text-slate-400" />
            <span className="tabular-nums">{user.silver.toLocaleString()}</span> SILVER
          </Chip>
        </>
      )}
      {user.role === 'admin' && (
        <Chip href="#/admin">
          <ShieldCheck className="size-4 text-coral" /> Admin
        </Chip>
      )}
      {user.role === 'teacher' && (
        <Chip href="#/admin">
          <Users className="size-4 text-coral" /> Students
        </Chip>
      )}
      <Chip href="#/ranking">
        <Trophy className="size-4 text-amber-500" /> Ranking
      </Chip>
      <Chip href="#/market">
        <ShoppingBag className="size-4 text-mint" /> Market
        {!MARKET_OPEN && <Lock className="size-3.5 opacity-50" aria-label="coming soon" />}
      </Chip>
    </div>
  );
}

/** Frame for the Market, Ranking and Admin pages. */
export function PageShell({ theme, kicker, title, children }: { theme: ThemeApi; kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-32 sm:px-6">
      <nav className="flex items-center justify-between gap-3 py-2">
        <a href={hubHref} className="rounded-full transition hover:-translate-y-px active:scale-95">
          <Glass as="span" bezel={14} strength={20} ice={0} edgeLight={0.2} className="glass-thick inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold">
            <ArrowLeft className="size-4" /> All levels
          </Glass>
        </a>
        <div className="flex items-center gap-2">
          <LogOutButton />
          <ThemeButton theme={theme} />
        </div>
      </nav>
      <div className="mt-2">
        <WalletBar />
      </div>
      <header className="animate-rise pt-8 pb-7">
        <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">{kicker}</p>
        <GlassText className="mt-2 text-5xl leading-none font-black tracking-tight sm:text-6xl">
          {title}
        </GlassText>
      </header>
      {children}
    </div>
  );
}

/** "16 Oct" from the server's UTC time ("2026-10-16 18:04:11"). */
export function shortDate(utc: string) {
  const d = new Date(`${utc.replace(' ', 'T')}Z`);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

const STATUS: Record<OrderStatus, [label: string, cls: string]> = {
  pending: ['Waiting', 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-200'],
  given: ['Given', 'bg-mint-soft text-teal-800 dark:bg-mint/20 dark:text-teal-200'],
  cancelled: ['Cancelled · refunded', 'bg-ink/8 text-ink/60 dark:bg-white/10 dark:text-slate-400'],
};

export function StatusChip({ status }: { status: OrderStatus }) {
  const [label, cls] = STATUS[status];
  return <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${cls}`}>{label}</span>;
}

export function Spinner() {
  return (
    <div className="grid place-items-center py-16">
      <span className="size-9 animate-spin rounded-full border-4 border-coral/20 border-t-coral" />
    </div>
  );
}

export function ErrorLine({ text }: { text: string }) {
  return <p className="rounded-2xl bg-coral/12 px-4 py-3 text-sm font-medium text-coral dark:bg-coral/20 dark:text-orange-200">{text}</p>;
}
