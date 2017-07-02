import { pathToParams, mapToQueryString } from './utils/urlMapper';

export const basePath = 'http://localhost:8080';

const apiEndpoints = {
  login: { path: '/api/login' },
};

export const getEndpoint = (base, config) => (name, params, queryParams) => {
  const endpoint = config[name];
  if (!endpoint) {
    throw new Error(`${name} missing in endpoints`);
  }

  return `${base}${pathToParams(endpoint.path, params)}${mapToQueryString(queryParams, '?')}`;
};

export default getEndpoint(basePath, apiEndpoints);

