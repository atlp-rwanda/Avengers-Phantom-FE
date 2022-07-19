import * as actions from '../Action/actiontypes.js'
const initialState = {

    notifications: [], 

  }

  export function NotificationReducer(state = initialState, action){
    switch(action.type){

      case actions.FETCH_ALL_NOTIFICATIONS :
        return {
          ...state,
          notifications:action.payload
        }

      case actions.DELETE_NOTIFICATIONS:
        return {
          ...state,
          notifications:state.notifications.filter(notification => notification.uuid != action.payload.id),
          message: action.payload.message
        }
      default:
        return state
    } 
   
  
  }