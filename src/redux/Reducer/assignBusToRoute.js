import * as type from "../Action/actiontypes";

const initialState = {
  assignBus: {
    loading: false,
    message: null,
    success: false,
    error: null,
  },
};

export const assignBusToRoute = (state = initialState, action) => {
  switch (action.type) {
    case type.ASSIGN__BUS__TO__ROUTE__START:
      return {
        ...state,
        assignBus: {
          loading: true,
          message: null,
          success: false,
          error: null,
        },
      };
    case type.ASSIGN__BUS__TO__ROUTE__SUCCESS:
      return {
        ...state,
        assignBus: {
          loading: false,
          message: action.payload,
          success: true,
          error: null,
        },
      };
    case type.ASSIGN__BUS__TO__ROUTE__FAILURE:
      return {
        ...state,
        assignBus: {
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
