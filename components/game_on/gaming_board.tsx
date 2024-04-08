//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
import BatteryContainer from "./battery_container";
//libs
import { useState, useEffect } from "react";
//types
import { WordObjType, LevelsType } from "@/util/types";
//data
import { grid_pos, word_bank } from "@/lib/data";

const GameBoard: React.FC<{}> = () => {
  const [wordsOnScreen, setWordsOnScreen] = useState<WordObjType[]>([]);
  const [WordsQueue, setWordsQueue] = useState<string[]>(word_bank[0]["words"]);
  //game level specific state
  const [speed, setSpeed] = useState<number>(2000);
  const [level, setLevel] = useState<LevelsType>(0);
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [tryValue, setTryValue] = useState<string>("");
  const [life, setLife] = useState<number[]>([0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // console.log(tryValue);
  const setChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value.replace(/\s/g, "");
    setTryValue(newValue);
  };

  // function to attempt to clear a value
  const submitTry = (e: React.SyntheticEvent): void => {
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
  //initially word_queue starts with level 0
  let word_queue = word_bank[0]["words"];

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const generateWord = (): void => {
    let wordToAdd: string = word_queue.shift() || "";

    if (word_queue.length === 0 && level < word_bank.length - 1) {
      // Update word_queue for the next level
      word_queue = word_bank[level + 1]["words"];
    }

    let wordToAddObj: WordObjType = {
      word: wordToAdd,
      row: 1,
      col: getRandomInt(1, 3),
    };
    setWordsOnScreen((prevWords) => [...prevWords, wordToAddObj]);
  };

  //pause button
  const pauseButton = (): void => {
    setPaused(!paused);
  };

  //generate a word ever x seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!paused) {
      interval = setInterval(() => {
        generateWord();
      }, speed);
      return () => clearInterval(interval);
    }
  }, [paused, level]);

  //function to move down the words
  useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
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

  //tracking to finish the game when you run out of life.
  useEffect(() => {
    if (gameOver) {
      // setPaused(true);
      alert("GameOver!");
    }
  }, [gameOver]);
  //tracking to complete to the next stage
  useEffect(() => {
    if (clearedCount > 3) {
      if (level === 2) {
        alert("you are a typing god");
      }
      setPaused(true);
      alert(`proceeding to level ${level + 1}!!!`);
      let newLevel = level + 1;
      setClearedCount(0);
      let newSpeed = word_bank[level].speed;
      setSpeed(newSpeed);
      setPaused(false);
      setWordsOnScreen([]);
      setLife([0, 0, 0, 0]);
      setLevel(newLevel);
    }
  }, [clearedCount]);

  //jsx components
  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white justify-center align-middle bg-blue-400 flex flex-col relative">
      <BatteryContainer life={life} />
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
            setPaused={setPaused}
          />
        ))}
      </div>
      <form className="ml-auto mr-auto mt-7" onSubmit={submitTry}>
        <input
          required
          type="text"
          size={40}
          value={tryValue || ""}
          onChange={setChange}
        />
      </form>
    </div>
  );
};

export default GameBoard;
