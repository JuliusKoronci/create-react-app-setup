import React from 'react';
import Root from '../index';
import { shallow } from 'enzyme';

const wrapper = shallow(
	<Root />);

describe('DemoView', () => {
	it('should exist', () => {
		expect(Root).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
});

