import p5js from "p5";
import { tungsten } from "../constant/font.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";

export class LetterBar extends DrawableEntitySet {
  name: string;
  alpha: number;
  targetAlpha: number;
  sleep: number;

  constructor(p5: p5js, name: string) {
    super(p5);
    this.name = name;
    this.alpha = 0;
    this.targetAlpha = 128;
    this.sleep = 120;
  }

  draw() {
    if (this.sleep > 0) {
      this.sleep -= 1;
      return;
    }
    this.alpha += (this.targetAlpha - this.alpha) * 0.1;

    this.p5.textFont(tungsten);
    this.p5.fill(255, 255, 255, this.alpha);
    this.p5.textSize(60);
    this.p5.textAlign(this.p5.LEFT, this.p5.BASELINE);

    this.p5.push();
    this.p5.translate(16, -100 + (this.p5.frameCount % 100));
    this.p5.rotate(this.p5.radians(90));
    for (let i = 0; i < 14; i++) {
      this.p5.text(this.name, i * 100, 0);
    }
    this.p5.pop();

    this.p5.push();
    this.p5.translate(1920 - 16, 1180 - (this.p5.frameCount % 100));
    this.p5.rotate(this.p5.radians(270));
    for (let i = 0; i < 14; i++) {
      this.p5.text(this.name, i * 100, 0);
    }
    this.p5.pop();
  }
}
