import React, { useEffect } from "react";
import { WordType } from "@/util/types";

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
      //filter out the missed word from the object
      for (let i = 0; i < wordsOnScreen.length; i++) {
        if (wordsOnScreen[i].word === word) {
          wordsOnScreen.splice(i, 1);
          setWordsOnScreen(wordsOnScreen);
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

// type WordType = {
//   word: string;
//   row: number;
//   col: number;
//   life: number;
//   setLife: Function;
//   setGameOver: Function;
//   wordsOnScreen: any;
//   setWordsOnScreen: Function;
// };
