import p5js from "p5";

import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";

import { tournamentTitle, icon } from "../constant/image.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class TournamentLogoScene extends DrawableEntitySet {
  constructor(p5: p5js) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(p5, tournamentTitle, [
        new AnimateImageKey(tournamentTitle, {
          x: 0,
          y: 0,
          width: 1920,
          height: 1080,
        }),
      ], {}),
      new AnimateImage(p5, icon, [
        new AnimateImageKey(tournamentTitle, {
          x: 0,
          y: 0,
          width: 1920,
          height: 1080,
        }),
      ], {}),
    ];
  }
}
