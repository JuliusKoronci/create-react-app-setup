import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import Login from '../Login';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

const wrapper = shallow(
  <Login
    handleSubmit={() => {}}
    handleChange={() => {}}
    store={store}
  />,
);
describe('(Component) Login', () => {
  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

