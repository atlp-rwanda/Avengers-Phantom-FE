import { combineReducers } from "redux";

import reducer from "./reducer";

const rootReducer = combineReducers({
  counter: reducer,
  // un: un,
});

export default rootReducer;
