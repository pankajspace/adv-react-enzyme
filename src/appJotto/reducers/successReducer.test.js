import { actionTypes } from "../actions";
import successReducer from "./successReducer";

describe("successReducer", () => {
  it("return default initial state when no action type is present", () => {
    const newState = successReducer(undefined, { type: undefined });
    expect(newState).toEqual(false);
  });
  it("return true state when action of type CORRECT_GUESS is dispatched", () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS,
    });
    expect(newState).toEqual(true);
  });
});
