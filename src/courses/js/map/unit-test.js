it('customMap function should work', () => {
  chai.assert.deepEqual([2, 6].customMap(item => item * 2), [4, 12]);
});
