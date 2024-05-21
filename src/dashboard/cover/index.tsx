import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(<Panel />);

export function Panel() {
	return (
		<>
      <Box component="section"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Button variant="soft" >大会ロゴ</Button>
        <Button variant="soft" >PLEASE WAIT</Button>
      </Box>
		</>
	)
}
