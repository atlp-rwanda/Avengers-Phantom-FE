import { combineReducers } from "redux";

import reducer from "./reducer";
<<<<<<< HEAD:src/redux/Reducer/rootreducer.js

const rootReducer = combineReducers({
  counter: reducer,
=======
import {fetchAllbusesReducer} from "./fetchallbuses"
import {fetchallusersReducer} from "./fetchallusers"
import {assignbusesReducer} from "./assigndrivers"

const rootReducer = combineReducers({
  counter: reducer,
  fetchbuses: fetchAllbusesReducer,
  fetchusers:fetchallusersReducer,
  assign:assignbusesReducer
>>>>>>> 00bc4aa6 (ft assign drivers intergation redux):src/redux/Reducer/index.js
});

export default rootReducer;

// i18n
