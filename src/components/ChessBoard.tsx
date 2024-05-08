import React from "react";
import "./chessboard.css";

const varticalAxist = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ChessBoard = () => {
  let board = [];
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < varticalAxist.length; j++) {
      board.push(
        <span>
          {horizontalAxis[i]} {varticalAxist[j]}
        </span>
      );
    }
  }
  return <div id="chessboard">{board}</div>;
};

export default ChessBoard;
