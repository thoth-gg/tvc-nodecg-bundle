import Stats from "stats.js";
import p5js, { Renderer } from "p5";

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
import { AboutGameSceneInfo, AboutThothSceneInfo, GreenSceneInfo, MapSceneInfo, OverlaySceneInfo, PleaseWaitSceneInfo, ReplaySceneInfo, RulesSceneInfo, SceneInfo, ScheduleSceneInfo, ThothIconSceneInfo, ThothImageSceneInfo, TournamentLogoSceneInfo } from "../types/scene.ts";

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
import { GreenScene } from "./src/scenes/green.ts";
import { globalPrepare } from "./src/global/index.ts";
import { DrawableEntity } from "./src/interfaces/entity.ts";
import { ReplayScene } from "./src/scenes/replay.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// State
const debug = document.location.search.includes("debug");

// For debug
const stats = new Stats();
if (debug) {
  stats.showPanel(0);
  document.body.appendChild(stats.dom);
}

let currentScene: DrawableEntity | null = null;
const subWin = window.open("sub_screen.html", "window_name", "width=600,height=400");

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
    currentScene = new TournamentLogoScene(p5);

    renderer.elt.addEventListener("click", async () => {
      await navigator.clipboard.writeText(
        `${Math.round(p5.mouseX)}, ${Math.round(p5.mouseY)}`
      );
    });
    renderer.elt.addEventListener("dblclick", () => p5.fullscreen(true));
  };

  p5.draw = () => {
    stats.begin();
    currentScene?.draw();
    subWin?.document.querySelector("canvas")?.getContext('2d')?.putImageData(p5.drawingContext.getImageData(0, 0, p5.width * 2, p5.height * 2), 0, 0);
    stats.end();
  };

  nodecg.Replicant('scene').on('change', async (sceneInfo: SceneInfo, oldSceneInfo?: SceneInfo) => {
    if(oldSceneInfo?.scene == OverlaySceneInfo.name) {
      await sleep(200);
    }
    // const player = searchPlayer(data.player);
    if (sceneInfo.scene == AboutGameSceneInfo.name) {
      currentScene = new AboutGameScene(p5);
    }
    if (sceneInfo.scene == AboutThothSceneInfo.name) {
      currentScene = new AboutThothScene(p5);
    }
    if (sceneInfo.scene == ThothIconSceneInfo.name) {
      currentScene = new ThothIconScene(p5);
    }
    if (sceneInfo.scene == ThothImageSceneInfo.name) {
      currentScene = new ThothImageScene(p5);
    }
    if (sceneInfo.scene == MapSceneInfo.name) {
      currentScene = new MapScene(p5);
    }
    if (sceneInfo.scene == ScheduleSceneInfo.name) {
      currentScene = new ScheduleScene(p5);
    }
    if (sceneInfo.scene == PleaseWaitSceneInfo.name) {
      currentScene = new PleaseWaitScene(p5);
    }
    if (sceneInfo.scene == RulesSceneInfo.name) {
      currentScene = new RulesScene(p5);
    }
    if (sceneInfo.scene == GreenSceneInfo.name) {
      currentScene = new GreenScene(p5);
    }
    if (sceneInfo.scene == ReplaySceneInfo.name) {
      currentScene = new ReplayScene(p5);
    }
    if (sceneInfo.scene == TournamentLogoSceneInfo.name) {
      currentScene = new TournamentLogoScene(p5);
    }
    if (sceneInfo.scene == OverlaySceneInfo.name) {
      await sleep(200);
      currentScene = new OverlayScene(p5);
    }
    // switch (data.scene) {
    //   case "new-team-name":
    //     currentScene = new NewTeamNameScene(p5, TeamList.SCS);
    //     break;
    //   case "profile":
    //     if (player) currentScene = new ProfileScene(p5, player);
    //     break;
    //   case "team-roaster":
    //     currentScene = new TeamRoasterScene(p5, TeamList[data.team]);
    //     break;
    //   case "map-winner":
    //     currentScene = new MapWinnerScene(p5, TeamList[data.team]);
    //     break;
    //   case "winner":
    //     currentScene = new WinnerScene(p5, TeamList[data.team]);
    //     break;
    //   case "award":
    //     if (player) currentScene = new AwardScene(p5, data.title, player);
    //     break;
    //   case "award-present":
    //     currentScene = new AwardPresentScene(p5, data.present);
    //     break;
    //   case "wait-timer":
    //     currentScene = new WaitTimerScene(p5, data.timer, data.result);
    //     break;
    //   case "battle-card":
    //     currentScene = new BattleCardScene(
    //       p5,
    //       TeamList[data.team1],
    //       TeamList[data.team2]
    //     );
    //     break;
    //   case "overlay":
    //     currentScene = new OverlayScene(p5, data.type);
    //     break; 
    // }
  });
};

new p5js(sketch);
