import * as actions from './actiontypes.js'
import axios from './axiosConfig'

const backendUrl = process.env.BACKEND_URL
const token = localStorage.getItem('token')
export const unassigndrivers= ({ userId, busId }) => async (dispatch )=> {

    console.log(userId)
 
  try{
    const res = await axios.put(`/assignment/unassign/${userId}/${busId}` 
   );
   
    dispatch({type:actions.UN_ASSIGN_DRIVER_BUSES,payload:res.data})
  
  }catch(err){
    dispatch({
      type:actions.FETCH_UNASSIGN_ERROR,
      error: err.response.data.message
    })
    console.log(err.response.data.message)
  }
}
