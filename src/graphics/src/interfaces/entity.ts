import p5js from "p5";

export abstract class DrawableEntity {
  p5: p5js;

  constructor(p5: p5js) {
    this.p5 = p5;
  }

  abstract draw(): void;
}

export abstract class DrawableEntitySet extends DrawableEntity {
  entityList: DrawableEntity[] = [];

  draw() {
    this.entityList.forEach((entity) => {
      this.p5.push();
      entity.draw();
      this.p5.pop();
    });
  }
}

export abstract class DrawableScene extends DrawableEntitySet {}

export abstract class DrawableOverlay extends DrawableEntitySet {}
