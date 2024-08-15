// React, useState, useEffect를 불러오기
import React from 'react';

// Box.css 스타일 불러오기
import '../assets/styles/Box.css';

// Box 컴포넌트 정의
const Box = props => {
  let result;

  if (props.name === 'Computer' && props.result !== '') {
    result =
      props.result === 'TIE' ? 'TIE' : props.result === 'WINNER' ? 'LOSER' : props.result === 'LOSER' ? 'WINNER' : '';
  } else {
    result = props.result;
  }

  return (
    <div>
      <div
        className={`box-container ${result === 'TIE' ? 'tie' : result === 'WINNER' ? 'win' : result === 'LOSER' ? `lose` : ''}`}
      >
        {/* name 속성을 제목으로 표시 */}
        <h1 className='box-title'>{props.name}</h1>
        {/* randomImage 상태에 저장된 이미지 표시 */}
        <img src={props.item && props.item.image} alt={props.name} className='box-image' />
        {/* 승패 상태에 저장된 결과 표시 */}
        <h2 className='game-result'>{result}</h2>
      </div>
    </div>
  );
};

export default Box;
