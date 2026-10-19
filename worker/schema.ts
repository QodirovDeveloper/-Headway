// The database sets itself up on first use: tables are created if missing and the
// market gets a few starter prizes (the admin can change them).

const TABLES = [
  `CREATE TABLE IF NOT EXISTS users (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     username TEXT NOT NULL UNIQUE,
     role TEXT NOT NULL DEFAULT 'student',
     pass_hash TEXT NOT NULL,
     salt TEXT NOT NULL,
     xp INTEGER NOT NULL DEFAULT 0,
     silver INTEGER NOT NULL DEFAULT 0,
     created_at TEXT NOT NULL DEFAULT (datetime('now')))`,
  `CREATE INDEX IF NOT EXISTS users_rank ON users (role, xp DESC, id)`,
  `CREATE TABLE IF NOT EXISTS sessions (
     token_hash TEXT PRIMARY KEY,
     user_id INTEGER NOT NULL,
     expires_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS progress (
     user_id INTEGER NOT NULL,
     k TEXT NOT NULL,
     tries INTEGER NOT NULL DEFAULT 0,
     solved INTEGER NOT NULL DEFAULT 0,
     PRIMARY KEY (user_id, k))`,
  `CREATE TABLE IF NOT EXISTS items (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     emoji TEXT NOT NULL,
     name TEXT NOT NULL,
     description TEXT NOT NULL DEFAULT '',
     price INTEGER NOT NULL,
     stock INTEGER,
     active INTEGER NOT NULL DEFAULT 1)`,
  `CREATE TABLE IF NOT EXISTS orders (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     user_id INTEGER NOT NULL,
     item_id INTEGER NOT NULL,
     price INTEGER NOT NULL,
     status TEXT NOT NULL DEFAULT 'pending',
     created_at TEXT NOT NULL DEFAULT (datetime('now')))`,
];

// [emoji, name, description, price in SILVER, stock (null = unlimited)]
const STARTER_ITEMS: [string, string, string, number, number | null][] = [
  ['📱', 'iPhone — latest model', 'The grand prize. Brand new, in the box.', 2000, 1],
  ['🎧', 'AirPods', 'Wireless earbuds for your listening practice.', 1000, 2],
  ['🎬', 'Cinema ticket', 'One ticket to a film of your choice.', 300, 5],
  ['📒', 'Notebook & pen set', 'A smart notebook and a good pen.', 100, 10],
  ['🍫', 'Chocolate bar', 'A sweet reward for hard work.', 20, null],
];

let ready: Promise<void> | undefined;

export function ensureSchema(db: D1Database) {
  ready ??= (async () => {
    await db.batch(TABLES.map((sql) => db.prepare(sql)));
    const has = await db.prepare('SELECT 1 FROM items LIMIT 1').first();
    if (!has)
      await db.batch(
        STARTER_ITEMS.map(([emoji, name, description, price, stock]) =>
          db.prepare('INSERT INTO items (emoji, name, description, price, stock) VALUES (?, ?, ?, ?, ?)').bind(emoji, name, description, price, stock),
        ),
      );
  })().catch((e) => {
    ready = undefined;
    throw e;
  });
  return ready;
}
