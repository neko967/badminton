import React from 'react';

import Player from './02_Player.js';
import Score from './03_Score.js';
import Speak from './04_Speak.js';
import Court from './05_Court.js';
import ScoreSheet from './06_ScoreSheet.js';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

function Scoreboard() {
  return (
    <div>
      <Player />
      <Score />
      <Court />
      <ScoreSheet />
      <div>
        <Box sx={{ '& > :not(style)': { m: 1 } }} >
          <Fab variant="extended" color="primary" sx={{ position: 'fixed', bottom: 58, right: 10 }} >
             New Game
          </Fab>
        </Box>
      </div>
    </div>
  );
}

export default Scoreboard;