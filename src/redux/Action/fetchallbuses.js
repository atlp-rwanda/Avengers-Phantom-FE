<<<<<<< HEAD
import * as actions from './actiontypes.js'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const notify = (toastMsg) => toast(toastMsg);
const baseUrl = process.env.BACKEND_URL

const token = localStorage.getItem('token')
export const fetchAllbuses = () => async (dispatch) => {
    const res = await axios.get(`${baseUrl}/buses`,{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  dispatch({
    type: actions.FETCH_ALL_BUSES,
    payload: res.data.buses.rows,
  });

  };

  export const deletebus = (id) => async (dispatch) => {
    try{
      const res = await axios.delete(`${baseUrl}/buses/${id}`,{
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const message = res.data.message
    dispatch({
      type: actions.DELETE_BUS,
      payload: {id:id,message:res.data.message},
    });
    notify(message)
    }catch(err){
      notify(err.response.data.message)
    }
  };

  export const addBus = (formBody) => async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/buses`,JSON.stringify(formBody),{
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": `Bearer ${token}`
        }
      });
      const message = res.data.message
    dispatch({
      type: actions.CREATE_BUS,
      payload: res.data
    });
    notify(message)
    }catch(err){
      notify(err.response.data.message)
    }

  };


  export const getBusById = (id) => async (dispatch) => {
    try{
      const res = await axios.get(`${baseUrl}/buses/${id}`,{
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const message = res.data.message
    dispatch({
      type: actions.GET_BUS_BY_ID,
      payload: res.data
    });
    notify(message)
    }catch(err){
      notify(err.response.data.message)
    }
  };


  export const updateBus = (busId,formBody) => async (dispatch) => {
    try{
      const res = await axios.patch(`${baseUrl}/buses/${busId}`,JSON.stringify(formBody),{
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": `Bearer ${token}`
        }
      });
      const message = res.data.message
    dispatch({
      type: actions.UPDATE_BUS,
      payload: res.data
    });
    notify(message)
    }catch(err){
      notify(err.response.data.message)
    }
  };
=======
import * as actions from "./actiontypes.js";
// import Axios from './axiosConfig'
import axios from "axios";
export const fetchAllbuses = () => (dispatch) => {
  return axios.get(`http://localhost:5000/api/v1/buses/`).then((res) => {
    dispatch({
      type: actions.FETCH_ALL_BUSES,
      payload: res.data.buses,
    });
  });
};
>>>>>>> 94f3e784 (    pick b187b156 (ch-bagdes-integrations-vs-test))
