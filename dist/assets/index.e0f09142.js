const e=`Array.prototype.customFilter = function() {
  
}
`,t=`# Write your own Array filter

## [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

\`\`\`javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
\`\`\`
`,n=`it('customFilter function should work', () => {
  function isBigEnough(value) {
    return value >= 10;
  }

  const filtered = [12, 5, 8, 130, 44].customFilter(isBigEnough);
  chai.assert.deepEqual(filtered, [12, 130, 44]);
});
`;export{e as js,t as readme,n as ut};
