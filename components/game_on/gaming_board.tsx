//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
import { submitTry } from "./gaming_functions";
import {} from "";
//libs
import { useState, useRef, useEffect } from "react";

//types

//data
import { grid_pos, word_bank } from "@/lib/data";

export default function GameBoard() {
  const [wordsOnScreen, setWordsOnScreen] = useState([]);
  //game level specific state
  const [speed, setSpeed] = useState(1000);
  const [level, setLevel] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tryValue, setTryValue] = useState("");
  const [life, setLife] = useState([0, 0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState(0);
  const [paused, setPaused] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  // const [audioPlaying, setAudioPlaying] = useState(false);

  // console.log(tryValue);
  const setChange = (e) => {
    const newValue = e.target.value.replace(/\s/g, "");
    setTryValue(newValue);
  };

  // function to attempt to clear a value
  const submitTry = (e) => {
    e.preventDefault();
    for (let i = 0; i < wordsOnScreen.length; i++) {
      if (wordsOnScreen[i].word === tryValue) {
        wordsOnScreen.splice(i, 1);
        setClearedCount(clearedCount + 1);
        setWordsOnScreen(wordsOnScreen);
        break;
      }
    }
    setTryValue("");
  };

  //two functions to generate a word from the word bank
  const word_queue = word_bank[0]["words"];
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const generateWord = () => {
    let wordToAdd = word_queue.shift();
    let wordToAddObj = { word: wordToAdd, row: 1, col: getRandomInt(1, 3) };
    setWordsOnScreen((prevWords) => [...prevWords, wordToAddObj]);
  };

  //pause button
  const pauseButton = () => {
    setPaused(!paused);
  };

  //generate a word ever x seconds
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        generateWord();
      }, speed);
      return () => clearInterval(interval);
    }
  }, [paused]);

  //function to move down the words
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setWordsOnScreen((prevWords) => {
          return prevWords.map((word) => ({
            ...word,
            row: word.row + 1, // Increment the row
          }));
        });
      }
    }, speed);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [paused, speed]); // Add paused and speed as dependencies

  //jsx components
  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white justify-center align-middle bg-blue-400 flex flex-col">
      <button onClick={pauseButton}>Pause</button>
      <button onClick={generateWord}>Generate Word</button>
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
            setGameOver={setGameOver}
            wordsOnScreen={wordsOnScreen}
            setWordsOnScreen={setWordsOnScreen}
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
