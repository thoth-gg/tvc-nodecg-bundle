import p5js from 'p5';

import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';
import { DrawableEntitySet } from '../interfaces/entity.ts';
import { Team } from '../constant/team.ts';
import { getDefaultBackground } from '../global/index.ts';

export class WinnerScene extends DrawableEntitySet {
  constructor(p5: p5js, team: Team) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(p5, team.winnerImage, [
        new AnimateImageKey(team.winnerImage, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 10 }),
        new AnimateImageKey(team.winnerImage, { x: 0, y: 0, width: 1920, height: 1080}),
      ], { easing: 0.1 }),
    ]
  }
}
