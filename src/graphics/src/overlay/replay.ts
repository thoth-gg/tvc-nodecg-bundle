import { AnimateRect, AnimateRectKey } from "../entities/animate-rect.ts";
import { AnimateText, AnimateTextKey } from "../entities/animate-text.ts";
import { noto } from "../constant/font.ts";
import { DrawableOverlay } from "../interfaces/entity.ts";
import p5js from "p5";

export class ReplayOverlay extends DrawableOverlay {
  constructor(p5: p5js) {
    super(p5);
    this.entityList = [
      new AnimateRect(
        p5,
        [
          new AnimateRectKey({ x: 960, y: -10, width: 0, height: 1100, sleep: 20 }),
          new AnimateRectKey({ x: 960, y: -10, width: 1000, height: 1100, sleep: 0 }),
          new AnimateRectKey({ x: 1960, y: -10, width: 0, height: 1100, sleep: 50 }),
        ],
        {
          color: p5.color("#00130E"),
          easing: 0.15,
        }
      ),
      new AnimateRect(
        p5,
        [
          new AnimateRectKey({ x: 960, y: -10, width: 0, height: 1100, sleep: 20 }),
          new AnimateRectKey({ x: -40, y: -10, width: 1000, height: 1100, sleep: 0 }),
          new AnimateRectKey({ x: -40, y: -10, width: 0, height: 1100, sleep: 50 }),
        ],
        {
          color: p5.color("#00130E"),
          easing: 0.15,
        }
      ),
      new AnimateText(
        p5,
        "REPLAY",
        200,
        [
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2, alpha: 0, sleep: 20 }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2, alpha: 255, sleep: 0 }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2, alpha: 0, sleep: 64 }),
        ],
        {
          font: noto,
          textColor: p5.color("white"),
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
    ];
  }
}
