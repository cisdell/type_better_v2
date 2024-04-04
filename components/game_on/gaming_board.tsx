//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
//libs
import { useState, useRef, useEffect } from "react";
//data
import { grid_pos, word_bank } from "@/lib/data";

export default function GameBoard() {
  const [wordsOnScreen, setWordsOnScreen] = useState([
    { word: "apple", row: 1, col: 1 },
    { word: "orange", row: 2, col: 2 },
    { word: "tissue", row: 3, col: 3 },
    { word: "chris", row: 5, col: 2 },
    { word: "bloomberg", row: 8, col: 3 },
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

      <div className="relative grid grid-cols-3 grid-rows-8 gap-2">
        {grid_pos.map(({ row, col }, index) => (
          <GridPlaceholder row={row} col={col} key={index} />
        ))}
        {wordsOnScreen.map((w, index) => (
          <Word word={w.word} row={w.row} col={w.col} key={index} />
        ))}

        {/* <div className="absolute grid-cols-subgrid row-start-8 col-start-3">
          00
        </div>
        <div className="absolute grid-cols-subgrid row-start-4 col-start-2">
          02
        </div>
        <div className="absolute grid-cols-subgrid row-start-2 col-start-1">
          03
        </div> */}
      </div>
    </div>
  );
}
