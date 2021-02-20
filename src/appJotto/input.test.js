import React from "react";
import { shallow } from "enzyme";

import { findElement, storeFactory } from "../testUtils";
import Input from "./Input";

const createWrapper = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe("Input component renders", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
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
      const initialState = { success: true };
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

describe("Input component redux props", () => {
  test("has success piece of state as a prop", () => {
    const success = false;
    const wrapper = createWrapper({ success }).dive();
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has guessWord action creator piece of state as a prop", () => {
    const wrapper = createWrapper().dive();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
