it('chain function should work', () => {
  chai.assert.equal([1, 3, 4].customReduce((acc, cur) => {
    return acc + cur;
  }), 8);
});
