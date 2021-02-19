import { combineReducers } from "redux";

import successReducer from "./successReducer";
import guessedWordReducer from "./guesWordReducer";

export default combineReducers({
  success: successReducer,
  guessedWord: guessedWordReducer,
});
