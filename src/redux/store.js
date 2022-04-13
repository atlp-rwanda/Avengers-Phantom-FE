import { createStore } from 'redux';

import reducer from './reducer';
// import rootReducer from './rootReducer';

const store = createStore(reducer);


export default store;