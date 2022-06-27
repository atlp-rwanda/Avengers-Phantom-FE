import { combineReducers } from "redux";

import reducer from "./reducer";
import { fetchAllbusesReducer } from "./fetchallbuses";
import { fetchallusersReducer } from "./fetchallusers";
import { assignbusesReducer } from "./assigndrivers";
import { fetchUserDataReducer } from "./fetchUserData";
import {
  routeDeleteReducer,
  routeSaveReducer,
  routesListReducer,
  routestDetailsReducer,
  routeUpdateReducer,
} from "./routes";

const rootReducer = combineReducers({
  counter: reducer,
  fetchbuses: fetchAllbusesReducer,
  assign: assignbusesReducer,
  fetchUserData: fetchUserDataReducer,
  fetchusers: fetchallusersReducer,
  routesList: routesListReducer,
  routeDetails: routestDetailsReducer,
  saveRoute: routeSaveReducer,
  updateRoute: routeUpdateReducer,
  deletedRoute: routeDeleteReducer,
  assign: assignbusesReducer,
});

export default rootReducer;

// i18n
