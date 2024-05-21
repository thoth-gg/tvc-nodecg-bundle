import { DrawableEntity } from "../interfaces/entity";
import p5js, { Color } from "p5";

const X = 0;
const Y = 1;

export class AnimatePath extends DrawableEntity {
  keys: AnimatePathKey[];
  points: number[][];
  weight: number;
  color: Color;
  step: number;
  easing: number;
  alpha: number;
  sleep: number;
  loop: boolean;

  constructor(
    p5: p5js,
    keys: AnimatePathKey[],
    {
      weight = 1,
      strokeColor = p5.color("#fff"),
      easing = 0.3,
      loop = false,
    }: {
      weight?: number;
      strokeColor?: Color;
      easing?: number;
      loop?: boolean;
    }
  ) {
    super(p5);
    this.keys = keys;
    this.points = this.keys[0].points;
    this.weight = weight;
    this.color = strokeColor;
    this.step = 0;
    this.easing = easing;
    this.alpha = this.keys[0].alpha;
    this.color.setAlpha(this.alpha);
    this.sleep = this.keys[0].sleep;
    this.loop = loop;
  }

  draw() {
    if (this.step < this.keys.length) {
      if (this.sleep > 0) {
        this.sleep -= 1;
      } else {
        const pointsDiff = this.keys[this.step].points.map((target, i) => [
          (target[X] - this.points[i][X]) * this.easing,
          (target[Y] - this.points[i][Y]) * this.easing,
        ]);
        const alpha = (this.keys[this.step].alpha - this.alpha) * this.easing;
        if (
          pointsDiff.every(
            (point) =>
              this.p5.abs(point[X]) < 0.1 && this.p5.abs(point[Y]) < 0.1
          ) &&
          this.p5.abs(alpha) < 1
        ) {
          this.points = this.keys[this.step].points;
          this.alpha = this.keys[this.step].alpha;
          this.step += 1;
          if (this.keys[this.step]) {
            this.sleep = this.keys[this.step].sleep;
          } else {
            this.sleep = this.keys[0].sleep;
          }
        } else {
          this.points = this.points.map((point, i) => [
            point[0] + pointsDiff[i][0],
            point[1] + pointsDiff[i][1],
          ]);
          this.alpha += alpha;
        }
        this.color.setAlpha(this.alpha);
      }
    } else {
      if (this.loop) {
        this.step = 0;
      }
    }
    this.p5.stroke(this.color);
    this.p5.strokeWeight(this.weight);
    for (let i = 0; i < this.points.length - 1; i++) {
      this.p5.line(
        this.points[i][0],
        this.points[i][1],
        this.points[i + 1][0],
        this.points[i + 1][1]
      );
    }
    this.p5.strokeWeight(1);
  }
}

export class AnimatePathKey {
  points: number[][];
  alpha: number;
  sleep: number;

  constructor({
    points,
    alpha = 255,
    sleep = 0,
  }: {
    points: number[][];
    alpha?: number;
    sleep?: number;
  }) {
    this.points = points;
    this.alpha = alpha;
    this.sleep = sleep;
  }
}
