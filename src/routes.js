// @flow
import { Homepage, DemoPage, Dashboard } from './pages';
import { RouteItem } from './FlowTypes';

const routes = [
  {
    name: 'homepage',
    path: '/',
    component: () => Homepage,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => Dashboard,
  },
  {
    name: 'demo',
    path: '/demo/:id',
    component: () => DemoPage,
  },
];

function mapToQueryString(json) {
  const query = [];
  const keys = Object.keys(json);
  keys.forEach((key) => {
    const value = json[key];
    if (value && value !== '') {
      query.push(`${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`);
    }
  });
  return query.join('&');
}

/**
 * Use this to generate routes in your links
 *
 * @param name
 * @param params
 * @param queryParams
 */
export const getPath = (name: string, params: {} = {}, queryParams: {} = {}) => {
  const route: RouteItem = routes.find((item: RouteItem) => item.name === name);
  let path = route.path;
  if (Object.keys(params).length !== 0) {
    const keys = Object.keys(params);
    keys.forEach((key) => {
      const replace = `:${key}`;
      path = path.replace(replace, params[key]);
    });
  }

  if (Object.keys(queryParams).length !== 0) {
    path += `?${mapToQueryString(queryParams)}`;
  }

  return path;
};

export default routes;
