import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import DevTools from '../modules/DevTools';


function applyMiddlewareWithDevTool(...middleware) {
	if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
			applyMiddleware(...middleware)
		);
	}

	return compose(
		applyMiddleware(...middleware),
		DevTools.instrument()
	);

}

const createDevStore = createStore(
	rootReducer,
	applyMiddlewareWithDevTool(thunk, createLogger)
);

const createProdStore = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

const env = process.env.NODE_ENV;
const store = env === 'development' ? createDevStore : createProdStore;

export default store;
