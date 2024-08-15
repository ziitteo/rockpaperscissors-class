import { React, useState } from 'react';
import './App.css';

// FontAwesomeIcon 불러오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons';

// 컴포넌트 불러오기
import Box from './components/Box.jsx';
import Result from './components/Result.jsx';

// 가위 바위 보 이미지 불러오기
import rock from './assets/images/rock.png';
import paper from './assets/images/paper.png';
import scissors from './assets/images/scissors.png';

// 1. 박스 2개 (타이틀, 사진정보, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤으로 가위 바위 보를 내고 결과를 보여준다
// 5. 3 4의 결과를 비교하여 누가 이겼는지 승패를 따진다
// 6. 승패 결과를 박스에 보여주며 박스 테두리 색을 바꾼다 (분홍 : 승 / 하늘색 : 패 / 회색 : 무승부)

// 가위 바위 보 이름과 이미지를 객체로 정의
const choice = {
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

function App() {
  // randomImage 상태를 정의하고 초기값을 null로 설정
  const [userSelect, setUserSelect] = useState(choice.scissors);
  const [computerSelect, setComputerSelect] = useState(choice.scissors);
  const [result, setResult] = useState('');
  const [selectedButton, setSelectedButton] = useState('');

  // 가위 바위 보 이미지를 랜덤하게 변경하는 함수
  const randomChoice = () => {
    // 객체의 키들을 배열로 변환
    const choices = Object.keys(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return choice[randomChoice];
  };

  const judgement = (user, computer) => {
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

  const playGame = userChoice => {
    const userSelection = choice[userChoice];
    setUserSelect(userSelection);
    const computerSelection = randomChoice();
    setComputerSelect(computerSelection);

    setResult(judgement(userSelection, computerSelection));
    setSelectedButton(userChoice);
  };

  return (
    <div>
      <div className='column-center height-100'>
        <div className='row-center box-wrapper'>
          <Box name='You' item={userSelect} result={result} />
          <Box name='Computer' item={computerSelect} result={result} />
        </div>
        <div className='row-center button-wrapper'>
          <button
            className={`button-icon ${selectedButton === 'scissors' ? 'active' : ''}`}
            onClick={() => playGame('scissors')}
          >
            <FontAwesomeIcon icon={faHandScissors} className='icon-style' />
          </button>
          <button
            className={`button-icon ${selectedButton === 'rock' ? 'active' : ''}`}
            onClick={() => playGame('rock')}
          >
            <FontAwesomeIcon icon={faHandBackFist} className='icon-style' />
          </button>
          <button
            className={`button-icon ${selectedButton === 'paper' ? 'active' : ''}`}
            onClick={() => playGame('paper')}
          >
            <FontAwesomeIcon icon={faHand} className='icon-style' />
          </button>
        </div>
        <div className='row-center result-wrapper'>
          <Result result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
