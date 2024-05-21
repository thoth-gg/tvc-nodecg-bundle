import p5js, { Image } from "p5";
import { DrawableEntity } from "../interfaces/entity";

export class AnimateImage extends DrawableEntity {
  img: Image;
  keys: AnimateImageKey[];
  x: number;
  y: number;
  width: number;
  height: number;
  sx: number;
  sy: number;
  swidth: number;
  sheight: number;
  step: number;
  alpha: number;
  easing: number;

  constructor(
    p5: p5js,
    img: Image,
    keys: AnimateImageKey[],
    {
      easing = 0.3,
    }: {
      easing?: number;
    }
  ) {
    super(p5);
    this.img = img;
    this.keys = keys;
    this.x = this.keys[0].x;
    this.y = this.keys[0].y;
    this.width = this.keys[0].width;
    this.height = this.keys[0].height;
    this.sx = this.keys[0].sx;
    this.sy = this.keys[0].sy;
    this.swidth = this.keys[0].sWidth;
    this.sheight = this.keys[0].sHeight;
    this.step = 0;
    this.alpha = this.keys[0].alpha;
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
        const dsx = (this.keys[this.step].sx - this.sx) * this.easing;
        const dsy = (this.keys[this.step].sy - this.sy) * this.easing;
        const dsWidth =
          (this.keys[this.step].sWidth - this.swidth) * this.easing;
        const dsHeight =
          (this.keys[this.step].sHeight - this.sheight) * this.easing;
        const alpha = (this.keys[this.step].alpha - this.alpha) * this.easing;
        if (
          this.p5.abs(dx) < 1 &&
          this.p5.abs(dy) < 1 &&
          this.p5.abs(dWidth) < 1 &&
          this.p5.abs(dHeight) < 1 &&
          this.p5.abs(dsx) < 1 &&
          this.p5.abs(dsy) < 1 &&
          this.p5.abs(dsWidth) < 1 &&
          this.p5.abs(dsHeight) < 1 &&
          this.p5.abs(alpha) < 1
        ) {
          this.step += 1;
        }
        this.x += dx;
        this.y += dy;
        this.sx += dsx;
        this.sy += dsy;
        this.width += dWidth;
        this.height += dHeight;
        this.swidth += dsWidth;
        this.sheight += dsHeight;
        this.alpha += alpha;
      }
    }

    this.p5.tint(255, this.alpha);
    this.p5.image(
      this.img,
      this.x + this.sx,
      this.y + this.sy,
      this.width,
      this.height,
      this.sx,
      this.sy,
      this.swidth,
      this.sheight
    );
  }
}

// export interface AnimateImageKey {
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   sx: number;
//   sy: number;
//   sWidth: number;
//   sHeight: number;
//   alpha: number;
//   sleep: number;
// }

export class AnimateImageKey {
  x: number;
  y: number;
  width: number;
  height: number;
  sx: number;
  sy: number;
  sWidth: number;
  sHeight: number;
  alpha: number;
  sleep: number;

  constructor(
    img: Image,
    {
      x,
      y,
      width,
      height,
      alpha = 255,
      sleep = 0,
      sx,
      sy,
      sWidth,
      sHeight,
    }: {
      x: number;
      y: number;
      width?: number;
      height?: number;
      alpha?: number;
      sleep?: number;
      sx?: number;
      sy?: number;
      sWidth?: number;
      sHeight?: number;
    }
  ) {
    this.x = x;
    this.y = y;
    this.width = width || img.width;
    this.height = height || img.height;
    if (sx == undefined || sWidth == undefined) {
      this.sx = 0;
      this.sWidth = img.width;
    } else {
      this.sx = sx;
      this.sWidth = sWidth;
    }
    if (sy == undefined || sHeight == undefined) {
      this.sy = 0;
      this.sHeight = img.height;
    } else {
      this.sy = sy;
      this.sHeight = sHeight;
    }
    this.alpha = alpha;
    this.sleep = sleep;
  }
}
