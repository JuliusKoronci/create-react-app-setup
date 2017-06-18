import * as actions from '../DemoActions';
import { demoActions } from '../../constants/DemoConstants';

describe('DemoActions', () => {
  it('should create a delete action', () => {
    const expectedAction = {
      type: demoActions.DELETE_ENTRY,
      id: 1,
    };
    expect(actions.deleteEntry(1)).toEqual(expectedAction);
  });
  it('should create a create action', () => {
    const entry = {
      title: 'test',
      description: 'desc',
    };
    const expectedAction = {
      type: demoActions.CREATE_ENTRY,
      entry,
    };
    expect(actions.createEntry(entry)).toEqual(expectedAction);
  });
});

