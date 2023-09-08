import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import NewGameButton from './07_NewGameButton.js';

export default function Home() {
  return (
    <div className="homepage">
      <NewGameButton/>
    </div>
  );
}