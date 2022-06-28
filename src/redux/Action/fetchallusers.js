import * as actions from './actiontypes.js'
import axios from 'axios'

const backendUrl = process.env.BACKEND_URL

export const fetchallusers= () => dispatch => {
    return axios.get(`${backendUrl}/users/`)
    .then(res =>{
        dispatch({type:actions.FETCH_ALL_USERS,payload:res.data.users})
    }

    )
}