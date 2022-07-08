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
<<<<<<< HEAD
import { userSaveReducer, usersDetailsReducer, usersListReducer } from "./driversAndOperators";
=======
import { assignBusToRoute } from "./assignBusToRoute";
import { unassignBusToRoute } from "./unAssignButToRoute";
import { fetchAllBusAssignment } from "./AllBusAssignment";
>>>>>>> Assingning bus to route

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
  userDetails:usersDetailsReducer,
  userSave:userSaveReducer,
  assign: assignbusesReducer,
  assign: assignbusesReducer,
  createRoleReducer,
  roleList:fetchAllRolesReducer,
  getRoleReducer,
  updateRoleReducer,
  deleteRoleReducer,
<<<<<<< HEAD
  
=======
  assignBusToRoute,
  unassignBusToRoute,
  fetchAllBusAssignment,
>>>>>>> Assingning bus to route
});

export default rootReducer;
