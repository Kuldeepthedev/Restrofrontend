import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import

import { getProductReducer } from './Reducers/getProductReducer';

const reducer = combineReducers({
  data: getProductReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
