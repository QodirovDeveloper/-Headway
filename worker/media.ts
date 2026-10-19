// Serves book pages, audio tracks and covers from R2.
// Only signed-in users may access the media; the bucket stays private.
import { currentUser, type Env } from './auth';

const LEVELS = new Set(['beginner', 'elementary', 'pre-intermediate', 'intermediate', 'upper-intermediate']);

const EXT_TYPE: Record<string, string> = {
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
};

/** Pattern: /<level>/pages/p001.webp | /<level>/audio/T1.1.mp3 | /<level>/cover.webp */
const MEDIA_RE = /^\/([a-z-]+)\/((?:pages|audio)\/[\w.]+|cover\.webp)$/;

/**
 * If the request is for protected media, serve it from R2 (with Range support).
 * Returns a Response, or null if this is not a media request.
 */
export async function serveMedia(req: Request, env: Env, url: URL): Promise<Response | null> {
  const m = MEDIA_RE.exec(url.pathname);
  if (!m) return null;

  const [, level, rest] = m;
  if (!LEVELS.has(level)) return null;

  // Extension whitelist — reject anything not in the map.
  const dot = rest.lastIndexOf('.');
  const ext = dot >= 0 ? rest.slice(dot).toLowerCase() : '';
  const contentType = EXT_TYPE[ext];
  if (!contentType) return new Response('Not found.', { status: 404 });

  // Auth check.
  if (!(await currentUser(env, req))) return new Response('Sign in first.', { status: 401 });

  const key = `${level}/${rest}`;

  if (req.method === 'HEAD') {
    const head = await env.HEADWAY_MEDIA.head(key);
    if (!head) return new Response('Not found.', { status: 404 });
    return new Response(null, {
      status: 200,
      headers: mediaHeaders(contentType, head.size, head.etag),
    });
  }

  if (req.method !== 'GET') return new Response('Method not allowed.', { status: 405 });

  // Parse Range header.
  const rangeHeader = req.headers.get('Range');
  let r2Options: R2GetOptions | undefined;

  if (rangeHeader) {
    const parsed = parseRange(rangeHeader);
    if (!parsed) {
      return new Response('Range Not Satisfiable', {
        status: 416,
        headers: { 'Content-Range': 'bytes */*' },
      });
    }
    r2Options = { range: parsed };
  }

  const obj = await env.HEADWAY_MEDIA.get(key, r2Options as R2GetOptions);
  if (!obj) return new Response('Not found.', { status: 404 });

  // If a start offset beyond file size was requested, return 416.
  if (r2Options?.range && 'offset' in r2Options.range && typeof r2Options.range.offset === 'number' && r2Options.range.offset >= obj.size) {
    return new Response('Range Not Satisfiable', {
      status: 416,
      headers: { 'Content-Range': `bytes */${obj.size}` },
    });
  }

  const headers = mediaHeaders(contentType, obj.size, obj.etag);

  // Full response (no range or range not applied).
  if (!rangeHeader || !('range' in (r2Options ?? {}))) {
    return new Response(obj.body, { status: 200, headers });
  }

  // Partial response.
  const r2Range = obj.range as { offset: number; length: number } | undefined;
  if (r2Range) {
    const start = r2Range.offset;
    const end = start + r2Range.length - 1;
    headers.set('Content-Range', `bytes ${start}-${end}/${obj.size}`);
    headers.set('Content-Length', String(r2Range.length));
    return new Response(obj.body, { status: 206, headers });
  }

  // Fallback: range was requested but R2 returned the full object.
  return new Response(obj.body, { status: 200, headers });
}

function mediaHeaders(contentType: string, size: number, etag?: string): Headers {
  const h = new Headers({
    'Content-Type': contentType,
    'Content-Length': String(size),
    'Accept-Ranges': 'bytes',
    // Private: must revalidate with the server (which checks the session cookie).
    'Cache-Control': 'private, no-cache',
  });
  if (etag) h.set('ETag', etag);
  return h;
}

/**
 * Parse a simple `Range: bytes=start-end` header into R2-compatible range options.
 * Returns undefined for malformed or unsupported multi-range headers.
 */
function parseRange(header: string): { offset: number; length: number } | { suffix: number } | undefined {
  const m = header.match(/^bytes=(\d*)-(\d*)$/);
  if (!m) return undefined;
  const [, startStr, endStr] = m;

  // Suffix range: bytes=-500 (last 500 bytes).
  if (!startStr && endStr) return { suffix: Number(endStr) };

  const start = Number(startStr);
  // Open-ended: bytes=100-
  if (!endStr) return { offset: start, length: Infinity };

  const end = Number(endStr);
  if (end < start) return undefined;
  return { offset: start, length: end - start + 1 };
}
