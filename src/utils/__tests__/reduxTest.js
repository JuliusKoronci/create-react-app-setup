import {
  request,
  error,
  success,
  constants,
  baseInitialState,
  clearError,
  createStandardReducer,
  reset,
} from '../redux';

describe('redux', () => {
  it('should return the common state', () => {
    expect(baseInitialState()).toEqual({
      isFetching: false,
      error: false,
      errorResponse: null,
      loaded: false,
      response: {},
    });
  });
  it('should return the common state without response', () => {
    expect(baseInitialState(false)).toEqual({
      isFetching: false,
      error: false,
      errorResponse: null,
      loaded: false,
    });
  });
  it('should return the common state without response woth optional args', () => {
    expect(baseInitialState(false, { test: [] })).toEqual({
      isFetching: false,
      error: false,
      errorResponse: null,
      loaded: false,
      test: [],
    });
  });
  it('should create a standard reducer', () => {
    expect(Object.keys(createStandardReducer('myReducer'))).toEqual(
      ['MYREDUCER_REQUEST', 'MYREDUCER_SUCCESS', 'MYREDUCER_ERROR', 'MYREDUCER_RESET', 'MYREDUCER_CLEAR_ERROR'],
    );
  });
  it('should create a action constants', () => {
    expect(constants('myReducer')).toEqual(
      {
        clearError: 'MYREDUCER_CLEAR_ERROR',
        error: 'MYREDUCER_ERROR',
        loadMore: 'MYREDUCER_LOAD_MORE',
        request: 'MYREDUCER_REQUEST',
        reset: 'MYREDUCER_RESET',
        success: 'MYREDUCER_SUCCESS',
      },
    );
  });
  it('should create a reset action', () => {
    expect(reset().next()).toEqual({});
  });
  it('should create a reset action', () => {
    expect(reset({ whatever: 'test' }).next()).toEqual({ whatever: 'test' });
  });
  it('should create a success action', () => {
    expect(success().next({}, { payload: 'wtf' })).toEqual({
      isFetching: false,
      error: false,
      loaded: true,
      response: 'wtf',
    });
  });
  it('should create a success action', () => {
    expect(success('test').next({}, { payload: 'wtf' })).toEqual({
      isFetching: false,
      error: false,
      loaded: true,
      test: 'wtf',
    });
  });
  it('should create a success action', () => {
    expect(success('test').next()).toEqual({
      isFetching: false,
      error: false,
      loaded: true,
    });
  });
  it('should create a clearError action', () => {
    expect(clearError.next({}, { payload: 'wtf' })).toEqual({
      error: false,
    });
  });

  it('should create a reset action', () => {
    expect(error.next({}, { payload: 'wtf' })).toEqual({
      isFetching: false,
      error: true,
      errorResponse: 'wtf',
    });
  });
  it('should create a request action', () => {
    expect(request.next({}, { payload: 'wtf' })).toEqual({
      isFetching: true,
      error: false,
      searchIndex: 'wtf',
    });
  });
});
