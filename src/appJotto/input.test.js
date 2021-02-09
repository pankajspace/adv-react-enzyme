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

describe("Input component", () => {
  describe("render", () => {
    describe("word han not been guessed", () => {
      it("renders the component without error", () => {});
      it("renders the input box", () => {});
      it("renders the submit button", () => {});
    });
    describe("word han been guessed", () => {
      it("renders the component without error", () => {});
      it("does not render the input box", () => {});
      it("does not render the submit button", () => {});
    });
  });
  describe("update state", () => {});
});
