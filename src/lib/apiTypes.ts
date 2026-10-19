// Shapes of the API's requests and replies — shared by the site (src) and the server (worker).

/** The market is closed for now: students see "Coming soon" and can't buy. Set to true to open it. */
export const MARKET_OPEN = false;

/** admin: everything · teacher: answer keys + students' progress · student: exercises, XP, SILVER */
export type Role = 'admin' | 'teacher' | 'student';

export interface Me {
  username: string;
  role: Role;
  xp: number;
  silver: number;
}

export interface Wallet {
  xp: number;
  silver: number;
}

/** A gap in a student's exercise. `answer` is sent only once the student has found it. */
export interface Gap {
  b: number;
  choices: string[];
  tries: number;
  answer?: string;
}
export type Segment = string | Gap;

export type Sheet =
  /** The teacher sees the whole key: text in [brackets] is the answer. */
  | { mode: 'key'; items: string[] }
  /** A student sees the lines with gaps to fill. Sample answers can't be checked. */
  | { mode: 'quiz'; kind: 'key' | 'sample'; items: Segment[][]; rewardTries: number };

export interface CheckResult extends Wallet {
  correct: boolean;
  /** XP and SILVER were given for this gap. */
  reward: boolean;
  tries: number;
  answer?: string;
}

export interface RankRow {
  rank: number;
  username: string;
  xp: number;
}
export interface Ranking {
  top: RankRow[];
  me: RankRow | null;
}

export interface MarketItem {
  id: number;
  emoji: string;
  name: string;
  description: string;
  price: number;
  /** null = unlimited */
  stock: number | null;
  active: boolean;
}

export type OrderStatus = 'pending' | 'given' | 'cancelled';
export interface Order {
  id: number;
  item: string;
  emoji: string;
  price: number;
  status: OrderStatus;
  createdAt: string;
  username?: string;
}

export interface StudentRow {
  id: number;
  username: string;
  xp: number;
  silver: number;
  solved: number;
  createdAt: string;
}

export interface TeacherRow {
  id: number;
  username: string;
  createdAt: string;
}
