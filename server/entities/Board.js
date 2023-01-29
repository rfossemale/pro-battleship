const Square = require('./Square');

class Board {
  constructor() {
    this.matrix = new Array(10);
    for (let row = 0; row < matrix.length; row++) {
      this.matrix[row] = Array.from("0000000000").map(() => new Square());
    }
    this.enabled = true;
  }

  lock() {
    this.enabled = false;
  }

  unLock() {
    this.enabled = true;
  }

  updateMatrix(column, row) {

  }
}

module.exports = Board;
