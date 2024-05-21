import p5js, { MediaElement } from "p5";

export let background: MediaElement;

export function preload(p5: p5js) {
  background = p5.createVideo("videos/background.mp4", () => {
    background.hide();
    background.volume(0);
    background.loop();
  });
}
