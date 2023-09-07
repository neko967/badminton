import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function Score() {
  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 170,
        },
      }}
    >
      <Paper variant="outlined">1</Paper>
      <Paper variant="outlined">1</Paper>
    </Box>
    </div>
  );
}