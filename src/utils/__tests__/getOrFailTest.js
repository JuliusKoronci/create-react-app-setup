import { getOrFail, extract } from '../getOrFail';

const obj = {
  key: 'value1',
  nested: {
    key: 'value2',
  },
};

describe('getOrFail', () => {
  it('should get nested value based on dot notation', () => {
    const val = getOrFail(obj, 'nested.key');
    expect(val === 'value2').toBeTruthy();
  });
  it('should get first child value based on key', () => {
    const val = getOrFail(obj, 'key');
    expect(val === 'value1').toBeTruthy();
  });
  it('should get undefined if simple key missing', () => {
    const val = getOrFail(obj, 'whatever');
    expect(undefined === val).toBeTruthy();
  });
  it('should get undefined if nested key missing', () => {
    const val = getOrFail(obj, 'nested.whatever');
    expect(undefined === val).toBeTruthy();
  });
  it('should extract value from object', () => {
    const val = extract(obj, ['nested', 'key']);
    expect(val === 'value2').toBeTruthy();
  });
  it('should extract value from object', () => {
    const val = extract(false, ['nested', 'key']);
    expect(val === undefined).toBeTruthy();
  });
  it('should extract value from object', () => {
    const val = getOrFail([], []);
    expect(val === undefined).toBeTruthy();
  });
  it('should extract value from object', () => {
    const val = getOrFail(null, 'nested.key');
    expect(val === undefined).toBeTruthy();
  });
  it('should return undefined if no object', () => {
    expect(extract()).toEqual(undefined);
  });
});
