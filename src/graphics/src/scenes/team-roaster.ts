import p5js from "p5";

import { AnimateImage, AnimateImageKey } from "../entities/animate-image.ts";
import { AnimateText, AnimateTextKey } from "../entities/animate-text.ts";
import { AnimatePath, AnimatePathKey } from "../entities/animate-path.ts";

import { icon } from "../constant/image.ts";
import { noto } from "../constant/font.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { Team } from "../constant/team.ts";
import { getDefaultBackground } from "../global/index.ts";

export class TeamRoasterScene extends DrawableEntitySet {
  constructor(p5: p5js, { name, nameJa, players, width }: Team) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new AnimateImage(
        p5,
        icon,
        [new AnimateImageKey(icon, { x: 0, y: 0, width: 1920, height: 1080 })],
        {}
      ),

      // Team
      new AnimateText(
        p5,
        "TEAM",
        40,
        [
          new AnimateImageKey(icon, { x: 500, y: 123 + 120, alpha: 0 }),
          new AnimateImageKey(icon, { x: 86, y: 123 + 120, sleep: 20 }),
          new AnimateImageKey(icon, { x: 86, y: 123, sleep: 5 }),
        ],
        {}
      ),
      new AnimateText(
        p5,
        name.join(" "),
        108,
        [
          new AnimateImageKey(icon, { x: 238 + 200, y: 115 + 200, alpha: 0 }),
          new AnimateImageKey(icon, { x: 238 + 200, y: 115, sleep: 5 }),
          new AnimateImageKey(icon, { x: 238, y: 115 }),
        ],
        {}
      ),
      new AnimateText(
        p5,
        nameJa,
        20,
        [
          new AnimateTextKey({ x: width + 200, y: 180 + 200, alpha: 0 }),
          new AnimateTextKey({ x: width + 200, y: 180, sleep: 15 }),
          new AnimateTextKey({ x: width, y: 180 }),
        ],
        {
          font: noto,
        }
      ),
      new AnimatePath(
        p5,
        [
          new AnimatePathKey({
            points: [
              [87, 305],
              [87, 305],
            ],
            sleep: 15,
          }),
          new AnimatePathKey({
            points: [
              [87, 305],
              [1840, 305],
            ],
          }),
        ],
        {
          strokeColor: p5.color("#A7DBCD"),
          easing: 0.15,
        }
      ),

      // Players
      new AnimateText(
        p5,
        "PLAYER",
        40,
        [
          new AnimateTextKey({ x: 500, y: 348 + 400, alpha: 0 }),
          new AnimateTextKey({ x: 86, y: 348 + 400, sleep: 30 }),
          new AnimateTextKey({ x: 86, y: 348, sleep: 5 }),
        ],
        {}
      ),

      new AnimatePath(
        p5,
        [
          new AnimatePathKey({
            points: [
              [87, 805],
              [87, 805],
            ],
            sleep: 30,
          }),
          new AnimatePathKey({
            points: [
              [87, 805],
              [1840, 805],
            ],
          }),
        ],
        {
          strokeColor: p5.color("#A7DBCD"),
          easing: 0.15,
        }
      ),

      ...players
        .map((player, index) => [
          new AnimateText(
            p5,
            player.name.toUpperCase(),
            62,
            [
              new AnimateTextKey({
                x: 239 + 332 * index + 200,
                y: 345 + 500,
                alpha: 0,
              }),
              new AnimateTextKey({
                x: 239 + 332 * index + 200,
                y: 345,
                sleep: 5 * index,
              }),
              new AnimateTextKey({ x: 239 + 332 * index, y: 345, sleep: 10 }),
            ],
            {}
          ),
          new AnimateImage(
            p5,
            player.image,
            [
              new AnimateImageKey(player.image, {
                x: 240 + 332 * index,
                y: 448,
                width: 273,
                height: 308,
                sy: player.image.height,
              }),
              new AnimateImageKey(player.image, {
                x: 240 + 332 * index,
                y: 448,
                width: 273,
                height: 308,
                sleep: 20 + 5 * index,
              }),
            ],
            {}
          ),
        ])
        .flat(),
    ];
  }
}
