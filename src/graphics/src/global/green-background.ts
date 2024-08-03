import p5js from "p5";
import { DrawableEntity } from "../interfaces/entity";

export class GreenBackground extends DrawableEntity {
  constructor(p5: p5js) {
    super(p5);
  }
  
  draw() {
    this.p5.background("#00FF00");
  }
}
