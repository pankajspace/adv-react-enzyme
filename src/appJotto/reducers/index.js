import { combineReducers } from "redux";

import successReducer from "./successReducer";
import guessedWordReducer from "./guessedWordsReducer";
import secretWordReducer from "./secretWordReducer";

export default combineReducers({
  success: successReducer,
  secretWord: secretWordReducer,
  guessedWords: guessedWordReducer,
});
