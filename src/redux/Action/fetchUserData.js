import * as actions from './actiontypes.js'
// import Axios from './axiosConfig'
import axios from 'axios' 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const token = localStorage.getItem('token');
const useruuid = localStorage.getItem('useruuid'); 

const notify = (toastMsg) => toast(toastMsg); 

export const fetchUserData = () => async (dispatch) => { 
   try{
    const res = await axios({
        url: `http://127.0.0.1:9000/api/v1/users/${useruuid}`, 
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
      url:`http://localhost:9000/api/v1/users/updateProfile/${useruuid}`,
      method:"PATCH",
      data:formData,
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        "Authorization": `Bearer ${token}`,
    }
    })
    const message = res.message;
    notify(message);
    dispatch({
      type:actions.UPDATE_USER,
      payload: res.data,
    })
      }
    catch(err){
        const message = err.message;
        notify(message);

  }
}