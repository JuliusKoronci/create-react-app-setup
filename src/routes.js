// @flow
import { Homepage, DemoPage, Dashboard } from './pages';
import { uriGenerator } from './libs/router';

const routes = [
	{
		name: 'homepage',
		path: '/',
		component: () => Homepage
	}, {
		name: 'dashboard',
		path: '/dashboard',
		component: () => Dashboard
	}, {
		name: 'demo',
		path: '/demo/:id',
		component: () => DemoPage
	}
];

export const getPath = uriGenerator(routes);

export default routes;
