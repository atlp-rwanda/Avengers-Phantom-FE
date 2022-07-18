import * as actions from './actiontypes.js'
import axios from './axiosConfig'

const backendUrl = process.env.BACKEND_URL
const token = localStorage.getItem('token')
export const fetchallassigned= () => async (dispatch )=> {
    
 
  try{
    const res = await axios.get(`/assignment/buses` 
   );
   console.log(res.data.data.buses)
    dispatch({type:actions.FETCH_ALL_ASSIGN_BUSES,payload:res.data.data.buses})
  
  }catch(err){
    dispatch({
      type:actions.FETCH_ASSIGN_ERROR,
      error: err.response.data.message
    })
    console.log(err)
  }
}