import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { useReplicant } from '../../hooks/use-replicant';
import Typography from '@mui/joy/Typography';

const root = createRoot(document.getElementById('root')!);
root.render(<TechPause />);

export function TechPause() {
  const [program, setProgram] = useReplicant('program');
  const [preview, setPreview] = useReplicant('preview');

  const buttonStyle = {
    width: '170px',
    height: '120px',
    marginBottom: '10px',
  };

  function click(e: React.MouseEvent<HTMLButtonElement>) {
    setProgram(Number(e.currentTarget.textContent));
  }

  function getColor(num: number) {
    return program === num ? 'danger' : /* preview === num ? 'success' : */ 'primary';
  }

	return (
		<>
      <Typography level='h1' color="neutral" variant="solid">VALORANT Scene Switcher</Typography>
      <Box component="section"
        width="100%"
        display="grid"
        marginTop={3}
        gridTemplateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <Button size="lg" onClick={click} color={getColor(1)} sx={buttonStyle}>1</Button>
        <Button size="lg" onClick={click} color={getColor(2)} sx={buttonStyle}>2</Button>
        <div></div>
        <div></div>
        <Button size="lg" onClick={click} color={getColor(6)} sx={buttonStyle}>6</Button>
        <Button size="lg" onClick={click} color={getColor(7)} sx={buttonStyle}>7</Button>
        <Button size="lg" onClick={click} color={getColor(3)} sx={buttonStyle}>3</Button>
        <Button size="lg" onClick={click} color={getColor(4)} sx={buttonStyle}>4</Button>
        <Button size="lg" onClick={click} color={getColor(5)} sx={buttonStyle}>5</Button>
        <Button size="lg" onClick={click} color={getColor(8)} sx={buttonStyle}>8</Button>
        <Button size="lg" onClick={click} color={getColor(9)} sx={buttonStyle}>9</Button>
        <Button size="lg" onClick={click} color={getColor(10)} sx={buttonStyle}>10</Button>
      </Box>
		</>
	)
}
