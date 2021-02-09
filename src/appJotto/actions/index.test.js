import { actionTypes, correctGuess } from "./index";

describe("correctGuess action creator", () => {
  it("returns an action of type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
