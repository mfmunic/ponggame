import React from 'react';

const Score = (props) => {
  return (
    <div className='score'>
      <span>{props.score}</span>
    </div>
  );
};

export default Score;
