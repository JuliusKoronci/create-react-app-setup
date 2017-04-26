import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dashboard from '../Dashboard';

const wrapper = shallow(<Dashboard />);
describe('(Component) Dashboard', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

