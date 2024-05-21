import p5js, { Image } from "p5";

import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";
import { FrameBackground } from "../components/frame-background.ts";

import { AwardPresent, AwardPresentType, backgroundLogo } from '../constant/image.ts';
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class AwardPresentScene extends DrawableEntitySet {
  constructor(p5: p5js, present: AwardPresentType) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new FrameBackground(p5),
      new AnimateImage(p5, backgroundLogo, [
        new AnimateImageKey(backgroundLogo, { x: 0, y: 0, width: 1920, height: 1080 }),
      ], {}),
      new AnimateImage(p5, present, [
        new AnimateImageKey(present, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 10 }),
        new AnimateImageKey(present, { x: 0, y: 0, width: 1920, height: 1080 }),
      ], { easing: 0.1 }),
    ]
  }
}
