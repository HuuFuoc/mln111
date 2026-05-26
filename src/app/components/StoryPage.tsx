"use client";

import StoryScene from "./StoryScene";
import AudioController from "./AudioController";
import SceneNav from "./SceneNav";
import { sceneAudio, sceneNav, storyScenes } from "../content/storyScenes";

export default function StoryPage() {
  return (
    <main className="relative bg-black text-zinc-100">
      {storyScenes.map((scene) => (
        <StoryScene key={scene.sceneId} {...scene} />
      ))}
      <SceneNav scenes={sceneNav} />
      <AudioController tracks={sceneAudio} />
    </main>
  );
}
