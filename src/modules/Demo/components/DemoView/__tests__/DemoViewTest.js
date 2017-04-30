import React from 'react';
import DemoView from '../DemoView';
import { shallow } from 'enzyme';

const wrapper = shallow(
	<DemoView
		list={[]}
		form={{
			title: 'test',
			desc: 'desc',
		}}
		actions={{
			'submit': () => {
			},
			'change': () => {
			},
			'deleteEntry': () => {
			},
		}}
	/>);

describe('DemoView', () => {
	it('should exist', () => {
		expect(DemoView).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});

	// Test if child component is present
	//it('should render one ChildComponent component', () => {
	//	expect(wrapper.find(ChildComponent).length).toBe(1);
	//});
});
