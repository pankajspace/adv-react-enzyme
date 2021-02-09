import React from "react";
import { shallow } from "enzyme";

import { findElement, storeFactory } from "../testUtils";
import Input from "./input";

const createWrapper = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe("Input component render", () => {
  describe("word han not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = createWrapper(initialState);
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
  describe("word han been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = createWrapper(initialState);
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
describe("Input component update state", () => {});
