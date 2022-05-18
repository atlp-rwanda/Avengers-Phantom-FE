import * as actions from '../Action/actiontypes.js'
const initialState = {

    resp: null, 
    err:null

  }

  export function assignbusesReducer(state = initialState, action){
    switch(action.type){

      case actions.ASSIGN_DRIVER_BUSES :
        return {
          ...state,
          resp:action.payload
        }
        case actions.FETCH_ASSIGN_ERROR :
        return {
          ...state,
          err:action.error
        }
        case actions.FETCH_ASSIGN_ClEAN :
        return {
          ...state,
          err:null,
          resp:null
        }
      default:
        return state
    } 
   
  
  }