"use client";

import { useState } from "react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";

const items = ["Next.js", "React", "TypeScript", "Tailwind", "React Spring"];

export default function SpringDemo() {
  const [toggle, setToggle] = useState(false);

  const boxSpring = useSpring({
    transform: toggle ? "scale(1.2) rotate(180deg)" : "scale(1) rotate(0deg)",
    backgroundColor: toggle ? "#6366f1" : "#ec4899",
    config: config.wobbly,
  });

  const trail = useTrail(items.length, {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    config: config.gentle,
    delay: 200,
  });

  return (
    <div className="flex flex-col items-center gap-10">
      <animated.div
        style={boxSpring}
        onClick={() => setToggle((v) => !v)}
        className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-xl select-none"
      >
        Click me
      </animated.div>

      <ul className="flex flex-col gap-2">
        {trail.map((style, index) => (
          <animated.li
            key={items[index]}
            style={style}
            className="rounded-lg bg-white/80 px-4 py-2 text-base font-medium text-zinc-900 shadow-sm backdrop-blur dark:bg-zinc-800/80 dark:text-zinc-100"
          >
            {items[index]}
          </animated.li>
        ))}
      </ul>
    </div>
  );
}
