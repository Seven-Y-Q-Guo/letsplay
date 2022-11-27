const e=`Array.prototype.customEvery = function() {
  
}
`,n=`# Write your own Array every

## [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

\`\`\`javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
\`\`\`
`,r=`mocha.setup('bdd');
mocha.checkLeaks();

it('customEvery function should work', () => {
  const isSubset = (array1, array2) =>
  array2.customEvery((element) => array1.includes(element));
  
  chai.assert.equal(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]), true);
});

mocha.run();
`;export{e as js,n as readme,r as ut};
