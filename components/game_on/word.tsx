import React from "react";
type WordType = {
  word: string;
  row: number;
  col: number;
  life: number;
  setLife: Function;
};

export default function Word({ word, row, col, life, setLife }: WordType) {
  return (
    <div
      className={`absolute grid-cols-subgrid row-start-${row} col-start-${col} lm-auto rm-auto justify-center`}
    >
      {word}
    </div>
  );
}
