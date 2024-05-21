import p5js from "p5";
import { DrawableEntity } from "../interfaces/entity.ts";

export class LineBackground extends DrawableEntity {
  constructor(p5: p5js) {
    super(p5);
  }

  draw() {
    this.p5.background("#00130E");
    this.p5.noFill();
    this.p5.stroke("#07ab8211");
    const frame = this.p5.frameCount * 0.001;
    for (let i = 0; i < 500; i++) {
      this.p5.beginShape();
      const unit = this.p5.width / 5;
      for (let x = -unit; x <= this.p5.width + unit; x += unit) {
        let n = this.p5.noise(x * 0.001 + frame, i * 0.01 + frame, x * 0.02 + frame);
        let y = this.p5.map(n * 1.5 - 0.2, 0, 1, 0, this.p5.height);
        this.p5.curveVertex(x, y);
      }
      this.p5.endShape();
    }
  }
}
