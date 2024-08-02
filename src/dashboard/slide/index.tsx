import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { useReplicant } from '../../hooks/use-replicant';
import { AboutGameSceneInfo, AboutThothSceneInfo, MapSceneInfo, RulesSceneInfo, ScheduleSceneInfo, ThothIconSceneInfo, ThothImageSceneInfo } from '../../types/scene';

const root = createRoot(document.getElementById('root')!);
root.render(<Slide />);

export function Slide() {
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
        <Button variant="soft" onClick={() => setScene(new RulesSceneInfo())} >ルール</Button>
        <Button variant="soft" onClick={() => setScene(new ScheduleSceneInfo())} >スケジュール</Button>
        <Button variant="soft" onClick={() => setScene(new MapSceneInfo())} >マップ</Button>
        <Button variant="soft" onClick={() => setScene(new AboutGameSceneInfo())} >ゲーム概要</Button>
        <Button variant="soft" onClick={() => setScene(new ThothIconSceneInfo())} >Thothロゴ</Button>
        <Button variant="soft" onClick={() => setScene(new ThothImageSceneInfo())} >Thothイラスト</Button>
        <Button variant="soft" onClick={() => setScene(new AboutThothSceneInfo())} >Thothについて</Button>
      </Box>
		</>
	)
}
