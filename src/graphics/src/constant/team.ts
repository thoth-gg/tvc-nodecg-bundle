import p5js, { Image } from "p5";

export interface Team {
  oldName: string;
  name: string[];
  nameJa: string;
  shortName: string;
  width: number;
  largeLogo: Image;
  winnerImage: Image;
  mapWinnerImage: Image;
  battleName: Image;
  players: Player[];
}

export interface Player {
  name: string;
  image: Image;
  largeImage?: Image;
  interview?: Image;
}

export const TeamList: {[key: string]: Team }= {
  SCS: {
    oldName: "Team A",
    name: ["SARYU & CIS'S", "SPIRITED AWAY"],
    nameJa: "さりゅとCisの神隠し",
    shortName: "SCS",
    width: 1210,
    largeLogo: new Image(0, 0),
    winnerImage: new Image(0, 0),
    mapWinnerImage: new Image(0, 0),
    battleName: new Image(0, 0),
    players: [
      { name: "saryu", image: new Image(0, 0) },
      { name: "soppy", image: new Image(0, 0) },
      { name: "ghibli", image: new Image(0, 0) },
      { name: "cis", image: new Image(0, 0) },
      { name: "kuro", image: new Image(0, 0) },
    ],
  },
  ATX: {
    oldName: "Team B",
    name: ["ALL TOXXXIC"],
    nameJa: "おーるときちっく",
    shortName: "ATX",
    width: 700,
    largeLogo: new Image(0, 0),
    winnerImage: new Image(0, 0),
    mapWinnerImage: new Image(0, 0),
    battleName: new Image(0, 0),
    players: [
      { name: "berson", image: new Image(0, 0) },
      { name: "fukuchang", image: new Image(0, 0) },
      { name: "yakoo", image: new Image(0, 0) },
      { name: "meko", image: new Image(0, 0) },
      { name: "mitt", image: new Image(0, 0) },
    ],
  },
  BOP: {
    oldName: "Team C",
    name: ["BRIM OTP"],
    nameJa: "ブリム専",
    shortName: "BOP",
    width: 620,
    largeLogo: new Image(0, 0),
    winnerImage: new Image(0, 0),
    mapWinnerImage: new Image(0, 0),
    battleName: new Image(0, 0),
    players: [
      { name: "hifumin", image: new Image(0, 0) },
      { name: "naro", image: new Image(0, 0) },
      { name: "kawasuke", image: new Image(0, 0) },
      { name: "supernoob", image: new Image(0, 0) },
      { name: "mizu", image: new Image(0, 0) },
    ],
  }
}

export type TeamListType = typeof TeamList[keyof typeof TeamList]

export function preload(p5: p5js) {
  TeamList.SCS.players.forEach((player) => {
    player.image = p5.loadImage(`images/players/${player.name}.png`);
    player.largeImage = p5.loadImage(
      `images/fullsize-players/${player.name}.png`
    );
    player.interview = p5.loadImage(
      `images/interviews/${player.name}.png`,
      undefined,
      () => {}
    );
  });
  TeamList.ATX.players.forEach((player) => {
    player.image = p5.loadImage(`images/players/${player.name}.png`);
    player.largeImage = p5.loadImage(
      `images/fullsize-players/${player.name}.png`
    );
    player.interview = p5.loadImage(
      `images/interviews/${player.name}.png`,
      undefined,
      () => {}
    );
  });
  TeamList.BOP.players.forEach((player) => {
    player.image = p5.loadImage(`images/players/${player.name}.png`);
    player.largeImage = p5.loadImage(
      `images/fullsize-players/${player.name}.png`
    );
    player.interview = p5.loadImage(
      `images/interviews/${player.name}.png`,
      undefined,
      () => {}
    );
  });
  TeamList.SCS.winnerImage = p5.loadImage(`images/winner/${TeamList.SCS.shortName}.png`);
  TeamList.ATX.winnerImage = p5.loadImage(`images/winner/${TeamList.ATX.shortName}.png`);
  TeamList.BOP.winnerImage = p5.loadImage(`images/winner/${TeamList.BOP.shortName}.png`);
  TeamList.SCS.mapWinnerImage = p5.loadImage(
    `images/map-winner/${TeamList.SCS.shortName}.png`
  );
  TeamList.ATX.mapWinnerImage = p5.loadImage(
    `images/map-winner/${TeamList.ATX.shortName}.png`
  );
  TeamList.BOP.mapWinnerImage = p5.loadImage(
    `images/map-winner/${TeamList.BOP.shortName}.png`
  );
  TeamList.SCS.largeLogo = p5.loadImage(
    `images/fullsize-team-logos/${TeamList.SCS.shortName}.png`
  );
  TeamList.ATX.largeLogo = p5.loadImage(
    `images/fullsize-team-logos/${TeamList.ATX.shortName}.png`
  );
  TeamList.BOP.largeLogo = p5.loadImage(
    `images/fullsize-team-logos/${TeamList.BOP.shortName}.png`
  );
  TeamList.SCS.battleName = p5.loadImage(
    `images/battle-team-name/${TeamList.SCS.shortName}.png`
  );
  TeamList.ATX.battleName = p5.loadImage(
    `images/battle-team-name/${TeamList.ATX.shortName}.png`
  );
  TeamList.BOP.battleName = p5.loadImage(
    `images/battle-team-name/${TeamList.BOP.shortName}.png`
  );
}

export function searchPlayer(name: string): Player | undefined {
  return TeamList.SCS.players
    .concat(TeamList.ATX.players)
    .concat(TeamList.BOP.players)
    .find((player) => player.name === name)
}