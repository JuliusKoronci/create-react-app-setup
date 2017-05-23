// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
	Route
} from 'react-router-dom';
import store, { history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { RouteItems, RouteItem } from '../../FlowTypes';
import DI from '../../diFactory';

type Props = { routes: () => Array<RouteItem> };

const Root = ({ routes }: Props) => {
	const _renderRoutes = (routes: Array<RouteItems>) => {
		return routes.map((route: RouteItem) => {
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
					{_renderRoutes(routes())}
				</div>
			</ConnectedRouter>
		</Provider>
	)
};

Root.propTypes = {
	routes: PropTypes.func.isRequired,
};

export default DI()(Root);
