"use client";

import Image from "next/image";
import { animated, type SpringValue } from "@react-spring/web";
import { type ReactNode } from "react";

export type StoryBeatLayout =
  | "text-top"
  | "text-bottom"
  | "text-left"
  | "text-right"
  | "center";

export type StoryBeatProps = {
  id: string;
  text: ReactNode;
  imageSrc: string;
  imageAlt?: string;

  // Local scroll-progress thresholds (0..1) inside the parent scene.
  // start < enterEnd <= exitStart < end
  start: number;
  enterEnd: number;
  exitStart: number;
  end: number;

  textClassName?: string;
  imageClassName?: string;
  layout?: StoryBeatLayout;
  zIndex?: number;
  className?: string;
};

type Props = StoryBeatProps & {
  progress: SpringValue<number>;
  reducedMotion?: boolean;
};

// --- animation constants ----------------------------------------------------

const GROUP_ENTER_Y = 64; // initial translateY (px) — text + image start below
const GROUP_EXIT_Y = -96; // final translateY (px) — pushed upward by scroll
const GROUP_ENTER_SCALE = 1.02; // subtle "settle in" scale on enter
const GROUP_EXIT_SCALE = 0.985; // subtle "drift away" scale on exit

const IMAGE_PARALLAX_ENTER = 24; // extra Y on enter so image rises deeper
const IMAGE_PARALLAX_EXIT = -32; // extra Y on exit so image leaves further
const IMAGE_ENTER_SCALE = 0.92;
const IMAGE_EXIT_SCALE = 0.96;
const IMAGE_ENTER_BLUR = 6; // px — focus pulls in from soft to sharp
const IMAGE_EXIT_BLUR = 4;

const TEXT_ENTER_BLUR = 2.5;
const TEXT_EXIT_BLUR = 1.75;

// --- helpers ----------------------------------------------------------------

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Smooth S-curve — slow start AND slow end, middle tracks scroll closely.
// Used for both enter & exit so opacity / motion build gradually with scroll.
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Frame = {
  opacity: number;
  groupY: number;
  groupScale: number;
  imageY: number;
  imageScale: number;
  imageBlur: number;
  textBlur: number;
};

const HIDDEN_BEFORE: Frame = {
  opacity: 0,
  groupY: GROUP_ENTER_Y,
  groupScale: GROUP_ENTER_SCALE,
  imageY: IMAGE_PARALLAX_ENTER,
  imageScale: IMAGE_ENTER_SCALE,
  imageBlur: IMAGE_ENTER_BLUR,
  textBlur: TEXT_ENTER_BLUR,
};

const HOLD: Frame = {
  opacity: 1,
  groupY: 0,
  groupScale: 1,
  imageY: 0,
  imageScale: 1,
  imageBlur: 0,
  textBlur: 0,
};

const HIDDEN_AFTER: Frame = {
  opacity: 0,
  groupY: GROUP_EXIT_Y,
  groupScale: GROUP_EXIT_SCALE,
  imageY: IMAGE_PARALLAX_EXIT,
  imageScale: IMAGE_EXIT_SCALE,
  imageBlur: IMAGE_EXIT_BLUR,
  textBlur: TEXT_EXIT_BLUR,
};

/** Sample every animated channel at a given local scroll progress. */
function sample(
  p: number,
  start: number,
  enterEnd: number,
  exitStart: number,
  end: number
): Frame {
  if (p <= start) return HIDDEN_BEFORE;

  if (p < enterEnd) {
    const tRaw = clamp01((p - start) / Math.max(1e-6, enterEnd - start));
    const t = easeInOutCubic(tRaw);
    return {
      opacity: t,
      groupY: lerp(GROUP_ENTER_Y, 0, t),
      groupScale: lerp(GROUP_ENTER_SCALE, 1, t),
      imageY: lerp(IMAGE_PARALLAX_ENTER, 0, t),
      imageScale: lerp(IMAGE_ENTER_SCALE, 1, t),
      imageBlur: lerp(IMAGE_ENTER_BLUR, 0, t),
      textBlur: lerp(TEXT_ENTER_BLUR, 0, t),
    };
  }

  if (p < exitStart) return HOLD;

  if (p < end) {
    const tRaw = clamp01((p - exitStart) / Math.max(1e-6, end - exitStart));
    const t = easeInOutCubic(tRaw);
    return {
      opacity: 1 - t,
      groupY: lerp(0, GROUP_EXIT_Y, t),
      groupScale: lerp(1, GROUP_EXIT_SCALE, t),
      imageY: lerp(0, IMAGE_PARALLAX_EXIT, t),
      imageScale: lerp(1, IMAGE_EXIT_SCALE, t),
      imageBlur: lerp(0, IMAGE_EXIT_BLUR, t),
      textBlur: lerp(0, TEXT_EXIT_BLUR, t),
    };
  }

  return HIDDEN_AFTER;
}

const ARRANGEMENT: Record<Exclude<StoryBeatLayout, "center">, string> = {
  "text-top": "flex flex-col items-center gap-8 md:gap-10",
  "text-bottom": "flex flex-col-reverse items-center gap-8 md:gap-10",
  "text-left": "flex flex-col items-center gap-8 md:flex-row md:gap-12",
  "text-right":
    "flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12",
};

// --- component --------------------------------------------------------------

export default function StoryBeat({
  text,
  imageSrc,
  imageAlt = "",
  start,
  enterEnd,
  exitStart,
  end,
  textClassName = "",
  imageClassName = "",
  layout = "text-top",
  zIndex = 30,
  className = "",
  progress,
  reducedMotion = false,
}: Props) {
  // Group wrapper: shared opacity + base translateY + subtle scale.
  const groupStyle = {
    opacity: progress.to((p) => {
      if (reducedMotion) return p >= start && p <= end ? 1 : 0;
      return sample(p, start, enterEnd, exitStart, end).opacity;
    }),
    transform: progress.to((p) => {
      if (reducedMotion) return "translate3d(0px, 0px, 0) scale(1)";
      const s = sample(p, start, enterEnd, exitStart, end);
      return `translate3d(0px, ${s.groupY.toFixed(2)}px, 0) scale(${s.groupScale.toFixed(4)})`;
    }),
    willChange: "transform, opacity",
  };

  // Image: parallax depth (extra Y) + zoom + focus-pull blur.
  const imageStyle = {
    transform: progress.to((p) => {
      if (reducedMotion) return "translate3d(0px, 0px, 0) scale(1)";
      const s = sample(p, start, enterEnd, exitStart, end);
      return `translate3d(0px, ${s.imageY.toFixed(2)}px, 0) scale(${s.imageScale.toFixed(4)})`;
    }),
    filter: progress.to((p) => {
      if (reducedMotion) return "none";
      const s = sample(p, start, enterEnd, exitStart, end);
      return s.imageBlur > 0.05 ? `blur(${s.imageBlur.toFixed(2)}px)` : "none";
    }),
    willChange: "transform, filter",
  };

  // Text: a softer blur that resolves to crisp during the hold phase.
  const textStyle = {
    filter: progress.to((p) => {
      if (reducedMotion) return "none";
      const s = sample(p, start, enterEnd, exitStart, end);
      return s.textBlur > 0.05 ? `blur(${s.textBlur.toFixed(2)}px)` : "none";
    }),
    willChange: "filter",
  };

  const portraitFrame =
    "relative h-[44vh] w-[32vh] max-w-[80vw] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:h-[52vh] sm:w-[52vh]";
  const largeFrame =
    "relative h-[58vh] w-[42vh] max-w-[90vw] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:h-[64vh] sm:w-[64vh]";

  if (layout === "center") {
    return (
      <animated.div
        style={{ ...groupStyle, zIndex }}
        className={`pointer-events-none absolute inset-0 flex items-center justify-center px-6 ${className}`}
      >
        <div className="relative">
          <animated.div
            style={imageStyle}
            className={`${largeFrame} ${imageClassName}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 640px) 64vh, 90vw"
              className="object-cover"
            />
          </animated.div>
          <animated.div
            style={textStyle}
            className={`absolute inset-0 flex items-center justify-center p-8 text-center ${textClassName}`}
          >
            {text}
          </animated.div>
        </div>
      </animated.div>
    );
  }

  return (
    <animated.div
      style={{ ...groupStyle, zIndex }}
      className={`pointer-events-none absolute inset-0 flex items-center justify-center px-6 ${className}`}
    >
      <div className={ARRANGEMENT[layout]}>
        <animated.div
          style={textStyle}
          className={`max-w-xl text-center md:max-w-md ${textClassName}`}
        >
          {text}
        </animated.div>
        <animated.div
          style={imageStyle}
          className={`${portraitFrame} ${imageClassName}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 52vh, 80vw"
            className="object-cover"
          />
        </animated.div>
      </div>
    </animated.div>
  );
}
