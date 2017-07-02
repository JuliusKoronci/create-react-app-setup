import { createAxiosAction, createAction } from '../reduxActions';

describe('createAction', () => {
  it('should return a redux action json', () => {
    expect(createAction('typeName', { test: 'value' })).toEqual({
      type: 'typeName',
      payload: { test: 'value' },
    });
  });
});
describe('createAxiosAction', () => {
  it('should return a function', () => {
    expect(typeof createAxiosAction('get', 'testName', 'whatever')).toEqual('function');
  });
  it('should return a function', () => {
    expect(typeof createAxiosAction('get', 'testName', 'whatever')(() => {})).toEqual('function');
  });
  it('should throw error', () => {
    expect(() => createAxiosAction('get')(() => {})).toThrow();
  });
  it('should throw error', () => {
    expect(() => createAxiosAction('get', 'test')(() => {})).toThrow();
  });
  it('should throw error', () => {
    expect(() => createAxiosAction('get', undefined, 'test')(() => {})).toThrow();
  });
});
