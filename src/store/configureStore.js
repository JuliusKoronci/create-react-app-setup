import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';
import DevTools from '../modules/DevTools';

export const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

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
	applyMiddlewareWithDevTool(routerMiddlewareWithHistory, thunk, createLogger)
);

const createProdStore = createStore(
	rootReducer,
	applyMiddleware(routerMiddlewareWithHistory, thunk)
);
const env = process.env.NODE_ENV;
const store = env === 'development' ? createDevStore : createProdStore;

if (module.hot) {
	module.hot.accept('./rootReducer', () => {
		const nextRootReducer = require('./rootReducer').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
