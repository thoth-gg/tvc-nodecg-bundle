import p5js, { Font } from "p5";

export let tungsten: Font;
export let noto: Font;
export let artegra: Font;
export let opensauceone: Font;
export let druk: Font;

export function preload(p5: p5js) {
  tungsten = p5.loadFont("fonts/tungsten.ttf");
  noto = p5.loadFont("fonts/noto_bold.ttf");
  artegra = p5.loadFont("fonts/artegra.otf");
  opensauceone = p5.loadFont("fonts/opensauceone-reg.ttf");
  druk = p5.loadFont("fonts/druk.ttf");
}
