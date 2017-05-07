// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
	Route
} from 'react-router-dom';
import store, { history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { DIType, RouteItems, RouteItem } from '../../FlowTypes';
import withDI from '../../DI';

type Props = { di: DIType };

const Root = ({ di }: Props) => {
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
					{_renderRoutes(di.get('routes'))}
				</div>
			</ConnectedRouter>
		</Provider>
	)
};

Root.propTypes = {
	di: PropTypes.object.isRequired,
};

export default withDI(Root);
