import p5js from "p5";

import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";
import { FrameBackground } from "../components/frame-background.ts";

import { backgroundLogo, thothIcon } from "../constant/image.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class ThothIconScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(
        p5,
        backgroundLogo,
        [
          new AnimateImageKey(backgroundLogo, {
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,
          }),
        ],
        {}
      ),
      new AnimateImage(
        p5,
        thothIcon,
        [
          new AnimateImageKey(thothIcon, {
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateImageKey(thothIcon, {
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,
          }),
        ],
        {
          easing: 0.1,
        }
      ),
      new FrameBackground(p5),
    ];
  }
}
