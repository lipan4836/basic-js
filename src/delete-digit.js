const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('').map(Number);
  let max = 0;

  for (let i = 0; i < nArr.length; i += 1) {
    let posibleNumber = +nArr.slice(0, i).concat(nArr.slice(i + 1)).join('');
    max = Math.max(max, posibleNumber);
  }

  return max;
}

module.exports = {
  deleteDigit
};
