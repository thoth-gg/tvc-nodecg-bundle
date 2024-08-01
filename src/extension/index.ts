import type NodeCG from "@nodecg/types";
import { initRoland } from "./roland";
import { initAtem } from "./atem";

module.exports = async function (nodecg: NodeCG.ServerAPI) {
  await initRoland(nodecg)
  await initAtem(nodecg)

  console.log("Initialized extension");
};
