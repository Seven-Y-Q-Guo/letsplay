it('customFilter function should work', () => {
  function isBigEnough(value) {
    return value >= 10;
  }

  const filtered = [12, 5, 8, 130, 44].customFilter(isBigEnough);
  chai.assert.deepEqual(filtered, [12, 130, 44]);
});
