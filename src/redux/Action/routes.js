import * as actions from "./actiontypes.js";
// import Axios from './axiosConfig'
import axios from "axios";

const URL = "https://new-avengers-be-deploy.herokuapp.com/api/v1/routes/";

const token = localStorage.getItem("token").data;

export const fetchAllroutes = () => async (dispatch) => {
  try {
    dispatch({ type: actions.ROUTE_LIST_REQUEST });
    const data = await axios.get(`${URL}`);
    dispatch({ type: actions.ROUTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_LIST_FAIL, payload: error.message });
  }
};

export const fetchSingleRoute = (routeID) => async (dispatch) => {
  try {
    dispatch({ type: actions.ROUTE_DETAILS_REQUEST });
    const data = await axios.get(`${URL}/${routeID}`);

    dispatch({ type: actions.ROUTE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_DETAILS_FAIL, payload: error.message });
  }
};

export const saveRoute = (route) => async (dispatch, getState) => {
  try {
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    dispatch({ type: actions.ROUTE_SAVE_REQUEST, payload: route });
    const data = await axios.post(`${URL}`, route, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_SAVE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_SAVE_FAIL, payload: error.message });
  }
};

export const updateRoute = (route, routeID) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ROUTE_UPDATE_REQUEST, payload: route });
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    const data = await axios.patch(`${URL}/${routeID}`, route, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_UPDATE_FAIL, payload: error.message });
  }
};

export const deleteRoute = (routeID) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ROUTE_DELETE_REQUEST });
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    const data = await axios.delete(`${URL}/${routeID}`, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_DELETE_FAIL, payload: error.message });
  }
};
