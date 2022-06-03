import { combineReducers } from "redux";

import reducer from "./reducer";
import {fetchAllbusesReducer} from "./fetchallbuses"
import {fetchallusersReducer} from "./fetchallusers"
import {assignbusesReducer} from "./assigndrivers"
import {fetchUserDataReducer} from "./fetchUserData"

const rootReducer = combineReducers({
  counter: reducer,
  fetchbuses: fetchAllbusesReducer,
  fetchusers:fetchallusersReducer,
  assign:assignbusesReducer,
  fetchUserData:fetchUserDataReducer,
});



export default rootReducer;

// i18n
