import * as actions from '../Action/actiontypes.js'
const initialState = {

    buses: [], 

  }

  export function fetchAllbusesReducer(state = initialState, action){
    switch(action.type){

      case actions.FETCH_ALL_BUSES :
        return {
          ...state,
          buses:action.payload
        }

      default:
        return state
    } 
   
  
  }