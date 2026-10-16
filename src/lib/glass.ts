// Liquid glass helpers.
//
// Real refraction needs an SVG filter in `backdrop-filter`, which only Chromium
// browsers (Chrome, Edge, Opera, Electron) render. Everywhere else the glass
// falls back to a plain blur — see `.glass` in index.css.

export const canRefract: boolean = (() => {
  if (typeof navigator === 'undefined') return false;
  const brands = (navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } }).userAgentData?.brands;
  return !!brands?.some((b) => /Chromium/i.test(b.brand));
})();

/**
 * Displacement map for a rounded rectangle seen through a convex glass slab.
 * R/G hold the x/y offset (128 = none). Offsets point inwards and grow towards
 * the rim, so the backdrop bends like the edge of a magnifying glass while the
 * middle stays clear. B holds how much ice may form there (255 at the rim, 0 inside).
 */
export function displacementMap(w: number, h: number, radius: number, bezel: number): string {
  const W = Math.max(1, Math.round(w));
  const H = Math.max(1, Math.round(h));
  const r = Math.min(radius, W / 2, H / 2);
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  const img = ctx.createImageData(W, H);
  const d = img.data;
  const cx = W / 2;
  const cy = H / 2;
  const hx = W / 2 - r;
  const hy = H / 2 - r;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const px = x + 0.5 - cx;
      const py = y + 0.5 - cy;
      const qx = Math.abs(px) - hx;
      const qy = Math.abs(py) - hy;

      // Distance to the rim and the outward normal (rounded-rect SDF).
      let dist: number;
      let nx: number;
      let ny: number;
      if (qx > 0 && qy > 0) {
        const l = Math.hypot(qx, qy) || 1;
        dist = r - l;
        nx = (qx / l) * Math.sign(px);
        ny = (qy / l) * Math.sign(py);
      } else if (qx > qy) {
        dist = r - qx;
        nx = Math.sign(px);
        ny = 0;
      } else {
        dist = r - qy;
        nx = 0;
        ny = Math.sign(py);
      }

      // Steep near the rim, flat in the middle (slope of a rounded bezel).
      const t = Math.min(Math.max(dist / bezel, 0), 1);
      const m = (1 - t) ** 2.2;
      const ice = (1 - Math.min(Math.max(dist / (bezel * 0.9), 0), 1)) ** 1.5;
      const i = (y * W + x) * 4;
      d[i] = 128 - nx * m * 127;
      d[i + 1] = 128 - ny * m * 127;
      d[i + 2] = ice * 255;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}
