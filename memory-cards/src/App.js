import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';

export default function App() {

  const [score, changeScore] = useState(0);
  const [bestScore, changeBestScore] = useState('')

return(
  <div id='game'>
    <Header score={score} bestScore={bestScore} />
    <Board score={score} changeScore={changeScore} changeBestScore={changeBestScore} />
  </div>
)

};