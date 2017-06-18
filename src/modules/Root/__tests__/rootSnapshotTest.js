import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Root from '../index';

const wrapper = shallow(
  <Root />,
);
describe('Root DemoView', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

