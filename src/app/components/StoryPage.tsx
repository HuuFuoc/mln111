"use client";

import StoryScene from "./StoryScene";
import { storyScenes } from "../content/storyScenes";

export default function StoryPage() {
  return (
    <main className="relative bg-black text-zinc-100">
      {storyScenes.map((scene) => (
        <StoryScene key={scene.sceneId} {...scene} />
      ))}
    </main>
  );
}
