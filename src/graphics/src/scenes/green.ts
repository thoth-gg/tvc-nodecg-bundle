import p5js from 'p5';

import { DrawableEntitySet } from '../interfaces/entity.ts';
import { getGreenBackground } from '../global/index.ts';

export class GreenScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getGreenBackground(),
    ]
  }
}
