import React from 'react';
import Root from '../index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const wrapper = shallow(
	<Root />
);
describe('Root DemoView', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

