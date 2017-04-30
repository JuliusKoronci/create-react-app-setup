import React from 'react';
import DemoPage from '../DemoPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const wrapper = shallow(<DemoPage />);
describe('(Component) DemoPage', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

