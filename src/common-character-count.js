const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Obj = {};
  let result = 0;

  for (let letter of s1) {
    s1Obj[letter] ? s1Obj[letter]++ : s1Obj[letter] = 1;
  }

  for (let letter of s2) {
    if (s1Obj[letter]) {
      s1Obj[letter]--;
      result++;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
