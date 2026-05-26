# MLN111 — Two Versions of Oneself

> An interactive scrollytelling website exploring how a young student, **M**, drifts between her online persona and her real self — examined through the Marxist-Leninist thesis that *"the essence of the human being is the ensemble of social relations."*

This project is a coursework piece for **MLN111 (Philosophy of Marxism-Leninism)** at FPT University. It is inspired by the visual storytelling style of [*The Boat* (SBS)](https://www.sbs.com.au/theboat/) — a graphic novel that unfolds through scroll, with images doing most of the talking.

---

## Concept

M is a student who leaves the countryside for the city. On social media she builds an image of confidence and inspiration; in real life she feels lonely, exhausted, and increasingly unsure of who she is. The site walks the viewer through eight scenes, from the night before she leaves home to the moment she begins to rebuild more honest social ties.

The story is not a moral lesson about "fake online lives." It is an illustrated argument:

- A person is not a fixed essence hiding inside the body.
- A person is *formed and re-formed* by the social relations they enter.
- Finding oneself is therefore not a retreat from society, but a more conscious choice of which relations to inhabit.

The full scene-by-scene script, philosophy layer, and image-generation prompts live in [CAU_CHUYEN.md](CAU_CHUYEN.md).

---

## Tech Stack

| Layer            | Choice                                              |
| ---------------- | --------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router)       |
| UI               | [React 19](https://react.dev)                       |
| Animation        | [@react-spring/web 10](https://www.react-spring.dev) |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com)           |
| Language         | TypeScript 5                                        |
| Package manager  | [pnpm](https://pnpm.io)                             |
| Linting          | ESLint 9 + `eslint-config-next`                     |

React Spring drives every scene's motion — scroll-based fades, parallax layers, split-screen reveals, drawn relationship graphs. See [CLAUDE.md](CLAUDE.md) §3 for the canonical animation patterns.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **pnpm** ≥ 9 (`npm i -g pnpm`)

### Install & run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-reloads on edits.

### Other scripts

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # ESLint
```

---

## Project Structure

```
mln111/
├── CAU_CHUYEN.md          # Story script, philosophy notes, image prompts (Vietnamese)
├── CLAUDE.md              # Conventions, animation patterns, scene authoring guide
├── README.md
├── assets/                # Source artwork by scene (pre-export)
│   └── scene1/
├── public/                # Static assets served by Next.js
├── src/
│   └── app/
│       ├── components/    # Reusable scene + UI components
│       │   └── SpringDemo.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── next.config.ts
├── tsconfig.json
└── package.json
```

The component layout will grow into the structure documented in [CLAUDE.md §5](CLAUDE.md), with one `SceneSection` per chapter and shared primitives (`ParallaxLayer`, `AnimatedText`, `SocialCard`, `RelationshipMap`, `AudioController`).

---

## The Eight Scenes

| #   | Title                                              | Beat                                                       |
| --- | -------------------------------------------------- | ---------------------------------------------------------- |
| 01  | The first lights                                   | The night before leaving the countryside                   |
| 02  | The city's new standards                           | First days of college; the comparison spiral begins        |
| 03  | A version of M who is always positive              | The online persona takes shape                             |
| 04  | "I'm fine"                                         | The performance leaks into offline relationships           |
| 05  | Who am I?                                          | Identity crisis in front of her own profile                |
| 06  | The Marxist-Leninist lens                          | M as the sum of her social relations                       |
| 07  | The group's position                               | Neither pure individualism nor passive social determinism  |
| 08  | Finding herself in more honest relations           | A quieter, open-ended resolution                           |

Full narration and visual direction for each scene are in [CAU_CHUYEN.md](CAU_CHUYEN.md).

---

## Credits

- Course: **MLN111 — Philosophy of Marxism-Leninism**, FPT University
- Visual reference: *The Boat* by Matt Huynh / SBS
- Story, philosophy mapping, and art direction documented in `CAU_CHUYEN.md`

---

## License

This is an academic project. Source code is available for educational reference; story content and generated artwork remain the authors'.
