import p5js, { Color } from "p5";
import { DrawableEntity } from "../interfaces/entity";

export class AnimateRect extends DrawableEntity {
  keys: any[];
  x: number;
  y: number;
  width: number;
  height: number;
  alpha: number;
  color: any;
  stroke: any;
  strokeWeight: number;
  step: number;
  frame: number;
  easing: number;

  constructor(
    p5: p5js,
    keys: AnimateRectKey[],
    {
      color,
      stroke,
      strokeWeight = 1,
      easing = 0.3,
    }: {
      color?: Color;
      stroke?: Color;
      strokeWeight?: number;
      easing?: number;
    }
  ) {
    super(p5);
    this.p5 = p5;
    this.keys = keys;
    this.x = this.keys[0].x;
    this.y = this.keys[0].y;
    this.width = this.keys[0].width;
    this.height = this.keys[0].height;
    this.alpha = this.keys[0].alpha;
    this.color = color;
    this.stroke = stroke;
    this.strokeWeight = strokeWeight;
    this.step = 0;
    this.frame = 0;
    // this.sleep = this.keys[0].sleep;
    this.easing = easing;
  }
  draw() {
    if (this.step < this.keys.length) {
      if (this.keys[this.step].sleep > 0) {
        this.keys[this.step].sleep -= 1;
      } else {
        const dx = (this.keys[this.step].x - this.x) * this.easing;
        const dy = (this.keys[this.step].y - this.y) * this.easing;
        const dWidth = (this.keys[this.step].width - this.width) * this.easing;
        const dHeight =
          (this.keys[this.step].height - this.height) * this.easing;
        const alpha = (this.keys[this.step].alpha - this.alpha) * this.easing;
        if (
          this.p5.abs(dx) < 1 &&
          this.p5.abs(dy) < 1 &&
          this.p5.abs(dWidth) < 1 &&
          this.p5.abs(dHeight) < 1 &&
          this.p5.abs(alpha) < 1
        ) {
          this.step += 1;
        }
        this.x += dx;
        this.y += dy;
        this.width += dWidth;
        this.height += dHeight;
        this.alpha += alpha;
      }
    }
    this.p5.push();
    if (this.stroke) this.p5.stroke(this.stroke);
    else this.p5.noStroke();
    this.p5.strokeWeight(this.strokeWeight);
    if (this.color) this.p5.fill(this.color);
    else this.p5.noFill();
    this.p5.rect(this.x, this.y, this.width, this.height);
    this.p5.pop();
  }
}

export class AnimateRectKey {
  x: number;
  y: number;
  width: number;
  height: number;
  alpha: number;
  sleep: number;

  constructor({
    x,
    y,
    width,
    height,
    alpha = 255,
    sleep = 0,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    alpha?: number;
    sleep?: number;
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.alpha = alpha;
    this.sleep = sleep;
  }
}
