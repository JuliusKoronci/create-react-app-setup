import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../Login';

const wrapper = shallow(
  <Login
    handleSubmit={() => {}}
    handleChange={() => {}}
  />,
);
describe('(Component) Login', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

