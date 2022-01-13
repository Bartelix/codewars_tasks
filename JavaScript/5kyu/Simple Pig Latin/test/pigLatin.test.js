const pigIt = require('../pigLatin.js');

describe('Tests', () => {
  test('test 1', () => {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
  });
  test('test 2', () => {
    expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
  });
  test('test 3', () => {
    expect(pigIt('Hello world !')).toEqual('elloHay orldway !');
  });
});
