// The Headway server: accounts, answer checking (XP + SILVER), ranking, market and admin.
// Everything under /api/ is JSON. Book pages and audio are served only to signed-in users.
import { MARKET_OPEN, type CheckResult, type MarketItem, type Order, type OrderStatus, type Ranking, type RankRow, type StudentRow, type TeacherRow } from '../src/lib/apiTypes';
import { currentUser, endCookie, endSession, hashPassword, publicUser, randomHex, sameSecret, startSession, type Env, type User } from './auth';
import { answerOf, exercise, gapKey, isRight, REWARD_TRIES, studentSheet, teacherSheet } from './keys';
import { ensureSchema } from './schema';
import { serveMedia } from './media';

class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

const json = (data: unknown, status = 200, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers } });

export default {
  async fetch(req, env) {
    try {
      await ensureSchema(env.DB);
      const url = new URL(req.url);
      if (url.pathname.startsWith('/api/')) return await api(req, env, url);
      // Book pages, audio and covers: served from R2, signed-in users only.
      const media = await serveMedia(req, env, url);
      if (media) return media;
      // Everything else (the SPA shell, static assets): served from ASSETS.
      return env.ASSETS.fetch(req);
    } catch (e) {
      if (e instanceof HttpError) return json({ error: e.message }, e.status);
      console.error(e);
      return json({ error: 'Something went wrong. Try again.' }, 500);
    }
  },
} satisfies ExportedHandler<Env>;

async function body<T>(req: Request): Promise<Partial<T>> {
  try {
    return ((await req.json()) ?? {}) as Partial<T>;
  } catch {
    throw new HttpError(400, 'Bad request.');
  }
}

async function api(req: Request, env: Env, url: URL): Promise<Response> {
  const route = `${req.method} ${url.pathname.slice('/api/'.length)}`;
  const db = env.DB;

  // ---- signing in ----
  if (route === 'POST signup') {
    const { username = '', password = '', code = '' } = await body<{ username: string; password: string; code: string }>(req);
    if (env.SIGNUP_CODE && !(await sameSecret(String(code).trim().toLowerCase(), env.SIGNUP_CODE.trim().toLowerCase())))
      throw new HttpError(403, 'Wrong class code. Ask your teacher.');
    const name = checkName(username);
    checkPassword(password);
    const salt = randomHex(16);
    const row = await db
      .prepare(`INSERT INTO users (username, role, pass_hash, salt) VALUES (?, 'student', ?, ?) ON CONFLICT (username) DO NOTHING RETURNING id`)
      .bind(name, await hashPassword(password, salt), salt)
      .first<{ id: number }>();
    if (!row) throw new HttpError(409, 'This username is taken.');
    const user: User = { id: row.id, username: name, role: 'student', xp: 0, silver: 0 };
    return json({ user: publicUser(user) }, 201, { 'Set-Cookie': await startSession(env, user.id) });
  }

  if (route === 'POST login') {
    const { username = '', password = '' } = await body<{ username: string; password: string }>(req);
    const name = cleanName(username);
    if (!name || !password) throw new HttpError(400, 'Enter your username and password.');
    const user = name === 'admin' ? await adminLogIn(env, password) : await memberLogIn(db, name, password);
    if (!user) throw new HttpError(401, 'Wrong username or password.');
    return json({ user: publicUser(user) }, 200, { 'Set-Cookie': await startSession(env, user.id) });
  }

  if (route === 'POST logout') {
    await endSession(env, req);
    return json({ ok: true }, 200, { 'Set-Cookie': endCookie });
  }

  const user = await currentUser(env, req);
  if (route === 'GET me') return json({ user: user && publicUser(user) });
  if (!user) throw new HttpError(401, 'Please sign in again.');
  const admin = user.role === 'admin';
  const student = user.role === 'student';

  // ---- exercises ----
  if (route === 'GET sheet') {
    const level = url.searchParams.get('level') ?? '';
    const i = Number(url.searchParams.get('i'));
    const a = exercise(level, i);
    if (!a) throw new HttpError(404, 'Exercise not found.');
    if (!student) return json(teacherSheet(a));
    const { results } = await db
      .prepare('SELECT k, tries, solved FROM progress WHERE user_id = ? AND k LIKE ?')
      .bind(user.id, `${level}/${i}/%`)
      .all<{ k: string; tries: number; solved: number }>();
    return json(studentSheet(level, i, a, new Map(results.map((r) => [r.k, { tries: r.tries, solved: r.solved === 1 }]))));
  }

  if (route === 'POST check') {
    if (!student) throw new HttpError(403, 'Students only.');
    const q = await body<{ level: string; i: number; item: number; b: number; value: string }>(req);
    const [level, i, item, b] = [String(q.level), Number(q.i), Number(q.item), Number(q.b)];
    const answer = answerOf(level, i, item, b);
    if (answer === undefined || exercise(level, i)?.kind !== 'key') throw new HttpError(404, 'Gap not found.');
    const correct = isRight(String(q.value ?? '').slice(0, 300), answer);
    // Count the try; a gap that is already found stays found and counts nothing more.
    const row = await db
      .prepare(
        `INSERT INTO progress (user_id, k, tries, solved) VALUES (?1, ?2, 1, ?3)
         ON CONFLICT (user_id, k) DO UPDATE SET tries = tries + 1, solved = excluded.solved WHERE progress.solved = 0
         RETURNING tries, solved`,
      )
      .bind(user.id, gapKey(level, i, item, b), correct ? 1 : 0)
      .first<{ tries: number; solved: number }>();
    if (!row) return json({ correct: true, reward: false, tries: 0, answer, xp: user.xp, silver: user.silver } satisfies CheckResult);
    const reward = correct && row.tries <= REWARD_TRIES;
    let wallet = { xp: user.xp, silver: user.silver };
    if (reward)
      wallet = (await db.prepare('UPDATE users SET xp = xp + 1, silver = silver + 1 WHERE id = ? RETURNING xp, silver').bind(user.id).first<typeof wallet>()) ?? wallet;
    return json({ correct, reward, tries: row.tries, answer: correct ? answer : undefined, ...wallet } satisfies CheckResult);
  }

  // ---- ranking ----
  if (route === 'GET ranking') {
    const { results } = await db
      .prepare(`SELECT username, xp FROM users WHERE role = 'student' ORDER BY xp DESC, id LIMIT 50`)
      .all<{ username: string; xp: number }>();
    const top: RankRow[] = results.map((r, k) => ({ rank: k + 1, ...r }));
    let me: RankRow | null = null;
    if (student) {
      const above = await db
        .prepare(`SELECT COUNT(*) AS n FROM users WHERE role = 'student' AND (xp > ?1 OR (xp = ?1 AND id < ?2))`)
        .bind(user.xp, user.id)
        .first<{ n: number }>();
      me = { rank: (above?.n ?? 0) + 1, username: user.username, xp: user.xp };
    }
    return json({ top, me } satisfies Ranking);
  }

  // ---- market ----
  if (route === 'GET market') {
    if (student && !MARKET_OPEN) return json({ items: [] });
    const { results } = await db.prepare(`SELECT * FROM items ${student ? 'WHERE active = 1' : ''} ORDER BY price DESC, id`).all<ItemRow>();
    return json({ items: results.map(toItem) });
  }

  if (route === 'POST market/buy') {
    if (!student) throw new HttpError(403, 'Students only.');
    if (!MARKET_OPEN) throw new HttpError(403, 'The market opens soon — keep collecting SILVER!');
    const { id = 0 } = await body<{ id: number }>(req);
    const item = await db.prepare('SELECT * FROM items WHERE id = ? AND active = 1').bind(id).first<ItemRow>();
    if (!item) throw new HttpError(404, 'This prize is not in the market any more.');
    if (item.stock !== null && item.stock < 1) throw new HttpError(409, 'Sold out.');
    const paid = await db
      .prepare('UPDATE users SET silver = silver - ?1 WHERE id = ?2 AND silver >= ?1 RETURNING silver')
      .bind(item.price, user.id)
      .first<{ silver: number }>();
    if (!paid) throw new HttpError(409, 'Not enough SILVER yet.');
    const taken = await db.prepare('UPDATE items SET stock = stock - 1 WHERE id = ? AND (stock IS NULL OR stock > 0) RETURNING id').bind(item.id).first();
    if (!taken) {
      await db.prepare('UPDATE users SET silver = silver + ? WHERE id = ?').bind(item.price, user.id).run();
      throw new HttpError(409, 'Sold out.');
    }
    await db.prepare('INSERT INTO orders (user_id, item_id, price) VALUES (?, ?, ?)').bind(user.id, item.id, item.price).run();
    return json({ silver: paid.silver });
  }

  if (route === 'GET orders') {
    const { results } = await db.prepare(`${ORDERS} WHERE o.user_id = ? ORDER BY o.id DESC`).bind(user.id).all<OrderRow>();
    return json({ orders: results });
  }

  // ---- teachers and admin ----
  if (student) throw new HttpError(403, 'Teachers only.');

  if (route === 'GET admin/students') {
    const { results } = await db
      .prepare(
        `SELECT u.id, u.username, u.xp, u.silver, u.created_at AS createdAt,
           (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.solved = 1) AS solved
         FROM users u WHERE u.role = 'student' ORDER BY u.xp DESC, u.id`,
      )
      .all<StudentRow>();
    return json({ students: results });
  }

  // ---- admin only ----
  if (!admin) throw new HttpError(403, 'Admins only.');

  if (route === 'GET admin/teachers') {
    const { results } = await db
      .prepare(`SELECT id, username, created_at AS createdAt FROM users WHERE role = 'teacher' ORDER BY username`)
      .all<TeacherRow>();
    return json({ teachers: results });
  }

  if (route === 'POST admin/teachers') {
    const { username = '', password = '' } = await body<{ username: string; password: string }>(req);
    const name = checkName(username);
    checkPassword(password);
    const salt = randomHex(16);
    const row = await db
      .prepare(`INSERT INTO users (username, role, pass_hash, salt) VALUES (?, 'teacher', ?, ?) ON CONFLICT (username) DO NOTHING RETURNING id`)
      .bind(name, await hashPassword(password, salt), salt)
      .first();
    if (!row) throw new HttpError(409, 'This username is taken.');
    return json({ ok: true }, 201);
  }

  // New password for a student or a teacher; they are signed out everywhere.
  const pw = route.match(/^POST admin\/(students|teachers)\/(\d+)\/password$/);
  if (pw) {
    const role = pw[1] === 'students' ? 'student' : 'teacher';
    const { password = '' } = await body<{ password: string }>(req);
    checkPassword(password);
    const salt = randomHex(16);
    const done = await db
      .prepare(`UPDATE users SET pass_hash = ?, salt = ? WHERE id = ? AND role = ? RETURNING id`)
      .bind(await hashPassword(password, salt), salt, Number(pw[2]), role)
      .first();
    if (!done) throw new HttpError(404, 'Account not found.');
    await db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(Number(pw[2])).run();
    return json({ ok: true });
  }

  const removeTeacher = route.match(/^POST admin\/teachers\/(\d+)\/delete$/);
  if (removeTeacher) {
    const id = Number(removeTeacher[1]);
    const [, gone] = await db.batch([
      db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(id),
      db.prepare(`DELETE FROM users WHERE id = ? AND role = 'teacher'`).bind(id),
    ]);
    if (!gone.meta.changes) throw new HttpError(404, 'Teacher not found.');
    return json({ ok: true });
  }

  if (route === 'POST admin/items') {
    const b = await body<MarketItem>(req);
    const emoji = String(b.emoji ?? '').trim().slice(0, 8) || '🎁';
    const name = String(b.name ?? '').trim().slice(0, 60);
    const description = String(b.description ?? '').trim().slice(0, 200);
    const price = Math.floor(Number(b.price));
    const stock = b.stock === null || b.stock === undefined || String(b.stock) === '' ? null : Math.floor(Number(b.stock));
    if (!name) throw new HttpError(400, 'Give the prize a name.');
    if (!(price >= 1 && price <= 1_000_000)) throw new HttpError(400, 'Price: a whole number from 1.');
    if (stock !== null && !(stock >= 0 && stock <= 100_000)) throw new HttpError(400, 'Stock: a whole number, or empty for unlimited.');
    const active = b.active === false ? 0 : 1;
    const saved = b.id
      ? await db
          .prepare('UPDATE items SET emoji = ?, name = ?, description = ?, price = ?, stock = ?, active = ? WHERE id = ? RETURNING *')
          .bind(emoji, name, description, price, stock, active, b.id)
          .first<ItemRow>()
      : await db
          .prepare('INSERT INTO items (emoji, name, description, price, stock, active) VALUES (?, ?, ?, ?, ?, ?) RETURNING *')
          .bind(emoji, name, description, price, stock, active)
          .first<ItemRow>();
    if (!saved) throw new HttpError(404, 'Prize not found.');
    return json({ item: toItem(saved) });
  }

  if (route === 'GET admin/orders') {
    const { results } = await db.prepare(`${ORDERS} ORDER BY o.status = 'pending' DESC, o.id DESC LIMIT 300`).all<OrderRow>();
    return json({ orders: results });
  }

  const order = route.match(/^POST admin\/orders\/(\d+)$/);
  if (order) {
    const { status } = await body<{ status: OrderStatus }>(req);
    if (status !== 'given' && status !== 'cancelled') throw new HttpError(400, 'Bad status.');
    const o = await db
      .prepare(`UPDATE orders SET status = ? WHERE id = ? AND status = 'pending' RETURNING user_id, item_id, price`)
      .bind(status, Number(order[1]))
      .first<{ user_id: number; item_id: number; price: number }>();
    if (!o) throw new HttpError(409, 'This order is already closed.');
    // Cancelled: the student gets the SILVER back and the prize goes back on the shelf.
    if (status === 'cancelled')
      await db.batch([
        db.prepare('UPDATE users SET silver = silver + ? WHERE id = ?').bind(o.price, o.user_id),
        db.prepare('UPDATE items SET stock = stock + 1 WHERE id = ? AND stock IS NOT NULL').bind(o.item_id),
      ]);
    return json({ ok: true });
  }

  throw new HttpError(404, 'Not found.');
}

const cleanName = (name: unknown) => String(name ?? '').trim().toLowerCase();

/** A valid new username (lower case), or an error. */
function checkName(username: unknown) {
  const name = cleanName(username);
  if (!/^[a-z0-9._-]{3,20}$/.test(name)) throw new HttpError(400, 'Username: 3–20 letters, numbers, dots, dashes or underscores.');
  if (name === 'admin') throw new HttpError(400, 'This username is taken.');
  return name;
}

function checkPassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) throw new HttpError(400, 'Password must be at least 6 characters.');
  if (password.length > 200) throw new HttpError(400, 'Password is too long.');
}

/** Students and teachers sign in with the password stored for them. */
async function memberLogIn(db: D1Database, name: string, password: string): Promise<User | null> {
  const row = await db
    .prepare(`SELECT id, username, role, xp, silver, pass_hash, salt FROM users WHERE username = ? AND role IN ('student', 'teacher')`)
    .bind(name)
    .first<User & { pass_hash: string; salt: string }>();
  if (!row || !(await sameSecret(await hashPassword(password, row.salt), row.pass_hash))) return null;
  return { id: row.id, username: row.username, role: row.role, xp: row.xp, silver: row.silver };
}

/** The admin has no stored password: it is checked against the ADMIN_PASSWORD secret. */
async function adminLogIn(env: Env, password: string): Promise<User | null> {
  if (!env.ADMIN_PASSWORD || !(await sameSecret(password, env.ADMIN_PASSWORD))) return null;
  const row = await env.DB.prepare(
    `INSERT INTO users (username, role, pass_hash, salt) VALUES ('admin', 'admin', '', '')
     ON CONFLICT (username) DO UPDATE SET role = 'admin' RETURNING id, xp, silver`,
  ).first<{ id: number; xp: number; silver: number }>();
  return row && { id: row.id, username: 'admin', role: 'admin', xp: row.xp, silver: row.silver };
}

interface ItemRow {
  id: number;
  emoji: string;
  name: string;
  description: string;
  price: number;
  stock: number | null;
  active: number;
}
const toItem = (r: ItemRow): MarketItem => ({ ...r, active: r.active === 1 });

const ORDERS = `SELECT o.id, o.price, o.status, o.created_at AS createdAt, i.name AS item, i.emoji, u.username
  FROM orders o JOIN items i ON i.id = o.item_id JOIN users u ON u.id = o.user_id`;
type OrderRow = Order & { username: string };
