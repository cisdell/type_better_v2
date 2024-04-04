import React from "react";
type WordType = {
  word: string;
  row: number;
  col: number;
  life: number;
  setLife: Function;
};

export default function Word({ word, row, col, life, setLife }: WordType) {
  console.log(word, row, col);
  return (
    <div className={`absolute row-start-${row} col-start-${col}`}>{word}</div>
  );
}
