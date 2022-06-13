import * as actions from "./actiontypes.js";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (toastMsg) => toast(toastMsg);

const URL = "https://new-avengers-be-deploy.herokuapp.com/";

const token = localStorage.getItem("token");

export const fetchAllroutes = () => async (dispatch) => {
  try {
    dispatch({ type: actions.ROUTE_LIST_REQUEST });
    const data = await axios.get(`${URL}/api/v1/routes`);
    dispatch({ type: actions.ROUTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_LIST_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const fetchSingleRoute = (routeID) => async (dispatch) => {
  try {
    dispatch({ type: actions.ROUTE_DETAILS_REQUEST });
    const data = await axios.get(`${URL}/api/v1/routes/${routeID}`);

    dispatch({ type: actions.ROUTE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_DETAILS_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const saveRoute = (route) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ROUTE_SAVE_REQUEST, payload: route });
    const data = await axios.post(`${URL}/api/v1/routes`, route, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_SAVE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_SAVE_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const updateRoute = (route, routeID) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ROUTE_UPDATE_REQUEST, payload: route });

    const data = await axios.patch(`${URL}/api/v1/routes/${routeID}`, route, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_UPDATE_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const deleteRoute = (routeID) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ROUTE_DELETE_REQUEST });

    const data = await axios.delete(`${URL}/api/v1/routes/${routeID}`, {
      headers: {
        Authorization: "Bearer" + `${token}}`,
      },
    });
    dispatch({ type: actions.ROUTE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.ROUTE_DELETE_FAIL, payload: error.message });
    notify(error.message);
  }
};
