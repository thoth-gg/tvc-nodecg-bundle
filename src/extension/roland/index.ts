import NodeCG from "@nodecg/types";
import { SerialPort } from "serialport";
import { P20hd } from "./p20hd";
import { Vr4hd } from "./vr4hd";
import {
  OverlaySceneInfo,
  ReplaySceneInfo,
  SceneInfo,
} from "../../types/scene";
import { OverlayInfo } from "../../types/replicant";

const isEnabled = true;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function initRoland(nodecg: NodeCG.ServerAPI) {
  if (!isEnabled) return;

  const portList = (await SerialPort.list()).map(
    (portInfo) =>
      new SerialPort({
        path: portInfo.path,
        baudRate: 38400,
      })
  );
  const p20hd = await P20hd.connect(portList);
  const vr4hd = await Vr4hd.connect(
    portList.filter((port) => port != p20hd.port)
  );

  portList
    .filter((port) => p20hd.port != port && vr4hd.port != port)
    .forEach((port) => port.close());

  nodecg
    .Replicant<SceneInfo>("scene")
    .on("change", async (sceneInfo?: SceneInfo) => {
      if (!sceneInfo) return;
        if (sceneInfo.scene == OverlaySceneInfo.name) {
          await vr4hd.setProgram(1)
          await sleep(500)
          await vr4hd.setKeying(true)
        } else {
          await vr4hd.setKeying(false)
          await sleep(300)
          await vr4hd.setProgram(3)
        }
    });

  nodecg.listenFor("overlay:replay:start", async () => {
    setTimeout(async () => {
      await p20hd.setOutput(0);
      await p20hd.playPlaylist(1);
      await sleep(1000);
      while (
        await p20hd
          .getPlayStatus()
          .then((res) => res.params[0] == "3")
          .catch(() => true)
      ) {
        await sleep(100);
      }
      nodecg.sendMessage("overlay:replay:stop");
      setTimeout(() => p20hd.setOutput(1), 1500);
    }, 2300);
  });
}
