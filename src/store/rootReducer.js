import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { demoReducer } from '../modules/Demo';

const rootReducer = combineReducers({
	router: routerReducer,
	demo: demoReducer,
});

export default rootReducer;
