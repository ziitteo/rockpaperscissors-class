import React, { Component } from 'react';
// Box.css 스타일 불러오기
import '../assets/styles/Box.css';

export default class BoxClass extends Component {
  render() {
    // props를 this.props로 접근
    const { name, item, result } = this.props;
    let displayResult;

    if (name === 'Computer' && result !== '') {
      displayResult = result === 'TIE' ? 'TIE' : result === 'WINNER' ? 'LOSER' : result === 'LOSER' ? 'WINNER' : '';
    } else {
      displayResult = result;
    }

    return (
      <div>
        <div
          className={`box-container ${displayResult === 'TIE' ? 'tie' : displayResult === 'WINNER' ? 'win' : displayResult === 'LOSER' ? `lose` : ''}`}
        >
          {/* name 속성을 제목으로 표시 */}
          <h1 className='box-title'>{this.props.name}</h1>
          {/* randomImage 상태에 저장된 이미지 표시 */}
          <img src={item && item.image} alt={name} className='box-image' />
          {/* 승패 상태에 저장된 결과 표시 */}
          <h2 className='game-result'>{displayResult}</h2>
        </div>
      </div>
    );
  }
}
