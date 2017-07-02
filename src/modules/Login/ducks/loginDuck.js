// @flow
import { handleActions } from 'redux-actions';
import { createStandardReducer, baseInitialState } from '../../../utils/redux';
import { createAxiosAction, axiosActionTypes } from '../../../utils/reduxActions';

export const REDUCER_NAME = 'loginReducer';
export const ENDPOINT_NAME = 'login';

export const actions = {
  login: createAxiosAction(axiosActionTypes.POST, REDUCER_NAME, ENDPOINT_NAME),
};

export default handleActions(createStandardReducer(REDUCER_NAME), baseInitialState());
