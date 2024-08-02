import p5js, { MediaElement } from "p5";
import { DrawableEntity } from "../interfaces/entity.js";

export class AnimateVideo extends DrawableEntity {
  video: MediaElement;
  isFinished: boolean = false;

  constructor(
    p5: p5js,
    video: MediaElement,
    isLoop: boolean = false
  ) {
    super(p5);
    this.video = video;
    this.video.onended(() => {
      this.isFinished = true;
    });
    if (isLoop) {
      this.video.loop();
    } else {
      this.video.stop();
      this.video.play();
    }
  }

  draw() {
    this.p5.image(this.video, 0, 0, this.p5.width, this.p5.height);
  }
  
  onended(callback: () => void) {
    this.video.onended(callback);
  }
}
