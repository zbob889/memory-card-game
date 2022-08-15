import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';

export default function Header(props) {

const score = props.score
const bestScore = props.bestScore

return(
  <div className='header'>
    <p className='title'>Famous Jews Memory Game!</p>
    <Scoreboard score={score} bestScore={bestScore} />
  </div>
);

};