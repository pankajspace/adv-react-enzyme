import { createStore } from "redux";

import checkPropTypes from "check-prop-types";
import rootReducer from "../appJotto/reducers";

export const findElement = (wrapper, attrValue) =>
  wrapper.find(`[data-test='${attrValue}']`);

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
};

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
