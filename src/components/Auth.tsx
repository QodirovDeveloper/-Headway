import { useState, type FormEvent, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { SIGN_UP_OPEN, type AuthApi } from '../lib/auth';
import type { ThemeApi } from '../lib/theme';
import Glass from './Glass';
import { Logo, ThemeButton } from './TopBar';

/** Log in / Sign up. The school photo fills half the screen on desktop and the whole background on phones. */
export default function AuthPage({ mode, auth, theme }: { mode: 'login' | 'register'; auth: AuthApi; theme: ThemeApi }) {
  const signUp = mode === 'register';
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    const form = new FormData(e.currentTarget);
    const get = (key: string) => String(form.get(key) ?? '');
    setBusy(true);
    const err = signUp
      ? await auth.signUp(get('username'), get('password'), get('confirm'), get('code'))
      : await auth.logIn(get('username'), get('password'));
    setBusy(false);
    setError(err);
  };

  return (
    <main className="relative min-h-dvh lg:flex">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url(/images/myschool-1280.webp)] bg-cover bg-[45%_center] bg-no-repeat lg:sticky lg:top-0 lg:h-dvh lg:w-1/2 lg:bg-[url(/images/myschool-2400.webp)]"
      />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-20 max-lg:bg-black/55 lg:w-1/2">
        <div className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4">
          <ThemeButton theme={theme} />
        </div>

        <Glass
          as="section"
          bezel={28}
          strength={40}
          edgeLight={0.16}
          className="glass-tone glass-thick w-full max-w-sm animate-rise rounded-[28px] p-6 [--glass-tint:linear-gradient(160deg,rgb(255_255_255/0.84),rgb(255_255_255/0.66))] sm:p-8 dark:[--glass-tint:linear-gradient(160deg,rgb(26_29_41/0.82),rgb(26_29_41/0.92))]"
        >
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="leading-tight font-semibold">Headway</p>
              <p className="text-xs text-ink/55 dark:text-white/55">My School</p>
            </div>
          </div>

          <h1 className="mt-7 text-3xl font-black tracking-tight">{signUp ? 'Sign Up' : 'Log In'}</h1>
          <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
            {signUp ? 'Create your student account. Answer the exercises to earn XP and SILVER.' : 'Sign in to open the books.'}
          </p>

          <form onSubmit={onSubmit} onChange={() => error && setError(null)} noValidate className="mt-6 flex flex-col gap-4">
            <Field label="Username" name="username" autoComplete="username" autoCapitalize="none" spellCheck={false} autoFocus />
            <PasswordField label="Password" name="password" autoComplete={signUp ? 'new-password' : 'current-password'} />
            {signUp && <PasswordField label="Confirm password" name="confirm" autoComplete="new-password" />}
            {signUp && <Field label="Class code" name="code" autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="From your teacher" />}

            {error && (
              <p role="alert" className="rounded-xl bg-coral/12 px-3 py-2 text-sm font-medium text-coral dark:bg-coral/20 dark:text-orange-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="mt-1 flex h-12 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-coral to-orange-400 font-semibold text-white shadow-lg shadow-coral/30 transition hover:brightness-105 active:scale-[0.99] disabled:opacity-70"
            >
              {busy ? (
                <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : signUp ? (
                <UserPlus className="size-5" />
              ) : (
                <LogIn className="size-5" />
              )}
              {signUp ? 'Sign Up' : 'Log In'}
            </button>
          </form>

          {SIGN_UP_OPEN && (
            <p className="mt-6 text-center text-sm text-ink/65 dark:text-white/65">
              {signUp ? 'Already have an account? ' : "Don't have an account? "}
              <a href={signUp ? '#/login' : '#/register'} className="font-semibold text-coral underline-offset-4 hover:underline">
                {signUp ? 'Log in' : 'Sign up'}
              </a>
            </p>
          )}
        </Glass>
      </div>
    </main>
  );
}

const inputCls =
  'h-12 w-full rounded-2xl bg-white/80 px-4 text-[15px] font-normal text-ink ring-1 ring-ink/10 transition outline-none focus:ring-2 focus:ring-coral dark:bg-white/10 dark:text-white dark:ring-white/15';

function Field({ label, ...input }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold">
      {label}
      <input {...input} className={inputCls} />
    </label>
  );
}

function PasswordField({ label, ...input }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  const [show, setShow] = useState(false);
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold">
      {label}
      <span className="relative">
        <input {...input} type={show ? 'text' : 'password'} className={`${inputCls} pr-12`} />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? 'Hide password' : 'Show password'}
          className="absolute inset-y-0 right-1 grid w-10 place-items-center rounded-xl text-ink/45 transition hover:text-ink dark:text-white/50 dark:hover:text-white"
        >
          {show ? <EyeOff className="size-4.5 text-black" /> : <Eye className="size-4.5 text-black" />}
        </button>
      </span>
    </label>
  );
}
