const findUniq = require('../findUniq.js');

describe('Tests', () => {
  test('test 1', () => {
    expect(findUniq([1, 0, 0])).toEqual(1);
  });
  test('test 2', () => {
    expect(findUniq([0, 1, 0])).toEqual(1);
  });
  test('test 3', () => {
    expect(findUniq([0, 0, 1])).toEqual(1);
  });
  test('test 4', () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toEqual(2);
  });
  test('test 5', () => {
    expect(findUniq([1, 1, 2, 1, 1])).toEqual(2);
  });
  test('test 6', () => {
    expect(findUniq([3, 10, 3, 3, 3])).toEqual(10);
  });
  test('test 7', () => {
    expect(findUniq([0, 0, 0.55, 0, 0])).toEqual(0.55);
  });
});
