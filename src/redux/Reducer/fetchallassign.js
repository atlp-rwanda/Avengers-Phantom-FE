import * as actions from '../Action/actiontypes.js'

const initialstate ={
    alluser:[]
}

export function fetchallassigned(state=initialstate ,action){
    switch(action.type){
        case actions.FETCH_ALL_ASSIGN_BUSES:
        return {...state,alluser:action.payload}
        
      

        default:
        return state
    }
}