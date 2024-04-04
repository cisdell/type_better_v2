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
  const show = (row: number): boolean => {
    return row < 9;
  };

  return (
    <>
      {show(row) && (
        <div className={`absolute row-start-${row} col-start-${col}`}>
          {word}
        </div>
      )}
    </>
  );
}
