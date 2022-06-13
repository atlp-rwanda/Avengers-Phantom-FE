import * as actions from "./actiontypes.js";
// import Axios from './axiosConfig'
import axios from "axios";

const URL = "http://localhost:8000/api/v1/routes/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNDViNDljOTctOWEwZi00ZjFhLTkxMWEtODViOGM1ZjRiYjBkIiwiaWF0IjoxNjU0MjEyODE5LCJleHAiOjE2NTQyMjcyMTl9.AklxS7cRIYLmNIhN8OEA5_wtFQpZWROV0GONnzirr-s";

export const fetchAllroutes = () => async (dispatch) => {
  dispatch({ type: actions.ROUTE_LIST_REQUEST });
  const data = await axios.get(`${URL}`);
  if (data.status === 200) {
    dispatch({ type: actions.ROUTE_LIST_SUCCESS, payload: data });
  } else {
    dispatch({ type: actions.ROUTE_LIST_FAIL, payload: error.message });
  }
};

// export const fetchAllroutes = () => async (dispatch) => {
//   try {
//     dispatch({ type: actions.ROUTE_LIST_REQUEST });
//     const { data } = await axios.get(`${URL}`);
//     dispatch({ type: actions.ROUTE_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: actions.ROUTE_LIST_FAIL, payload: error.message });
//   }
// };

export const fetchSingleRoute = (routeID) => async (dispatch) => {
  dispatch({ type: actions.ROUTE_DETAILS_REQUEST });
  const data = await axios.get(`${URL}/${routeID}`);
  if (data.status === 200) {
    dispatch({ type: actions.ROUTE_DETAILS_SUCCESS, payload: data });
  } else {
    dispatch({ type: actions.ROUTE_DETAILS_FAIL, payload: error.message });
  }
};

export const saveRoute = (route) => async (dispatch, getState) => {
  dispatch({ type: actions.ROUTE_SAVE_REQUEST, payload: route });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  const data = await axios.post(`${URL}`, route, {
    headers: {
      Authorization: "Bearer" + `${token}}`,
    },
  });
  if (data.status === 200) {
    dispatch({ type: actions.ROUTE_SAVE_SUCCESS, payload: data });
  } else {
    dispatch({ type: actions.ROUTE_SAVE_FAIL, payload: error.message });
  }
};

export const updateRoute = (route, routeID) => async (dispatch, getState) => {
  dispatch({ type: actions.ROUTE_UPDATE_REQUEST, payload: route });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  const data = await axios.patch(`${URL}/${routeID}`, route, {
    headers: {
      Authorization: "Bearer" + `${token}}`,
    },
  });
  if (data.status === 200) {
    dispatch({ type: actions.ROUTE_UPDATE_SUCCESS, payload: data });
  } else {
    dispatch({ type: actions.ROUTE_UPDATE_FAIL, payload: error.message });
  }
};

export const deleteRoute = (routeID) => async (dispatch, getState) => {
  dispatch({ type: actions.ROUTE_DELETE_REQUEST });
  // const {
  //   userSignin: { userInfo },
  // } = getState();
  const data = await axios.delete(`${URL}/${routeID}`, {
    headers: {
      Authorization: "Bearer" + `${token}}`,
    },
  });
  if (data.status === 200) {
    dispatch({ type: actions.ROUTE_DELETE_SUCCESS, payload: data });
  } else {
    dispatch({ type: actions.ROUTE_DELETE_FAIL, payload: error.message });
  }
};
