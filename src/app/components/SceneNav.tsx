"use client";

import { useEffect, useState } from "react";

export type SceneNavItem = {
  /** Must match a StoryScene's sceneId (section element id). */
  sceneId: string;
  /** Two-digit chapter label, e.g. "01". */
  chapter: string;
  /** Short title shown in the hover tooltip. */
  title: string;
};

type Props = {
  scenes: SceneNavItem[];
};

/**
 * Right-edge, vertically-centered chapter navigator.
 *
 * Uses the same viewport-midline detection as AudioController to figure out
 * which scene is currently being viewed — intersectionRatio doesn't work
 * because each <section> is 480-560vh tall.
 */
export default function SceneNav({ scenes }: Props) {
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const triggerY = window.innerHeight / 2;
      let active: string | null = null;
      for (const { sceneId } of scenes) {
        const el = document.getElementById(sceneId);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          active = sceneId;
          break;
        }
      }
      setActiveSceneId(active);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scenes]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Chuyển nhanh giữa các chương"
      className="fixed right-5 top-1/2 z-[55] hidden -translate-y-1/2 md:flex"
    >
      <ul className="flex flex-col items-end gap-3 rounded-full border border-white/12 bg-black/35 px-4 py-5 shadow-[0_8px_28px_rgba(0,0,0,0.5)] backdrop-blur-md">
        {scenes.map((scene, i) => {
          const isActive = scene.sceneId === activeSceneId;
          const isHover = hoverIdx === i;
          return (
            <li key={scene.sceneId}>
              <button
                type="button"
                onClick={() => handleJump(scene.sceneId)}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                onFocus={() => setHoverIdx(i)}
                onBlur={() => setHoverIdx(null)}
                aria-label={`Chương ${scene.chapter} — ${scene.title}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-5 items-center rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-200/60"
              >
                {/* Tooltip card — slides in from the right on hover/focus */}
                <span
                  className={`pointer-events-none absolute right-full top-1/2 mr-3 flex items-center whitespace-nowrap rounded-md border border-white/15 bg-black/75 px-3 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.55)] backdrop-blur-md transition-opacity duration-300 ease-out ${
                    isHover ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: isHover
                      ? "translate(0, -50%)"
                      : "translate(8px, -50%)",
                    transitionProperty: "opacity, transform",
                  }}
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-amber-200/75">
                    Chương {scene.chapter}
                  </span>
                  <span className="ml-2.5 font-serif text-[13px] text-zinc-100">
                    {scene.title}
                  </span>
                </span>

                {/* The line indicator itself */}
                <span
                  aria-hidden
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "h-[3px] w-7 bg-amber-200 shadow-[0_0_12px_rgba(255,200,120,0.55)]"
                      : isHover
                        ? "h-[2px] w-5 bg-zinc-100"
                        : "h-[2px] w-3 bg-zinc-400/45"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
