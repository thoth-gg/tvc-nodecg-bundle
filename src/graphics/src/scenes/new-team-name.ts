import p5js from "p5";

import { AnimatePath, AnimatePathKey } from "../entities/animate-path.ts";
import { AnimateText, AnimateTextKey } from "../entities/animate-text.ts";
import { LetterBar } from "../components/letter-bar.ts";

import { noto, opensauceone } from "../constant/font.ts";
import { Team } from "../constant/team.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";
import { getDefaultBackground } from "../global/index.ts";

export class NewTeamNameScene extends DrawableEntitySet {
  constructor(p5: p5js, { name, nameJa, oldName, players, shortName }: Team) {
    super(p5);

    this.entityList = [
      getDefaultBackground(),
      new LetterBar(p5, shortName),
      new AnimateText(
        p5,
        oldName,
        70,
        [
          new AnimateTextKey({
            x: 1920 / 2,
            y: 1080 / 2 - 320 - 100,
            alpha: 0,
          }),
          new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 320 }),
        ],
        {
          hAlign: p5.CENTER,
          vAlign: p5.CENTER,
        }
      ),
      ...[...new Array(3)].map((_, i) => {
        if (name.length == 1) {
          return new AnimatePath(
            p5,
            [
              new AnimatePathKey({
                points: [
                  [1920 / 2 - 8, 332 + 20 * i - 8],
                  [1920 / 2, 340 + 20 * i - 8],
                  [1920 / 2 + 8, 332 + 20 * i - 8],
                ],
                alpha: 0,
                sleep: 25 + 5 * i,
              }),
              new AnimatePathKey({
                points: [
                  [1920 / 2 - 8, 332 + 20 * i],
                  [1920 / 2, 340 + 20 * i],
                  [1920 / 2 + 8, 332 + 20 * i],
                ],
              }),
            ],
            {
              weight: 3,
            }
          );
        } else {
          return new AnimatePath(
            p5,
            [
              new AnimatePathKey({
                points: [
                  [1920 / 2 - 8, 312 + 20 * i - 8],
                  [1920 / 2, 320 + 20 * i - 8],
                  [1920 / 2 + 8, 312 + 20 * i - 8],
                ],
                alpha: 0,
                sleep: 25 + 5 * i,
              }),
              new AnimatePathKey({
                points: [
                  [1920 / 2 - 8, 312 + 20 * i],
                  [1920 / 2, 320 + 20 * i],
                  [1920 / 2 + 8, 312 + 20 * i],
                ],
              }),
            ],
            {
              weight: 3,
            }
          );
        }
      }),
    ];

    if (name.length == 1) {
      this.entityList.push(
        new AnimateText(
          p5,
          name.join(" "),
          180,
          [
            new AnimateTextKey({
              x: 1920 / 2 + 500,
              y: 1080 / 2 - 75,
              alpha: 0,
              sleep: 60,
            }),
            new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 75 }),
            new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 25 }),
          ],
          {
            hAlign: p5.CENTER,
            vAlign: p5.CENTER,
          }
        ),
        new AnimateText(
          p5,
          nameJa,
          36,
          [
            new AnimateTextKey({
              x: 1920 / 2 - 300,
              y: 1080 / 2 + (name.length == 1 ? 90 : 100) + 50,
              alpha: 0,
              sleep: 60,
            }),
            new AnimateTextKey({
              x: 1920 / 2,
              y: 1080 / 2 + (name.length == 1 ? 90 : 100) + 50,
            }),
            new AnimateTextKey({
              x: 1920 / 2,
              y: 1080 / 2 + (name.length == 1 ? 90 : 100),
            }),
          ],
          {
            font: noto,
            hAlign: p5.CENTER,
            vAlign: p5.CENTER,
            letterSpacing: 100,
          }
        )
      );
    } else {
      this.entityList.push(
        new AnimateText(
          p5,
          name[0],
          70,
          [
            new AnimateTextKey({
              x: 1920 / 2 + 200,
              y: 1080 / 2 - 100,
              alpha: 0,
              sleep: 60,
            }),
            new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 100 }),
          ],
          {
            hAlign: p5.CENTER,
            vAlign: p5.CENTER,
          }
        ),
        new AnimateText(
          p5,
          name[1],
          160,
          [
            new AnimateTextKey({
              x: 1920 / 2 - 200,
              y: 1080 / 2 - 10,
              alpha: 0,
              sleep: 60,
            }),
            new AnimateTextKey({ x: 1920 / 2, y: 1080 / 2 - 10 }),
          ],
          {
            hAlign: p5.CENTER,
            vAlign: p5.CENTER,
          }
        ),
        new AnimateText(
          p5,
          nameJa,
          36,
          [
            new AnimateTextKey({
              x: 1920 / 2,
              y: 1080 / 2 + (name.length == 1 ? 90 : 100) + 50,
              alpha: 0,
              sleep: 80,
            }),
            new AnimateTextKey({
              x: 1920 / 2,
              y: 1080 / 2 + (name.length == 1 ? 90 : 100),
            }),
          ],
          {
            font: noto,
            hAlign: p5.CENTER,
            vAlign: p5.CENTER,
            letterSpacing: 100,
          }
        )
      );
    }

    this.entityList.push(
      ...[players[4], players[2], players[0], players[1], players[3]].map(
        (player, index) =>
          new AnimateText(
            p5,
            player.name.charAt(0).toUpperCase() + player.name.slice(1),
            16,
            [
              new AnimateTextKey({
                x: 360 + 120 + 240 * 2,
                y: 857,
                alpha: 0,
                sleep: 30 + 60,
              }),
              new AnimateTextKey({ x: 360 + 120 + 240 * index, y: 857 }),
            ],
            {
              font: opensauceone,
              hAlign: p5.CENTER,
              vAlign: p5.CENTER,
              easing: 0.15,
            }
          )
      )
    );
    this.entityList.push(
      ...[...new Array(6)].map(
        (_, i) =>
          new AnimatePath(
            p5,
            [
              new AnimatePathKey({
                points: [
                  [360 + 240 * 2.5, 860 - 11],
                  [360 + 240 * 2.5, 860 + 11],
                ],
                sleep: 30 + 60,
                alpha: 0,
              }),
              new AnimatePathKey({
                points: [
                  [360 + 240 * i, 860 - 11],
                  [360 + 240 * i, 860 + 11],
                ],
              }),
              new AnimatePathKey({
                points: [
                  [360 + 240 * i, 860 - 11],
                  [360 + 240 * i, 860 + 11],
                ],
              }),
            ],
            {
              easing: 0.15,
            }
          )
      )
    );
  }
}
