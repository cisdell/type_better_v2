//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
import BatteryContainer from "./battery_container";
import GameOverModal from "../game_off/gameover_modal";
import LevelOneModal from "../game_off/level1_modal";
import LevelTwoModal from "../game_off/level2_modal";
import LevelThreeModal from "../game_off/level3_modal";

//libs
import { useState, useEffect } from "react";
//types
import { WordObjType, LevelsType } from "@/util/types";
//data
import { grid_pos, word_bank } from "@/public/data";

const GameBoard: React.FC<{}> = () => {
  const [wordsOnScreen, setWordsOnScreen] = useState<WordObjType[]>([]);
  const [WordsQueue, setWordsQueue] = useState<string[]>(word_bank[0]["words"]);

  //game level specific state
  const [name, setName] = useState<string>("");
  const [speed, setSpeed] = useState<number>(2000);
  const [level, setLevel] = useState<LevelsType>(0);
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [tryValue, setTryValue] = useState<string>("");
  const [life, setLife] = useState<number[]>([0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);
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

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const generateWord = (): void => {
    let wordToAdd: string = WordsQueue.shift() || "";
    let wordToAddObj: WordObjType = {
      word: wordToAdd,
      row: 0,
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
      console.log("GameOver!");
    }
  }, [gameOver]);

  //tracking to complete to the next stage
  useEffect(() => {
    if (clearedCount > 3) {
      setModalOn(true);
      // 3 is the number of words to clear to move to the next level
      if (level === 2) {
        console.log("you are a typing god");
        setPaused(true);
        const newLevel = level + 1;
        setLevel(newLevel);
        // end the game completely. No more levels
      } else {
        const newLevel = level + 1;
        setPaused(true);
        setLevel(newLevel);
        console.log(`proceeding to level ${newLevel}!!!`);
        let newWordsQueue = word_bank[newLevel]["words"];
        setWordsQueue(newWordsQueue);
        setClearedCount(0);
        setSpeed(word_bank[newLevel].speed);
        // setPaused(false);
        setWordsOnScreen([]);
        setLife([0, 0, 0, 0]);
      }
    }
  }, [clearedCount]);

  //jsx components
  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white flex flex-col justify-center items-center bg-white opacity-40 relative">
      <BatteryContainer life={life} />
      <button onClick={pauseButton}>Pause</button>
      {/* <button onClick={generateWord}>Generate Word</button> */}
      <h1 className="text-center text-lg">
        Type away the words before they hit the floor!
      </h1>

      <div className="relative grid grid-cols-3 grid-rows-10 gap-2 w-[40rem] justify-center">
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
      {gameOver && <GameOverModal />}
      {modalOn && level === 1 && (
        <LevelOneModal setModalOn={setModalOn} setPaused={setPaused} />
      )}
      {modalOn && level === 2 && (
        <LevelTwoModal setModalOn={setModalOn} setPaused={setPaused} />
      )}
      {modalOn && level === 3 && (
        <LevelThreeModal
          setModalOn={setModalOn}
          setPaused={setPaused}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
};

export default GameBoard;
