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

      case actions.DELETE_BUS:
        return {
          ...state,
          buses:state.buses.filter(bus => bus.uuid != action.payload.id),
          message: action.payload.message
        }
      case actions.CREATE_BUS:
        // state.buses.push(action.payload.data?.buses)
        return {
          ...state,
          message: action.payload.message
        }
      case actions.GET_BUS_BY_ID:
        return{
          ...state,
          busById:action.payload
        }
      case actions.UPDATE_BUS:
        return {
          ...state,
          update:action.payload
        }
        
  

      default:
        return state
    } 
   
  
  }