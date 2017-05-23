// @flow
import loginActions  from '../constants/LoginConstants';
import { APIResponse, ReduxApiAction } from '../../../FlowTypes';

const handleRequest = (state) => {return { ...state, request: true }};
const handleSuccess = (state, action) => {
	return {
		...state,
		request: false,
		loaded: true,
		success: true,
		data: action.response
	}
};
const handleError = (state, action) => {
	return {
		...state,
		request: false,
		loaded: true,
		success: false,
		error: action.response,
	}
};

const actions = {
	[loginActions.LOGIN_REQUEST]: handleRequest,
	[loginActions.LOGIN_ERROR]: handleError,
	[loginActions.LOGIN_SUCCESS]: handleSuccess,
};

export const initialState: APIResponse = {
	request: false,
	success: false,
	error: false,
	loaded: false,
	data: {
		token: '',
		username: '',
	}
};

const loginReducer = (state?: APIResponse = initialState, action: ReduxApiAction) => {
	try {
		actions[action.type](state);
	} catch (e) {
		return state;
	}
};

export default loginReducer;

