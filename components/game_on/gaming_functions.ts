'use server'

export const submitTry = (tryValue: string, wordsOnScreen: any[], setClearedCount: Function, setWordsOnScreen: Function): void => {
  for (let i = 0; i < wordsOnScreen.length; i++) {
    if (wordsOnScreen[ i ].word === tryValue) {
      const newWordsOnScreen = [ ...wordsOnScreen ]; // Create a copy of the array
      newWordsOnScreen.splice(i, 1); // Remove the word from the copy
      setClearedCount((prevCount: number) => prevCount + 1); // Update cleared count
      setWordsOnScreen(newWordsOnScreen); // Update words on screen
      break;
    }
  }
}

//function to generate one word at a time.
// const word_queue = word_bank.words;
// export const generateWord = () => {

// }

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(res)
  return res
}
// const word_queue = word_bank.words;

export const getWord = (word_queue: any) => {
  let wordToAdd = word_queue.pop();
  const randomNumber = getRandomInt(1, 3);
  const t = { 'word': wordToAdd, 'row': 1, col: 3 };
  console.log(t)
  return t;
}
