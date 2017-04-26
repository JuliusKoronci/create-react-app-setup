// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Homepage, Dashboard } from './pages';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={ Homepage } />
			<Route exact path='/dashboard' component={ Dashboard } />
		</Switch>
	</BrowserRouter>
);
export default Root;
