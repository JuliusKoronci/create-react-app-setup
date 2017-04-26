// @flow
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Homepage, Dashboard } from './pages';

const history = createHistory();
const store = configureStore();

const Root = () => (
	<div>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={ Homepage } />
						<Route exact path='/dashboard' component={ Dashboard } />
					</Switch>
				</BrowserRouter>
			</ConnectedRouter>
		</Provider>
	</div>
);
export default Root;
