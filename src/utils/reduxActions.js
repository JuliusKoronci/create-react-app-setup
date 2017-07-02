import axios from 'axios';
import { constants } from './redux';
import createUrl from '../endpoints';

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const axiosActionTypes = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export function createAxiosAction(type = 'get', reducerName, endpointName) {
  const consts = constants(reducerName);
  return function (replaceParams: {} = {}, queryParams: {} = {}, ...rest) {
    return (dispatch) => {
      dispatch(createAction(consts.request));

      const endpoint = createUrl(endpointName, replaceParams, queryParams);
      return axios[type](endpoint, ...rest)
        .then(response => dispatch(createAction(consts.success, response.data)))
        .catch(error => dispatch(createAction(consts.error, error.response.data)));
    };
  };
}
