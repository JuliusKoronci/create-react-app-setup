import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

const wrapper = shallow(
  <Login
    handleSubmit={() => {}}
    handleChange={() => {}}
  />,
);

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toBeDefined();
  });
  it('renders without issues', () => {
    expect(wrapper.length).toBe(1);
  });
});

