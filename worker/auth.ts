// Passwords: PBKDF2-SHA256 with a random salt per user. Sessions: a random token in an
// HttpOnly cookie; only its SHA-256 is stored, so a leaked database can't sign anyone in.
import type { Me, Role } from '../src/lib/apiTypes';

export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  /** The admin's password — `wrangler secret put ADMIN_PASSWORD` (locally: .dev.vars). */
  ADMIN_PASSWORD?: string;
  /** If set, students need this class code to sign up (`wrangler secret put SIGNUP_CODE`). */
  SIGNUP_CODE?: string;
  /** R2 bucket for book pages, audio and covers. */
  HEADWAY_MEDIA: R2Bucket;
}

export interface User extends Me {
  id: number;
}

const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
export const randomHex = (bytes: number) => hex(crypto.getRandomValues(new Uint8Array(bytes)).buffer);
const sha256 = async (s: string) => hex(await crypto.subtle.digest('SHA-256', enc.encode(s)));

export async function hashPassword(password: string, salt: string) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(salt), iterations: 100_000 }, key, 256);
  return hex(bits);
}

/** Compares two secrets in constant time. */
export async function sameSecret(a: string, b: string) {
  const [x, y] = await Promise.all([a, b].map((s) => crypto.subtle.digest('SHA-256', enc.encode(s))));
  return crypto.subtle.timingSafeEqual(x, y);
}

const COOKIE = 'hw_session';
const DAYS = 30;

export async function startSession(env: Env, userId: number) {
  const token = randomHex(32);
  const expires = Date.now() + DAYS * 86_400_000;
  await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)').bind(await sha256(token), userId, expires).run();
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${DAYS * 86_400}`;
}

export const endCookie = `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;

function tokenOf(req: Request) {
  const m = req.headers.get('Cookie')?.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([0-9a-f]{64})`));
  return m?.[1];
}

export async function endSession(env: Env, req: Request) {
  const token = tokenOf(req);
  if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256(token)).run();
}

export async function currentUser(env: Env, req: Request): Promise<User | null> {
  const token = tokenOf(req);
  if (!token) return null;
  const row = await env.DB.prepare(
    `SELECT u.id, u.username, u.role, u.xp, u.silver FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > ?`,
  )
    .bind(await sha256(token), Date.now())
    .first<{ id: number; username: string; role: Role; xp: number; silver: number }>();
  return row ?? null;
}

export const publicUser = ({ username, role, xp, silver }: User): Me => ({ username, role, xp, silver });
