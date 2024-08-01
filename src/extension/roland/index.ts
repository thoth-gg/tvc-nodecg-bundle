import NodeCG from "@nodecg/types";
import { SerialPort } from "serialport";
import { P20hd } from "./p20hd";
import { Vr4hd } from "./vr4hd";

const isEnabled = true;

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
  const vr4hd = await Vr4hd.connect(portList);

  portList
    .filter((port) => p20hd.port == port || vr4hd.port == port)
    .forEach((port) => {
      port.close();
    });
}