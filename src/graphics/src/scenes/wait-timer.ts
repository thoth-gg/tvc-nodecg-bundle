import p5js from "p5";
import dayjs from "dayjs";

import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";

import { waitTimer } from "../constant/image.ts";
import { AnimateText, AnimateTextKey } from "../entities/animate-text.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class WaitTimerScene extends DrawableEntitySet {
  constructor(p5: p5js, date: Date, resultAry: number[]) {
    super(p5);

    const result = resultAry.map((r) => {
      if (r == 0) return "W - L";
      if (r == 2) return "L - W";
      return "VS";
    });

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(
        p5,
        waitTimer,
        [
          new AnimateImageKey(waitTimer, {
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateText(
        p5,
        () => {
          const diff = dayjs(date).diff(dayjs(), "second");
          if (diff < 0) return "00:00:00";
          const hour = Math.floor(diff / 3600);
          const minute = Math.floor((diff - hour * 3600) / 60);
          const second = diff - hour * 3600 - minute * 60;
          return `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
        },
        138,
        [new AnimateTextKey({ x: 103, y: 63 })],
        {}
      ),
      new AnimateText(
        p5,
        result[0],
        90,
        [new AnimateTextKey({ x: 478, y: 355 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        result[1],
        90,
        [new AnimateTextKey({ x: 478, y: 520 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        result[2],
        90,
        [new AnimateTextKey({ x: 478, y: 681 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        result[3],
        90,
        [new AnimateTextKey({ x: 1438, y: 355 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        result[4],
        90,
        [new AnimateTextKey({ x: 1438, y: 520 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        result[5],
        90,
        [new AnimateTextKey({ x: 1438, y: 681 })],
        {
          vAlign: p5.CENTER,
          hAlign: p5.CENTER,
        }
      ),
    ];
  }
}
