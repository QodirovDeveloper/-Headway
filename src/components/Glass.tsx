import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ElementType,
  type HTMLAttributes,
} from 'react';
import { canRefract, displacementMap } from '../lib/glass';

type Props = HTMLAttributes<HTMLElement> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
    /** Element to render — a link card, an inline badge … (default div). */
    as?: 'div' | 'a' | 'span' | 'section';
    /** Width of the curved rim in px — where the backdrop bends. */
    bezel?: number;
    /** Strongest bend at the very edge, in px. */
    strength?: number;
    /** Optional frost behind the glass, in px (0 = perfectly clear). */
    frost?: number;
    /** Blur of the icy patches along the rim, in px (0 = no ice). */
    ice?: number;
    /** Light caught inside the curved rim, 0–1 (0 = none). */
    edgeLight?: number;
    /** How far apart the colours split at the rim (0.04 = a hint, 0.15 = a prism). */
    dispersion?: number;
  };

// A pane of clear liquid glass: no blur — the backdrop is refracted through a curved rim
// (with a touch of colour fringing, like a lens edge) and lit by highlights
// from the `.glass` styles in index.css. The element's border-radius sets the shape.
export default function Glass({
  as = 'div',
  bezel = 18,
  strength = 30,
  frost = 0,
  ice = 4,
  edgeLight = 0,
  dispersion = 0.04,
  className = '',
  style,
  children,
  ...rest
}: Props) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const id = `glass-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const [shape, setShape] = useState<{ w: number; h: number; map: string } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!canRefract || !el) return;
    let last = '';
    const measure = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (!w || !h) return;
      const r = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, w / 2, h / 2);
      const key = `${w}x${h}x${r}`;
      if (key === last) return;
      last = key;
      setShape({ w, h, map: displacementMap(w, h, r, Math.min(bezel, w / 2, h / 2)) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bezel]);

  const src = frost > 0 ? 'frost' : 'SourceGraphic';
  return (
    <Tag ref={ref} className={`glass ${className}`} style={shape ? { ...style, backdropFilter: `url(#${id})` } : style} {...rest}>
      {shape && (
        <svg aria-hidden width="0" height="0" className="absolute">
          <filter
            id={id}
            x="0"
            y="0"
            width={shape.w}
            height={shape.h}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            {frost > 0 && <feGaussianBlur in="SourceGraphic" stdDeviation={frost} result="frost" />}
            <feImage href={shape.map} x="0" y="0" width={shape.w} height={shape.h} preserveAspectRatio="none" result="map" />
            {/* Each colour bends a little differently — the fringe you see at a lens edge. */}
            <feDisplacementMap in={src} in2="map" scale={strength} xChannelSelector="R" yChannelSelector="G" result="bentR" />
            <feDisplacementMap in={src} in2="map" scale={strength * (1 + dispersion)} xChannelSelector="R" yChannelSelector="G" result="bentG" />
            <feDisplacementMap in={src} in2="map" scale={strength * (1 + 2 * dispersion)} xChannelSelector="R" yChannelSelector="G" result="bentB" />
            <feColorMatrix in="bentR" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
            <feColorMatrix in="bentG" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g" />
            <feColorMatrix in="bentB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b" />
            <feBlend in="r" in2="g" mode="screen" result="rg" />
            <feBlend in="rg" in2="b" mode="screen" result="rgb" />
            <feColorMatrix in="rgb" type="saturate" values="1.6" result="clear" />
            {/* How close to the rim each pixel is (B channel of the map). */}
            <feColorMatrix in="map" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 1 0 0" result="rim" />
            {ice > 0 && (
              <>
                {/* Ice: a few frosted patches along the rim, the middle stays clear. */}
                <feTurbulence type="fractalNoise" baseFrequency="0.035 0.05" numOctaves="3" seed="7" result="blobs" />
                <feColorMatrix in="blobs" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3.4 0 0 0 -1.35" result="patches" />
                <feComposite in="rim" in2="patches" operator="in" result="iceMask" />
                <feGaussianBlur in="clear" stdDeviation={ice} result="frosted" />
                <feComposite in="frosted" in2="iceMask" operator="in" result="icePatch" />
                {/* fine crystals glinting inside the frost */}
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="3" result="grain" />
                <feColorMatrix in="grain" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1.6 0 0 0 -0.55" result="crystals" />
                <feComposite in="crystals" in2="iceMask" operator="in" result="sparkle" />
                <feFlood floodColor="#eef7ff" floodOpacity="0.38" />
                <feComposite in2="iceMask" operator="in" result="chill" />
              </>
            )}
            {/* The thick curved rim catches the light all the way round. */}
            {edgeLight > 0 && (
              <>
                <feFlood floodColor="#ffffff" floodOpacity={edgeLight} />
                <feComposite in2="rim" operator="in" result="glint" />
              </>
            )}
            <feMerge>
              <feMergeNode in="clear" />
              {ice > 0 && <feMergeNode in="icePatch" />}
              {ice > 0 && <feMergeNode in="chill" />}
              {ice > 0 && <feMergeNode in="sparkle" />}
              {edgeLight > 0 && <feMergeNode in="glint" />}
            </feMerge>
          </filter>
        </svg>
      )}
      {children}
    </Tag>
  );
}
