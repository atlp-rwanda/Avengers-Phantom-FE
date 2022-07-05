import * as type from "./../Action/actiontypes";

const initialState = {
  route: {
    laoding: false,
    message: [
      {
        uuid: "68082227-83c4-47ee-9149-6e9705c018d0",
        name: "ND",
        routeCode: "ND",
        startLocation: "NYARUGENGE",
        endLocation: "DOWNTOWN",
        distance: "12km",
        duration: "2hrs",
        from: {
          lat: -1.978106,
          lng: 30.044125,
        },
        to: {
          lat: -1.939662908,
          lng: 30.055666,
        },
      },
    ],
    success: false,
    error: null,
  },
};

export const testRouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH__ROUTES__START:
      return {
        ...state,
        route: {
          laoding: true,
          message: [{}],
          success: false,
          error: null,
        },
      };
    case type.FETCH__ROUTES__SUCCESS:
      return {
        ...state,
        route: {
          laoding: false,
          message: [action.payload],
          success: true,
          error: null,
        },
      };
    case type.FETCH__ROUTES__FAILURE:
      return {
        ...state,
        route: {
          laoding: false,
          message: [{}],
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
