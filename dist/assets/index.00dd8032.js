const n=`function chain(v, fns) {
  // implement the "chain" function
}
`,t=`# Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

\`\`\`javascript
function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
\`\`\`
`,e=`mocha.setup('bdd');
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
`;export{n as js,t as readme,e as ut};
