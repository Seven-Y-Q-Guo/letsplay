mocha.setup('bdd');
mocha.checkLeaks();

it('chain function should work', () => {
  function add(x) {
    return x + 10;	
  }

  function mult(x) {
    return x * 30;
  }
  chai.assert.equal(chain(2, [add, mult]), 360);
});

mocha.run();
