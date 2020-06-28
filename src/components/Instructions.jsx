import React from "react";

// Displays instructions
const Instructions = (props) => {
  const instructions =
    "You will need to swing the phone to serve the ball.  You will hear a sound indicating you have hit the ball.  The computer will make a sound indicating it has hit back.  Swing the phone to hit the ball again and increase your score.";
  return (
    <div className="instDiv">
      <div>Instructions</div>
      <div className="linebreak">
        <div className="linebreak_dot linebreak_dot-blue"></div>
        <div className="linebreak_dot linebreak_dot-white"></div>
        <div className="linebreak_dot linebreak_dot-yellow"></div>
      </div>
      <div className="instructions">{instructions}</div>
    </div>
  );
};

export default Instructions;
