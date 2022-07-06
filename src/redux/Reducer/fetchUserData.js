import * as actions from '../Action/actiontypes.js'

const initialstate ={
    user:[]
}

export function fetchUserDataReducer(state=initialstate ,action){
    switch(action.type){
        case actions.FETCH_USER:
        return {...state,user:action.payload}
        
        case actions.UPDATE_USER: 
        return {...state,updated:action.payload}

        default:
        return state
    }
}