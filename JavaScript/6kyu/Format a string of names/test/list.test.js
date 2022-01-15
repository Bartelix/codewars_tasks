const list = require('../list.js');

describe('Tests', () => {
  test('Must work with many names', () => {
    expect(
      list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }])
    ).toEqual('Bart, Lisa, Maggie, Homer & Marge');
  });

  test('Must work with two names', () => {
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toEqual('Bart & Lisa');
  });

  test('Wrong output for a single name', () => {
    expect(list([{ name: 'Bart' }])).toEqual('Bart');
  });

  test('Must work with no names', () => {
    expect(list([])).toEqual('');
  });
});
