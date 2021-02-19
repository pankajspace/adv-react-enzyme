import { guessWord } from "./actions";
import { storeFactory } from "../testUtils";

describe("guessWord action creator", () => {
  const secretWord = "party";
  const wrongGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates the state correctly on unsuccessfull guess", () => {
      store.dispatch(guessWord(wrongGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ word: wrongGuess, correctLetters: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates the state correctly on successfull guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ word: secretWord, correctLetters: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    let store;
    const initialState = {
      secretWord,
      guessedWords: [{ word: "train", correctLetters: 3 }],
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates the state correctly on unsuccessfull guess", () => {
      store.dispatch(guessWord(wrongGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...initialState.guessedWords,
          { word: wrongGuess, correctLetters: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates the state correctly on successfull guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...initialState.guessedWords,
          { word: secretWord, correctLetters: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
