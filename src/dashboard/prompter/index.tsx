import React, { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import { useReplicant } from '../../hooks/use-replicant';

const root = createRoot(document.getElementById('root')!);
root.render(<Panel />);

const promptList = [
  { text: '次の試合でテック', content: "[業務連絡]\n次の試合でテックポーズ入ります" },
]

export function Panel() {
  const [prompter, setPropmpter] = useReplicant('prompter');
  const [value, setValue] = useState('');

  function click() {
    setPropmpter(value.replace(/\n/g, '<br>').trim());
  }
	return (
		<>
      <Box component="section"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Textarea minRows={2} placeholder='message' sx={{width: "100%"}} onChange={e => { setValue(e.target.value); }} value={value}/>
        <Button variant="solid" onClick={click}>Submit</Button>
      </Box>
      <Typography
        id="decorated-list-demo"
        level="body-xs"
        textTransform="uppercase"
        fontWeight="lg"
        mt={2}
        sx={{color: "white"}}
      >
        定型文
      </Typography>
      <List sx={{width: "100%"}}>
        {promptList.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton variant="soft" onClick={() => { setValue(item.content); }}>
              <ListItemContent sx={{fontSize: "10pt", fontWeight: "bold"}}>{item.text}</ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
		</>
	)
}
