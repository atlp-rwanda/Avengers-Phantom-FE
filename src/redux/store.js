import thunk from 'redux-thunk'
// import RootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from "./Reducer/reducer";
import rootReducer from './Reducer';

const initialState = {};
const middlewares = [thunk];
const Store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
export default Store;
