import * as actions from './actiontypes.js'
// import Axios from './axiosConfig'
import axios from 'axios' 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const token = localStorage.getItem('token');
const useruuid = localStorage.getItem('useruuid'); 
const currrentUrl = window.location.href
const backendUrl = process.env.BACKEND_URL


const notify = (toastMsg) => toast(toastMsg); 

export const fetchUserData = () => async (dispatch) => { 
   try{
    const res = await axios({
        url: `${backendUrl}/users/${useruuid}`, 
        method: 'GET',
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`,
        }
   })
      dispatch({
        type:actions.FETCH_USER,
        payload: res.data,
      })    
    }catch(err){
        dispatch({
            type:actions.FETCH_USER,
            payload: err.message 
          });
  }
}

// update profile
export const updateUserData = (useruuid, formData) => async (dispatch) => {
    try{
    const res = await axios({
      url:`${backendUrl}/users/${useruuid}`,
      method:"PATCH",
      data:formData,
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': `${currrentUrl}`,
        "Authorization": `Bearer ${token}`,
    }
    })
    const message = res.data.message;
    dispatch({
      type:actions.UPDATE_USER,
      payload: res.data,
    })
    notify(message);
    }
    catch(err){
        const message = err.message;
        notify(message);

  }
}