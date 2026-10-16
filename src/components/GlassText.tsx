import type { HTMLAttributes } from 'react';
import { canRefract } from '../lib/glass';

// Big headings cut out of thick glass. The letters show the school photo behind
// the page (background-clip: text, see `.glass-text` in index.css); the SVG filter
// below bends that photo inside each glyph like a lens, bevels the strokes so the
// edges catch the light, and lifts the letters off the page with a soft shadow.
// Only Chromium renders it properly, so other browsers keep plain text.

type Size = 'lg' | 'md';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2';
  size?: Size;
};

export default function GlassText({ as: Tag = 'h1', size = 'lg', className = '', children, ...rest }: Props) {
  return (
    <Tag className={`${canRefract ? `glass-text glass-text-${size}` : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/** One copy of the filters per page that uses GlassText. */
export function GlassTextDefs() {
  if (!canRefract) return null;
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      {/* Dark pages: clear glass. Light pages: smoked glass, so it still stands out. */}
      <GlassTextFilter id="glass-text-lg" depth={3.2} bend={26} rim={0.7} tint="#ffffff" tintOpacity={0.16} shadow={0.35} />
      <GlassTextFilter id="glass-text-md" depth={1.4} bend={10} rim={0.55} tint="#ffffff" tintOpacity={0.16} shadow={0.35} />
      <GlassTextFilter id="glass-text-lg-light" depth={3.2} bend={26} rim={0.85} tint="#1a1d29" tintOpacity={0.55} shadow={0.3} />
      <GlassTextFilter id="glass-text-md-light" depth={1.4} bend={10} rim={0.7} tint="#1a1d29" tintOpacity={0.55} shadow={0.3} />
    </svg>
  );
}

function GlassTextFilter({
  id,
  depth,
  bend,
  rim,
  tint,
  tintOpacity,
  shadow,
}: {
  id: string;
  depth: number;
  bend: number;
  rim: number;
  tint: string;
  tintOpacity: number;
  shadow: number;
}) {
  return (
    <filter id={id} x="-15%" y="-30%" width="130%" height="170%" colorInterpolationFilters="sRGB">
      {/* Height of the glass: full inside a stroke, rounding off towards its edges. */}
      <feGaussianBlur in="SourceAlpha" stdDeviation={depth} result="height" />
      <feColorMatrix in="height" values="0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 0 1" result="heightRGB" />
      {/* Slope of that surface in x and y → which way the light bends. */}
      <feConvolveMatrix in="heightRGB" order="3" kernelMatrix="-1 0 1  -2 0 2  -1 0 1" divisor="2" bias="0.5" preserveAlpha="true" edgeMode="duplicate" result="slopeX" />
      <feConvolveMatrix in="heightRGB" order="3" kernelMatrix="-1 -2 -1  0 0 0  1 2 1" divisor="2" bias="0.5" preserveAlpha="true" edgeMode="duplicate" result="slopeY" />
      <feColorMatrix in="slopeX" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0.5  0 0 0 0 1" result="nx" />
      <feColorMatrix in="slopeY" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 0 1" result="ny" />
      <feComposite in="nx" in2="ny" operator="arithmetic" k2="1" k3="1" result="normals" />

      {/* The photo inside the letters, bent towards the middle of each stroke. */}
      <feDisplacementMap in="SourceGraphic" in2="normals" scale={bend} xChannelSelector="R" yChannelSelector="G" result="bent" />
      <feComposite in="bent" in2="SourceAlpha" operator="in" result="body" />
      <feFlood floodColor={tint} floodOpacity={tintOpacity} />
      <feComposite in2="SourceAlpha" operator="in" result="tint" />

      {/* Light caught on the bevelled edges, strongest from the top-left. */}
      <feSpecularLighting in="height" surfaceScale={depth * 2.2} specularConstant="1.15" specularExponent="26" lightingColor="#ffffff" result="glare">
        <feDistantLight azimuth="235" elevation="48" />
      </feSpecularLighting>
      <feComposite in="glare" in2="SourceAlpha" operator="in" result="glareIn" />

      {/* A bright line just inside every edge — the thickness of the glass. */}
      <feComposite in="SourceAlpha" in2="height" operator="arithmetic" k2="1" k3="-1" result="edge" />
      <feFlood floodColor="#ffffff" floodOpacity={rim} />
      <feComposite in2="edge" operator="in" result="rimLight" />
      {/* … and a darker line where the bottom edge turns away. */}
      <feOffset in="edge" dy={depth * 0.8} result="edgeLow" />
      <feFlood floodColor="#0d111c" floodOpacity="0.35" />
      <feComposite in2="edgeLow" operator="in" />
      <feComposite in2="SourceAlpha" operator="in" result="rimShade" />

      {/* Lift off the page. */}
      <feGaussianBlur in="SourceAlpha" stdDeviation={depth * 2} />
      <feOffset dy={depth * 1.6} />
      <feComponentTransfer result="shadow">
        <feFuncA type="linear" slope={shadow} />
      </feComponentTransfer>

      <feMerge>
        <feMergeNode in="shadow" />
        <feMergeNode in="body" />
        <feMergeNode in="tint" />
        <feMergeNode in="rimShade" />
        <feMergeNode in="rimLight" />
        <feMergeNode in="glareIn" />
      </feMerge>
    </filter>
  );
}
