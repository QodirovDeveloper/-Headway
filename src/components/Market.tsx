import { useCallback, useEffect, useState } from 'react';
import { Coins, Lock, PackageCheck } from 'lucide-react';
import { api, errorText } from '../lib/api';
import { MARKET_OPEN, type MarketItem, type Order } from '../lib/apiTypes';
import { useAuthApi } from '../lib/auth';
import type { ThemeApi } from '../lib/theme';
import Glass from './Glass';
import { ErrorLine, PageShell, shortDate, Spinner, StatusChip } from './Page';

type Note = { id: number; good: boolean; text: string };

/** Prizes students buy with SILVER. The teacher hands them over and marks the order in Admin. */
export default function Market({ theme }: { theme: ThemeApi }) {
  const auth = useAuthApi();
  const student = auth.user.role === 'student';
  const [items, setItems] = useState<MarketItem[] | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [asking, setAsking] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<Note | null>(null);

  const load = useCallback(() => {
    api<{ items: MarketItem[] }>('market')
      .then((r) => setItems(r.items))
      .catch((e) => setError(errorText(e)));
    if (student)
      api<{ orders: Order[] }>('orders')
        .then((r) => setOrders(r.orders))
        .catch(() => undefined);
  }, [student]);
  useEffect(load, [load]);

  async function buy(item: MarketItem) {
    setBusy(true);
    try {
      const r = await api<{ silver: number }>('market/buy', { id: item.id });
      auth.setWallet({ silver: r.silver });
      setNote({ id: item.id, good: true, text: 'Bought! Your teacher will give it to you.' });
      load();
    } catch (e) {
      setNote({ id: item.id, good: false, text: errorText(e) });
    } finally {
      setBusy(false);
      setAsking(null);
    }
  }

  if (student && !MARKET_OPEN) return <ComingSoon theme={theme} silver={auth.user.silver} />;

  return (
    <PageShell theme={theme} kicker="Spend your SILVER" title="Market">
      <p className="-mt-2 mb-6 max-w-lg text-[15px] leading-relaxed text-ink/65 dark:text-slate-400">
        {student
          ? 'Every right answer earns 1 SILVER. Save up and pick a prize — your teacher hands it over.'
          : auth.user.role === 'teacher'
            ? `Prizes students can buy with SILVER.${MARKET_OPEN ? '' : ' The market is closed for now: students see “Coming soon”.'}`
            : MARKET_OPEN
            ? 'This is what students see. Change prizes, prices and stock in Admin → Market.'
            : 'The market is closed: students see “Coming soon”. You can get the prizes ready in Admin → Market.'}
      </p>

      {error && <ErrorLine text={error} />}
      {!items && !error && <Spinner />}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items?.map((item, k) => {
          const soldOut = item.stock !== null && item.stock < 1;
          const short = item.price - auth.user.silver;
          return (
            <Glass
              key={item.id}
              bezel={22}
              strength={34}
              ice={0}
              edgeLight={0.14}
              className={`glass-tone glass-thick flex animate-rise flex-col rounded-3xl p-4 ${item.active ? '' : 'opacity-60'}`}
              style={{ animationDelay: `${k * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="glass glass-crystal-pane grid size-20 shrink-0 place-items-center rounded-2xl text-5xl">{item.emoji}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg leading-tight font-bold">{item.name}</h2>
                  {item.description && <p className="mt-1 text-sm leading-snug text-ink/60 dark:text-slate-400">{item.description}</p>}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-lg font-black tabular-nums">
                  <Coins className="size-5 text-slate-400" />
                  {item.price.toLocaleString()}
                  <span className="text-xs font-bold tracking-wider text-ink/50 dark:text-slate-400">SILVER</span>
                </span>
                <span className="text-xs font-semibold text-ink/55 dark:text-slate-400">
                  {!item.active ? 'Hidden' : soldOut ? 'Sold out' : item.stock !== null ? `${item.stock} left` : ''}
                </span>
              </div>

              {student && (
                <>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-slate-300 to-slate-500 transition-all duration-500 dark:from-slate-400 dark:to-slate-200"
                      style={{ width: `${Math.min(1, auth.user.silver / item.price) * 100}%` }}
                    />
                  </div>
                  <div className="mt-3">
                    {asking === item.id ? (
                      <div className="flex gap-2">
                        <button
                          disabled={busy}
                          onClick={() => void buy(item)}
                          className="h-11 flex-1 rounded-xl bg-mint font-bold text-white shadow-md shadow-mint/30 transition active:scale-[0.98] disabled:opacity-60"
                        >
                          {busy ? 'Buying…' : `Yes, pay ${item.price.toLocaleString()}`}
                        </button>
                        <button
                          disabled={busy}
                          onClick={() => setAsking(null)}
                          className="h-11 rounded-xl bg-ink/6 px-4 font-semibold transition hover:bg-ink/10 dark:bg-white/10"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        disabled={soldOut || short > 0}
                        onClick={() => {
                          setNote(null);
                          setAsking(item.id);
                        }}
                        className="h-11 w-full rounded-xl bg-linear-to-r from-coral to-orange-400 font-bold text-white shadow-md shadow-coral/25 transition hover:brightness-105 active:scale-[0.98] disabled:from-ink/15 disabled:to-ink/15 disabled:text-ink/50 disabled:shadow-none dark:disabled:from-white/10 dark:disabled:to-white/10 dark:disabled:text-slate-400"
                      >
                        {soldOut ? 'Sold out' : short > 0 ? `${short.toLocaleString()} more SILVER needed` : 'Buy'}
                      </button>
                    )}
                    {note?.id === item.id && (
                      <p className={`mt-2 text-center text-sm font-semibold ${note.good ? 'text-teal-700 dark:text-teal-300' : 'text-coral'}`}>{note.text}</p>
                    )}
                  </div>
                </>
              )}
            </Glass>
          );
        })}
      </div>

      {student && orders.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <PackageCheck className="size-5 text-mint" /> My prizes
          </h2>
          <ul className="space-y-2">
            {orders.map((o) => (
              <li key={o.id} className="glass glass-card flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="text-2xl">{o.emoji}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold">{o.item}</span>
                  <span className="text-xs text-ink/55 tabular-nums dark:text-slate-400">
                    {o.price.toLocaleString()} SILVER · {shortDate(o.createdAt)}
                  </span>
                </span>
                <StatusChip status={o.status} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageShell>
  );
}

/** What students see while the market is closed. */
function ComingSoon({ theme, silver }: { theme: ThemeApi; silver: number }) {
  return (
    <PageShell theme={theme} kicker="Spend your SILVER" title="Market">
      <Glass bezel={28} strength={44} ice={0} edgeLight={0.16} className="glass-tone glass-thick mx-auto max-w-md animate-rise rounded-3xl p-8 text-center">
        <span className="glass glass-ink mx-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white">
          <Lock className="size-4" /> Coming soon
        </span>
        <p className="mt-5 text-lg leading-snug font-bold">Prizes are on their way!</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/65 dark:text-slate-400">
          Keep answering exercises — every right answer gives you 1 SILVER to spend when the market opens.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-2xl font-black tabular-nums">
          <Coins className="size-6 text-slate-400" />
          {silver.toLocaleString()}
          <span className="text-sm font-bold tracking-wider text-ink/50 dark:text-slate-400">SILVER saved</span>
        </p>
      </Glass>
    </PageShell>
  );
}
