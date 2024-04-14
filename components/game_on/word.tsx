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
}: any) {
  const expired = (row: number): boolean => {
    return row > 10;
  };

  useEffect(() => {
    if (expired(row)) {
      if (life.length === 0) {
        setGameOver(true);
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
        <div
          className={`absolute row-start-${row} col-start-${col} z-10 text-2xl font-bold text-yellow-400 translate-x-${row}`}
        >
          {word}
        </div>
      )}
    </>
  );
}
