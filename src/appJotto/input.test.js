import React from "react";
import { shallow } from "enzyme";

import { findElement, storeFactory } from "../testUtils";
import ConnectedInput, { Input } from "./Input";

const createWrapper = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedInput store={store} />).dive();
  return wrapper;
};

describe("ConnectedInput component renders", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false, secretWord: "party" };
      wrapper = createWrapper(initialState).dive();
    });
    it("renders the component without error", () => {
      const element = findElement(wrapper, "form-input");
      expect(element.length).toBe(1);
    });
    it("renders the input box", () => {
      const element = findElement(wrapper, "element-input");
      expect(element.length).toBe(1);
    });
    it("renders the submit button", () => {
      const element = findElement(wrapper, "button-input");
      expect(element.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true, secretWord: "party" };
      wrapper = createWrapper(initialState).dive();
    });
    it("renders the component without error", () => {
      const element = findElement(wrapper, "form-input");
      expect(element.length).toBe(0);
    });
    it("does not render the input box", () => {
      const element = findElement(wrapper, "element-input");
      expect(element.length).toBe(0);
    });
    it("does not render the submit button", () => {
      const element = findElement(wrapper, "button-input");
      expect(element.length).toBe(0);
    });
  });
});

describe("ConnectedInput component redux props", () => {
  test("has success piece of state as a prop", () => {
    const initialState = { success: false, secretWord: "party" };
    const wrapper = createWrapper(initialState).dive();
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(initialState.success);
  });
  test("has guessWord action creator piece of state as a prop", () => {
    const initialState = { success: false, secretWord: "party" };
    const wrapper = createWrapper(initialState).dive();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("Input component guessWord action creator", () => {
  let guessWordMock;
  let props;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    props = {
      success: false,
    };
    wrapper = shallow(<Input {...props} guessWord={guessWordMock} />);
    wrapper.setState({ currentGuess: guessedWord });
    const submitButton = findElement(wrapper, "button-input");
    const event = { preventDefault: () => {} };
    submitButton.simulate("click", event);
  });
  test("gets called on submit button click", () => {
    const guessWordCallsCount = guessWordMock.mock.calls.length;
    expect(guessWordCallsCount).toBe(1);
  });
  test("calls guessWord with input value as argument", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });
  test("input box clears on submit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
