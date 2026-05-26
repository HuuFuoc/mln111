# CLAUDE.md

Operating instructions for Claude Code working in this repo. Claude Code loads this file automatically at the start of every session in this directory — read it **before** writing any code.

For human-facing project intro see [README.md](README.md). For the story bible (Vietnamese) see [CAU_CHUYEN.md](CAU_CHUYEN.md).

---

## 1. Project shape — read this first

This is a **frontend-only** scrollytelling website. There is **no backend, no database, no API layer, no auth, no server actions, no edge functions**. Treat the entire app as static content + client-side animation.

- **Stack**: Next.js 16 (App Router), React 19, `@react-spring/web` 10, Tailwind CSS 4, TypeScript 5, pnpm.
- **Output target**: a static-friendly Next.js app. Every page should be renderable without runtime data fetching.
- **Audience**: viewers scroll top-to-bottom through 8 illustrated scenes. That's the whole product.

The site is a single long-scroll page. Each chapter of M's story is one `SceneSection` stacked vertically. Scroll position drives almost every motion — components subscribe to scroll via `@react-spring/web` and interpolate their own opacity, transform, blur, etc.

If you find yourself reaching for any of the items in §2, stop and reconsider.

---

## 2. Hard rules — do NOT do these

1. **No backend code.** No `app/api/**`, no Route Handlers, no Server Actions, no `"use server"`, no database clients, no ORM, no `fetch()` to internal endpoints.
2. **No external network requests at runtime.** No analytics SDKs, no third-party trackers, no remote font loaders beyond `next/font`, no AI/LLM calls, no CDN-hosted JSON.
3. **No auth, no user accounts, no forms that submit data anywhere.**
4. **No state management libraries** (Redux, Zustand, Jotai, etc.). Local component state + React Spring is enough for everything in this site.
5. **No new heavy dependencies.** Before adding any package, justify it in the PR description against the existing toolset. GSAP, Framer Motion, Lottie, Three.js, etc. are *not* drop-in additions — we already chose React Spring.
6. **No `vercel.json` / `vercel.ts` / deploy infra changes** unless the user explicitly asks. This is a coursework project, not a production platform.
7. **No CMS, no markdown-loader build step.** Story content lives in typed TS data (`src/content/scenes.ts`), not in remote MD parsing.
8. **Do not delete `CAU_CHUYEN.md`** or rewrite it into another language without explicit permission — it is the source of truth for the story.

If the user asks for any of the above, surface the conflict before implementing.

---

## 3. The product mantra: smoothness and effects

Every change is judged against one question: **does the scroll experience feel cinematic and effortless?**

When choosing between two implementations, prefer the one that:

- Animates only `transform`, `opacity`, and `filter` (GPU-accelerated).
- Uses `@react-spring/web` interpolations rather than CSS keyframes for anything tied to scroll.
- Holds 60fps on a mid-range laptop with throttled CPU 4× in DevTools.
- Stays declarative — a scene's motion should be readable from its JSX without chasing imperative `useEffect` chains.

### Forbidden animation patterns

- Animating `width`, `height`, `top`, `left`, `margin`, or any property that triggers layout.
- `setInterval`/`setTimeout` loops driving visual state — use springs.
- `requestAnimationFrame` written by hand — React Spring already runs the loop.
- Heavy `box-shadow` or `backdrop-filter` on elements that move every frame.
- More than 2 simultaneously running layout-touching springs per scene.

### Canonical animation patterns

The six reusable patterns. Implement each as a hook or component under `src/app/components/` so individual scenes stay declarative. If you need a new one, add it to this list first, then implement.

#### 3.1 Scroll-based fade (narration reveal)

```ts
opacity:    0 → 1
translateY: 40px → 0
trigger:    enter viewport center
```

Use for paragraph reveals in `AnimatedText`. Stagger lines by ~200ms.

#### 3.2 Parallax layers (background, characters, props)

```
background  speed 0.2
character   speed 0.5
foreground  speed 0.8
```

Implement with `useScroll()` from React Spring and bind each layer's `translateY` to `scrollYProgress` scaled by its speed.

#### 3.3 Split-screen transition (Scene 03)

```
left panel:   translateX -100% → 0
right panel:  translateX  100% → 0
center line:  opacity 0 → 1
```

After the split lands, the two halves drift apart in tone — the left panel saturates warm/positive while the right desaturates and cools.

#### 3.4 Social pressure stack (Scenes 02, 04)

Cards spawn from off-screen with randomised angles:

```
scale:   0.8 → 1
opacity: 0   → 1
rotate:  ±4° (random per card)
parent:  filter: blur(0) → blur(2px) as count grows
```

Keep the M character un-blurred so the visual contrast reads as social weight pressing inward.

#### 3.5 Identity glitch (Scene 05)

```
filter:     blur(0) → blur(2px)
translateX: small jitter, 60ms period
opacity:    flicker on a non-rhythmic schedule
```

Use sparingly — this is the emotional low point of the story, not a constant effect.

#### 3.6 Relationship map (Scene 06)

```
nodes: appear one by one, scale 0 → 1, ease back
edges: SVG path stroke-dashoffset → 0 (drawn-on)
shake: a few edges shake with ±2px amplitude to convey pressure
end:   the layout settles into a stable arrangement
```

`RelationshipMap` owns this animation entirely; the scene just supplies the node list.

---

## 3.7 Canonical scene architecture — match scene 01

**Scene 01 (`src/app/content/storyScenes.tsx`) is the reference implementation. Every other scene (02 → 08) must follow the same shape — same primitive, same layer mental model, same look-and-feel.** Do not invent a new component per scene.

### The contract

- One scene = one entry of type `StorySceneProps` exported from `src/app/content/storyScenes.tsx`, appended to the `storyScenes` array.
- `StoryPage.tsx` maps over that array and renders `<StoryScene {...scene} />` — adding a scene means *only* adding data, no new top-level component.
- All motion is expressed as `SceneLayer[]`. Each layer declares: `start` / `end` (local scroll progress 0..1), `from` / `to` (opacity, y, x, scale, blur), `fadeIn` / `fadeOut`, and `zIndex`. Read [src/app/components/StoryScene.tsx](src/app/components/StoryScene.tsx) for the full type.
- A scene "happens" while pinned: `<StoryScene>` is `heightVh` (default 400) tall, the inner stage is `sticky top-0 h-screen`, so layers interpolate against the viewport as the user scrolls past.
- Background can crossfade from `backgroundImage` → `backgroundImageLit` driven by `litThreshold`. Use it whenever a scene has a "light comes on / mood shifts" beat (scene 01: dark window → lit lamp).

### What every new scene reuses from scene 01

1. **Eyebrow + title + subtitle** at `p ≈ 0` (start visible, no entry fade) that drift up and fade out by `p ≈ 0.3`.
2. **Decorative `motif` layer** (transparent PNG, `mixBlendMode: lighten`, masked with a radial gradient) framing the scene throughout.
3. **Two narration paragraphs** (`from y: 48 → to y: 0`, `fadeIn ≈ 0.2`, `fadeOut ≈ 0.28`) staggered around an illustration `panel`.
4. **One illustration `panel` layer** sliding up (`from y: 120, scale: 0.94 → to y: 0, scale: 1`) between the two narration beats.
5. **Closing `blockquote`** in `text-amber-100/95` italic, landing in the last ~20% of the scene.
6. **zIndex ladder** counting up from background motifs (12) → headline text (30s) → later narration / panel (33–36) so newer beats sit above older ones.
7. The gradient overlay + film grain provided by `StoryScene` itself — do **not** re-implement them per scene.

### Authoring checklist for scenes 02 – 08

- Copy `scene01` in `storyScenes.tsx` as the template; rename to `sceneNN`, update `sceneId: "scene-0N"`.
- Replace text content **verbatim** from the matching block in `CAU_CHUYEN.md` (do not paraphrase — see §9).
- Drop new artwork under `public/images/scene-0N/` (`bg1.png`, optional `bg2.png` for the lit variant, `motif.png`, `panel-1.png`, …). Keep working files under `assets/sceneN/`.
- Keep the timeline comment block at the top of each scene object (the `0.00 – 0.18 : "Chapter NN" eyebrow` table) so the next reader can scan the choreography without running the code.
- Map each beat of the chapter onto the canonical patterns in §3 (e.g. scene 02 = `socialPressure` cards; scene 03 = `splitScreen`; scene 05 = `identityGlitch`; scene 06 = `relationshipMap`). Express it through `SceneLayer` properties — extra `blur` for glitch, multiple staggered `panel`/`text` layers for social pressure, etc. Do **not** add new top-level primitives unless §3 lists the pattern.
- If a beat truly cannot be expressed as layers (e.g. the `RelationshipMap` SVG graph), build it as a small sub-component and mount it inside a `text`-type layer via the `content` prop — the parent layer still owns the entry/exit motion.
- Append the new `sceneNN` to the `storyScenes` array at the bottom of `storyScenes.tsx`. That is the only wiring step.

### Hard constraints (carried over)

- Only `opacity` / `transform` / `filter` animate per frame. The `SceneLayer` API enforces this — don't bypass it with inline CSS keyframes.
- Reduced-motion users get a snap-visibility fallback already implemented in `StoryLayer`; respect it (do not reach into the DOM to force animation).
- `heightVh` per scene stays in the 380 – 460 range so each scene gets roughly the same scroll dwell time. Longer scenes get more `SceneLayer`s, not a taller wrapper.

> **Naming note:** §4 below predates the `StoryScene` primitive and still references `src/content/scenes.ts` + the `Scene` interface. Treat that as historical context. The live source of truth is `src/app/content/storyScenes.tsx` and the `StorySceneProps` / `SceneLayer` types in `src/app/components/StoryScene.tsx`. When the two disagree, the live code wins.

---

## 4. Authoring a new scene

Story data lives in code, not Markdown. Add a new entry to the `scenes` array (target path: `src/content/scenes.ts`) and the page composes itself.

```ts
// src/content/scenes.ts
export type SceneMotion =
  | "slowFade"
  | "splitScreen"
  | "socialPressure"
  | "identityGlitch"
  | "relationshipMap";

export interface Scene {
  id: string;
  title: string;
  quote: string;
  narration: string[];          // each item = one paragraph, revealed in order
  philosophy: string;
  image: string;                // full-bleed background, /public/images/...
  audio?: string;               // optional ambient track, /public/audio/...
  motion: {
    background: SceneMotion;
    text: SceneMotion;
    character?: SceneMotion;
  };
}
```

Steps:

1. **Write the script.** Copy the relevant scene block from `CAU_CHUYEN.md` *verbatim* into the fields above. Do not paraphrase.
2. **Export the artwork.** Generate images using the per-scene prompt blocks in `CAU_CHUYEN.md §6`. Drop the final PNGs in `public/images/scene-XX-*.png`. Keep working/source files in `assets/sceneN/`.
3. **Drop in audio.** Place ambient tracks in `public/audio/`. Loops fade in over ~1.5s and out over ~2s via `AudioController`.
4. **Pick a motion preset** from §3. If you need something new, add a `SceneMotion` variant and document the pattern in §3 first — do not inline bespoke animation.
5. **Test on a throttled device.** Animation budget per scene: no more than two simultaneously running layout-touching springs, plus any number of GPU-only (opacity/transform/filter) springs.

---

## 5. Code conventions

### Components

- **One scene = one `SceneSection`.** Don't split a scene across multiple top-level components in `page.tsx`.
- Default to **Client Components** (`"use client"`) for anything that animates or reads scroll. Server Components are fine for static wrappers, but don't fight the framework — most of this site is interactive.
- Keep components under ~200 lines. If a scene needs more, extract sub-pieces into the same folder, not into the shared primitives.
- Shared primitives (`SceneSection`, `ParallaxLayer`, `AnimatedText`, `SocialCard`, `RelationshipMap`, `AudioController`) live in `src/app/components/`. Scene-specific bits live alongside the scene.

### TypeScript

- `strict` is on. No `any`. If you need an escape hatch, use `unknown` + a narrow type guard.
- Scene data types live in `src/content/scenes.ts`. Extend the `Scene` interface there rather than inventing per-scene shapes.
- Prefer `type` over `interface` for unions and props; use `interface` for extensible shapes (like `Scene`).

### Styling

Tailwind 4 is configured via `@tailwindcss/postcss`. Use Tailwind utility classes only — no inline `style={{}}` except for spring-driven values (`<animated.div style={springs}>`). Dark theme is the default; light mode is not a goal.

The palette and easings used across scenes are declared as CSS variables in `globals.css`:

```css
:root {
  --c-night:    #0b1026;   /* midnight blue */
  --c-violet:   #2a1e44;   /* deep violet */
  --c-gray:     #6a6f78;   /* cool gray */
  --c-amber:    #d8a86b;   /* warm accent */
  --ease-soft:  cubic-bezier(0.22, 1, 0.36, 1);
}
```

Reference them as `text-[var(--c-amber)]` etc. — never hard-code hex values in JSX, so a palette tweak stays in one place.

### File layout

```
src/app/
├── layout.tsx              # global font, html shell, dark theme
├── page.tsx                # composes <SceneSection /> ×8
├── globals.css             # Tailwind 4 entry + CSS variables (palette, easings)
├── components/             # SHARED primitives only
│   ├── SceneSection.tsx        # vertical chapter container, owns scroll trigger
│   ├── ParallaxLayer.tsx       # background / midground / foreground layers
│   ├── AnimatedText.tsx        # line-by-line narration reveal
│   ├── SocialCard.tsx          # floating post/comment/like card
│   ├── RelationshipMap.tsx     # node graph for the philosophy scene
│   └── AudioController.tsx     # scene-scoped ambient audio
└── scenes/                 # one folder per chapter
    ├── 01-opening/
    ├── 02-city/
    ├── ...
    └── 08-ending/

src/content/
└── scenes.ts               # typed story data — single source of truth
```

> The current `src/app/components` only contains `SpringDemo.tsx`. That file is a sandbox — replace it scene by scene as the real components land.

If this layout doesn't exist yet, follow it as you add files. Don't reorganize existing structure in passing — propose it in a separate change.

---

## 6. Asset handling

### Images

- **Source artwork** (Photoshop, layered exports): `assets/sceneN/`
- **Web-ready PNGs**: `public/images/scene-XX-*.png`
- **Aspect**: full-bleed backgrounds 16:9; panels 1:1; motifs transparent PNG
- **Compression**: run through `squoosh` or `sharp` before commit; aim < 400 KB per background
- **Naming**: `scene-01-countryside.png`, `scene-04-chat-bubble.png` — kebab-case, scene number first
- Use `next/image` for every raster image. Scene 01 (above-the-fold) gets `priority`; everything else lazy-loads.

### Audio

- **Location**: `public/audio/*.mp3` (broad browser support), mono if possible
- **Length**: 30–60s loopable; first 1.5s and last 1.5s near-silent to allow crossfade
- **Naming**: `countryside-night.mp3`, `notification.mp3`, `heartbeat.mp3`
- **Autoplay**: never on first paint — wait for the first user scroll, then start the Scene 01 track at 0 volume and fade in

Image generation prompts for each scene are in `CAU_CHUYEN.md §6`. Do not invent new prompts; if a scene needs a re-shoot, edit the prompt block there first. Do not commit unreferenced binaries — if an asset isn't used by code, remove it.

---

## 7. Performance budget

- **Initial page weight** (HTML + JS): < 200 KB
- **Per-scene images**: lazy-loaded except Scene 01
- **Animations**: only `transform`, `opacity`, `filter` — anything else is a regression
- **Springs**: ≤ 2 layout-touching springs running concurrently per scene
- **60fps target** under DevTools "CPU 4× slowdown"

---

## 8. What "done" looks like

Before declaring a task complete:

1. `pnpm lint` passes clean.
2. `pnpm build` succeeds with no new warnings.
3. You ran `pnpm dev` and **scrolled the relevant scene in a real browser** — animations actually fire, transitions land, no jank under 4× CPU throttling.
4. Audio (if touched) fades in/out without clicks.
5. New assets are committed both as source (`assets/`) and as web-ready exports (`public/`).
6. No new dependency was added without explicit user approval.
7. No backend-shaped code slipped in (see §2).

For UI work, type-checking alone is **not** verification — say so plainly if you couldn't open the page.

### Local commands

```bash
pnpm install          # first-time setup
pnpm dev              # http://localhost:3000, hot reload via Turbopack
pnpm lint             # ESLint pass
pnpm build && pnpm start  # smoke test the production bundle
```

---

## 9. Working with the human

- The user is a Vietnamese student working on a MLN111 (Marxism-Leninism) coursework project. Most prose in the repo is Vietnamese; code, types, and commit messages should be in English.
- Story content is sacred. Don't paraphrase, summarize, or "improve" narration text from `CAU_CHUYEN.md` — copy it verbatim into `scenes.ts`.
- When proposing a new scene effect, describe the *feeling* first (e.g. "the city should feel like it's pressing in"), then the implementation. The visual intent matters more than the technical novelty.
- Default to small, reviewable changes. One scene per PR is the right granularity.
- If you are about to add a feature that isn't directly visible in the scroll experience, **stop and ask**. This project does not need analytics, settings panels, share buttons, language switchers, or admin tooling.

---

## 10. Quick reference

| Need to…                          | Do this                                                |
| --------------------------------- | ------------------------------------------------------ |
| Add a new chapter                 | Append to `src/content/scenes.ts`, add a folder in `src/app/scenes/` |
| Add a new animation kind          | Document in §3 first, then implement as a primitive in `components/` |
| Add an image                      | Drop source in `assets/`, export to `public/images/`, reference via `next/image` |
| Add ambient audio                 | Drop in `public/audio/`, wire through `<AudioController />` with crossfade |
| Tune a color                      | Edit the CSS variables in `globals.css` — nothing else |
| Tune scroll feel                  | Adjust spring config (tension/friction) in the primitive, not per-scene |
| Add a backend / API / DB          | **Don't.** Re-read §2.                                 |
