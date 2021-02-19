import axios from "axios";

import { getMatchedLettersCount } from "../../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
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
  };
};

export const getSecretWord = (word) => {
  return (dispatch, getState) => {
    return axios
      .get("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => {
        dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data });
      });
  };
};
