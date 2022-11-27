mocha.setup('bdd');
mocha.checkLeaks();

it('customEvery function should work', () => {
  const isSubset = (array1, array2) =>
  array2.customEvery((element) => array1.includes(element));
  
  chai.assert.equal(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]), true);
});

mocha.run();
