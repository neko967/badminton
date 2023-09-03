import React from 'react'
import {createRoot} from 'react-dom/client'
import { Button , Box, BottomNavigation, BottomNavigationAction} from "@mui/material";
import styled from "@emotion/styled";

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <div>
      <App />
    </div>
  );
})

export default function App() {
  return (
    <div>
      <Screen />
    </div>
  );
}

function Screen() {
  return (
    <div>
      <h1>screen</h1>
      <Community />
      <Score />
      <Speek />
      <Court />
      <Menu />
    </div>
  );
}

function Community() {
  return (
    <div>
      <h2>Community</h2>
      <Depending />
      <Player />
    </div>
  );
}

function Depending() {
  return (
    <h3>Depending</h3>
  );
}
function Player() {
  return (
    <h3>Player</h3>
  );
}

function Score() {
  return (
    <div>
      <Button variant="contained">1</Button>
      <Button variant="contained">1</Button>
    </div>
  );
}

function Speek() {
  return (
    <h2>Speek</h2>
  );
}

function Court() {
  return (
    <h2>Court</h2>
  );
}

function Menu() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
