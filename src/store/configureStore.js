import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
	// Middleware you want to use in development:
	applyMiddleware(middleware)
);

export default function configureStore(initialState = {}) {
	// Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
	// See https://github.com/reactjs/redux/releases/tag/v3.1.0
	const store = createStore(rootReducer, initialState, enhancer);

	// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
	if (module.hot) {
		module.hot.accept('./rootReducer', () =>
			store.replaceReducer(require('./rootReducer')/*.default if you use Babel 6+ */)
		);
	}

	return store;
}
