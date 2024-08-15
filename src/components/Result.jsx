import React from 'react';
import '../assets/styles/Result.css';

const Result = props => {
  const displayResult =
    props.result === 'TIE' ? 'TIE' : props.result === 'WINNER' ? 'WIN' : props.result === 'LOSER' ? 'LOSE' : '';

  return (
    <div>
      <h3
        className={`display-result ${props.result === 'TIE' ? 'tie' : props.result === 'WINNER' ? 'win' : props.result === 'LOSER' ? `lose` : ''}`}
      >
        {displayResult}
      </h3>
    </div>
  );
};

export default Result;
