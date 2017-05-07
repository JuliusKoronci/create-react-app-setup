// @flow
import { Homepage, DemoPage, Dashboard } from './pages';
import { RouteItem } from './FlowTypes';

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

function mapToQueryString(json) {
	const query = [];
	for (const key of Object.keys(json)) {
		const value = json[key];
		if (value && value !== '') {
			query.push(`${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`);
		}
	}
	return query.join('&');
}

/**
 * Use this to generate routes in your links
 *
 * @param name
 * @param params
 * @param queryParams
 */
export const getPath = (name: string, params: ? {} = undefined, queryParams: ? {} = undefined) => {
	const route: RouteItem = routes.find((item: RouteItem) => item.name === name);
	let path = route.path;
	if (params) {
		for (const i in params) {
			const replace = `:${i}`;
			path = path.replace(replace, params[i]);
		}
	}
	if (queryParams) {
		path += `?${mapToQueryString(queryParams)}`;
	}

	return path;
};

export default routes;
