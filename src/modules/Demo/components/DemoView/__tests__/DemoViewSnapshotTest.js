import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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
  />,
);
const wrapperWithError = shallow(
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
    errors={[
      {
        field: 'test',
        message: 'some field error',
      },
    ]}
  />,
);
describe('(Component) DemoView', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Should match snapshot', () => {
    expect(toJson(wrapperWithError)).toMatchSnapshot();
  });
});

