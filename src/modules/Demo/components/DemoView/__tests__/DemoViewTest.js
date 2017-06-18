import React from 'react';
import { shallow } from 'enzyme';
import DemoView from '../DemoView';

const wrapper = shallow(
  <DemoView
    list={[]}
    form={{
      title: 'test',
      desc: 'desc',
    }}
    actions={{
      submit: () => {
      },
      change: () => {
      },
      deleteEntry: () => {
      },
    }}
    errors={[]}
  />);

describe('DemoView', () => {
  it('should exist', () => {
    expect(DemoView).toBeDefined();
  });
  it('renders without issues', () => {
    expect(wrapper.length).toBe(1);
  });
});

