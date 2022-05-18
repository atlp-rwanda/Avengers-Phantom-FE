import { combineReducers } from "redux";

import reducer from "./reducer";
import {fetchAllbusesReducer} from "./fetchallbuses"
import {fetchallusersReducer} from "./fetchallusers"
import {assignbusesReducer} from "./assigndrivers"

const rootReducer = combineReducers({
  counter: reducer,
  fetchbuses: fetchAllbusesReducer,
  fetchusers:fetchallusersReducer,
  assign:assignbusesReducer
});

export default rootReducer;

// i18n
