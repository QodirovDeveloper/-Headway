import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { Check, Coins, GraduationCap, KeyRound, Package, Plus, Save, Trash2, UserPlus, Users, X, Zap } from 'lucide-react';
import { api, errorText } from '../lib/api';
import type { MarketItem, Order, StudentRow, TeacherRow } from '../lib/apiTypes';
import { useAuthApi } from '../lib/auth';
import type { ThemeApi } from '../lib/theme';
import { ErrorLine, PageShell, shortDate, Spinner, StatusChip } from './Page';

type Tab = 'students' | 'teachers' | 'market' | 'orders';
const TABS: [Tab, string, typeof Users][] = [
  ['students', 'Students', Users],
  ['teachers', 'Teachers', GraduationCap],
  ['market', 'Market', Coins],
  ['orders', 'Orders', Package],
];

const inputCls =
  'h-10 w-full min-w-0 rounded-xl bg-white/80 px-3 text-[15px] text-ink ring-1 ring-ink/10 outline-none focus:ring-2 focus:ring-coral dark:bg-white/10 dark:text-white dark:ring-white/15';

/**
 * The admin's panel: students, teachers, the market's prizes and prize orders.
 * A teacher sees only the students and their progress.
 */
export default function Admin({ theme }: { theme: ThemeApi }) {
  const admin = useAuthApi().user.role === 'admin';
  const [tab, setTab] = useState<Tab>('students');
  if (!admin)
    return (
      <PageShell theme={theme} kicker="Teacher" title="Students">
        <Students canReset={false} />
      </PageShell>
    );
  return (
    <PageShell theme={theme} kicker="Admin" title="Admin">
      <div className="glass glass-card no-scrollbar mb-6 inline-flex max-w-full overflow-x-auto rounded-2xl p-1">
        {TABS.map(([id, label, Icon]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl px-4 text-sm font-semibold transition ${
              tab === id ? 'bg-ink text-white shadow dark:bg-white dark:text-ink' : 'text-ink/65 hover:text-ink dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Icon className="size-4" /> {label}
          </button>
        ))}
      </div>
      {tab === 'students' && <Students canReset />}
      {tab === 'teachers' && <Teachers />}
      {tab === 'market' && <Prizes />}
      {tab === 'orders' && <Orders />}
    </PageShell>
  );
}

// ---- students ----

function Students({ canReset }: { canReset: boolean }) {
  const [rows, setRows] = useState<StudentRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    api<{ students: StudentRow[] }>('admin/students')
      .then((r) => setRows(r.students))
      .catch((e) => setError(errorText(e)));
  }, []);

  if (error) return <ErrorLine text={error} />;
  if (!rows) return <Spinner />;
  if (rows.length === 0) return <p className="py-10 text-center text-ink/60 dark:text-slate-400">No students yet. They sign up on the Log In page.</p>;
  return (
    <>
      <p className="mb-3 text-sm text-ink/60 dark:text-slate-400">
        {rows.length} {rows.length === 1 ? 'student' : 'students'} · sorted by XP
      </p>
      <ul className="space-y-2">
        {rows.map((s) => (
          <StudentCard key={s.id} s={s} canReset={canReset} />
        ))}
      </ul>
    </>
  );
}

function StudentCard({ s, canReset }: { s: StudentRow; canReset: boolean }) {
  return (
    <li className="glass glass-card rounded-2xl px-4 py-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="min-w-0 flex-1 truncate font-semibold">{s.username}</span>
        <span className="inline-flex items-center gap-1 text-sm font-bold tabular-nums">
          <Zap className="size-3.5 fill-amber-400 text-amber-500" /> {s.xp.toLocaleString()} XP
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-bold tabular-nums">
          <Coins className="size-3.5 text-slate-400" /> {s.silver.toLocaleString()}
        </span>
        <span className="text-xs text-ink/55 tabular-nums dark:text-slate-400">
          {s.solved.toLocaleString()} solved · joined {shortDate(s.createdAt)}
        </span>
        {canReset && <NewPassword path={`admin/students/${s.id}/password`} who="student" />}
      </div>
    </li>
  );
}

/** "New password" button that opens a small form (students and teachers). */
function NewPassword({ path, who }: { path: string; who: string }) {
  const [editing, setEditing] = useState(false);
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get('password') ?? '');
    try {
      await api(path, { password });
      setEditing(false);
      setMsg({ good: true, text: `New password saved. Tell it to the ${who}.` });
    } catch (err) {
      setMsg({ good: false, text: errorText(err) });
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setEditing((v) => !v);
          setMsg(null);
        }}
        className="inline-flex h-8 items-center gap-1 rounded-lg bg-ink/6 px-2.5 text-xs font-semibold transition hover:bg-ink/10 dark:bg-white/10 dark:hover:bg-white/15"
      >
        <KeyRound className="size-3.5" /> New password
      </button>
      {editing && (
        <form onSubmit={save} className="flex w-full gap-2">
          <input name="password" type="text" autoComplete="off" placeholder="At least 6 characters" className={inputCls} autoFocus />
          <button className="h-10 shrink-0 rounded-xl bg-coral px-4 text-sm font-bold text-white">Save</button>
        </form>
      )}
      {msg && <p className={`w-full text-sm font-medium ${msg.good ? 'text-teal-700 dark:text-teal-300' : 'text-coral'}`}>{msg.text}</p>}
    </>
  );
}

// ---- teachers ----

/** Teachers see the answer keys and the students' progress. The admin adds them here. */
function Teachers() {
  const [rows, setRows] = useState<TeacherRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const load = useCallback(() => {
    api<{ teachers: TeacherRow[] }>('admin/teachers')
      .then((r) => setRows(r.teachers))
      .catch((e) => setError(errorText(e)));
  }, []);
  useEffect(load, [load]);

  async function add(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setBusy(true);
    try {
      await api('admin/teachers', { username: String(f.get('username') ?? ''), password: String(f.get('password') ?? '') });
      setMsg({ good: true, text: 'Teacher added. Tell them the username and password.' });
      form.reset();
      load();
    } catch (err) {
      setMsg({ good: false, text: errorText(err) });
    } finally {
      setBusy(false);
    }
  }

  if (error) return <ErrorLine text={error} />;
  return (
    <div className="space-y-3">
      <form onSubmit={add} className="glass glass-card rounded-2xl p-4 ring-2 ring-mint/40">
        <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-teal-700 dark:text-teal-300">
          <UserPlus className="size-4" /> Add a teacher
        </p>
        <div className="flex flex-wrap items-end gap-2">
          <Field label="Username" className="min-w-40 flex-1">
            <input name="username" required autoComplete="off" autoCapitalize="none" spellCheck={false} className={inputCls} />
          </Field>
          <Field label="Password" className="min-w-40 flex-1">
            <input name="password" type="text" required autoComplete="off" placeholder="At least 6 characters" className={inputCls} />
          </Field>
          <button
            disabled={busy}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-ink px-4 text-sm font-bold text-white transition active:scale-[0.98] disabled:opacity-60 dark:bg-white dark:text-ink"
          >
            <Plus className="size-4" /> Add
          </button>
        </div>
        {msg && <p className={`mt-2 text-sm font-medium ${msg.good ? 'text-teal-700 dark:text-teal-300' : 'text-coral'}`}>{msg.text}</p>}
      </form>

      {!rows ? (
        <Spinner />
      ) : rows.length === 0 ? (
        <p className="py-6 text-center text-ink/60 dark:text-slate-400">No teachers yet.</p>
      ) : (
        <ul className="space-y-2">
          {rows.map((t) => (
            <TeacherCard key={t.id} t={t} onRemoved={load} />
          ))}
        </ul>
      )}
    </div>
  );
}

function TeacherCard({ t, onRemoved }: { t: TeacherRow; onRemoved: () => void }) {
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function remove() {
    try {
      await api(`admin/teachers/${t.id}/delete`, {});
      onRemoved();
    } catch (err) {
      setError(errorText(err));
    }
  }

  return (
    <li className="glass glass-card flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl px-4 py-3">
      <GraduationCap className="size-5 shrink-0 text-coral" />
      <span className="min-w-0 flex-1 truncate font-semibold">{t.username}</span>
      <span className="text-xs text-ink/55 dark:text-slate-400">added {shortDate(t.createdAt)}</span>
      <NewPassword path={`admin/teachers/${t.id}/password`} who="teacher" />
      {asking ? (
        <span className="flex gap-2">
          <button onClick={() => void remove()} className="h-8 rounded-lg bg-coral px-3 text-xs font-bold text-white">
            Yes, remove
          </button>
          <button onClick={() => setAsking(false)} className="h-8 rounded-lg bg-ink/6 px-3 text-xs font-semibold dark:bg-white/10">
            Keep
          </button>
        </span>
      ) : (
        <button
          onClick={() => setAsking(true)}
          className="inline-flex h-8 items-center gap-1 rounded-lg bg-ink/6 px-2.5 text-xs font-semibold text-coral transition hover:bg-coral/10 dark:bg-white/10"
        >
          <Trash2 className="size-3.5" /> Remove
        </button>
      )}
      {error && <p className="w-full text-sm font-medium text-coral">{error}</p>}
    </li>
  );
}

// ---- market ----

function Prizes() {
  const [items, setItems] = useState<MarketItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const load = useCallback(() => {
    api<{ items: MarketItem[] }>('market')
      .then((r) => setItems(r.items))
      .catch((e) => setError(errorText(e)));
  }, []);
  useEffect(load, [load]);

  if (error) return <ErrorLine text={error} />;
  if (!items) return <Spinner />;
  return (
    <div className="space-y-3">
      <ItemForm onSaved={load} />
      {items.map((item) => (
        <ItemForm key={`${item.id}-${item.price}-${item.stock}-${item.active}`} item={item} onSaved={load} />
      ))}
    </div>
  );
}

/** One prize: edit and Save. Without `item` it adds a new prize. */
function ItemForm({ item, onSaved }: { item?: MarketItem; onSaved: () => void }) {
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    setBusy(true);
    try {
      await api('admin/items', {
        id: item?.id,
        emoji: get('emoji'),
        name: get('name'),
        description: get('description'),
        price: Number(get('price')),
        stock: get('stock') === '' ? null : Number(get('stock')),
        active: f.get('active') === 'on',
      });
      setMsg({ good: true, text: item ? 'Saved.' : 'Prize added.' });
      if (!item) form.reset();
      onSaved();
    } catch (err) {
      setMsg({ good: false, text: errorText(err) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={save} className={`glass glass-card rounded-2xl p-4 ${item ? '' : 'ring-2 ring-mint/40'}`}>
      {!item && (
        <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-teal-700 dark:text-teal-300">
          <Plus className="size-4" /> Add a prize
        </p>
      )}
      <div className="grid grid-cols-[4rem_1fr] gap-2 sm:grid-cols-[4rem_1fr_7rem_7rem]">
        <Field label="Icon">
          <input name="emoji" defaultValue={item?.emoji ?? '🎁'} maxLength={8} className={`${inputCls} text-center text-xl`} />
        </Field>
        <Field label="Name">
          <input name="name" defaultValue={item?.name} maxLength={60} required className={inputCls} />
        </Field>
        <Field label="Price (SILVER)">
          <input name="price" type="number" min={1} step={1} defaultValue={item?.price} required className={inputCls} />
        </Field>
        <Field label="Stock">
          <input name="stock" type="number" min={0} step={1} defaultValue={item?.stock ?? ''} placeholder="∞" className={inputCls} />
        </Field>
      </div>
      <div className="mt-2 flex flex-wrap items-end gap-2">
        <Field label="Description" className="min-w-48 flex-1">
          <input name="description" defaultValue={item?.description} maxLength={200} className={inputCls} />
        </Field>
        <label className="flex h-10 items-center gap-2 rounded-xl px-2 text-sm font-semibold">
          <input name="active" type="checkbox" defaultChecked={item?.active ?? true} className="size-4 accent-mint" />
          Visible
        </label>
        <button
          disabled={busy}
          className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-ink px-4 text-sm font-bold text-white transition active:scale-[0.98] disabled:opacity-60 dark:bg-white dark:text-ink"
        >
          {item ? <Save className="size-4" /> : <Plus className="size-4" />}
          {item ? 'Save' : 'Add'}
        </button>
      </div>
      {msg && <p className={`mt-2 text-sm font-medium ${msg.good ? 'text-teal-700 dark:text-teal-300' : 'text-coral'}`}>{msg.text}</p>}
    </form>
  );
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`flex min-w-0 flex-col gap-1 text-[11px] font-bold tracking-wide text-ink/55 uppercase dark:text-slate-400 ${className}`}>
      {label}
      {children}
    </label>
  );
}

// ---- orders ----

function Orders() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const load = useCallback(() => {
    api<{ orders: Order[] }>('admin/orders')
      .then((r) => setOrders(r.orders))
      .catch((e) => setError(errorText(e)));
  }, []);
  useEffect(load, [load]);

  async function close(id: number, status: 'given' | 'cancelled') {
    try {
      await api(`admin/orders/${id}`, { status });
      load();
    } catch (e) {
      setError(errorText(e));
    }
  }

  if (error) return <ErrorLine text={error} />;
  if (!orders) return <Spinner />;
  if (orders.length === 0) return <p className="py-10 text-center text-ink/60 dark:text-slate-400">No orders yet.</p>;
  return (
    <ul className="space-y-2">
      {orders.map((o) => (
        <li key={o.id} className="glass glass-card flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-2xl">{o.emoji}</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-semibold">
              {o.item} <span className="font-normal text-ink/55 dark:text-slate-400">for</span> {o.username}
            </span>
            <span className="text-xs text-ink/55 tabular-nums dark:text-slate-400">
              {o.price.toLocaleString()} SILVER · {shortDate(o.createdAt)}
            </span>
          </span>
          {o.status === 'pending' ? (
            <span className="flex gap-2">
              <button
                onClick={() => void close(o.id, 'given')}
                className="inline-flex h-9 items-center gap-1 rounded-xl bg-mint px-3 text-sm font-bold text-white transition active:scale-95"
              >
                <Check className="size-4" /> Given
              </button>
              <button
                onClick={() => void close(o.id, 'cancelled')}
                title="Cancel and give the SILVER back"
                className="inline-flex h-9 items-center gap-1 rounded-xl bg-ink/6 px-3 text-sm font-semibold transition hover:bg-ink/10 dark:bg-white/10"
              >
                <X className="size-4" /> Cancel
              </button>
            </span>
          ) : (
            <StatusChip status={o.status} />
          )}
        </li>
      ))}
    </ul>
  );
}
