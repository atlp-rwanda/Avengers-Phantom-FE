import * as type from "../Action/actiontypes";

const initialState = {
  assignedBuses: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const fetchAllBusAssignment = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH__ALLBUS__ASSIGNMENT__START:
      return {
        ...state,
        assignedBuses: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case type.FETCH__ALLBUS__ASSIGNMENT__SUCCESS:
      return {
        ...state,
        assignedBuses: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case type.FETCH__ALLBUS__ASSIGNMENT__FAILURE:
      return {
        ...state,
        assignedBuses: {
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
