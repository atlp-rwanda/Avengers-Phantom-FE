import * as actions from './actiontypes.js'
import axios from 'axios'

export const fetchallusers= () => dispatch => {
    return axios.get(`http://localhost:5000/api/v1/users/`)
    .then(res =>{
        dispatch({type:actions.FETCH_ALL_USERS,payload:res.data.users})
    }

    )
}