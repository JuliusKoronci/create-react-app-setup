// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
	Route
} from 'react-router-dom';
import store, { history } from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';

const Root = ({ routes }: { routes: Array<Object> }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					{routes.map((route) => {
						return <Route key={route.path} exact path={route.path} component={route.component()} />
					})}
				</div>
			</ConnectedRouter>
		</Provider>
	)
};

Root.propTypes = {
	routes: PropTypes.array.isRequired,
};

export default Root;
