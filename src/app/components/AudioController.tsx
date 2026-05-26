"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type SceneTrack = {
  /** Must match a StoryScene's sceneId (which is also the section element id). */
  sceneId: string;
  /** Audio file path. Omit to mark the scene as intentionally silent. */
  src?: string;
};

type Props = {
  /** ALL scenes in the page (in scroll order). Scenes without `src` are explicit silence. */
  tracks: SceneTrack[];
  /** Crossfade duration in ms. */
  fadeMs?: number;
  /** Maximum volume (0..1). Ambient audio is best around 0.4–0.6. */
  maxVolume?: number;
};

/**
 * Mounts once at the page root. Watches which <section id={sceneId}> is most
 * in view, then crossfades to that scene's track. Scenes without a track
 * fade everything down to silence.
 *
 * Rules (per CLAUDE.md §6):
 *  - Never autoplay on first paint — wait for first user interaction.
 *  - Crossfade ~1.5s in / ~2s out.
 *  - Provides a fixed mute toggle (bottom-right).
 *  - Respects prefers-reduced-motion by not blocking, but starts muted-by-default
 *    so motion-sensitive users aren't surprised.
 */
export default function AudioController({
  tracks,
  fadeMs = 1500,
  maxVolume = 0.5,
}: Props) {
  // Audio is opt-in: user must click the unmute button to start.
  // This is friendlier than auto-playing on scroll (which surprises people).
  const [muted, setMuted] = useState(true);
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);

  const audioMap = useRef<Map<string, HTMLAudioElement>>(new Map());
  const fadeHandles = useRef<Map<string, number>>(new Map());

  // --- preload audio elements (only for scenes that have a src) ----------
  useEffect(() => {
    tracks.forEach(({ sceneId, src }) => {
      if (!src) return;
      if (audioMap.current.has(sceneId)) return;
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0;
      audio.preload = "metadata";
      audioMap.current.set(sceneId, audio);
    });
    const map = audioMap.current;
    const handles = fadeHandles.current;
    return () => {
      handles.forEach((h) => cancelAnimationFrame(h));
      handles.clear();
      map.forEach((a) => {
        a.pause();
        a.src = "";
      });
      map.clear();
    };
  }, [tracks]);

  // --- detect which scene contains the viewport midline ------------------
  //
  // Sections are 480-560vh tall (~5× viewport), so IntersectionObserver's
  // ratio metric tops out around ~0.2 — useless for "which one is active."
  // Instead we use a scroll handler that finds which section's box contains
  // the *vertical midpoint* of the viewport. That midpoint always lives in
  // exactly one section, regardless of how tall the sections are.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const trackedIds = new Set(tracks.map((t) => t.sceneId));

    let raf = 0;
    const update = () => {
      raf = 0;
      const triggerY = window.innerHeight / 2;
      let inside: string | null = null;
      for (const { sceneId } of tracks) {
        const el = document.getElementById(sceneId);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          inside = sceneId;
          break;
        }
      }
      // If we're inside a known scene that has audio, activate it.
      // Otherwise (silent scene, or off-page entirely) — fade to silence.
      if (inside && trackedIds.has(inside) && audioMap.current.has(inside)) {
        setActiveSceneId(inside);
      } else {
        setActiveSceneId(null);
      }
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
  }, [tracks]);

  // --- drive playback + crossfade ---------------------------------------
  useEffect(() => {
    if (muted) {
      // Fade all to 0 and pause; keeps audio elements ready for re-enable.
      audioMap.current.forEach((audio, id) => fadeTo(id, audio, 0, fadeMs, true));
      return;
    }

    audioMap.current.forEach((audio, id) => {
      const isActive = id === activeSceneId;
      if (isActive) {
        if (audio.paused) {
          // play() may reject if the browser still considers this auto-initiated;
          // since the user clicked the unmute button this typically succeeds.
          audio.play().catch(() => {
            // ignore — fade target stays 0 anyway if play fails
          });
        }
        fadeTo(id, audio, maxVolume, fadeMs, false);
      } else {
        // Use a slightly longer fade-out for warmth (2× the fade-in).
        fadeTo(id, audio, 0, fadeMs * 1.3, true);
      }
    });
    // fadeTo is intentionally not a dep — it's a stable ref-mutating helper.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSceneId, muted, fadeMs, maxVolume]);

  const fadeTo = useCallback(
    (
      id: string,
      audio: HTMLAudioElement,
      to: number,
      duration: number,
      pauseWhenDone: boolean
    ) => {
      const prev = fadeHandles.current.get(id);
      if (prev) cancelAnimationFrame(prev);

      const from = audio.volume;
      if (Math.abs(from - to) < 0.001) {
        if (pauseWhenDone && to === 0 && !audio.paused) audio.pause();
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // Smooth ease-in-out for a less mechanical fade.
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        audio.volume = from + (to - from) * eased;
        if (t < 1) {
          const h = requestAnimationFrame(step);
          fadeHandles.current.set(id, h);
        } else {
          fadeHandles.current.delete(id);
          if (pauseWhenDone && to === 0 && !audio.paused) audio.pause();
        }
      };
      const h = requestAnimationFrame(step);
      fadeHandles.current.set(id, h);
    },
    []
  );

  return (
    <button
      type="button"
      onClick={() => setMuted((m) => !m)}
      aria-label={muted ? "Bật âm thanh nền" : "Tắt âm thanh nền"}
      aria-pressed={!muted}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/45 text-zinc-100 shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all hover:bg-black/65 hover:scale-105 active:scale-95"
    >
      {muted ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 010 7.07" />
          <path d="M19.07 4.93a10 10 0 010 14.14" />
        </svg>
      )}
    </button>
  );
}
