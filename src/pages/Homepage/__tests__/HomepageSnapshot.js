import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Homepage from '../Homepage';

const wrapper = shallow(<Homepage />);
describe('(Component) Homepage', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

