import { RouteItem } from '../FlowTypes';
/**
 * Convert a json into a url query string
 *
 * @param json
 * @returns {string}
 */
export function mapToQueryString(json: {}): string {
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
 * In order to use the function, we need to register an array of route items. These items will be used to get the URL
 *
 */
export const uriGenerator = (routes: Array<RouteItem>, basePath?: string = '') => (name: string, params: ? {} = undefined, queryParams: ? {} = undefined): string => {
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

	return `${basePath}${path}`;
};
