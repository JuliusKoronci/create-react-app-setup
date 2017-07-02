import formData from '../formData';

describe('formData', () => {
  it('should return a new FormData object', () => {
    expect(formData({ test: 'value' }).get('test')).toEqual('value');
  });
});
