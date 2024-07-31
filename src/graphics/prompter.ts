const prompterReplicant = nodecg.Replicant('prompter');
const main = document.querySelector('main');
prompterReplicant.on('change', (newVal) => {
  if (!main) return;
  main.innerHTML = `${newVal}`;
});