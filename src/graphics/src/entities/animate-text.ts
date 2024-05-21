import p5js, { HORIZ_ALIGN, VERT_ALIGN } from "p5";
import { tungsten } from "../constant/font.ts";
import { DrawableEntity } from "../interfaces/entity.ts";

export class AnimateText extends DrawableEntity {
  text: string | Function;
  size: number;
  color: p5js.Color;
  font: p5js.Font;
  filter?: string;
  keys: AnimateTextKey[];
  alpha: number;
  currentPositionX: number;
  currentPositionY: number;
  step: number;
  hAlign: HORIZ_ALIGN;
  vAlign: VERT_ALIGN;
  letterSpacing: number;
  easing: number;

  constructor(
    p5: p5js,
    text: string | Function,
    size: number,
    keys: AnimateTextKey[],
    {
      textColor = p5.color("#fff"),
      font = tungsten,
      hAlign = p5.LEFT,
      vAlign = p5.TOP,
      letterSpacing = 0,
      easing = 0.3,
      filter,
    }: {
      textColor?: p5js.Color;
      font?: p5js.Font;
      hAlign?: HORIZ_ALIGN;
      vAlign?: VERT_ALIGN;
      letterSpacing?: number;
      easing?: number;
      filter?: string;
    }
  ) {
    super(p5);
    this.text = text;
    this.size = size;
    this.color = textColor;
    this.font = font;
    this.filter = filter;
    this.keys = keys.map((key) => {
      return {
        x: key.x || 0,
        y: key.y || 0,
        alpha: key.alpha == undefined ? 255 : key.alpha,
        sleep: key.sleep || 0,
      } as AnimateTextKey;
    });

    this.alpha = this.keys[0].alpha;
    this.color.setAlpha(this.alpha);
    this.currentPositionX = this.keys[0].x;
    this.currentPositionY = this.keys[0].y;
    this.step = 0;
    this.hAlign = hAlign || p5.LEFT;
    this.vAlign = vAlign || p5.TOP;
    this.letterSpacing = letterSpacing;
    this.easing = easing;
  }

  draw() {
    if (this.step < this.keys.length) {
      if (this.keys[this.step].sleep > 0) {
        this.keys[this.step].sleep -= 1;
      } else {
        const currentPositionX =
          (this.keys[this.step].x - this.currentPositionX) * this.easing;
        const currentPositionY =
          (this.keys[this.step].y - this.currentPositionY) * this.easing;
        const alpha = (this.keys[this.step].alpha - this.alpha) * this.easing;
        if (
          this.p5.abs(currentPositionX) < 1 &&
          this.p5.abs(currentPositionY) < 1 &&
          this.p5.abs(alpha) < 1
        ) {
          this.step += 1;
        }
        this.currentPositionX += currentPositionX;
        this.currentPositionY += currentPositionY;
        this.alpha += alpha;
        this.color.setAlpha(this.alpha);
      }
    }

    this.p5.push();
    if (this.filter) {
      this.p5.drawingContext.filter = this.filter;
    }
    this.p5.noStroke();
    this.p5.textAlign(this.hAlign, this.vAlign);
    this.p5.textSize(this.size);
    this.p5.fill(this.color);
    this.p5.textFont(this.font);
    let t = this.text;
    if (typeof this.text == "function") {
      t = this.text();
    }
    this.p5.text(t, this.currentPositionX, this.currentPositionY);
    this.p5.pop();
  }
}

export class AnimateTextKey {
  x: number;
  y: number;
  alpha: number;
  sleep: number;

  constructor({
    x,
    y,
    alpha = 255,
    sleep = 0,
  }: {
    x: number;
    y: number;
    alpha?: number;
    sleep?: number;
  }) {
    this.x = x;
    this.y = y;
    this.alpha = alpha;
    this.sleep = sleep;
  }
}
