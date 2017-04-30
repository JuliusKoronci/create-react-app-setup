import React from 'react';
import Demo from '../Demo';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { initialState } from '../../reducers/DemoReducer';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const store = mockStore({ demo: initialState });

const wrapper = shallow(
	<Demo store={store} />
);
describe('(Component) Demo', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

