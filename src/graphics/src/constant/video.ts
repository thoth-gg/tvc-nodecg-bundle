import p5js, { MediaElement } from "p5";

export let background: MediaElement;
export let replay: MediaElement;
export let roundwin: MediaElement;

export function preload(p5: p5js) {
  background = p5.createVideo("videos/background.mp4", () => {
    background.hide();
    background.volume(0);
    background.loop();
  });
  replay = p5.createVideo("videos/replay.webm", () => {
    replay.hide(); 
    replay.volume(0);
    replay.play();
  });
  roundwin = p5.createVideo("videos/roundwin.webm", () => {
    roundwin.hide();
    roundwin.volume(0);
    roundwin.play();
  });
}
