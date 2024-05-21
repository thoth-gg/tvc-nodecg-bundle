import React from 'react';
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

const root = createRoot(document.getElementById('root')!);
root.render(<Panel />);

export function Panel() {
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
        <Textarea minRows={2} placeholder='message' sx={{width: "100%"}}/>
        <Button variant="solid">Submit</Button>
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
        <ListItem>
          <ListItemButton variant="soft">
            <ListItemContent sx={{fontSize: "10pt", fontWeight: "bold"}}>次の試合でテック</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton variant="soft">
            <ListItemContent sx={{fontSize: "10pt", fontWeight: "bold"}}>次の試合でテック</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton variant="soft">
            <ListItemContent sx={{fontSize: "10pt", fontWeight: "bold"}}>次の試合でテック</ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
		</>
	)
}
