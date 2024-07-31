import Stats from "stats.js";
import p5js, { Renderer } from "p5";

// const exampleReplicant = nodecg.Replicant<ExampleReplicant>('exampleReplicant');
// exampleReplicant.on('change', (newVal) => {
// 	console.log(newVal);
// });

// Component
import { preload as fontPreload } from "./src/constant/font.ts";
import {
  AwardPresent,
  AwardTitle,
  BattleOverlay,
  preload as imagePreload,
} from "./src/constant/image.ts";
import { preload as videoPreload } from "./src/constant/video.ts";
import {
  preload as teamPreload,
  TeamList,
  searchPlayer,
} from "./src/constant/team.ts";

// Scene
import { AboutGameScene } from "./src/scenes/about-game.ts";
import { RulesScene } from "./src/scenes/rules.ts";
import { MapScene } from "./src/scenes/map.ts";
import { NewTeamNameScene } from "./src/scenes/new-team-name.ts";
import { TeamRoasterScene } from "./src/scenes/team-roaster.ts";
import { TournamentLogoScene } from "./src/scenes/tournament-logo.ts";
import { ProfileScene } from "./src/scenes/profile.ts";
import { PleaseWaitScene } from "./src/scenes/please-wait.ts";
import { WinnerScene } from "./src/scenes/winner.ts";
import { AwardScene } from "./src/scenes/award.ts";
import { WaitTimerScene } from "./src/scenes/wait-timer.ts";
import { BattleCardScene } from "./src/scenes/battle-card.ts";
import { ThothImageScene } from "./src/scenes/thoth-image.ts";
import { AboutThothScene } from "./src/scenes/about-thoth.ts";
import { OverlayScene } from "./src/scenes/overlay.ts";
import { ScheduleScene } from "./src/scenes/schedule.ts";
import { ThothIconScene } from "./src/scenes/thoth-icon.ts";
import { MapWinnerScene } from "./src/scenes/map-winner.ts";
import { AwardPresentScene } from "./src/scenes/award-present.ts";
import { MatchOverlayScene } from "./src/scenes/match-overlay.ts";
import { globalPrepare } from "./src/global/index.ts";
import { DrawableEntity } from "./src/interfaces/entity.ts";

const defaultValue = `{
  "scene": "about-thoth"
}
`;
// State
const debug = document.location.search.includes("debug");

// For debug
const stats = new Stats();
if (debug) {
  stats.showPanel(0);
  document.body.appendChild(stats.dom);
}

let currentScene: DrawableEntity | null = null;

let renderer: Renderer;
const sketch = (p5: p5js) => {
  p5.preload = () => {
    fontPreload(p5);
    imagePreload(p5);
    videoPreload(p5);
    teamPreload(p5);
    globalPrepare(p5);
  };
  p5.setup = () => {
    renderer = p5.createCanvas(1920, 1080);
    setScene({ scene: "about-thoth" });

    renderer.elt.addEventListener("click", async () => {
      await navigator.clipboard.writeText(
        `${Math.round(p5.mouseX)}, ${Math.round(p5.mouseY)}`
      );
    });
    renderer.elt.addEventListener("dblclick", () => {
      p5.fullscreen(true);
    });
  };

  p5.draw = () => {
    stats.begin();
    currentScene?.draw();
    stats.end();
  };

  function setScene(data: any) {
    const player = searchPlayer(data.player);
    switch (data.scene) {
      case "about-game":
        currentScene = new AboutGameScene(p5);
        break;
      case "about-thoth":
        currentScene = new AboutThothScene(p5);
        break;
      case "thoth-icon":
        currentScene = new ThothIconScene(p5);
        break;
      case "thoth-image":
        currentScene = new ThothImageScene(p5);
        break;
      case "map":
        currentScene = new MapScene(p5);
        break;
      case "schedule":
        currentScene = new ScheduleScene(p5);
        break;
      case "new-team-name":
        currentScene = new NewTeamNameScene(p5, TeamList.SCS);
        break;
      case "please-wait":
        currentScene = new PleaseWaitScene(p5);
        break;
      case "profile":
        if (player) currentScene = new ProfileScene(p5, player);
        break;
      case "rules":
        currentScene = new RulesScene(p5);
        break;
      case "team-roaster":
        currentScene = new TeamRoasterScene(p5, TeamList[data.team]);
        break;
      case "tournament-logo":
        currentScene = new TournamentLogoScene(p5);
        break;
      case "map-winner":
        currentScene = new MapWinnerScene(p5, TeamList[data.team]);
        break;
      case "winner":
        currentScene = new WinnerScene(p5, TeamList[data.team]);
        break;
      case "award":
        if (player) currentScene = new AwardScene(p5, data.title, player);
        break;
      case "award-present":
        currentScene = new AwardPresentScene(p5, data.present);
        break;
      case "wait-timer":
        currentScene = new WaitTimerScene(p5, data.timer, data.result);
        break;
      case "battle-card":
        currentScene = new BattleCardScene(
          p5,
          TeamList[data.team1],
          TeamList[data.team2]
        );
        break;
      case "overlay":
        currentScene = new OverlayScene(p5, data.type);
        break;
    }
  }
};

new p5js(sketch);
