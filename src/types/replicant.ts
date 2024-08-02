import { Scene, SceneInfo } from "./scene";

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
  scene: Scene.AboutGame(),
  overlay: {
    replay: false,
  },
};

export interface OverlayInfo {
  replay: boolean;
}