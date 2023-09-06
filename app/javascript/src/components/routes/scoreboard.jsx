import React from 'react';

import Player from './02_Player.js';
import Score from './03_Score.js';
import Speak from './04_Speak.js';
import Court from './05_Court.js';

function Scoreboard() {
  return (
    <div>
      <Player />
      <Score />
      <Speak />
      <Court />
    </div>
  );
}

export default Scoreboard;