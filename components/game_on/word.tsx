import React, { useEffect } from "react";

// const test1 = 'absolute row-start-1 col-start-1',;
// const test2 = 'absolute row-start-1 col-start-2',;
// const test3 = 'absolute row-start-1 col-start-3',;
// const row1 = "absolute row-start-1";
// const row2 = "absolute row-start-2";
// const row3 = "absolute row-start-3";
// const row4 = "absolute row-start-4";
// const row5 = "absolute row-start-5";
// const row6 = "absolute row-start-6";
// const row7 = "absolute row-start-7";
// const row8 = "absolute row-start-8";
// const row9 = "absolute row-start-9";

// const col1 = "col-start-1";
// const col2 = "col-start-2";
// const col3 = "col-start-3";

export default function Word({
  word,
  row,
  col,
  life,
  setLife,
  setGameOver,
  wordsOnScreen,
  setWordsOnScreen,
}: WordType) {
  // console.log(word, row, col);
  // let show: boolean = true;
  let css = `absolute row-start-${row} col-start-${col}`;

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
      for (let i = 0; i < wordsOnScreen.length; i++) {
        if (wordsOnScreen[i].word === word) {
          wordsOnScreen.splice(i, 1);
          setWordsOnScreen(wordsOnScreen);
          console.log(wordsOnScreen);
          break; // Stop loop once object is removed
        }
      }
    }
  }, [row]);

  return (
    <>
      {!expired(row) && (
        // <div className={`absolute row-start-${row} col-start-${col}`}>
        <div className={css}>{word}</div>
      )}
    </>
  );
}

type WordType = {
  word: string;
  row: number;
  col: number;
  life: number[];
  setLife: Function;
  setGameOver: Function;
  wordsOnScreen: any;
  setWordsOnScreen: Function;
};
