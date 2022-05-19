import * as actions from '../Action/actiontypes.js'

const initialstate ={
    users:[]
}

export function fetchallusersReducer(state=initialstate ,action){
    switch(action.type){
        case actions.FETCH_ALL_USERS:
        return {...state,users:action.payload}
        default:
        return state
    }
}