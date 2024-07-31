import React from 'react';
import Button from '@mui/joy/Button';
import MouseIcon from '@mui/icons-material/Mouse';
import BuildIcon from '@mui/icons-material/Build';
import Box from '@mui/joy/Box';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { useReplicant } from '../../hooks';

const root = createRoot(document.getElementById('root')!);
root.render(<TechPause />);

export function TechPause() {
  const [prompter, setPropmpter] = useReplicant('prompter');

  function click(value: string) {
    setPropmpter(value.replace(/\n/g, '<br>').trim());
  }
	return (
		<>
      <Box component="section"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Button variant="soft" startDecorator={<MouseIcon />} onClick={e => { click("TechPause中\n原因: GEAR") }}>Gear</Button>
        <Button variant="soft" startDecorator={<BuildIcon />} onClick={e => { click("TechPause中\n原因: GAME") }}>Game</Button>
      </Box>
		</>
	)
}
