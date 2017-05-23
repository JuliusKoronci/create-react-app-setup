import * as actions from '../LoginActions';
import { loginActions } from '../../constants/LoginConstants';
import { shallow } from 'enzyme';

describe('LoginActions', () => {
	it('should create an action to add an error', () => {
		const expectedAction = {
			type: loginActions.LOGIN_ERROR,
		};
		expect(actions.loadLoginError()).toEqual(expectedAction)
	})
});

