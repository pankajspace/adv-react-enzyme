import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

export const middlewares = [ReduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, middlewareEnhancer);
export default store;
