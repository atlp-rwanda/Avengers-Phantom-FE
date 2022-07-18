import * as actions from './actiontypes.js'
import axios from 'axios'

const backendUrl = process.env.BACKEND_URL


const token = localStorage.getItem('token')
export const fetchallusers = () => async (dispatch) => {
    const res = await axios.get(`${backendUrl}/users`,{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  
    dispatch({type:actions.FETCH_ALL_USERS,payload:res.data.data.users.rows});

  };