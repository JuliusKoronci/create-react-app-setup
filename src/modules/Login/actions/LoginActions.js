// @flow
import { loginActions } from '../constants/LoginConstants';

export const loadLoginError = () => {
	return {
		type: loginActions.LOGIN_ERROR,
	}
};
