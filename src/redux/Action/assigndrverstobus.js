import * as actions from './actiontypes.js'
import axios from './axiosConfig'

const backendUrl = process.env.BACKEND_URL
const token = localStorage.getItem('token')
export const assigndrivers= ({ userId, busId }) => async (dispatch )=> {
    const useruid = localStorage.getItem('useruuid'); 
    const busuid = localStorage.getItem('busuuid'); 
    console.log(userId)
 
  try{
    const res = await axios.put(`/assignment/assign/${userId}/${busId}` 
   );
   
    dispatch({type:actions.ASSIGN_DRIVER_BUSES,payload:res.data})
  
  }catch(err){
    dispatch({
      type:actions.FETCH_ASSIGN_ERROR,
      error: err.response.data.message
    })
    console.log(err)
  }
}
