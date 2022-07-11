import * as type from "../Action/actiontypes";

const initialState = {
  unassignBus: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const unassignBusToRoute = (state = initialState, action) => {
  switch (action.type) {
    case type.UNASSIGN__BUS__TO__ROUTE__START:
      return {
        ...state,
        unassignBus: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case type.UNASSIGN__BUS__TO__ROUTE__SUCCESS:
      return {
        ...state,
        unassignBus: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case type.UNASSIGN__BUS__TO__ROUTE__FAILURE:
      return {
        ...state,
        unassignBus: {
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
