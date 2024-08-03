import p5js from 'p5';

import { AnimateImage, AnimateImageKey } from '../entities/animate-image.ts';

import { DrawableEntitySet, DrawableOverlay } from '../interfaces/entity.ts';
import { AnimateVideo } from '../entities/animate-video.ts';

import { replay as replayImage, BattleOverlayType } from "../constant/image.ts";
import { replay as replayVideo } from "../constant/video.ts";
import { ReplayOverlay } from '../overlay/replay.ts';
import { getGreenBackground } from '../global/index.ts';
import { GreenBackground } from '../global/green-background.ts';

export class OverlayScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    // TODO: 試合オーバーレイ
    // new AnimateImage(p5, type, [
    //   new AnimateImageKey(type, { x: 0, y: 0, width: 1920, height: 1080 }),
    // ], { easing: 0.1 }),

    this.entityList = [
      getGreenBackground()
    ]

    nodecg.listenFor('overlay:replay:start', (event) => {
      this.entityList.push(new ReplayOverlay(p5))
    })
  }
  
  override draw() {
    this.entityList = this.entityList.filter((entity) => !entity.isFinished())
    this.entityList.forEach((entity) => {
      this.p5.push();
      entity.draw();
      this.p5.pop();
    });
  }
}
