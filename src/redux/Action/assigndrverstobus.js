import * as actions from './actiontypes.js'
import axios from 'axios'

const backendUrl = process.env.BACKEND_URL

export const assigndrivers= () => dispatch => {
    const useruid = localStorage.getItem('useruuid'); 
    const busuid = localStorage.getItem('busuuid'); 
    return axios.put(`${backendUrl}/assignment/assign/${useruid}/${busuid}`)
    .then(res =>{
        dispatch({type:actions.ASSIGN_DRIVER_BUSES,payload:res.data})
    }


    )
    .catch((err,res) => {
        dispatch({
          type:actions.FETCH_ASSIGN_ERROR,
          error: err.response.data.message
        })
      })
}