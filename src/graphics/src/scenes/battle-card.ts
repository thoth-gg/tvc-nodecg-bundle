import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";

import { reticule, vs } from "../constant/image.ts";
import { AnimateRect, AnimateRectKey } from "../entities/animate-rect.ts";
import p5js from "p5";
import { DrawableScene } from "../interfaces/entity.ts";
import { Team } from "../constant/team.ts";
import { getDefaultBackground } from "../global/index.ts";

export class BattleCardScene extends DrawableScene {
  team1: any;
  team2: any;

  constructor(p5: p5js, team1: Team, team2: Team) {
    super(p5);
    this.team1 = team1;
    this.team2 = team2;

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(
        this.p5,
        this.team1.largeLogo,
        [
          new AnimateImageKey(this.team1.largeLogo, {
            x: -1180 * 1.2,
            y: 0 - (1080 * 0.2) / 2,
            width: 1180 * 1.2,
            height: 1080 * 1.2,
            sleep: 40,
          }),
          new AnimateImageKey(this.team1.largeLogo, {
            x: -170 - (1180 * 0.2) / 2,
            y: 0 - (1080 * 0.2) / 2,
            width: 1180 * 1.2,
            height: 1080 * 1.2,
          }),
          new AnimateImageKey(this.team1.largeLogo, {
            x: -170,
            y: 0,
            width: 1180,
            height: 1080,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateImage(
        this.p5,
        this.team2.largeLogo,
        [
          new AnimateImageKey(this.team2.largeLogo, {
            x: 1920,
            y: 0 - (1080 * 0.2) / 2,
            width: 1180 * 1.2,
            height: 1080 * 1.2,
            sleep: 40,
          }),
          new AnimateImageKey(this.team2.largeLogo, {
            x: 1920 / 2 + 119 - 170 - (1180 * 0.2) / 2,
            y: 0 - (1080 * 0.2) / 2,
            width: 1180 * 1.2,
            height: 1080 * 1.2,
          }),
          new AnimateImageKey(this.team2.largeLogo, {
            x: 1920 / 2 + 119 - 170,
            y: 0,
            width: 1180,
            height: 1080,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateRect(
        this.p5,
        [
          new AnimateRectKey({ x: 1920 / 2, y: -10, width: 0, height: 1100 }),
          new AnimateRectKey({
            x: (1920 - 238) / 2,
            y: -10,
            width: 238,
            height: 1100,
          }),
        ],
        {
          color: p5.color("#000000"),
          stroke: p5.color("#1DB493"),
          strokeWeight: 2,
        }
      ),
      new AnimateImage(
        this.p5,
        this.team1.battleName,
        [
          new AnimateImageKey(this.team1.battleName, {
            x: (1920 - 238) / 2,
            y: -100,
            alpha: 0,
            sleep: 83,
          }),
          new AnimateImageKey(this.team1.battleName, {
            x: (1920 - 238) / 2,
            y: 0,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateImage(
        this.p5,
        this.team2.battleName,
        [
          new AnimateImageKey(this.team2.battleName, {
            x: (1920 - 238) / 2,
            y: 1080 - this.team2.battleName.height + 100,
            alpha: 0,
            sleep: 83,
          }),
          new AnimateImageKey(this.team2.battleName, {
            x: (1920 - 238) / 2,
            y: 1080 - this.team2.battleName.height,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateImage(
        this.p5,
        reticule,
        [
          new AnimateImageKey(reticule, {
            x: 1920 / 2 - 68 / 2,
            y: 1080 / 2 - 170 - 68 / 2,
            width: 68,
            height: 67,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateImageKey(reticule, {
            x: 1920 / 2 - 68 / 2,
            y: 1080 / 2 - 170 - 68 / 2,
            width: 68,
            height: 67,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateImage(
        this.p5,
        reticule,
        [
          new AnimateImageKey(reticule, {
            x: 1920 / 2 - 68 / 2,
            y: 1080 / 2 + 170 - 68 / 2,
            width: 68,
            height: 67,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateImageKey(reticule, {
            x: 1920 / 2 - 68 / 2,
            y: 1080 / 2 + 170 - 68 / 2,
            width: 68,
            height: 67,
          }),
        ],
        { easing: 0.1 }
      ),
      new AnimateImage(
        this.p5,
        vs,
        [
          new AnimateImageKey(vs, {
            x: 1920 / 2 - (114 * 1.3) / 2,
            y: 1080 / 2 - (178 * 1.3) / 2,
            width: 114 * 1.3,
            height: 178 * 1.3,
            sleep: 20,
            alpha: 0,
          }),
          new AnimateImageKey(vs, {
            x: 1920 / 2 - 114 / 2,
            y: 1080 / 2 - 178 / 2,
            width: 114,
            height: 178,
          }),
        ],
        {}
      ),
    ];
  }
}
