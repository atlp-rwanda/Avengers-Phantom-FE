import { combineReducers } from "redux";

import reducer from "./reducer";
import { fetchAllbusesReducer } from "./fetchallbuses";
import { fetchallusersReducer } from "./fetchallusers";
import { assignbusesReducer } from "./assigndrivers";
import { fetchUserDataReducer } from "./fetchUserData";
import { NotificationReducer } from "./NotificationReducer";
import { getOneNotificationReducer } from "./getOneNotificationReducer";
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
import {
  userSaveReducer,
  usersDetailsReducer,
  usersListReducer,
} from "./driversAndOperators";
import { assignBusToRoute } from "./assignBusToRoute";
import { unassignBusToRoute } from "./unAssignButToRoute";
import { fetchAllBusAssignment } from "./AllBusAssignment";
import { testRouteReducer } from "./simulation";
import { fetchallassigned} from "./fetchallassign"; 
import { unassignbusesReducer } from "./unassigndrivertbuss";


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
  usersList: usersListReducer,
  userDetails: usersDetailsReducer,
  userSave: userSaveReducer,
  assign: assignbusesReducer,
  assign: assignbusesReducer,
  createRoleReducer,
  fetchAllRolesReducer,
  getRoleReducer,
  updateRoleReducer,
  deleteRoleReducer,
  assignBusToRoute,
  unassignBusToRoute,
  fetchAllBusAssignment,
  testRouteReducer,
  fetchall:fetchallassigned,
  unassign:unassignbusesReducer,
  NotificationReducer,
  getOneNotificationReducer
});

export default rootReducer;
