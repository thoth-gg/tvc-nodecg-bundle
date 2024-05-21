import p5js from "p5";

import { FrameBackground } from "../components/frame-background.ts";
import { druk } from "../constant/font.ts";
import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";
import { AnimateText, AnimateTextKey } from "../entities/animate-text.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { Team } from "../constant/team.ts";
import { getDefaultBackground } from "../global/index.ts";

export class MapWinnerScene extends DrawableEntitySet {
  constructor(p5: p5js, team: Team) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateText(
        p5,
        "WINNER",
        215,
        [
          new AnimateTextKey({
            x: 1920 / 2 - 200,
            y: 1080 / 2 - 90 * 3,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 90 * 3, alpha: 64 }),
        ],
        {
          font: druk,
          textColor: p5.color("#1DB493"),
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        "WINNER",
        215,
        [
          new AnimateTextKey({
            x: 1920 / 2 + 200,
            y: 1080 / 2 - 90,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 90, alpha: 64 }),
        ],
        {
          font: druk,
          textColor: p5.color("#1DB493"),
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        "WINNER",
        215,
        [
          new AnimateTextKey({
            x: 1920 / 2 - 200,
            y: 1080 / 2 + 90,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 + 90, alpha: 64 }),
        ],
        {
          font: druk,
          textColor: p5.color("#1DB493"),
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
      new AnimateText(
        p5,
        "WINNER",
        215,
        [
          new AnimateTextKey({
            x: 1920 / 2 + 200,
            y: 1080 / 2 + 90 * 3,
            alpha: 0,
            sleep: 10,
          }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 + 90 * 3, alpha: 64 }),
        ],
        {
          font: druk,
          textColor: p5.color("#1DB493"),
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
      new AnimateImage(
        p5,
        team.mapWinnerImage,
        [
          new AnimateImageKey(team.mapWinnerImage, { x: 0, y: 0, width: 1920, height: 1080, alpha: 0, sleep: 0 }),
          new AnimateImageKey(team.mapWinnerImage, { x: 0, y: 0, width: 1920, height: 1080 }),
        ],
        { easing: 0.1 }
      ),
      new FrameBackground(p5, true),
    ];
  }
}
