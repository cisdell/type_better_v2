import React, { useEffect } from "react";
type WordType = {
  word: string;
  row: number;
  col: number;
  life: number[];
  setLife: Function;
  setGameOver: Function;
};

export default function Word({
  word,
  row,
  col,
  life,
  setLife,
  setGameOver,
}: WordType) {
  // console.log(word, row, col);
  // let show: boolean = true;

  const expired = (row: number): boolean => {
    return row > 8;
  };

  useEffect(() => {
    if (expired(row)) {
      if (life.length === 0) {
        setGameOver(true);
      }
      life.pop();
      setLife(life);
      console.log("expired" + expired(row));
    }
  }, [row]);

  return (
    <>
      {!expired(row) && (
        <div className={`absolute row-start-${row} col-start-${col}`}>
          {word}
        </div>
      )}
    </>
  );
}
