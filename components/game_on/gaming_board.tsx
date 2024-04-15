//components
import GridPlaceholder from "./grid_placeholder";
import Word from "./word";
import BatteryContainer from "./battery_container";
import GameOverModal from "../game_off/gameover_modal";
import LevelOneModal from "../game_off/level1_modal";
import LevelTwoModal from "../game_off/level2_modal";
import LevelThreeModal from "../game_off/level3_modal";
import Demo from "../game_off/demo";
//libs
import { useState, useEffect } from "react";
//types
import { WordObjType, LevelsType } from "@/util/types";
//data
import { grid_pos, word_bank } from "@/public/data";
import Countdown from "../game_off/countdown_modal";

const GameBoard: React.FC<{}> = () => {
  const [wordsOnScreen, setWordsOnScreen] = useState<WordObjType[]>([]);
  const [WordsQueue, setWordsQueue] = useState<string[]>(
    word_bank[0]["words"].slice()
  );

  //game level specific state
  const [name, setName] = useState<string>("");
  const [speed, setSpeed] = useState<number>(1000);
  const [level, setLevel] = useState<LevelsType>(0);
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [tryValue, setTryValue] = useState<string>("");
  const [life, setLife] = useState<number[]>([0, 0, 0, 0]);
  const [clearedCount, setClearedCount] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [countdownOn, setCountdownOn] = useState<boolean>(false);
  const [demoOn, setDemoOn] = useState<boolean>(true);
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
        let newCleardCount = clearedCount + 1;
        console.log(
          `Just cleared ${tryValue}. Cleared count: ${newCleardCount}`
        );
        setClearedCount(newCleardCount);
        setWordsOnScreen(wordsOnScreen);
        break;
      }
    }
    setTryValue("");
  };

  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
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
  //this function generates words and moves them down the screen
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!paused && !gameOver && !countdownOn && !demoOn) {
      interval = setInterval(() => {
        generateWord();
        setWordsOnScreen((prevWords) => {
          return prevWords.map((word) => ({
            ...word,
            row: word.row + 1, // Increment the row
          }));
        });
      }, speed);
    }
    return () => clearInterval(interval); // Cleanup on unmount
  }, [paused, level, gameOver, countdownOn, speed, demoOn]); // Add all dependencies

  //tracking to finish the game when you run out of life.
  useEffect(() => {
    if (gameOver) {
      setPaused(true);
      setModalOn(true);
      console.log("GameOver!");
    }
  }, [gameOver]);

  //tracking to complete to the next level
  useEffect(() => {
    if (clearedCount > 0) {
      setPaused(true);
      console.log("pausing");
      setClearedCount(0);
      setWordsOnScreen([]);
      console.log("words on screen");
      console.log(wordsOnScreen);
      setLife([0, 0, 0, 0]);
      const newLevel = level + 1;
      setLevel(newLevel);
      setModalOn(true);
      if (level === 2) {
        console.log("you are a typing god");
        // end the game completely. No more levels
      } else {
        const newWordsQueue = [...word_bank[newLevel]["words"]];
        setWordsQueue(newWordsQueue);
        setSpeed(word_bank[newLevel]["speed"]);
        console.log("level up");
        // 3 is the number of words to clear to move to the next level
      }
    }
  }, [clearedCount]);

  //jsx components
  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white flex flex-col justify-center items-center">
      <BatteryContainer life={life} />
      {/* to be removed later */}
      <button className="z-10 w-80 bg-red-500" onClick={pauseButton}>
        Pause
      </button>
      <h1 className="text-center text-2xl z-10 text-white">
        Type away the words before they hit the floor!
      </h1>
      {countdownOn && <Countdown setCountdownOn={setCountdownOn} />}
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
      <form className="ml-auto mr-auto mt-7 z-10" onSubmit={submitTry}>
        <input
          required
          type="text"
          size={40}
          value={tryValue || ""}
          onChange={setChange}
        />
      </form>
      {demoOn && <Demo setDemoOn={setDemoOn} setCountdownOn={setCountdownOn} />}
      {gameOver && modalOn && (
        <GameOverModal
          setModalOn={setModalOn}
          setPaused={setPaused}
          setCountdownOn={setCountdownOn}
          setDemoOn={setDemoOn}
        />
      )}
      {!gameOver && modalOn && level === 1 && (
        <LevelOneModal
          setModalOn={setModalOn}
          setPaused={setPaused}
          setCountdownOn={setCountdownOn}
        />
      )}
      {!gameOver && modalOn && level === 2 && (
        <LevelTwoModal
          setModalOn={setModalOn}
          setPaused={setPaused}
          setCountdownOn={setCountdownOn}
        />
      )}
      {!gameOver && modalOn && level === 3 && (
        <LevelThreeModal
          setModalOn={setModalOn}
          setPaused={setPaused}
          setDemoOn={setDemoOn}
        />
      )}
    </div>
  );
};

export default GameBoard;
