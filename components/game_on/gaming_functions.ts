// gaming_functions.ts

// export function submitTryFunction(e: React.SyntheticEvent, wordsOnScreen: WordObjType[], setWordsOnScreen: Function, setClearedCount: Function, clearedCount: number, setTryValue: Function): void {
//   e.preventDefault();
//   for (let i = 0; i < wordsOnScreen.length; i++) {
//     if (wordsOnScreen[ i ].word === e.target.value) {
//       wordsOnScreen.splice(i, 1);
//       setClearedCount(clearedCount + 1);
//       setWordsOnScreen(wordsOnScreen);
//       break;
//     }
//   }
//   setTryValue("");
// }

// export function getRandomInt(min: number, max: number): number {
//   min = Math.ceil(1);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function generateWord(word_queue: string[], setWordsOnScreen: Function): void {
//   let wordToAdd = word_queue.shift();
//   let wordToAddObj = { word: wordToAdd, row: 1, col: getRandomInt(1, 3) };
//   setWordsOnScreen((prevWords) => [ ...prevWords, wordToAddObj ]);
// }