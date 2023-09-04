import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function Menu() {
  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="スコアボード" icon={<ScoreboardIcon />} />
            <BottomNavigationAction label="戦績" icon={<LibraryBooksIcon />} />
            <BottomNavigationAction label="選手登録" icon={<PersonIcon />} />
          </BottomNavigation>
        </Paper> 
      </Box>
    </div>
  );
}