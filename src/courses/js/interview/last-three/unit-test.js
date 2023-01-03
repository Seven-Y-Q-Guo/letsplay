it('getLastThree function should work', () => {
  const obj = {
    data: 'a',
    next: {
      data: 'b',
      next: {
        data: 'c',
        next: {
          data: 'd',
          next: null
        }
      }
    }
  };
  chai.assert.equal(getLastThree(obj), 'bcd');
});

it('getLastThree function should return all characters if less than three', () => {
  const obj = {
    data: 'a',
    next: {
      data: 'b',
      next: null
    }
  };
  chai.assert.equal(getLastThree(obj), 'ab');
});
