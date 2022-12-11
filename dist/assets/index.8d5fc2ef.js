const e=`Array.prototype.customReduce = function() {
  
}
`,n=`# Write your own Array reducer

## [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

\`\`\`javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
\`\`\`
`,t=`it('chain function should work', () => {
  chai.assert.equal([1, 3, 4].customReduce((acc, cur) => {
    return acc + cur;
  }), 8);
});
`;export{e as js,n as readme,t as ut};
