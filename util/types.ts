export interface WordObjType {
  word: string
  row: number;
  col: number;
}
export type LevelsType = 0 | 1 | 2 | 3 | 4 | 5

export type WordType = {
  word: string;
  row: number;
  col: number;
  life: number[];
  setLife: Function;
  setGameOver: Function;
  wordsOnScreen: any;
  setWordsOnScreen: Function;
};

export interface BatteryContainerProps {
  life: number[];
}