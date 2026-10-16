import { useCallback } from 'react';
import { sha256 } from './sha256';
import { readStored, useStored, writeStored } from './storage';

// A sign-in gate for a private classroom site with no server. It keeps casual
// visitors out; it is not real security — the code runs in the browser and can
// be read. Passwords are stored only as SHA-256 hashes (salted with the user
// name), never as plain text.
//
// The school account is built in. Its password is written down in
// ACCESS.local.md next to package.json (that file is not committed).
// People who sign up are remembered in this browser only.

interface Account {
  username: string;
  hash: string;
}

/** Sign up is switched off for now — set to true to open it again. */
export const SIGN_UP_OPEN = false;

const SCHOOL: Account = {
  username: 'myschool',
  hash: 'f856a7d785285ef1ca2f21f0e28c6c2a553ef86aa0a0315ee86cd71324943169',
};

const clean = (name: string) => name.trim().toLowerCase();
const hashOf = (username: string, password: string) => sha256(`${clean(username)}:${password}`);
const signedUp = () => readStored<Account[]>('accounts', []);
const find = (username: string) => [SCHOOL, ...signedUp()].find((a) => a.username === clean(username));

export interface AuthApi {
  user: string | null;
  /** Returns an error message, or null when signed in. */
  logIn: (username: string, password: string) => string | null;
  /** Returns an error message, or null when the account was created and signed in. */
  signUp: (username: string, password: string, confirm: string) => string | null;
  logOut: () => void;
}

export function useAuth(): AuthApi {
  const [user, setUser] = useStored<string | null>('user', null);

  const logIn = useCallback(
    (username: string, password: string) => {
      if (!username.trim() || !password) return 'Enter your username and password.';
      const account = find(username);
      if (!account || account.hash !== hashOf(username, password)) return 'Wrong username or password.';
      setUser(account.username);
      return null;
    },
    [setUser],
  );

  const signUp = useCallback(
    (username: string, password: string, confirm: string) => {
      if (!SIGN_UP_OPEN) return 'Sign up is closed for now.';
      const name = clean(username);
      if (!/^[a-z0-9._-]{3,20}$/.test(name)) return 'Username: 3–20 letters, numbers, dots, dashes or underscores.';
      if (password.length < 6) return 'Password must be at least 6 characters.';
      if (password !== confirm) return 'Passwords do not match.';
      if (find(name)) return 'This username is taken.';
      writeStored('accounts', [...signedUp(), { username: name, hash: hashOf(name, password) }]);
      setUser(name);
      return null;
    },
    [setUser],
  );

  const logOut = useCallback(() => setUser(null), [setUser]);

  return { user, logIn, signUp, logOut };
}
