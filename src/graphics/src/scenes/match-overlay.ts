import p5js from "p5";
import { getGreenBackground } from "../global/index.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";

export class MatchOverlayScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [getGreenBackground()];
  }
}
