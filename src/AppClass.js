import React, { Component } from 'react';
import './App.css';

// FontAwesomeIcon 불러오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons';

// 컴포넌트 불러오기
import Box from './components/BoxClass.jsx';
import Result from './components/ResultClass.jsx';

// 가위 바위 보 이미지 불러오기
import rock from './assets/images/rock.png';
import paper from './assets/images/paper.png';
import scissors from './assets/images/scissors.png';

export default class AppClass extends Component {
  // 가위 바위 보 이름과 이미지를 객체로 정의
  choice = {
    rock: {
      name: 'Rock',
      image: rock,
    },
    paper: {
      name: 'Paper',
      image: paper,
    },
    scissors: {
      name: 'Scissors',
      image: scissors,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      userSelect: this.choice.scissors,
      computerSelect: this.choice.scissors,
      result: '',
      selectedButton: '',
    };
  }

  playGame = userChoice => {
    const userSelection = this.choice[userChoice];
    const computerSelection = this.randomChoice();
    const gameResult = AppClass.judgement(userSelection, computerSelection);

    this.setState({
      userSelect: userSelection,
      computerSelect: computerSelection,
      result: gameResult,
      selectedButton: userChoice,
    });
  };

  randomChoice = () => {
    // 객체의 키들을 배열로 변환
    const choices = Object.keys(this.choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return this.choice[randomChoice];
  };

  static judgement = (user, computer) => {
    // user === computer TIE
    // user === rock, computer === scissors user WIN
    // user === rock, computer === paper user LOSE
    // user === scissors, computer === paper user WIN
    // user === scissors, computer ===
    // user === paper, computer === rock user WIN
    // user === paper, computer === scissors user LOSE

    if (user.name === computer.name) return 'TIE';
    if (user.name === 'Rock') return computer.name === 'Scissors' ? 'WINNER' : 'LOSER';
    if (user.name === 'Scissors') return computer.name === 'Paper' ? 'WINNER' : 'LOSER';
    if (user.name === 'Paper') return computer.name === 'Rock' ? 'WINNER' : 'LOSER';
  };

  render() {
    return (
      <div>
        <div className='column-center height-100'>
          <div className='row-center box-wrapper'>
            <Box name='You' item={this.state.userSelect} result={this.state.result} />
            <Box name='Computer' item={this.state.computerSelect} result={this.state.result} />
          </div>
          <div className='row-center button-wrapper'>
            <button
              className={`button-icon ${this.state.selectedButton === 'scissors' ? 'active' : ''}`}
              onClick={() => this.playGame('scissors')}
            >
              <FontAwesomeIcon icon={faHandScissors} className='icon-style' />
            </button>
            <button
              className={`button-icon ${this.state.selectedButton === 'rock' ? 'active' : ''}`}
              onClick={() => this.playGame('rock')}
            >
              <FontAwesomeIcon icon={faHandBackFist} className='icon-style' />
            </button>
            <button
              className={`button-icon ${this.state.selectedButton === 'paper' ? 'active' : ''}`}
              onClick={() => this.playGame('paper')}
            >
              <FontAwesomeIcon icon={faHand} className='icon-style' />
            </button>
          </div>
          <div className='row-center result-wrapper'>
            <Result result={this.state.result} />
          </div>
        </div>
      </div>
    );
  }
}
