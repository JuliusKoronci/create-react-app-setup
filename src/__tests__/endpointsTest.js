import { basePath, getEndpoint } from '../endpoints';

describe('basePath', () => {
  it('should be equal to a fixed path', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(basePath).toEqual('http://localhost:8080');
  });
});

describe('apiEndpoints', () => {
  const endpoints = {
    login: { path: '/api/login' },
    test: { path: '/api/login/:param1' },
  };
  const endpFunc = getEndpoint(basePath, endpoints);
  it('should be equal to a fixed path', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(typeof endpFunc).toEqual('function');
  });
  it('should return a valid url', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(endpFunc('login')).toEqual(`${basePath}/api/login`);
  });
  it('should return a valid url', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(endpFunc('test', { param1: 'test' })).toEqual(`${basePath}/api/login/test`);
  });
  it('should return a valid url', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(endpFunc('test', { param1: 'test' }, { test: 'test' })).toEqual(`${basePath}/api/login/test?test=test`);
  });
  it('should return a valid url', () => {
    // this should fail if we change the REST api endpoint and we should update it accordingly
    expect(() => { endpFunc('error'); }).toThrowError('error missing in endpoints');
  });
});
