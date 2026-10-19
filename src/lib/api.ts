/** Talks to the server (worker/index.ts). GET without a body, POST with one. Errors carry the server's message. */
export async function api<T>(path: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/${path}`, {
      method: body === undefined ? 'GET' : 'POST',
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new Error('No connection. Check the internet and try again.');
  }
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(data.error ?? 'Something went wrong. Try again.');
  return data;
}

export const errorText = (e: unknown) => (e instanceof Error ? e.message : 'Something went wrong. Try again.');
