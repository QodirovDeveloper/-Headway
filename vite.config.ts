import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
  plugins: [answerKeysServerOnly(), react(), tailwindcss(), cloudflare()],
  server: { port: 3000, strictPort: true, host: true },
});

/**
 * The answer keys (src/data/<level>/answers.ts) go to the server only. In the site's code
 * every exercise keeps its place on the page and its title, but its `items` are emptied,
 * so students can't read the answers in the browser.
 */
function answerKeysServerOnly(): Plugin {
  return {
    name: 'answer-keys-server-only',
    enforce: 'pre',
    applyToEnvironment: (env) => env.name === 'client',
    transform(code, id) {
      if (!/[\\/]src[\\/]data[\\/][^\\/]+[\\/]answers\.ts$/.test(id)) return;
      return { code: emptyItems(code), map: null };
    },
  };
}

/** Replaces every `items: [ … ]` array with `items: []` (brackets inside strings are skipped). */
function emptyItems(code: string) {
  let out = '';
  let at = 0;
  for (;;) {
    const start = code.indexOf('items: [', at);
    if (start < 0) return out + code.slice(at);
    let k = start + 'items: ['.length;
    let depth = 1;
    while (depth > 0 && k < code.length) {
      const c = code[k];
      if (c === "'" || c === '"' || c === '`') {
        for (k++; k < code.length && code[k] !== c; k++) if (code[k] === '\\') k++;
      } else if (c === '[') depth++;
      else if (c === ']') depth--;
      k++;
    }
    out += code.slice(at, start) + 'items: []';
    at = k;
  }
}
