"use client";

import Image from "next/image";
import { animated, easings, useInView } from "@react-spring/web";
import type { Scene, ScenePanel } from "../content/scenes";

const inViewOptions = {
  rootMargin: "0% 0% -20% 0%",
  once: true,
} as const;

function NarrationParagraph({ text, index }: { text: string; index: number }) {
  const [ref, styles] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(60px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: index * 220,
      config: { duration: 1100, easing: easings.easeOutCubic },
    }),
    inViewOptions
  );

  return (
    <animated.p
      ref={ref}
      style={styles}
      className="font-serif text-[17px] leading-[1.75] text-zinc-100/95 sm:text-[18px] sm:leading-[1.8]"
    >
      {text}
    </animated.p>
  );
}

function PanelFigure({
  panel,
  index,
  priority,
}: {
  panel: ScenePanel;
  index: number;
  priority?: boolean;
}) {
  const [ref, styles] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(80px) scale(0.94)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) scale(1)",
      },
      delay: index * 260,
      config: { duration: 1300, easing: easings.easeOutCubic },
    }),
    inViewOptions
  );

  return (
    <animated.figure
      ref={ref}
      style={styles}
      className="group relative aspect-square overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
    >
      <Image
        src={panel.src}
        alt={panel.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
    </animated.figure>
  );
}

export default function SceneSection({ scene }: { scene: Scene }) {
  const [bgRef, bgStyles] = useInView(
    () => ({
      from: { opacity: 0, transform: "scale(1.06)" },
      to: { opacity: 1, transform: "scale(1)" },
      config: { duration: 1800, easing: easings.easeOutCubic },
    }),
    { rootMargin: "0% 0% -10% 0%", once: true }
  );

  const [motifRef, motifStyles] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 0.85 },
      delay: 500,
      config: { duration: 1600, easing: easings.easeOutCubic },
    }),
    { rootMargin: "0% 0% -10% 0%", once: true }
  );

  const [eyebrowRef, eyebrowStyles] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: 200,
      config: { duration: 1000, easing: easings.easeOutCubic },
    }),
    inViewOptions
  );

  const [quoteRef, quoteStyles] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(40px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: 250,
      config: { duration: 1300, easing: easings.easeOutCubic },
    }),
    inViewOptions
  );

  return (
    <section
      aria-labelledby={`${scene.id}-title`}
      className="relative isolate overflow-hidden text-zinc-100"
      style={{ backgroundColor: "#050507" }}
    >
      <animated.div
        ref={bgRef}
        style={bgStyles}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src={scene.bg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Vignette trên-dưới để text dễ đọc, GIỮ vùng đèn ở giữa sáng */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.15)_25%,rgba(0,0,0,0.15)_75%,rgba(0,0,0,0.55))]" />
      </animated.div>

      {/* Halo glow lan tỏa từ vị trí đèn (giữa-trên), tiếp nối hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 45% at 50% 35%, rgba(255,176,80,0.18), transparent 70%)",
        }}
      />

      {/* Motif watercolor: lighten blend giúp lá nổi lên BG tối, mask radial để giữa khung trống lộ BG */}
      <animated.div
        ref={motifRef}
        style={motifStyles}
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-lighten"
      >
        <Image
          src={scene.motif}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-55"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,1) 100%)",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,1) 100%)",
          }}
        />
      </animated.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-28 sm:gap-20 sm:py-32 lg:gap-24 lg:py-40">
        <animated.div
          ref={eyebrowRef}
          style={eyebrowStyles}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-amber-200/70">
            {scene.title}
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        </animated.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {scene.narration.map((text, i) => (
            <NarrationParagraph key={i} text={text} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {scene.panels.map((panel, i) => (
            <PanelFigure
              key={panel.src}
              panel={panel}
              index={i}
              priority={scene.index === 1 && i === 0}
            />
          ))}
        </div>

        <animated.blockquote
          ref={quoteRef}
          style={quoteStyles}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-serif text-xl italic leading-[1.7] text-amber-100/90 sm:text-2xl sm:leading-[1.8]">
            “{scene.quote}”
          </p>
        </animated.blockquote>
      </div>

      <h2 id={`${scene.id}-title`} className="sr-only">
        {scene.title}
      </h2>
    </section>
  );
}
