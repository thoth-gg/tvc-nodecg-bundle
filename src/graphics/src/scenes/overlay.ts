import p5js from 'p5';

import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';

import { BattleOverlayType } from '../constant/image.ts';
import { DrawableEntitySet } from '../interfaces/entity.ts';

export class OverlayScene extends DrawableEntitySet {
  constructor(p5: p5js, type: BattleOverlayType) {
    super(p5);

    this.entityList = [
      new AnimateImage(p5, type, [
        new AnimateImageKey(type, { x: 0, y: 0, width: 1920, height: 1080 }),
      ], { easing: 0.1 }),
    ]
  }
}
