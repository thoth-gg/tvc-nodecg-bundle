import { SceneInfo, TournamentLogoSceneInfo } from "./scene";

export type ReplicantMap = {
  program: number;
  preview: number;
  prompter: string;
  scene: SceneInfo;
  overlay: OverlayInfo;
}

export const replicantDefaultValues: ReplicantMap = {
  program: 0,
  preview: 0,
  prompter: 'Thoth Prompter',
  scene: new TournamentLogoSceneInfo(),
  overlay: {
    replay: false,
  },
};

export interface OverlayInfo {
  replay: boolean;
}