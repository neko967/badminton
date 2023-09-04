import React from 'react';
import Community from './c-Community.js';
import Score from './d-Score.js';
import Speek from './e-Speek.js';
import Court from './f-Court.js';
import Menu from './y-Menu.js';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Community />
          <Score />
          <Court />
          <Menu />
        </Container>
      </React.Fragment>
    </div>
  );
}
