// @flow

import { demoActions } from '../constants/DemoConstants';

const create = (state, action) => ({
  list: [
    ...state.list,
    {
      ...action.entry,
      id: Date.now(),
    },
  ],
});

const remove = (state, action) => ({
  list: [
    ...state.list.filter(item => item.id !== action.id),
  ],
});


const actions = {
  [demoActions.CREATE_ENTRY]: create,
  [demoActions.DELETE_ENTRY]: remove,
};

export const initialState = {
  list: [
    {
      id: 1,
      label: 'Test',
      desc: 'This is a demo test whatever json object',
    },
  ],
};

const demoReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case demoActions.CREATE_ENTRY:
      return actions[action.type](state, action);
    case demoActions.DELETE_ENTRY:
      return actions[action.type](state, action);
    default:
      return state;
  }
};
export default demoReducer;

