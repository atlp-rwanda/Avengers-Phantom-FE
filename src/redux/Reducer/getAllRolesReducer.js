import * as types from "./../Action/actiontypes";

const initialState = {
  fetchRoles: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const fetchAllRolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH__ROLES__START:
      return {
        ...state,
        fetchRoles: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.FETCH__ROLES__SUCCESS:
      return {
        ...state,
        fetchRoles: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.FETCH__ROLES__FAILURE:
      return {
        ...state,
        fetchRoles: {
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
