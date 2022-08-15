import React, { useState, useEffect } from 'react';

export default function Scoreboard(props) {

  const score = props.score;
  const bestScore = props.bestScore;

return(
  <div className='scoreBoard'>
    <div>Score: {score}</div>
    <div>Best Score: {bestScore}</div>
  </div>
);

};