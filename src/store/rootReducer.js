import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { demoReducer } from '../modules/Demo';
import { loginReducer } from '../modules/Login';

const rootReducer = combineReducers({ router: routerReducer, demo: demoReducer, login: loginReducer });

export default rootReducer;
