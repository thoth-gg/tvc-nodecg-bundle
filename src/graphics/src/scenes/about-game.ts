import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";
import { FrameBackground } from "../components/frame-background.ts";

import { backgroundLogo, aboutGame } from "../constant/image.ts";
import { getDefaultBackground } from "../global/index.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import p5js from "p5";

export class AboutGameScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new FrameBackground(p5),
      new AnimateImage(
        p5,
        backgroundLogo,
        [
          new AnimateImageKey(backgroundLogo, { x: 0, y: 0, width: 1920, height: 1080 }),
        ],
        {}
      ),
      new AnimateImage(
        p5,
        aboutGame,
        [
          new AnimateImageKey(aboutGame, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 10 }),
          new AnimateImageKey(aboutGame, { x: 0, y: 0, width: 1920, height: 1080 }),
        ],
        {
          easing: 0.1,
        }
      ),
    ];
  }
}
