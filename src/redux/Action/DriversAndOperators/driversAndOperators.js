import * as actions from "./users_actionsType";
// import Axios from './axiosConfig'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (toastMsg) => toast(toastMsg);

const backendUrl = "https://new-avengers-be-deploy.herokuapp.com/api/v1"|| process.env.BACKEND_URL

const token = localStorage.getItem("token");

export const fetchAllUsers= () => async (dispatch) => {
  try {
    dispatch({ type: actions.USERS_LIST_REQUEST });
    const data = await axios.get(`${backendUrl}/users`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    dispatch({ type: actions.USERS_LIST_SUCCESS, payload: data });
    
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.USERS_LIST_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const fetchSingleUser = (userID) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_DETAILS_REQUEST });
    const data = await axios.get(`${backendUrl}/users/${userID}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    dispatch({ type: actions.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.USER_DETAILS_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const saveUser = (user,roleID) => async (dispatch, getState) => {
  try {
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    dispatch({ type: actions.USER_SAVE_REQUEST, payload: user });
    const data = await axios.post(`${backendUrl}/users/register/${roleID}`, user, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    dispatch({ type: actions.USER_SAVE_SUCCESS, payload: data });
    notify('User was successfully created')
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.USER_SAVE_FAIL, payload: error.message });
    notify(error.message);
  }
};

export const updateUser =
  (user, userID) => async (dispatch, getState) => {
    try {
      dispatch({ type: actions.USER_UPDATE_REQUEST, payload: user });
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      const data = await axios.patch(`${backendUrl}/users/${userID}`, user, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      dispatch({ type: actions.USER_UPDATE_SUCCESS, payload: data });
      notify('User was successfully Updated')
    } catch (error) {
      localStorage.setItem("error", error.message);
      dispatch({ type: actions.USER_UPDATE_FAIL, payload: error.message });
      notify(error.message);
    }
  };

export const deleteUser = (userID) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_DELETE_REQUEST });
    // const {
    //   userSignin: { userInfo },
    // } = getState();
    const data = await axios.delete(`${backendUrl}/users/${userID}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    dispatch({ type: actions.USER_DELETE_SUCCESS, payload: data });
    notify("User deleted successfully");
  } catch (error) {
    localStorage.setItem("error", error.message);
    dispatch({ type: actions.USER_DELETE_FAIL, payload: error.message });
    notify(error.message);
  }
};
