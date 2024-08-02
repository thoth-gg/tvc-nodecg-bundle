import { noto } from "../constant/font.ts";
import { DrawableOverlay } from "../interfaces/entity.ts";
import p5js from "p5";
import { AnimateVideo } from "../entities/animate-video.ts";
import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";

import { replay as replayImage } from "../constant/image.ts";
import { replay as replayVideo } from "../constant/video.ts";

export class ReplayOverlay extends DrawableOverlay {
  isStopped: boolean = false;

  constructor(p5: p5js) {
    super(p5);
    this.entityList = [
      new AnimateImage(p5, 
        replayImage, 
        [
          new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 100 }),
          new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080 }),
        ],
        { easing: 0.1 }
      ),
      new AnimateVideo(p5, replayVideo),
    ];

    nodecg.listenFor('overlay:replay:stop', (event) => {
      const cutIn = new AnimateVideo(p5, replayVideo)
      cutIn.onended(() => {
        this.isStopped = true;
      })
      
      this.entityList = [
        new AnimateImage(p5, 
          replayImage, 
          [
            new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080, sleep: 100 }),
            new AnimateImageKey(replayImage, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0 }),
          ],
          { easing: 0.1 }
        ),
        cutIn,
      ];
    })
  }

  override isFinished(): boolean {
    return this.isStopped;
  }
}
