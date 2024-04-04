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

