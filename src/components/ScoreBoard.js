import React from "react";
import "./ScoreBoard.css";
const ScoreBoard = ({ scores, xplay }) => {
  const { xScore, oScore } = scores;
  console.log("from scoreboard", xScore, oScore);
  console.log(xplay);
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xplay && "inactive"}`}>
        x - {xScore}
      </span>
      <span className={`score o-score ${xplay && "inactive"}`}>
        o - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
