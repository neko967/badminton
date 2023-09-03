import React from 'react';
import Community from './Community.js';
import Score from './Score.js';
import Menu from './w-Menu.js';



export default function App() {
  return (
    <div>
      <Community />
      <Score />
      <Speek />
      <Court />
      <Menu />
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


