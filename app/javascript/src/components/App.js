import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from './Drawer.js';
import Home from './routes/home/home.jsx';
import Scoreboard from './routes/scoreboard/scoreboard.jsx';
import Record from './routes/records/record.jsx';
import People from './routes/members/people.jsx';
import BottomNavigation from './BottomNavigation.js';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/record" element={<Record />} />
          <Route path="/member" element={<People />} />
        </Routes>
        <BottomNavigation />
      </React.Fragment>
    </div>
  );
}