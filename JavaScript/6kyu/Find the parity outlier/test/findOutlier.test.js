const findOutlier = require('../findOutlier.js');

test('the only odd number', () => {
  expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toEqual(11);
});
test('the only even number', () => {
  expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toEqual(160);
});
