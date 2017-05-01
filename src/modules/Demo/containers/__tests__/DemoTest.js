import React from 'react';
import Demo from '../Demo';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { initialState } from '../../reducers/DemoReducer';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const store = mockStore({ demo: initialState });

const wrapper = shallow(
	<Demo store={store} />
);

describe('DemoView', () => {
	it('should exist', () => {
		expect(Demo).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
});

