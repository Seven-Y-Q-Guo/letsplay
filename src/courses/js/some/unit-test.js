it('chain function should work', () => {
  function isBiggerThan10(element, index, array) {
    return element > 10;
  }

  chai.assert.equal([12, 5, 8, 1, 4].customSome(isBiggerThan10), true);
});
