// @flow
import { uriGenerator } from './libs/router';

const basePath = 'http://localhost:3000';

const routes = [
	{
		name: 'login',
		path: '/login',
	},
];

export const getApiPath = uriGenerator(routes, basePath);

export default routes;
