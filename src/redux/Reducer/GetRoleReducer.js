import * as types from "./../Action/actiontypes";

const initialState = {
  getRole: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const getRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET__SINGLE__ROLE__START:
      return {
        ...state,
        getRole: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case types.GET__SINGLE__ROLE__SUCCESS:
      return {
        ...state,
        getRole: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case types.GET__SINGLE__ROLE__FAILURE:
      return {
        ...state,
        getRole: {
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
