import React from 'react';
import DemoPage from '../DemoPage';
import { shallow } from 'enzyme';

const wrapper = shallow(<DemoPage />);

describe('DemoPage', () => {
	it('should exist', () => {
		expect(DemoPage).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
});

