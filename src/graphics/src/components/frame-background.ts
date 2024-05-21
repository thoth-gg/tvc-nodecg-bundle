import p5js from "p5";
import { AnimatePath } from "../entities/animate-path.ts";
import { DrawableEntitySet } from "../interfaces/entity.ts";

export class FrameBackground extends DrawableEntitySet {
  constructor(p5: p5js, rotate = false) {
    super(p5);
    const tombos: AnimatePath[] = [];

    if (rotate) {
      tombos.push(
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 1080 - 27],
                [1920 / 2, 1080 - 27],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2, 1080 - 27],
                [1920 / 2, 1080 - 52],
              ],
              alpha: 255,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2, 1080 - 52],
                [1920 / 2, 1080 - 52],
              ],
              alpha: 255,
              sleep: 206,
            },
            {
              points: [
                [1920 / 2, 1080 - 52],
                [1920 / 2, 1080 - 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 27],
                [1920 / 2, 27],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2, 27],
                [1920 / 2, 52],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2, 52],
                [1920 / 2, 52],
              ],
              alpha: 0,
              sleep: 206,
            },
            {
              points: [
                [1920 / 2, 52],
                [1920 / 2, 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        // tombo top
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 47],
                [1920 / 2, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 - 52, 47],
                [1920 / 2, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 - 52, 47],
                [1920 / 2 - 52, 47],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 / 2 - 52, 47],
                [1920 / 2 - 52, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        // tombo bottom
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 47],
                [1920 / 2, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 + 52, 47],
                [1920 / 2, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 + 52, 47],
                [1920 / 2 + 52, 47],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 / 2 + 52, 47],
                [1920 / 2 + 52, 47],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),

        // tombo top
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 1080 - 47],
                [1920 / 2, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 - 52, 1080 - 47],
                [1920 / 2, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 - 52, 1080 - 47],
                [1920 / 2 - 52, 1080 - 47],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 / 2 - 52, 1080 - 47],
                [1920 / 2 - 52, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        // tombo bottom
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 / 2, 1080 - 47],
                [1920 / 2, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 + 52, 1080 - 47],
                [1920 / 2, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 / 2 + 52, 1080 - 47],
                [1920 / 2 + 52, 1080 - 47],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 / 2 + 52, 1080 - 47],
                [1920 / 2 + 52, 1080 - 47],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        )
      );
    } else {
      tombos.push(
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 - 27, 1080 / 2],
                [1920 - 27, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 27, 1080 / 2],
                [1920 - 52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 52, 1080 / 2],
                [1920 - 52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 206,
            },
            {
              points: [
                [1920 - 52, 1080 / 2],
                [1920 - 52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),

        new AnimatePath(
          p5,
          [
            {
              points: [
                [27, 1080 / 2],
                [27, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [27, 1080 / 2],
                [52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [52, 1080 / 2],
                [52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 206,
            },
            {
              points: [
                [52, 1080 / 2],
                [52, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),

        // tombo top
        new AnimatePath(
          p5,
          [
            {
              points: [
                [47, 1080 / 2],
                [47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [47, 1080 / 2 - 52],
                [47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [47, 1080 / 2 - 52],
                [47, 1080 / 2 - 52],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [47, 1080 / 2 - 52],
                [47, 1080 / 2 - 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        // tombo bottom
        new AnimatePath(
          p5,
          [
            {
              points: [
                [47, 1080 / 2],
                [47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [47, 1080 / 2 + 52],
                [47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [47, 1080 / 2 + 52],
                [47, 1080 / 2 + 52],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [47, 1080 / 2 + 52],
                [47, 1080 / 2 + 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),

        // tombo top
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 - 47, 1080 / 2],
                [1920 - 47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 - 52],
                [1920 - 47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 - 52],
                [1920 - 47, 1080 / 2 - 52],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 - 52],
                [1920 - 47, 1080 / 2 - 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        ),
        // tombo bottom
        new AnimatePath(
          p5,
          [
            {
              points: [
                [1920 - 47, 1080 / 2],
                [1920 - 47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 + 52],
                [1920 - 47, 1080 / 2],
              ],
              alpha: 0,
              sleep: 0,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 + 52],
                [1920 - 47, 1080 / 2 + 52],
              ],
              alpha: 0,
              sleep: 200,
            },
            {
              points: [
                [1920 - 47, 1080 / 2 + 52],
                [1920 - 47, 1080 / 2 + 52],
              ],
              alpha: 0,
              sleep: 0,
            },
          ],
          {
            weight: 2,
            loop: true,
          }
        )
      );
    }

    const keysA = [
      {
        points: [
          [70, 55],
          [45, 55],
          [45, 80],
        ],
        alpha: 0,
        sleep: 30,
      },
      {
        points: [
          [65, 50],
          [40, 50],
          [40, 75],
        ],
        alpha: 255,
        sleep: 40,
      },
      {
        points: [
          [68, 54],
          [43, 54],
          [43, 79],
        ],
        alpha: 255,
        sleep: 60,
      },
      {
        points: [
          [72, 50],
          [47, 50],
          [47, 75],
        ],
        alpha: 255,
        sleep: 10,
      },
      {
        points: [
          [68, 54],
          [43, 54],
          [43, 79],
        ],
        alpha: 255,
        sleep: 120,
      },
      {
        points: [
          [65, 50],
          [40, 50],
          [40, 75],
        ],
        alpha: 255,
        sleep: 10,
      },
      {
        points: [
          [70, 55],
          [45, 55],
          [45, 80],
        ],
        alpha: 0,
        sleep: 90,
      },
    ];

    const keysB = [
      {
        points: [
          [77, 63],
          [52, 63],
          [52, 88],
        ],
        alpha: 0,
        sleep: 30,
      },
      {
        points: [
          [72, 58],
          [47, 58],
          [47, 83],
        ],
        alpha: 255,
        sleep: 43,
      },
      {
        points: [
          [68, 54],
          [43, 54],
          [43, 79],
        ],
        alpha: 255,
        sleep: 57,
      },
      {
        points: [
          [64, 58],
          [39, 58],
          [39, 83],
        ],
        alpha: 255,
        sleep: 10,
      },
      {
        points: [
          [68, 54],
          [43, 54],
          [43, 79],
        ],
        alpha: 255,
        sleep: 120,
      },
      {
        points: [
          [72, 58],
          [47, 58],
          [47, 83],
        ],
        alpha: 255,
        sleep: 10,
      },
      {
        points: [
          [77, 63],
          [52, 63],
          [52, 88],
        ],
        alpha: 0,
        sleep: 87,
      },
      {
        points: [
          [77, 63],
          [52, 63],
          [52, 88],
        ],
        alpha: 0,
        sleep: 2,
      },
    ];

    this.entityList = [
      ...tombos,
      new AnimatePath(p5, keysA, {
        weight: 2,
        loop: true,
      }),
      new AnimatePath(p5, keysB, {
        weight: 2,
        loop: true,
      }),
      new AnimatePath(
        p5,
        keysA.map((key) => ({
          ...key,
          points: key.points.map((point) => [1920 - point[0], point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
      new AnimatePath(
        p5,
        keysB.map((key) => ({
          ...key,
          points: key.points.map((point) => [1920 - point[0], point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
      new AnimatePath(
        p5,
        keysA.map((key) => ({
          ...key,
          points: key.points.map((point) => [point[0], 1080 - point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
      new AnimatePath(
        p5,
        keysB.map((key) => ({
          ...key,
          points: key.points.map((point) => [point[0], 1080 - point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
      new AnimatePath(
        p5,
        keysA.map((key) => ({
          ...key,
          points: key.points.map((point) => [1920 - point[0], 1080 - point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
      new AnimatePath(
        p5,
        keysB.map((key) => ({
          ...key,
          points: key.points.map((point) => [1920 - point[0], 1080 - point[1]]),
        })),
        {
          weight: 2,
          loop: true,
        }
      ),
    ];
  }
}
