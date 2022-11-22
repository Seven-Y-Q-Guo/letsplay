const n=`Array.prototype.customMap = function() {
  
}
`,e=`# Write your own Array map

## [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

\`\`\`javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

\`\`\`
`,a=`mocha.setup('bdd');
mocha.checkLeaks();

it('customMap function should work', () => {
  chai.assert.deepEqual([2, 6].customMap(item => item * 2), [4, 12]);
});

mocha.run();
`;export{n as js,e as readme,a as ut};
