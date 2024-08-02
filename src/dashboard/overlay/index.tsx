import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { useReplicant } from '../../hooks/use-replicant';
import { GreenSceneInfo, OverlaySceneInfo, PleaseWaitSceneInfo, ReplaySceneInfo, ThothIconSceneInfo } from '../../types/scene';

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
        <Button variant="soft" onClick={() => setScene(new OverlaySceneInfo())} >Start Overlay</Button>
        <Button variant="soft" onClick={() => nodecg.sendMessage("overlay:replay:start")} >Replay</Button>
        {/* 連打、キャンセル考慮 */}
      </Box>
		</>
	)
}
