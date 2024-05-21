import p5js from "p5";
import { DefaultBackground } from "./default-background.ts";
import { GreenBackground } from "./green-background.ts";
import { LineBackground } from "./line-background.ts";

let greenBacgroundInstance: GreenBackground
let defaultBacgroundInstance: DefaultBackground
let lineBackgroundInstance: LineBackground

export function globalPrepare(p5: p5js) {
  greenBacgroundInstance = new GreenBackground(p5);
  defaultBacgroundInstance = new DefaultBackground(p5);
  lineBackgroundInstance = new LineBackground(p5);
}

export function getGreenBackground() {
  return greenBacgroundInstance;
}

export function getDefaultBackground() {
  return defaultBacgroundInstance;
}

export function getLineBackground() {
  return lineBackgroundInstance;
}
