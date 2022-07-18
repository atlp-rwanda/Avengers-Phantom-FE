import * as types from "./../Action/actiontypes";

const initialState = {
  deleteRole: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const deleteRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE__ROLE__START:
      return {
        ...state,
        deleteRole: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.DELETE__ROLE__SUCCESS:
      return {
        ...state,
        deleteRole: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.DELETE__ROLE__FAILURE:
      return {
        ...state,
        deleteRole: {
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
