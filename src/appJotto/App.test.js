import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../testUtils";
import ConnectedApp, { App } from "./App";

const createWrapper = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<ConnectedApp store={store} />).dive();
};

describe("ConnectedApp redux props", () => {
  const initialState = {
    success: false,
    secretWord: "party",
    guessedWords: [],
  };
  const wrapper = createWrapper(initialState).dive();
  test("has success state as prop", () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(initialState.success);
  });
  test("has secretWord state as prop", () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(initialState.secretWord);
  });
  test("has guessWords state as prop", () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(initialState.guessedWords);
  });
  test("has getSecretWord action creator as a prop", () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("getSecretWord runs on app mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    success: false,
    secretWord: "party",
    guessedWords: [],
  };
  const wrapper = shallow(<App {...props} getSecretWord={getSecretWordMock} />);
  wrapper.instance().componentDidMount();
  const getSecretWordCallsCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallsCount).toBe(1);
});
