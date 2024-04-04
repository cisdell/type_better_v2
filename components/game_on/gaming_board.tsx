//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
import { submitTry } from "./gaming_functions";

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
    { word: "shouldbegone", row: 9, col: 3 },
  ]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [speed, setSpeed] = useState(2000);
  const [tryValue, setTryValue] = useState("");
  const [life, setLife] = useState([0, 0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

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
  //

  console.log(tryValue);
  const setChange = (e) => {
    const newValue = e.target.value.replace(/\s/g, "");
    setTryValue(newValue);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   submitTry(tryValue, wordsOnScreen, setClearedCount, setWordsOnScreen);
  //   setTryValue(""); // Clear input field
  // };

  // text input submit
  const submitTry = (e) => {
    e.preventDefault();
    for (let i = 0; i < wordsOnScreen.length; i++) {
      if (wordsOnScreen[i].word === tryValue) {
        wordsOnScreen.splice(i, 1);
        setClearedCount(clearedCount + 1);
        setWordsOnScreen(wordsOnScreen);
        console.log(wordsOnScreen);
        break; // Stop loop once object is removed
      }
    }
    setTryValue(""); // should clear the field after hitting return
  };

  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white justify-center align-middle bg-blue-400 flex flex-col">
      <h1 className="text-center text-lg">
        Type away the words before they hit the floor!
      </h1>

      <div className="relative grid grid-cols-3 grid-rows-8 gap-2">
        {grid_pos.map(({ row, col }, index) => (
          <GridPlaceholder row={row} col={col} key={index} />
        ))}
        {wordsOnScreen.map((w, index) => (
          <Word
            word={w.word}
            row={w.row}
            col={w.col}
            key={index}
            life={life}
            setLife={setLife}
          />
        ))}
      </div>
      <form className="ml-auto mr-auto mt-7" onSubmit={submitTry}>
        <input
          required
          type="text"
          size="40"
          value={tryValue}
          onChange={setChange}
        />
      </form>
    </div>
  );
}
