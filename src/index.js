import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { store, history } from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Homepage, Dashboard } from './pages';

injectTapEventPlugin();


const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path='/' component={ Homepage } />
				<Route exact path='/dashboard' component={ Dashboard } />
			</div>
		</ConnectedRouter>
	</Provider>,
	rootEl
);
