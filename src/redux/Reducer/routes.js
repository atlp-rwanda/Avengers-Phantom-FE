import * as actions from "../Action/actiontypes.js";

export function routesListReducer(state = { routes: [] }, action) {
  switch (action.type) {
    case actions.ROUTE_LIST_REQUEST:
      return { loading: true, message: action.payload };
    case actions.ROUTE_LIST_SUCCESS:
      return { loading: false, routes: action.payload };
    case actions.ROUTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function routestDetailsReducer(state = { route: {} }, action) {
  switch (action.type) {
    case actions.ROUTE_DETAILS_REQUEST:
      return { loading: true, route: {} };
    case actions.ROUTE_DETAILS_SUCCESS:
      return { loading: false, route: action.payload };
    case actions.ROUTE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function routeSaveReducer(state = { route: {} }, action) {
  switch (action.type) {
    case actions.ROUTE_SAVE_REQUEST:
      return { ...state, loading: true };
    case actions.ROUTE_SAVE_SUCCESS:
      return { ...state, loading: false, success: true, route: action.payload };
    case actions.ROUTE_SAVE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function routeUpdateReducer(state = { route: {} }, action) {
  switch (action.type) {
    case actions.ROUTE_UPDATE_REQUEST:
      return { loading: true };
    case actions.ROUTE_UPDATE_SUCCESS:
      return { loading: false, success: true, route: action.payload };
    case actions.ROUTE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function routeDeleteReducer(state = { route: {} }, action) {
  switch (action.type) {
    case actions.ROUTE_DELETE_REQUEST:
      return { loading: true };
    case actions.ROUTE_DELETE_SUCCESS:
      return { loading: false, success: true, route: action.payload };
    case actions.ROUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
