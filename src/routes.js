// @flow
import React from 'react';
import { Homepage, DemoPage, Dashboard } from './pages';
import { Route, IndexRoute } from 'react-router';

type RouteItem = {
	name: string,
	path: string,
	component?: React.Element<*>,
}

const routes = [
	{
		name: 'homepage',
		path: '/',
		component: () => Homepage,
		index: true,
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: () => Dashboard
	},
	{
		name: 'demo',
		path: '/demo/:id',
		component: () => DemoPage
	},
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
export const getPath = (name: string, params: {} = undefined, queryParams: {} = undefined) => {
	const route = routes.find((item: RouteItem) => item.name === name);
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

const generateRoutes = (routeList) => {
	return routeList.map((route) => {
		if (route.index) {
			return (
				<IndexRoute key={route.path} component={route.component()}>
					{route.children && generateRoutes(route.children)}
				</IndexRoute>
			)
		}
		return (
			<Route key={route.path} path={route.path} component={route.component()}>
				{route.children && generateRoutes(route.children)}
			</Route>
		)
	})
};

export default (
	<Route path="/">
		{generateRoutes(routes)}
	</Route>
);
