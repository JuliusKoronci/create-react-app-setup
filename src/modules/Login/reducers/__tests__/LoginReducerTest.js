// @flow
import loginReducer, { initialState } from '../LoginReducer';
import { loginActions } from '../../constants/LoginConstants';

describe('loginReducer', () => {
	it('return initial state', () => {
		expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});
	it('set error to true if error dispatched', () => {
		expect(loginReducer(initialState, {
			type: loginActions.LOGIN_ERROR,
			response: { error: 'error' },
		}).error).toEqual({ error: 'error' });
	});
});
