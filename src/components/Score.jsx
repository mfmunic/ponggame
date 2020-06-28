import React from "react";
import Instructions from "./Instructions";

// Displays instructions and then the current score
const Score = (props) => {
  const { served, score } = props;
  const scoreSpan = <span>{score}</span>;
  return <div className="score">{served ? scoreSpan : <Instructions />}</div>;
};

export default Score;
