import { useEffect, useState } from 'react';

export type Route =
  | { name: 'hub' }
  | { name: 'login' }
  | { name: 'register' }
  | { name: 'market' }
  | { name: 'ranking' }
  | { name: 'admin' }
  | { name: 'level'; level: string }
  | { name: 'section'; level: string; id: string; page?: number };

const PAGES = ['login', 'register', 'market', 'ranking', 'admin'] as const;
type Page = (typeof PAGES)[number];

function parse(hash: string): Route {
  // #/elementary  ·  #/elementary/u/3  ·  #/elementary/u/3/25 (25 = PDF page to scroll to)
  const m = hash.match(/^#\/([a-z-]+)(?:\/u\/(\w+)(?:\/(\d+))?)?/);
  if (!m) return { name: 'hub' };
  if (PAGES.includes(m[1] as Page)) return { name: m[1] as Page };
  if (!m[2]) return { name: 'level', level: m[1] };
  return { name: 'section', level: m[1], id: m[2], page: m[3] ? Number(m[3]) : undefined };
}

export const hubHref = '#/';
export const levelHref = (level: string) => `#/${level}`;
export const sectionHref = (level: string, id: string, page?: number) =>
  `#/${level}/u/${id}${page ? `/${page}` : ''}`;

export function useRoute() {
  const [route, setRoute] = useState(() => parse(location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parse(location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
