import React from 'react';
import Button from '@mui/joy/Button';
import MouseIcon from '@mui/icons-material/Mouse';
import BuildIcon from '@mui/icons-material/Build';
import Box from '@mui/joy/Box';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(<TechPause />);

export function TechPause() {
	return (
		<>
      <Box component="section"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Button variant="soft" startDecorator={<MouseIcon />}>Gear</Button>
        <Button variant="soft" startDecorator={<BuildIcon />}>Game</Button>
      </Box>
		</>
	)
}
