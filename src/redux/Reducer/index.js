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
import { createRoleReducer } from "./createRoleReducer";
import { fetchAllRolesReducer } from "./getAllRolesReducer";
import { getRoleReducer } from "./GetRoleReducer";
import { updateRoleReducer } from "./updateRoleReducer";
import { deleteRoleReducer } from "./deleteRoleReducer";

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
  fetchusers: fetchallusersReducer,
  assign: assignbusesReducer,
  createRoleReducer,
  fetchAllRolesReducer,
  getRoleReducer,
  updateRoleReducer,
  deleteRoleReducer,
});

export default rootReducer;
