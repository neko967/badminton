import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Header.js';
import Home from './routes/home.jsx';
import Scoreboard from './routes/scoreboard.jsx';
import Record from './routes/record.jsx';
import People from './routes/people.jsx';
import Menu from './Menu.js';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/record" element={<Record />} />
            <Route path="/people" element={<People />} />
          </Routes>
          <Menu />
      </React.Fragment>
    </div>
  );
}