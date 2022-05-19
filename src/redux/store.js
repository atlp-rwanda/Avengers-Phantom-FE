import { createStore } from "redux";
import reducer from "./Reducer/reducer";
// import rootReducer from './rootReducer';

<<<<<<< HEAD
const store = createStore(reducer);
export default store;
=======
const initialState = {};
const middlewares = [thunk];
let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : x => x
const Store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
export default Store;
>>>>>>> 00bc4aa6 (ft assign drivers intergation redux)
