// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
	Route
} from 'react-router-dom';
import store, { history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import withDI, { DIType } from '../../DI';

const Root = ({ di }: { di: DIType }) => {
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
					{_renderRoutes(di.routes())}
				</div>
			</ConnectedRouter>
		</Provider>
	)
};

Root.propTypes = {
	di: PropTypes.object.isRequired,
};

export default withDI(Root);
