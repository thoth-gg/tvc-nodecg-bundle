import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { useReplicant } from '../../hooks/use-replicant';
import { PleaseWaitSceneInfo, TournamentLogoSceneInfo } from '../../types/scene';

const root = createRoot(document.getElementById('root')!);
root.render(<Panel />);

export function Panel() {
  const [scene, setScene] = useReplicant('scene');
	return (
		<>
      <Box component="section"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        flexWrap={'wrap'}
      >
        <Button variant="soft" onClick={() => setScene(new TournamentLogoSceneInfo())} >大会ロゴ</Button>
        <Button variant="soft" onClick={() => setScene(new PleaseWaitSceneInfo())} >PLEASE WAIT</Button>
      </Box>
		</>
	)
}
