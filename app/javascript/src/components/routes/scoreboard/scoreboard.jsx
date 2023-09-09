import React from 'react';
import Container from '@mui/material/Container';


import Player from './02_Player.js';
import PointAndCourt from './03_00_PointAndCourt.js';
import Score from './03_02_Score.js';
import Speak from './04_Speak.js';
import Court from './03_01_Court.js';
import ScoreSheet from './05_ScoreSheet.js';

function Scoreboard() {
  return (
    <div>
      <Container maxWidth="lg" sx={{marginTop: {xs:8, sm:9}}}>
        <Player />
        <PointAndCourt/>
        <ScoreSheet />
      </Container>
    </div>
  );
}

export default Scoreboard;