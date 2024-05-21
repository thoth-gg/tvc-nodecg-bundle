import p5js from "p5";
import { background } from "../constant/video.ts";
import { DrawableEntity } from "../interfaces/entity.ts";

export class DefaultBackground extends DrawableEntity {
  constructor(p5: p5js) {
    super(p5);
    background.loop();
  }

  draw() {
    this.p5.image(background, 0, 0, this.p5.width, this.p5.height);
    this.p5.fill(0, 0, 0, 100);
    this.p5.rect(0, 0, this.p5.width, this.p5.height);
  }
}
