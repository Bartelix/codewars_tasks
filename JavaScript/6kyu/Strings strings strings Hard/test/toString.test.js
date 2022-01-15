describe('toString() for arrays', () => {
  test('Should be able to handle empty arrays', () => {
    expect([].toString()).toEqual('[]');
  });
  test('Should be able to handle empty nested arrays', () => {
    expect([[[[[[]]], []]]].toString()).toEqual('[[[[[[]]],[]]]]');
  });
  test('Should work with nested arrays', () => {
    expect([1.545, [2, 4, [23532], 55, 2.3, [15.22, 0.3, [], [[72, 3], 5]]]].toString()).toEqual(
      '[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]'
    );
  });
  test('Should enclose strings with single quotes', () => {
    expect(['foobar', [['hello']]].toString()).toEqual("['foobar',[['hello']]]");
  });
});
