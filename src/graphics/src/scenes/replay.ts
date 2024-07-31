import p5js from 'p5';

import { replay as replayImage } from "../constant/image.ts";
import { replay as replayVideo } from "../constant/video.ts";

import { DrawableEntitySet } from '../interfaces/entity.ts';
import { getGreenBackground } from '../global/index.ts';
import { AnimateVideo } from '../entities/animate-video.ts';
import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';

export class ReplayScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getGreenBackground(),
      new AnimateImage(p5, 
        replayImage, 
        [
          new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 10 }),
          new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080 }),
        ],
        { easing: 0.1 }
      ),
      new AnimateVideo(p5, replayVideo),
    ]
  }
}
