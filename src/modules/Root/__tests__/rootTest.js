import React from 'react';
import { shallow } from 'enzyme';
import Root from '../index';

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

