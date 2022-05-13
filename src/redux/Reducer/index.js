import { combineReducers } from "redux";

import reducer from "./reducer";
import {fetchAllbusesReducer} from "./fetchallbuses"

const rootReducer = combineReducers({
  counter: reducer,
  fetchbuses: fetchAllbusesReducer,
});

export default rootReducer;

// i18n
