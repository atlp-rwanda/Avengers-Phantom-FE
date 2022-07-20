import * as actions from './actiontypes.js'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const notify = (toastMsg) => toast(toastMsg);

const baseUrl = process.env.BACKEND_URL

const token = localStorage.getItem('token')

export const fetchAllNotifications = () => async (dispatch) => {
    const res = await axios.get(`${baseUrl}/users/notifications`,{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  dispatch({
    type: actions.FETCH_ALL_NOTIFICATIONS,
    payload: res.data.data.notifications.rows,
  });

};

export const deleteNotification = (id) => async (dispatch) => {
  try{
    const res = await axios.delete(`${baseUrl}/users/notifications/${id}`,{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const message = res.data.message
  dispatch({
    type: actions.DELETE_NOTIFICATIONS,
    payload: {id:id,message:res.data.message},
  });
  notify(message)
  }catch(err){
    notify(err.response.data.message)
  }
};

export const readNotification = (id) => async (dispatch) => {
  try{
    const res = await axios.get(`${baseUrl}/users/notifications/${id}`,{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  dispatch({
    type: actions.READ_NOTIFICATIONS,
    payload: res.data.data.notification,
  });
  }catch(err){
    notify(err.response.data.message)
  }
};