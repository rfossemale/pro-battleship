class Square {
  constructor(_color) {
    this.color = _color || 'white';
    this.marked = false;
  }

  update(_color) {
    this.color = _color;
  }
}

module.exports = Square;
