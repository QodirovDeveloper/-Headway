import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api, errorText } from './api';
import type { Me, Wallet } from './apiTypes';

// Accounts live on the server (worker/). The `admin` account sees the answer keys and the
// admin panel; students sign up themselves, answer the exercises and earn XP and SILVER.
// The browser only holds an HttpOnly session cookie.

/** Sign up is open for students — set to false to close it. */
export const SIGN_UP_OPEN = true;

export interface AuthApi {
  user: Me | null;
  /** false until the server has said who is signed in. */
  ready: boolean;
  /** Returns an error message, or null when signed in. */
  logIn: (username: string, password: string) => Promise<string | null>;
  /** Returns an error message, or null when the account was created and signed in. */
  signUp: (username: string, password: string, confirm: string, code: string) => Promise<string | null>;
  logOut: () => Promise<void>;
  /** Updates XP / SILVER after the server changed them. */
  setWallet: (w: Partial<Wallet>) => void;
}

export function useAuth(): AuthApi {
  const [user, setUser] = useState<Me | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    api<{ user: Me | null }>('me')
      .then((r) => setUser(r.user))
      .catch(() => setUser(null))
      .finally(() => setReady(true));
  }, []);

  const logIn = useCallback(async (username: string, password: string) => {
    if (!username.trim() || !password) return 'Enter your username and password.';
    try {
      setUser((await api<{ user: Me }>('login', { username, password })).user);
      return null;
    } catch (e) {
      return errorText(e);
    }
  }, []);

  const signUp = useCallback(async (username: string, password: string, confirm: string, code: string) => {
    if (!SIGN_UP_OPEN) return 'Sign up is closed for now.';
    if (password !== confirm) return 'Passwords do not match.';
    try {
      setUser((await api<{ user: Me }>('signup', { username, password, code })).user);
      return null;
    } catch (e) {
      return errorText(e);
    }
  }, []);

  const logOut = useCallback(async () => {
    await api('logout', {}).catch(() => undefined);
    setUser(null);
  }, []);

  const setWallet = useCallback((w: Partial<Wallet>) => setUser((u) => (u ? { ...u, ...w } : u)), []);

  return { user, ready, logIn, signUp, logOut, setWallet };
}

export const AuthContext = createContext<AuthApi | null>(null);

/** The signed-in user (inside the app, after sign-in). */
export function useAuthApi() {
  const auth = useContext(AuthContext);
  if (!auth?.user) throw new Error('useAuthApi must be used after signing in');
  return { ...auth, user: auth.user };
}
