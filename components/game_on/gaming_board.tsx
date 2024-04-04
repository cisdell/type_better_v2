import { useState, useRef, useEffect } from "react";
import GridPlaceholder from "./grid_placeholder";
import { grid_pos, word_bank } from "@/lib/data";

export default function GameBoard() {
  const [wordsOnScreen, setWordsOnScreen] = useState([
    { word: "apple", row: 1, col: 1 },
    { word: "orange", row: 1, col: 2 },
  ]);
  const word = "apple";
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Update the rows of all words
  //     setWordsOnScreen((prevWords) => {
  //       return prevWords.map((word) => ({
  //         ...word,
  //         row: word.row + 1, // Increment the row
  //       }));
  //     });
  //   }, 1000); // Run every second

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white justify-center align-middle bg-blue-800 flex flex-col">
      <h1>Instructions</h1>
      <div className="grid grid-cols-3 grid-rows-8 gap-2">
        {grid_pos.map(({ row, col }, index) => (
          <GridPlaceholder
            row={row}
            col={col}
            key={index}
            wordsOnScreen={wordsOnScreen}
            setWordsOnScreen={setWordsOnScreen}
          />
        ))}
      </div>
    </div>
  );
}
