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

import { useNavigate } from 'react-router-dom';


export default function Menu() {
  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

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
            <BottomNavigationAction label="スコアボード" icon={<ScoreboardIcon />} onClick={() => navigate('/')}/>
            <BottomNavigationAction label="戦績" icon={<RestoreIcon />} onClick={() => navigate('/record')}/>
            <BottomNavigationAction label="選手" icon={<PeopleIcon onClick={() => navigate('/people')}/>} />
            <BottomNavigationAction label="選手追加" icon={<PersonAddIcon />} />
          </BottomNavigation>
        </Paper> 
      </Box>
    </div>
  );
}

