import { createStore, applyMiddleware } from "redux";

import checkPropTypes from "check-prop-types";
import rootReducer from "../appJotto/reducers";
import { middlewares } from "../appJotto/configureStore";

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

const middlewareEnhancer = applyMiddleware(...middlewares);
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, middlewareEnhancer);
};
