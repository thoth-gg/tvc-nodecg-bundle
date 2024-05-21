import React from 'react';
import Box from '@mui/joy/Box';
import '@fontsource/inter';
import { createRoot } from 'react-dom/client';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

const root = createRoot(document.getElementById('root')!);
root.render(<Panel />);

export function Panel() {
	return (
		<>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component="section"
          width="100%"
          height="400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <TimeField label="Basic time field" />
          <StaticTimePicker defaultValue={dayjs()} />
        </Box>
      </LocalizationProvider>
		</>
	)
}
