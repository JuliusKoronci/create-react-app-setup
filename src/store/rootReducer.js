import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { demoReducer } from '../modules/Demo';
import loginDuck, { REDUCER_NAME } from '../modules/Login/ducks/loginDuck';

const rootReducer = combineReducers({
  router: routerReducer,
  demo: demoReducer,
  [REDUCER_NAME]: loginDuck,
});

export default rootReducer;
