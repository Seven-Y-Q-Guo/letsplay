const e=`Array.prototype.customSome = function() {
  
}
`,n=`# Write your own Array some

## [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

\`\`\`javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
\`\`\`
`,t=`mocha.setup('bdd');
mocha.checkLeaks();

it('chain function should work', () => {
  function isBiggerThan10(element, index, array) {
    return element > 10;
  }

  chai.assert.equal([12, 5, 8, 1, 4].customSome(isBiggerThan10), true);
});

mocha.run();
`;export{e as js,n as readme,t as ut};
