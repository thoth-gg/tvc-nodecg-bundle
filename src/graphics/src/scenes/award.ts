import p5js, { Image } from 'p5';

import { AwardTitle, AwardTitleType, kugai } from '../constant/image.ts';
import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';
import { AnimateText, AnimateTextKey } from '../entities/animate-text.ts';
import { Player } from '../constant/team.ts';
import { DrawableEntitySet } from '../interfaces/entity.ts';
import { getDefaultBackground } from '../global/index.ts';

export class AwardScene extends DrawableEntitySet {
  constructor(p5: p5js, title: AwardTitleType, player: Player) {
    super(p5);
    
    let playerImage = player.largeImage || new Image(0, 0);
    let playerName = player.name.toUpperCase() || '';

    if(title == AwardTitle.Arigatou) {
      playerImage = kugai;
      playerName = 'KUGAI';
    }

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(p5, playerImage, [
        new AnimateImageKey(playerImage, { x: 1920 / 4, y: 0, width: 1920 / 2, height: 1080, alpha: 0, sleep: 10 }),
        new AnimateImageKey(playerImage, { x: 1920 / 4, y: 0, width: 1920 / 2, height: 1080 }),
      ], { easing: 0.05 }),
      new AnimateImage(p5, title, [
        new AnimateImageKey(title, { x: 300, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 20 }),
        new AnimateImageKey(title, { x: 0, y: 0, width: 1920, height: 1080 }),
      ], { easing: 0.1 }),
      new AnimateText(p5, playerName,140,  [
        new AnimateTextKey({ x: 1920 / 4 * 3 + 60 - 300, y: 1080 / 2 - 8, alpha: 0, sleep: 20 }),
        new AnimateTextKey({ x: 1920 / 4 * 3 + 60, y: 1080 / 2 - 8, alpha: 255, sleep: 0 }),
      ], {
        vAlign: p5.CENTER,
        hAlign: p5.CENTER,
        filter: "drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 4px)",
        easing: 0.1,
      }),
    ]
  }
}
