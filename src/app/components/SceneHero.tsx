"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animated, easings, useSpring } from "@react-spring/web";

type SceneHeroProps = {
  index: number;
  title: string;
  subtitle?: string;
  bgDark?: string;
  bgLit?: string;
};

export default function SceneHero({
  index,
  title,
  subtitle,
  bgDark,
  bgLit,
}: SceneHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height;
      // p = 0 ở đầu hero (top sát viewport top), → 1 khi hero gần biến mất khỏi viewport
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(Math.max(p, 0), 1));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // đèn sáng: 0 ở đầu → 1 khi đã scroll ~60% hero
  const litOpacity = Math.min(progress / 0.6, 1);
  // tiêu đề sẽ trôi nhẹ lên + mờ dần khi user scroll xuống
  const titleParallaxY = -progress * 60;
  const titleFadeOut = Math.max(1 - progress * 1.4, 0);

  const eyebrow = useSpring({
    from: { opacity: 0, transform: "translateY(12px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 250,
    config: { duration: 900, easing: easings.easeOutCubic },
  });

  const title1 = useSpring({
    from: { opacity: 0, letterSpacing: "0.18em", transform: "translateY(28px)" },
    to: { opacity: 1, letterSpacing: "0em", transform: "translateY(0px)" },
    delay: 550,
    config: { duration: 1800, easing: easings.easeOutCubic },
  });

  const divider = useSpring({
    from: { opacity: 0, transform: "scaleX(0)" },
    to: { opacity: 1, transform: "scaleX(1)" },
    delay: 1400,
    config: { duration: 1200, easing: easings.easeOutCubic },
  });

  const subtitleAnim = useSpring({
    from: { opacity: 0, transform: "translateY(12px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1700,
    config: { duration: 1100, easing: easings.easeOutCubic },
  });

  const cue = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2400,
    config: { duration: 1200 },
  });

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-zinc-50"
      style={{ backgroundColor: "#050507" }}
    >
      {/* Background layer 1: đèn chưa sáng */}
      {bgDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{ transform: `scale(${1 + progress * 0.06})` }}
        >
          <Image
            src={bgDark}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Background layer 2: đèn đã sáng, fade-in theo scroll */}
      {bgLit && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-150"
          style={{
            opacity: litOpacity,
            transform: `scale(${1 + progress * 0.06})`,
          }}
        >
          <Image
            src={bgLit}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Halo glow xuất hiện cùng đèn sáng */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          opacity: litOpacity * 0.9,
          backgroundImage:
            "radial-gradient(ellipse 40% 50% at 50% 60%, rgba(255,176,80,0.25), transparent 70%)",
        }}
      />

      {/* Vignette tối các cạnh để text nổi lên */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_80%)]"
      />

      {/* Film grain tinh tế */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div
        className="relative z-20 flex flex-col items-center gap-7 px-6 text-center"
        style={{
          transform: `translateY(${titleParallaxY}px)`,
          opacity: titleFadeOut,
        }}
      >
        <animated.span
          style={eyebrow}
          className="font-sans text-[11px] uppercase tracking-[0.55em] text-amber-200/70"
        >
          Scene {String(index).padStart(2, "0")}
        </animated.span>

        <animated.h1
          style={title1}
          className="font-headline text-5xl font-medium leading-tight tracking-tight text-zinc-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          {title}
        </animated.h1>

        <animated.div
          style={divider}
          className="mt-2 h-px w-28 origin-center bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"
        />

        {subtitle && (
          <animated.p
            style={subtitleAnim}
            className="font-serif max-w-xl text-base italic text-zinc-200/85 sm:text-lg"
          >
            {subtitle}
          </animated.p>
        )}
      </div>

      <animated.div
        style={{ ...cue, opacity: cue.opacity.to((o) => o * (1 - progress * 2)) }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-amber-200/60"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.4em]">
          Cuộn xuống
        </span>
        <span className="animate-ambient-pulse block h-12 w-px bg-gradient-to-b from-amber-200/70 to-transparent" />
      </animated.div>
    </section>
  );
}
