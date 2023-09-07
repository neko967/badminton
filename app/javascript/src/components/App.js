import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Menu from './Menu.js';

import Scoreboard from './routes/scoreboard.jsx';
import Record from './routes/record.jsx';
import People from './routes/people.jsx';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Scoreboard />} />
            <Route path="/record" element={<Record />} />
            <Route path="/people" element={<People />} />
          </Routes>
          <Menu />
        </Container>
      </React.Fragment>
    </div>
  );
}