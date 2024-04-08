export interface WordObjType {
  word: string
  row: number;
  col: number;
}
export type WordColType = {
  row: number;
  col: number
}
export type LevelsType = number

export type WordType = {
  word: string;
  row: number;
  col: number;
  life: number[];
  setLife: Function;
  setGameOver: Function;
  wordsOnScreen: any;
  setWordsOnScreen: Function;
  setPaused: Function;
};

export interface BatteryContainerProps {
  life: number[];
}