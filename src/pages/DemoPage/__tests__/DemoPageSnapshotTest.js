import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DemoPage from '../DemoPage';

const wrapper = shallow(<DemoPage />);
describe('(Component) DemoPage', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

