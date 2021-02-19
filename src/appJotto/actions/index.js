import { getMatchedLettersCount } from "../../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

// export const correctGuess = () => {
//   return { type: actionTypes.CORRECT_GUESS };
// };

export const guessWord = (word) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const correctLetters = getMatchedLettersCount(word, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { word, correctLetters },
    });
    if (word === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
    return { type: actionTypes.GUESS_WORD };
  };
};
