import * as actions from './actiontypes.js'
// import Axios from './axiosConfig'
import axios from 'axios'
export const fetchAllbuses = () => dispatch => {
    return axios.get(`http://localhost:5000/api/v1/buses/`)
    .then(res => {
      dispatch({
        type:actions.FETCH_ALL_BUSES ,
        payload: res.data.buses,

      })
      }
    )
  };