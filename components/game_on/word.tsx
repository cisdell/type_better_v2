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
  setPaused,
}: WordType) {
  const expired = (row: number): boolean => {
    return row > 10;
  };

  useEffect(() => {
    if (expired(row)) {
      console.log(life);
      if (life.length === 0) {
        setGameOver(true);
        setPaused(true);
      }
      setLife((prevLife: string[]) => {
        const newLife = prevLife.slice(0, -1);
        console.log("expired" + expired(row));
        return newLife;
      });
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
        <div className={`absolute row-start-${row} col-start-${col}`}>
          {word}
        </div>
      )}
    </>
  );
}
