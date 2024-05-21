import p5js from 'p5';

import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';
import { thothImage } from '../constant/image.ts';
import { DrawableEntitySet } from '../interfaces/entity.ts';
import { getDefaultBackground } from '../global/index.ts';

export class ThothImageScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(p5, thothImage, [
        new AnimateImageKey(thothImage, { x: -1, y: -2, width: 1922, height: 1088 })
      ], {}),
    ]
  }
}
