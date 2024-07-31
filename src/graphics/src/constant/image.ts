import p5js, { Image } from "p5";

export let aboutGame: Image;
export let aboutThoth: Image;
export let thothIcon: Image;
export let backgroundLogo: Image;
export let map: Image;
export let schedule: Image;
export let wait: Image;
export let icon: Image;
export let rules: Image;
export let tournamentTitle: Image;
export let waitTimer: Image;
export let reticule: Image;
export let thothImage: Image;
export let vs: Image;
export let kugai: Image;
export let replay: Image;

export const AwardTitle: {
  Mvp: Image;
  MostKill: Image;
  MostDeath: Image;
  MostAssist: Image;
  MostGrowth: Image;
  Decibel: Image;
  MostTae: Image;
  MostEntry: Image;
  Arigatou: Image;
} = {
  Mvp: new Image(0, 0),
  MostKill: new Image(0, 0),
  MostDeath: new Image(0, 0),
  MostAssist: new Image(0, 0),
  MostGrowth: new Image(0, 0),
  Decibel: new Image(0, 0),
  MostTae: new Image(0, 0),
  MostEntry: new Image(0, 0),
  Arigatou: new Image(0, 0),
};

export type AwardTitleType = typeof AwardTitle[keyof typeof AwardTitle]

export const AwardPresent: {
  WebMoney: Image;
  Trophy: Image;
  Megaphone: Image;
} = {
  WebMoney: new Image(0, 0),
  Trophy: new Image(0, 0),
  Megaphone: new Image(0, 0),
};

export type AwardPresentType = typeof AwardPresent[keyof typeof AwardPresent]

export const BattleOverlay: {
  a_atx_bop_d: Image;
  d_atx_bop_a: Image;
  a_bop_scs_d: Image;
  d_bop_scs_a: Image;
  a_scs_atx_d: Image;
  d_scs_atx_a: Image;
  a_atx_scs_d: Image;
  d_atx_scs_a: Image;
  a_bop_atx_d: Image;
  d_bop_atx_a: Image;
  a_scs_bop_d: Image;
  d_scs_bop_a: Image;
} = {
  a_atx_bop_d: new Image(0, 0),
  d_atx_bop_a: new Image(0, 0),
  a_bop_scs_d: new Image(0, 0),
  d_bop_scs_a: new Image(0, 0),
  a_scs_atx_d: new Image(0, 0),
  d_scs_atx_a: new Image(0, 0),
  a_atx_scs_d: new Image(0, 0),
  d_atx_scs_a: new Image(0, 0),
  a_bop_atx_d: new Image(0, 0),
  d_bop_atx_a: new Image(0, 0),
  a_scs_bop_d: new Image(0, 0),
  d_scs_bop_a: new Image(0, 0),
};

export type BattleOverlayType = typeof BattleOverlay[keyof typeof BattleOverlay]

export function preload(p5: p5js) {
  aboutGame = p5.loadImage("images/about_game.png");
  aboutThoth = p5.loadImage("images/about-thoth.png");
  thothIcon = p5.loadImage("images/thoth-icon.png");
  backgroundLogo = p5.loadImage("images/background_logo.png");
  map = p5.loadImage("images/map.png");
  schedule = p5.loadImage("images/schedule.png");
  wait = p5.loadImage("images/wait.png");
  icon = p5.loadImage("images/icon.png");
  rules = p5.loadImage("images/rules.png");
  tournamentTitle = p5.loadImage("images/tournament_title.png");
  waitTimer = p5.loadImage("images/wait-timer.png");
  AwardTitle.Mvp = p5.loadImage("images/award/mvp.png");
  AwardTitle.MostKill = p5.loadImage("images/award/most-kill.png");
  AwardTitle.MostDeath = p5.loadImage("images/award/most-death.png");
  AwardTitle.MostAssist = p5.loadImage("images/award/most-assist.png");
  AwardTitle.MostGrowth = p5.loadImage("images/award/most-growth.png");
  AwardTitle.Decibel = p5.loadImage("images/award/decibel.png");
  AwardTitle.MostTae = p5.loadImage("images/award/most-tae.png");
  AwardTitle.MostEntry = p5.loadImage("images/award/most-entry.png");
  AwardTitle.Arigatou = p5.loadImage("images/award/arigatou.png");
  reticule = p5.loadImage("images/reticule.png");
  thothImage = p5.loadImage("images/thoth.png");
  vs = p5.loadImage("images/vs.png");
  AwardPresent.WebMoney = p5.loadImage("images/present/webmoney.png");
  AwardPresent.Megaphone = p5.loadImage("images/present/megaphone.png");
  AwardPresent.Trophy = p5.loadImage("images/present/trophy.png");
  BattleOverlay.a_atx_bop_d = p5.loadImage("images/overlay/a_atx-bop_d.png"),
  BattleOverlay.d_atx_bop_a = p5.loadImage("images/overlay/d_atx-bop_a.png"),
  BattleOverlay.a_bop_scs_d = p5.loadImage("images/overlay/a_bop-scs_d.png"),
  BattleOverlay.d_bop_scs_a = p5.loadImage("images/overlay/d_bop-scs_a.png"),
  BattleOverlay.a_scs_atx_d = p5.loadImage("images/overlay/a_scs-atx_d.png"),
  BattleOverlay.d_scs_atx_a = p5.loadImage("images/overlay/d_scs-atx_a.png"),
  BattleOverlay.a_atx_scs_d = p5.loadImage("images/overlay/a_atx-scs_d.png"),
  BattleOverlay.d_atx_scs_a = p5.loadImage("images/overlay/d_atx-scs_a.png"),
  BattleOverlay.a_bop_atx_d = p5.loadImage("images/overlay/a_bop-atx_d.png"),
  BattleOverlay.d_bop_atx_a = p5.loadImage("images/overlay/d_bop-atx_a.png"),
  BattleOverlay.a_scs_bop_d = p5.loadImage("images/overlay/a_scs-bop_d.png"),
  BattleOverlay.d_scs_bop_a = p5.loadImage("images/overlay/d_scs-bop_a.png");
  kugai = p5.loadImage("images/fullsize-players/kugai.png");

  replay = p5.loadImage("images/overlay/replay.png");
}
