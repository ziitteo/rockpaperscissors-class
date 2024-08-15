import React, { Component } from 'react';
import '../assets/styles/Result.css';

export default class ResultClass extends Component {
  render() {
    const { result } = this.props;

    const displayResult = result === 'TIE' ? 'TIE' : result === 'WINNER' ? 'WIN' : result === 'LOSER' ? 'LOSE' : '';

    return (
      <div>
        <h3
          className={`display-result ${result === 'TIE' ? 'tie' : result === 'WINNER' ? 'win' : result === 'LOSER' ? `lose` : ''}`}
        >
          {displayResult}
        </h3>
      </div>
    );
  }
}
