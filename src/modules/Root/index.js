// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';

class Root extends Component {
	render() {
		const history = syncHistoryWithStore(browserHistory, store);
		const { routes } = this.props;
		return (
			<Provider store={store}>
				<Router history={history} routes={routes} />
			</Provider>
		)
	}
}

Root.propTypes = {
	routes: PropTypes.node.isRequired,
};

export default Root;
