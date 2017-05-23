// @flow
import loginReducer, { initialState } from '../LoginReducer';
import { loginActions } from '../../constants/LoginConstants';

describe('loginReducer', () => {
	it('return initial state', () => {
		expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});
	it('set error to true if error dispatched', () => {
		expect(loginReducer(undefined, { type: loginActions.LOGIN_ERROR }).error === true).toBeTruthy();
	});
	it('set loading to false if error dispatched', () => {
		expect(loginReducer(undefined, { type: loginActions.LOGIN_ERROR }).isFetching === false).toBeTruthy();
	});
	it('set loading to true if request dispatched', () => {
		expect(loginReducer(undefined, {
				type: loginActions.LOGIN_REQUEST,
			}).isFetching === true).toBeTruthy();
	});
	it('set loaded to true if loadMore dispatched', () => {
		expect(loginReducer(undefined, { 
			type: loginActions.LOGIN_SUCCESS_LOADMORE,
			payload: initialState.Login,
		}).loaded === true).toBeTruthy();
	});
	it('set loaded to true if success dispatched', () => {
		expect(loginReducer(undefined, { 
			type: loginActions.LOGIN_SUCCESS,
			payload: initialState.Login,
		 }).loaded === true).toBeTruthy();
	});
	it('results should match payload if success dispatched with payload', () => {
		let payload = {
			...initialState,
			Login: {
				...initialState.Login,
				data: [
					{
						test: 'test'
					}
				]
			}
		};
		expect(loginReducer(initialState, {
			type: loginActions.LOGIN_SUCCESS,
			payload: payload.Login
		}).Login).toEqual(payload.Login);
	});
});
