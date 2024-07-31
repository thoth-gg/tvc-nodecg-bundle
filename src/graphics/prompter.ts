const prompterReplicant = nodecg.Replicant<string>('prompter');
const main = document.querySelector('main');
prompterReplicant.on('change', (newVal) => {
  if (!main) return;
  main.innerHTML = `${newVal}`;
});