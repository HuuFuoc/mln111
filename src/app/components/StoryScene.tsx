"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { animated, useSpring, type SpringValue } from "@react-spring/web";
import StoryBeat, { type StoryBeatProps } from "./StoryBeat";

export type LayerType = "text" | "image" | "panel" | "motif";

export type LayerAnim = {
  opacity?: number;
  y?: number; // px
  x?: number; // px
  scale?: number;
  blur?: number; // px
};

export type SceneLayer = {
  id: string;
  type: LayerType;
  content?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  start: number; // 0..1 — local scroll progress at which layer enters
  end: number; // 0..1 — local scroll progress at which layer exits
  from?: LayerAnim;
  to?: LayerAnim;
  fadeIn?: number; // fraction of (end-start) used for fade-in, default 0.18
  fadeOut?: number; // fraction of (end-start) used for fade-out, default 0.18
  zIndex?: number;
  parallaxSpeed?: number; // additional vertical drift per full scene scroll, in px
};

export type StorySceneProps = {
  sceneId: string;
  backgroundImage: string;
  backgroundImageLit?: string; // optional second BG that fades in over progress
  litThreshold?: number; // progress at which lit BG reaches full opacity (default 0.4)
  heightVh?: number; // default 400
  layers: SceneLayer[];
  /** Grouped text+image beats that animate together based on local scroll progress. */
  beats?: StoryBeatProps[];
  gradientOverlay?: boolean; // default true
  className?: string;
};

const DEFAULT_FADE = 0.18;

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getOpacityFactor(
  p: number,
  start: number,
  end: number,
  fadeIn = DEFAULT_FADE,
  fadeOut = DEFAULT_FADE
): number {
  if (p <= start || p >= end) return 0;
  const span = end - start;
  if (span <= 0) return 0;
  const fadeInDur = span * fadeIn;
  const fadeOutDur = span * fadeOut;
  if (p < start + fadeInDur) return (p - start) / fadeInDur;
  if (p > end - fadeOutDur) return (end - p) / fadeOutDur;
  return 1;
}

function getRangeT(p: number, start: number, end: number) {
  if (end <= start) return 0;
  return clamp01((p - start) / (end - start));
}

/** Custom hook: track local scroll progress (0..1) of a scene wrapper element
 *  and expose it as a SpringValue so layers can interpolate without re-rendering. */
function useSceneProgress(targetRef: React.RefObject<HTMLElement | null>) {
  const [{ progress }, api] = useSpring(
    () => ({
      progress: 0,
      config: { tension: 280, friction: 60, precision: 0.0001 },
    }),
    []
  );

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const p = dist > 0 ? -rect.top / dist : 0;
      api.start({ progress: clamp01(p) });
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [api, targetRef]);

  return progress;
}

function usePrefersReducedMotion(): boolean {
  const matches = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    matches.current = mq.matches;
  }, []);
  return matches.current;
}

/** A single animated layer. Uses parent's progress SpringValue to interpolate styles. */
function StoryLayer({
  layer,
  progress,
  reducedMotion,
}: {
  layer: SceneLayer;
  progress: SpringValue<number>;
  reducedMotion: boolean;
}) {
  const {
    start,
    end,
    from = {},
    to = {},
    fadeIn = DEFAULT_FADE,
    fadeOut = DEFAULT_FADE,
    parallaxSpeed = 0,
  } = layer;

  const fOpacity = from.opacity ?? 0;
  const tOpacity = to.opacity ?? 1;
  const fY = from.y ?? 0;
  const tY = to.y ?? 0;
  const fX = from.x ?? 0;
  const tX = to.x ?? 0;
  const fScale = from.scale ?? 1;
  const tScale = to.scale ?? 1;
  const fBlur = from.blur ?? 0;
  const tBlur = to.blur ?? 0;

  // Style interpolations (each runs on spring value updates without React re-render)
  const style = {
    opacity: progress.to((p) => {
      if (reducedMotion) {
        // Reduced motion: snap visibility, no movement
        return p >= start && p <= end ? 1 : 0;
      }
      const vis = getOpacityFactor(p, start, end, fadeIn, fadeOut);
      const ot = getRangeT(p, start, end);
      // Multiply visibility factor by lerped opacity (allows full custom in/out fades too)
      return vis * lerp(fOpacity, tOpacity, ot);
    }),
    transform: progress.to((p) => {
      if (reducedMotion) return "translate3d(0px, 0px, 0) scale(1)";
      const t = getRangeT(p, start, end);
      const y = lerp(fY, tY, t) + parallaxSpeed * p;
      const x = lerp(fX, tX, t);
      const sc = lerp(fScale, tScale, t);
      return `translate3d(${x}px, ${y}px, 0) scale(${sc})`;
    }),
    filter: progress.to((p) => {
      if (reducedMotion) return "blur(0px)";
      const t = getRangeT(p, start, end);
      const b = lerp(fBlur, tBlur, t);
      return b > 0.01 ? `blur(${b.toFixed(2)}px)` : "none";
    }),
    willChange: "transform, opacity",
  };

  // Default positioning: layer fills the viewport so author can place content with className.
  const baseClass =
    "pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center";

  const z = layer.zIndex ?? 30;

  switch (layer.type) {
    case "image":
    case "panel":
      return (
        <animated.div
          style={{ ...style, zIndex: z }}
          className={`${baseClass} ${layer.className ?? ""}`}
        >
          {layer.src && (
            <div className="relative h-[58vh] w-[42vh] max-w-[90vw] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:h-[64vh] sm:w-[64vh]">
              <Image
                src={layer.src}
                alt={layer.alt ?? ""}
                fill
                sizes="(min-width: 640px) 64vh, 90vw"
                className="object-cover"
              />
            </div>
          )}
        </animated.div>
      );
    case "motif":
      return (
        <animated.div
          aria-hidden
          style={{ ...style, zIndex: z, mixBlendMode: "lighten" }}
          className={`${baseClass.replace("flex items-center justify-center px-6 text-center", "")} ${layer.className ?? ""}`}
        >
          {layer.src && (
            <Image
              src={layer.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, transparent 35%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
                maskImage:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, transparent 35%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
              }}
            />
          )}
        </animated.div>
      );
    case "text":
    default:
      return (
        <animated.div
          style={{ ...style, zIndex: z }}
          className={`${baseClass} ${layer.className ?? ""}`}
        >
          {layer.content}
        </animated.div>
      );
  }
}

export default function StoryScene({
  sceneId,
  backgroundImage,
  backgroundImageLit,
  litThreshold = 0.4,
  heightVh = 400,
  layers,
  beats,
  gradientOverlay = true,
  className = "",
}: StorySceneProps) {
  const sceneRef = useRef<HTMLElement | null>(null);
  const progress = useSceneProgress(sceneRef);
  const reducedMotion = usePrefersReducedMotion();

  // Background lit overlay opacity follows progress up to litThreshold
  const litOpacity = progress.to((p) => {
    if (!backgroundImageLit) return 0;
    if (litThreshold <= 0) return 1;
    return clamp01(p / litThreshold);
  });

  // Subtle background scale parallax (1.0 → 1.06 across whole scene)
  const bgTransform = progress.to((p) =>
    reducedMotion ? "scale(1)" : `scale(${1 + p * 0.06})`
  );

  return (
    <section
      ref={sceneRef}
      id={sceneId}
      aria-labelledby={`${sceneId}-title`}
      className={`relative w-full ${className}`}
      style={{ height: `${heightVh}vh`, backgroundColor: "#050507" }}
    >
      {/* Sticky stage: backdrop pinned for the duration of the scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background layer (default / dark) */}
        <animated.div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{ transform: bgTransform }}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </animated.div>

        {/* Optional lit background that fades in with progress */}
        {backgroundImageLit && (
          <animated.div
            aria-hidden
            className="absolute inset-0 z-[1]"
            style={{
              opacity: litOpacity,
              transform: bgTransform,
            }}
          >
            <Image
              src={backgroundImageLit}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Warm halo emanating from lamp area */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 45% 40% at 50% 55%, rgba(255,176,80,0.28), transparent 70%)",
              }}
            />
          </animated.div>
        )}

        {/* Gradient overlay for text readability */}
        {gradientOverlay && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[10] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.18)_30%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.6))]"
          />
        )}

        {/* Subtle film grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[11] opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* Story layers, sorted by zIndex */}
        {[...layers]
          .sort((a, b) => (a.zIndex ?? 30) - (b.zIndex ?? 30))
          .map((layer) => (
            <StoryLayer
              key={layer.id}
              layer={layer}
              progress={progress}
              reducedMotion={reducedMotion}
            />
          ))}

        {/* Grouped beats: text + image driven together by the same scene progress */}
        {beats &&
          [...beats]
            .sort((a, b) => (a.zIndex ?? 30) - (b.zIndex ?? 30))
            .map((beat) => (
              <StoryBeat
                key={beat.id}
                {...beat}
                progress={progress}
                reducedMotion={reducedMotion}
              />
            ))}
      </div>
    </section>
  );
}
