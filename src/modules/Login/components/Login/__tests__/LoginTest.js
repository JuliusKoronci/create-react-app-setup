import React from 'react';
import Login from '../Login';
import { shallow } from 'enzyme';

const wrapper = shallow(<Login />);

describe('Login', () => {
	it('should exist', () => {
		expect(Login).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
	
	// Test if child component is present
	//it('should render one ChildComponent component', () => {
	//	expect(wrapper.find(ChildComponent).length).toBe(1);
	//});
});

