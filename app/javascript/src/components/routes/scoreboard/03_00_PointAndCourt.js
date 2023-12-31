import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

import Score from './03_02_Score.js';
import Court from './03_01_Court.js';

export default function PointAndCourt() {

  const sm_matches = useMediaQuery('(max-width:899px)');
  const md_matches = useMediaQuery('(min-width:900px)');

  return (
    <Box sx={{ flexGrow: 1, mt: 0.5 }}>
      <Grid container spacing={1}>
        {sm_matches && <>
          <Grid xs={6} sm={6}>
            <Score/>
          </Grid>
          <Grid xs={6} sm={6}>
          <Score/>
          </Grid>
          <Grid xs={12} sm={12}>
            <Court/>
          </Grid>
        </>}
        {md_matches && <>
          <Grid md={2.5}>
            <Score/>
          </Grid>
          <Grid md={7}>
            <Court/>
          </Grid>
          <Grid md={2.5}>
            <Score/>
          </Grid>
        </>}
      </Grid>
    </Box>
  );
}