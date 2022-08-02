import * as actions from "../Action/DriversAndOperators/users_actionsType";

export function usersListReducer(state = { users: [] }, action) {
  switch (action.type) {
    case actions.USERS_LIST_REQUEST:
      return { loading: true, message: action.payload };
    case actions.USERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case actions.USERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function usersDetailsReducer(state = { driver: {} }, action) {
  switch (action.type) {
    case actions.USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case actions.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case actions.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export function userSaveReducer(state = { USER: {} }, action) {
  switch (action.type) {
    case actions.USER_SAVE_REQUEST:
      return { ...state, loading: true };
    case actions.USER_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case actions.USER_SAVE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function userUpdateReducer(state = { user: {} }, action) {
  switch (action.type) {
    case actions.USER_UPDATE_REQUEST:
      return { loading: true };
    case actions.USER_UPDATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case actions.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function userDeleteReducer(state = { user: {} }, action) {
  switch (action.type) {
    case actions.USER_DELETE_REQUEST:
      return { loading: true };
    case actions.USER_DELETE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case actions.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
