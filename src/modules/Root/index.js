// @flow

import React from 'react';
import { Provider } from 'react-redux';
import {
	Route
} from 'react-router-dom';
import store, { history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import routes from '../../routes';

const Root = () => {
	const _renderRoutes = (routes) => {
		return routes.map((route) => {
			return (
				<Route key={route.path} exact path={route.path} component={route.component()}>
					{route.children && _renderRoutes(route.children)}
				</Route>
			)
		})
	};

	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					{_renderRoutes(routes)}
				</div>
			</ConnectedRouter>
		</Provider>
	)
};

export default Root;
