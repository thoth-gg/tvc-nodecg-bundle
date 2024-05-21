import p5js from "p5";

import { FrameBackground } from "../components/frame-background.ts";
import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";

import { backgroundLogo } from "../constant/image.ts";
import { Player } from "../constant/team.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class ProfileScene extends DrawableEntitySet {
  constructor(p5: p5js, player: Player) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(p5, backgroundLogo, [
        new AnimateImageKey(backgroundLogo, { x: 0, y: 0, width: 1920, height: 1080 }),
      ], {}),
      new AnimateImage(p5, player.interview!, [
        new AnimateImageKey(backgroundLogo, { x: 6, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 10 }),
        new AnimateImageKey(backgroundLogo, { x: 6, y: 0, width: 1920, height: 1080 }),
      ], {}),
      new FrameBackground(p5),
    ];
  }
}
