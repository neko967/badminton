import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import RestoreIcon from '@mui/icons-material/Restore';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';


export default function Menu() {

  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction icon={<HomeIcon />} onClick={() => navigate('/')}/>
            <BottomNavigationAction icon={<ScoreboardIcon />} onClick={() => navigate('/scoreboard')}/>
            <BottomNavigationAction icon={<RestoreIcon />} onClick={() => navigate('/record')}/>
            <BottomNavigationAction icon={<PeopleIcon onClick={() => navigate('/people')}/>} />
          </BottomNavigation>
        </Paper> 
      </Box>
    </div>
  );
}

