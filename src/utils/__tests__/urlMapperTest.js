import { mapToQueryString, pathToParams } from '../urlMapper';

describe('mapToQueryString', () => {
  it('should convert a json to url accepted query string', () => {
    expect(mapToQueryString({
      test: 'value',
      test2: 'value2',
    })).toEqual('test=value&test2=value2');
  });
  it('should convert a json to url accepted query string with prepend sign', () => {
    expect(mapToQueryString({
      test: 'value',
      test2: 'value2',
    }, '?')).toEqual('?test=value&test2=value2');
  });
  it('should work if no json provided', () => {
    expect(mapToQueryString()).toEqual('');
  });
  it('should work with empty object', () => {
    expect(mapToQueryString({})).toEqual('');
  });
  it('should ignore empty values', () => {
    expect(mapToQueryString({ test: '' })).toEqual('');
  });
});

describe('pathToParams', () => {
  it('should replace param placeholders with actual values', () => {
    expect(
      pathToParams(
        'www.url.com/:param1/:param2',
        { param1: 'test', param2: 'test2' },
      ),
    ).toEqual('www.url.com/test/test2');
  });
  it('should return url if no params available', () => {
    expect(
      pathToParams(
        'www.url.com',
        { param1: 'test', param2: 'test2' },
      ),
    ).toEqual('www.url.com');
  });
  it('should return url if no params provided', () => {
    expect(
      pathToParams(
        'www.url.com',
      ),
    ).toEqual('www.url.com');
  });
});
