import React from 'react';
import { shallow } from 'enzyme';
import DemoPage from '../DemoPage';

const wrapper = shallow(<DemoPage />);

describe('DemoPage', () => {
  it('should exist', () => {
    expect(DemoPage).toBeDefined();
  });
  it('renders without issues', () => {
    expect(wrapper.length).toBe(1);
  });
});

