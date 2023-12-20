const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = [];

  for (let row = 0; row < rows; row += 1) {
    let rowResult = [];

    for (let col = 0; col < cols; col += 1) {
      let count = 0;

      for (let rowSq = row - 1; rowSq <= row + 1; rowSq += 1) {
        for (let colSq = col - 1; colSq <= col + 1; colSq += 1) {
          if (rowSq >= 0 && rowSq < rows && colSq >= 0 && colSq < cols && !(colSq === col && rowSq === row)) {
            count += matrix[rowSq][colSq] ? 1 : 0;
          }
        }
      }

      rowResult.push(count);
    }

    result.push(rowResult);
  }

  return result;
}

module.exports = {
  minesweeper
};
