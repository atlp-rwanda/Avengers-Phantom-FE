import * as types from "./../Action/actiontypes";

const initialState = {
  addRole: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const createRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE__ROLE__START:
      return {
        ...state,
        addRole: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.CREATE__ROLE__SUCCESS:
      return {
        ...state,
        addRole: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.CREATE__ROLE__FAILURE:
      return {
        ...state,
        addRole: {
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
