import { actionTypes } from "../actions";

const guessedWord = (state = "", action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return state;
    default:
      return state;
  }
};

export default guessedWord;
