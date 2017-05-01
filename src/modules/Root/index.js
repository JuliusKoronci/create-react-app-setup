// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';
import routes from '../../routes';

class Root extends Component {
	render() {
		const history = syncHistoryWithStore(browserHistory, store);
		return (
			<Provider store={store}>
				<Router history={history}>
					{routes()}
				</Router>
			</Provider>
		)
	}
}

export default Root;
