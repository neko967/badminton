import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Player from './02_Player.js';
import Score from './03_Score.js';
import Speak from './04_Speak.js';
import Court from './05_Court.js';
import ScoreSheet from './06_ScoreSheet.js';

function Scoreboard() {
  return (
    <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Player />
        <Score />
        <Court />
        <ScoreSheet />
      </Container>
    </React.Fragment>
      
    </div>
  );
}

export default Scoreboard;