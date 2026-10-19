import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { api, errorText } from '../lib/api';
import type { Ranking as RankingData } from '../lib/apiTypes';
import { useAuthApi } from '../lib/auth';
import type { ThemeApi } from '../lib/theme';
import Glass from './Glass';
import { ErrorLine, PageShell, Spinner } from './Page';

const MEDALS = ['🥇', '🥈', '🥉'];

/** Students ordered by XP (1 XP per right answer). */
export default function Ranking({ theme }: { theme: ThemeApi }) {
  const { user } = useAuthApi();
  const [data, setData] = useState<RankingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api<RankingData>('ranking')
      .then(setData)
      .catch((e) => setError(errorText(e)));
  }, []);

  return (
    <PageShell theme={theme} kicker="Who has the most XP" title="Ranking">
      {error && <ErrorLine text={error} />}
      {!data && !error && <Spinner />}

      {data?.me && (
        <Glass bezel={24} strength={38} ice={0} edgeLight={0.16} className="glass-tone glass-thick mb-6 flex animate-rise items-center gap-4 rounded-3xl p-5">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-xl font-black text-white shadow-lg shadow-amber-500/30">
            #{data.me.rank}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold tracking-[0.18em] text-ink/55 uppercase dark:text-white/55">Your place</span>
            <span className="mt-0.5 block truncate text-lg font-bold">{data.me.username}</span>
          </span>
          <XP value={data.me.xp} />
        </Glass>
      )}

      {data && data.top.length === 0 && (
        <p className="py-10 text-center text-ink/60 dark:text-slate-400">No students yet — be the first to earn XP!</p>
      )}

      <ol className="space-y-2">
        {data?.top.map((r) => {
          const me = r.username === user.username;
          return (
            <li
              key={r.username}
              className={`glass glass-card flex items-center gap-3 rounded-2xl px-4 py-3 ${me ? 'ring-2 ring-coral/60' : ''}`}
            >
              <span className="w-9 shrink-0 text-center text-lg font-black tabular-nums text-ink/55 dark:text-slate-400">
                {MEDALS[r.rank - 1] ?? r.rank}
              </span>
              <span className={`min-w-0 flex-1 truncate font-semibold ${me ? 'text-coral' : ''}`}>
                {r.username}
                {me && <span className="ml-1.5 text-xs font-bold text-coral/80">you</span>}
              </span>
              <XP value={r.xp} />
            </li>
          );
        })}
      </ol>
    </PageShell>
  );
}

function XP({ value }: { value: number }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 font-black tabular-nums">
      <Zap className="size-4 fill-amber-400 text-amber-500" />
      {value.toLocaleString()}
      <span className="text-xs font-bold text-ink/50 dark:text-slate-400">XP</span>
    </span>
  );
}
