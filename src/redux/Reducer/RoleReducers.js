import * as types from "./../Action/actiontypes";
import { initialState } from "../Action/InitialState";

export const deleteRoleReducer = (state = initialState.updateRole, action) => {
  switch (action.type) {
    case types.CREATE__ROLE__START:
      return {
        ...state,
        updateRole: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.CREATE__ROLE__SUCCESS:
      return {
        ...state,
        updateRole: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.CREATE__ROLE__FAILURE:
      return {
        ...state,
        updateRole: {
          loading: false,
          message: null,
          success: true,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
