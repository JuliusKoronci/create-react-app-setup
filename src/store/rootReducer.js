import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { demoReducer } from '../modules/Demo';

const rootReducer = combineReducers({
	routing: routerReducer,
	demo: demoReducer,
});

export default rootReducer;
