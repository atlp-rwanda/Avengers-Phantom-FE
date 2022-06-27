import * as types from "./../Action/actiontypes";

const initialState = {
  updateRole: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const updateRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE__ROLE__START:
      return {
        ...state,
        updateRole: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.UPDATE__ROLE__SUCCESS:
      return {
        ...state,
        updateRole: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.UPDATE__ROLE__FAILURE:
      return {
        ...state,
        updateRole: {
          loading: false,
          message: null,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
