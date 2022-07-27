import * as actions from '../Action/actiontypes.js'
const initialState = {

    notification: [], 

  }

  export function getOneNotificationReducer(state = initialState, action){
    switch(action.type){
      case actions.READ_NOTIFICATIONS:
        return{
          ...state,
          notification:action.payload
        } 

        default:
         return state
    } 
   
  
  }