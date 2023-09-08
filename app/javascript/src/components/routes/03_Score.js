import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledPaper = styled(Paper)(({theme}) => ({
  backgroundColor: 'white',
  width: '150px',
  height: '150px',
  margin: '5px',
}));

export default function Score() {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <div>
      <StyledPaper>1</StyledPaper>
      <StyledPaper>1</StyledPaper>
      <Paper onClick={handleClick}>aaa</Paper>
    </div>
  );
}