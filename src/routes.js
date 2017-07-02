// @flow
import { Homepage, DemoPage, Dashboard } from './pages';
import { RouteItem } from './FlowTypes';
import { mapToQueryString, pathToParams } from './utils/urlMapper';

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

/**
 * Use this to generate routes in your links
 *
 * @param name
 * @param params
 * @param queryParams
 */
export const getPath = (name: string, params: {} = {}, queryParams: {} = {}) => {
  const route: RouteItem = routes.find((item: RouteItem) => item.name === name);

  return `${pathToParams(route.path, params)}${mapToQueryString(queryParams, '?')}`;
};

export default routes;
