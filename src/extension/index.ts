import type NodeCG from '@nodecg/types';
import { Atem } from 'atem-connection';

const isAtemEnabled = true;

module.exports = async function (nodecg: NodeCG.ServerAPI) {
  const program = nodecg.Replicant<number>('program');
  const preview = nodecg.Replicant<number>('preview');

  const atemExtreme = new Atem();
  const atemMiniPro = new Atem();

  if (isAtemEnabled) {
    await atemExtreme.connect('192.168.104.21');
    atemExtreme.on('info', console.log);
    atemExtreme.on('error', console.error);

    await atemMiniPro.connect('192.168.104.7');
    atemMiniPro.on('info', console.log);
    atemMiniPro.on('error', console.error);

    atemExtreme.on('stateChanged', (state, pathToChange) => {
      console.log(pathToChange);
      const mixEffect = state.video.mixEffects[0];
      if (!mixEffect) return;
      console.dir(mixEffect.programInput);
      console.dir(mixEffect.previewInput);
      // program.value = mixEffect.programInput;
      // preview.value = mixEffect.previewInput;
    });
  }

  program.on('change', async (newVal, oldVal) => {
    if (!newVal || !oldVal || !isAtemEnabled) return;
    if (newVal >= 8) {
      await atemMiniPro.changeProgramInput(newVal - 7);
      setTimeout(async () => {
        await atemExtreme.changeProgramInput(8);
      }, 50);
    } else {
      await atemExtreme.changeProgramInput(newVal);
    }
  });

  preview.on('change', async (newVal) => {
    if (!newVal || !isAtemEnabled) return;
    await atemExtreme.changePreviewInput(newVal);
  });
};
