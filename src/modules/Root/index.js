import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import { store, history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Homepage, Dashboard } from '../../pages';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Router>
				<Route exact path='/' component={ Homepage } />
				<Route exact path='/dashboard' component={ Dashboard } />
			</Router>
		</ConnectedRouter>
	</Provider>
);

export default Root;
