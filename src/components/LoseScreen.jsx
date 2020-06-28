import React from "react";

// Displays Replay Button and input for high score if highest score
const LoseScreen = (props) => {
  return (
    <div className="loseScreen">
      <div className="loseScreen_score-text">Your Score</div>
      <div className="loseScreen_score-number">{props.score}</div>
      <div className="loseScreen_replayButton" onClick={props.replay}>
        Replay?
      </div>
    </div>
  );
};

export default LoseScreen;
